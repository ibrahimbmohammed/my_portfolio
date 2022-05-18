import type { DashboardAllEventsDataListQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';
import useNavigation from '@lib/hooks/side-navigation';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import SideNavBar from '@molecules/m-sidebar-navigator';
import EventsPaginatedGrid from '@organisms/o-grid-paginated-events';

const Events = () => {
    const [eventData] = useFetchQuery<DashboardAllEventsDataListQuery>('/api/events');
    const initialData = eventData?.eventCategoryList?.edges[0];
    const [currentIndex, pageStateData, handleChange] = useNavigation<
        typeof initialData,
        DashboardAllEventsDataListQuery
    >(initialData, eventData);
    return (
        <AboutUiLayout headText="__Get Updated" subText="Events" className="">
            <SideNavBar
                handleChange={handleChange}
                data={eventData?.eventCategoryList?.edges}
                currentIndex={currentIndex}
            />
            <EventsPaginatedGrid pageData={pageStateData} />
        </AboutUiLayout>
    );
};

Events.PageLayout = AboutLayout;

export default Events;
