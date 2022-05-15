import type { GetDirectorsQueryQuery } from '@gentypes/index';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import SideNavBar from '@molecules/m-sidebar-navigator';
import LeadersPaginatedGrid from '@organisms/o-grid-paginated-leadership';
import useFetchQuery from '@lib/hooks/fetch-query';

const Leadership = () => {
    const [direcData] = useFetchQuery<GetDirectorsQueryQuery>('/api/leadership');
    const initialData = direcData?.orgLeadershipCategoryList?.edges[0];
    const [directorData, setDirectorData] = useState<typeof initialData>();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setDirectorData(initialData ?? directorData);
    }, [direcData]);

    const handleChange = (node: any, index: number) => {
        setDirectorData(node);
        setCurrentIndex(index);
    };

    return (
        <AboutUiLayout headText="__Get Updated" subText="Leadership" className="">
            <SideNavBar
                handleChange={handleChange}
                data={direcData?.orgLeadershipCategoryList?.edges}
                currentIndex={currentIndex}
            />
            <LeadersPaginatedGrid pageData={directorData} />
        </AboutUiLayout>
    );
};

Leadership.PageLayout = AboutLayout;

export default Leadership;
