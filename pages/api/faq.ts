import { NextApiRequest, NextApiResponse } from 'next';
import { getWebsitePublicationsPage, getWebsiteFaqList } from '@graphql/Query';
import { domainNameBasedOnEnv } from '@utils/helpers';
import {
    WebsitePublicationsQueryVariables,
    WebsitePublicationsQuery,
    WebsiteFaqTypeQueryVariables,
    WebsiteFaqTypeQuery,
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
    const result = await client.query<WebsiteFaqTypeQuery, WebsiteFaqTypeQueryVariables>({
        query: getWebsiteFaqList,
        variables: { id: Number(response.data?.website?.org?.pk) },
    });

    if (result.error || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.error ?? result.data,
        });

        throw result.error ?? result.data;
    }

    const { websiteFaqList } = result.data;
    // console.log('server', websiteAboutPage);
    res.status(200).json({ websiteFaqList });
}

export default getDomainData;