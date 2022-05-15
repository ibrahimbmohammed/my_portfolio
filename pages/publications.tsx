import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import SideNavBar from '@molecules/m-sidebar-navigator';
import { WebsitePublicationCategoryListQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';
import PublicationPaginatedList from '@organisms/o-list-paginated-publication';

//  interface Single = {

//  }

const Publication = () => {
    const [publicationData] =
        useFetchQuery<WebsitePublicationCategoryListQuery>('/api/publications');
    const initialData = publicationData?.publicationCategoryList?.edges[0];
    const [publicationStateData, setPublicationData] = useState<typeof initialData>();
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        setPublicationData(initialData ?? publicationStateData);
    }, [publicationData]);

    const handleChange = (node: typeof initialData, index: number) => {
        setPublicationData(node);
        setCurrentIndex(index);
    };

    return (
        <AboutUiLayout headText="__Get Updated" subText="Events" className="">
            <SideNavBar
                handleChange={handleChange}
                data={publicationData?.publicationCategoryList?.edges}
                currentIndex={currentIndex}
            />
            <PublicationPaginatedList pageData={publicationStateData} />
        </AboutUiLayout>
    );
};

Publication.PageLayout = AboutLayout;

export default Publication;
