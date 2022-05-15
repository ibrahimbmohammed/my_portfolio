import AboutLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import { WebsiteFaqTypeQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';
import FaqBackgroudWrapper from '@atoms/a-backgroud-faq-dropdown';
import HaveAnyQuestions from '@molecules/m-article-ask-faq';
import FaqPaginatedList from '@organisms/o-list-paginated-faq';

const FaqPage = () => {
    const [faqData] = useFetchQuery<WebsiteFaqTypeQuery>('/api/faq');
    return (
        <AboutUiLayout headText="__Get Updated" subText="FAQs" className="">
            <HaveAnyQuestions />
            <FaqBackgroudWrapper>
                <FaqPaginatedList pageData={faqData} />
            </FaqBackgroudWrapper>
        </AboutUiLayout>
    );
};

FaqPage.PageLayout = AboutLayout;

export default FaqPage;
