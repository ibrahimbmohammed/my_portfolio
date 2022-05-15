import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import { DashboardAllEventsDataListQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';
import SideNavBar from '@molecules/m-sidebar-navigator';
import EventsPaginatedGrid from '@organisms/o-grid-paginated-events';

const Events = () => {
    const [eventData] = useFetchQuery<DashboardAllEventsDataListQuery>('/api/events');
    const initialData = eventData?.eventCategoryList?.edges[0];
    const [eventStateData, setEventData] = useState<typeof initialData>();
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        setEventData(initialData ?? eventStateData);
    }, [eventData]);

    const handleChange = (node: typeof initialData, index: number) => {
        setEventData(node);
        setCurrentIndex(index);
    };

    return (
        <AboutUiLayout headText="__Get Updated" subText="Events" className="">
            <SideNavBar
                handleChange={handleChange}
                data={eventData?.eventCategoryList?.edges}
                currentIndex={currentIndex}
            />
            <EventsPaginatedGrid pageData={eventStateData} />
        </AboutUiLayout>
    );
};

Events.PageLayout = AboutLayout;

export default Events;
