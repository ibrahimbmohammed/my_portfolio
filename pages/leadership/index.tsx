import type { GetDirectorsQueryQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';
import useNavigation from '@lib/hooks/side-navigation';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import SideNavBar from '@molecules/m-sidebar-navigator';
import LeadersPaginatedGrid from '@organisms/o-grid-paginated-leadership';

const Leadership = () => {
    const [direcData] = useFetchQuery<GetDirectorsQueryQuery>('/api/leadership');
    const initialData = direcData?.orgLeadershipCategoryList?.edges[0];
    const [currentIndex, pageStateData, handleChange] = useNavigation<
        typeof initialData,
        GetDirectorsQueryQuery
    >(initialData, direcData);

    return (
        <AboutUiLayout headText="__Get Updated" subText="Leadership" className="">
            <SideNavBar
                handleChange={handleChange}
                data={direcData?.orgLeadershipCategoryList?.edges}
                currentIndex={currentIndex}
            />
            <LeadersPaginatedGrid pageData={pageStateData} />
        </AboutUiLayout>
    );
};

Leadership.PageLayout = AboutLayout;

export default Leadership;
