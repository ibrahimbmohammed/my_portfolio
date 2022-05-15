import type { SetStateAction } from 'react';
import type { WebsiteFaqTypeQuery } from '@gentypes/index';
import useMemorisedPaginatedData from '@lib/hooks/pagination-memerization';
import uuid from '@lib/utils/uuid';
import Pagination from '@lib/hooks/pagination';
import FaqDropMenu from '@molecules/m-dropdown-faq';
import NoRecord from '@molecules/m-article-no-record';

interface FaqPaginatedTableProps {
    pageData: WebsiteFaqTypeQuery | undefined;
}
const FaqPaginatedList = ({ pageData }: FaqPaginatedTableProps) => {
    const apiArraydata = pageData?.websiteFaqList?.edges;

    const [currentTableData, currentPage, pageSize, setCurrentPage] = useMemorisedPaginatedData<
        typeof apiArraydata
    >(apiArraydata, 10);

    if (!pageData) {
        return <NoRecord text="No FAQs Yet" />;
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col space-y-3">
                {currentTableData &&
                    currentTableData?.map((data) => (
                        <FaqDropMenu
                            key={uuid}
                            question={data?.node?.question}
                            answer={data?.node?.answer}
                        />
                    ))}
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

export default FaqPaginatedList;
