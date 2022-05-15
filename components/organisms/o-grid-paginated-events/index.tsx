import type { SetStateAction } from 'react';
import type { EventsPaginatedTableProps } from '@lib/types/organisms-types';
import Pagination from '@lib/hooks/pagination';
import useMemorisedPaginatedData from '@lib/hooks/pagination-memerization';
import uuid from '@lib/utils/uuid';
import Grid from '@atoms/a-grid';
import NoRecord from '@molecules/m-article-no-record';
import EventCard from '@molecules/m-card-event-card';

const EventsPaginatedGrid = ({ pageData }: EventsPaginatedTableProps) => {
    const apiArraydata = pageData?.node?.meetingSet?.edges;
    const [currentTableData, currentPage, pageSize, setCurrentPage] = useMemorisedPaginatedData<
        typeof apiArraydata
    >(apiArraydata, 10);

    if (!pageData) {
        return <NoRecord text="No Events Yet" />;
    }

    return (
        <div className="flex flex-col">
            <Grid className="">
                {currentTableData &&
                    currentTableData?.map((data) => (
                        <EventCard
                            key={uuid}
                            photoUrl={data?.node?.photoUrl}
                            name={data?.node?.name}
                            startDate={data?.node?.startDate}
                            description={data?.node?.description}
                            url={data?.node?.url}
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

export default EventsPaginatedGrid;
