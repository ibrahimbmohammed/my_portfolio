import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import ChaptersPaginatedTable from '@organisms/o-table-paginated-chapter';
import { OrgSubDivisionQueryQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';

const Chapters = () => {
    const [chapterData] = useFetchQuery<OrgSubDivisionQueryQuery>('/api/chapters');
    return (
        <AboutUiLayout headText="__Get Updated" subText="NIWE Chapters" className="">
            <ChaptersPaginatedTable pageData={chapterData?.orgSubDivisionList} />
        </AboutUiLayout>
    );
};

Chapters.PageLayout = AboutLayout;

export default Chapters;
