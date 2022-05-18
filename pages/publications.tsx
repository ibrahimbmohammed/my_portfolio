import type { WebsitePublicationCategoryListQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';
import useNavigation from '@lib/hooks/side-navigation';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import SideNavBar from '@molecules/m-sidebar-navigator';
import PublicationPaginatedList from '@organisms/o-list-paginated-publication';

const Publication = () => {
    const [publicationData] =
        useFetchQuery<WebsitePublicationCategoryListQuery>('/api/publications');
    const initialData = publicationData?.publicationCategoryList?.edges[0];
    const [currentIndex, pageStateData, handleChange] = useNavigation<
        typeof initialData,
        WebsitePublicationCategoryListQuery
    >(initialData, publicationData);
    return (
        <AboutUiLayout headText="__Get Updated" subText="Events" className="">
            <SideNavBar
                handleChange={handleChange}
                data={publicationData?.publicationCategoryList?.edges}
                currentIndex={currentIndex}
            />
            <PublicationPaginatedList pageData={pageStateData} />
        </AboutUiLayout>
    );
};

Publication.PageLayout = AboutLayout;

export default Publication;
