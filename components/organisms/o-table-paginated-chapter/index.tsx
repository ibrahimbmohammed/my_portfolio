import type { SetStateAction } from 'react';
import type { OrgSubDivisionQueryQuery } from '@gentypes/index';
import Pagination from '@lib/hooks/pagination';
import useMemorisedPaginatedData from '@lib/hooks/pagination-memerization';
import uuid from '@lib/utils/uuid';
import NoRecord from '@molecules/m-article-no-record';
import TableHead from '@molecules/m-table-head-main';
import TableItemChapter from '@molecules/m-table-item-chapter';

const tableHeadItems = [
    'Sr. No',
    'Chapter',
    'Address',
    'Chairman',
    'Phone Number',
    'Email Address',
];
interface ChaptersPaginatedTableProps {
    pageData: OrgSubDivisionQueryQuery['orgSubDivisionList'] | undefined;
}

const ChaptersPaginatedTable = ({ pageData }: ChaptersPaginatedTableProps) => {
    const apiArraydata = pageData?.edges;
    const [currentTableData, currentPage, pageSize, setCurrentPage] = useMemorisedPaginatedData<
        typeof apiArraydata
    >(apiArraydata, 5);
    if (!pageData) {
        return <NoRecord text="No Chapters Yet" />;
    }

    return (
        <div className="flex flex-col">
            <div className="w-full  rounded-lg   border-separate    my-table-spacing  shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] ">
                <table className="w-full border-separate  [border-spacing:0.75rem] ">
                    <TableHead tableHeadItems={tableHeadItems} />
                    {currentTableData &&
                        currentTableData?.map((chapter, index: number) => (
                            <TableItemChapter
                                key={uuid}
                                index={index}
                                subdivision={chapter?.node?.subdivision}
                                meetingVenue={chapter?.node?.meetingVenue}
                                meetingDaysTime={chapter?.node?.meetingDaysTime}
                                chairperson={chapter?.node?.chairperson}
                                phoneNumber={chapter?.node?.phoneNumber}
                                email={chapter?.node?.email}
                                dateOfInauguration={chapter?.node?.dateOfInauguration}
                            />
                        ))}
                </table>
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={apiArraydata?.length as number}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page as SetStateAction<number>)}
            />
        </div>
    );
};

export default ChaptersPaginatedTable;
