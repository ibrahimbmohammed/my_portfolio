import type { SetStateAction } from 'react';
import type { LeadersPaginatedTableProps } from '@lib/types/organisms-types';
import Pagination from '@lib/hooks/pagination';
import useMemorisedPaginatedData from '@lib/hooks/pagination-memerization';
import uuid from '@lib/utils/uuid';
import Grid from '@atoms/a-grid';
import NoRecord from '@molecules/m-article-no-record';
import LeadershipCard from '@molecules/m-card-leadership';

const LeadersPaginatedGrid = ({ pageData }: LeadersPaginatedTableProps) => {
    const apiArraydata = pageData?.node?.executiveSet?.edges;
    const [currentTableData, currentPage, pageSize, setCurrentPage] = useMemorisedPaginatedData<
        typeof apiArraydata
    >(apiArraydata, 10);

    if (!pageData) {
        return <NoRecord text="No Directors Yet" />;
    }

    return (
        <div className="flex flex-col">
            <Grid className="">
                {currentTableData &&
                    currentTableData?.map((data) => (
                        <LeadershipCard
                            key={uuid}
                            id={data?.node?.id}
                            bio={data?.node?.id}
                            name={data?.node?.name}
                            photoUrl={data?.node?.photoUrl}
                            position={data?.node?.position}
                        />
                    ))}
            </Grid>
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

export default LeadersPaginatedGrid;
