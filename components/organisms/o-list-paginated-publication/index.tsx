import type { SetStateAction } from 'react';
import type { PublicationPaginatedListProps } from '@lib/types/organisms-types';
import Pagination from '@lib/hooks/pagination';
import useMemorisedPaginatedData from '@lib/hooks/pagination-memerization';
import uuid from '@lib/utils/uuid';
import NoRecord from '@molecules/m-article-no-record';
import PublicationCard from '@molecules/m-card-publication';

const PublicationPaginatedList = ({ pageData }: PublicationPaginatedListProps) => {
    const apiArraydata = pageData?.node?.publicationSet?.edges;
    const [currentTableData, currentPage, pageSize, setCurrentPage] = useMemorisedPaginatedData<
        typeof apiArraydata
    >(apiArraydata, 10);

    if (!pageData) {
        return <NoRecord text="No Publications Yet" />;
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col space-y-3">
                {currentTableData &&
                    currentTableData?.map((data) => (
                        <PublicationCard
                            key={uuid}
                            title={data?.node?.title}
                            abstract={data?.node?.abstract}
                            externalUpload={data?.node?.externalUpload}
                            fileUrl={data?.node?.fileUrl}
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

export default PublicationPaginatedList;
