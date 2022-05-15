import { NextApiRequest, NextApiResponse } from 'next';
import { getWebsitePublicationsPage, getEventsDataList } from '@graphql/Query';
import { domainNameBasedOnEnv } from '@utils/helpers';
import {
    WebsitePublicationsQueryVariables,
    WebsitePublicationsQuery,
    DashboardAllEventsDataListQueryVariables,
    DashboardAllEventsDataListQuery,
} from '@gentypes/index';
import getClient from 'apolloClient';

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { host } = req.headers;
    const finalhost = domainNameBasedOnEnv(host as string);
    const client = getClient;

    const response = await client.query<
        WebsitePublicationsQuery,
        WebsitePublicationsQueryVariables
    >({ query: getWebsitePublicationsPage, variables: { domain_name: finalhost as string } });

    const result = await client.query<
        DashboardAllEventsDataListQuery,
        DashboardAllEventsDataListQueryVariables
    >({
        query: getEventsDataList,
        variables: {
            domain_name: finalhost as string,
            org_Id: Number(response.data?.website?.org?.pk),
        },
    });
    if (result.error || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.error ?? result.data,
        });

        throw result.error ?? result.data;
    }

    const { eventCategoryList } = result.data;
    // console.log('server', websiteAboutPage);
    res.status(200).json({ eventCategoryList });
}

export default getDomainData;
