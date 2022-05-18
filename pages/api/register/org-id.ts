import { NextApiRequest, NextApiResponse } from 'next';
import { getWebsitePublicationsPage } from '@graphql/Query';
import { domainNameBasedOnEnv } from '@utils/helpers';
import { WebsitePublicationsQueryVariables } from '@gentypes/index';
import getClient from 'apolloClient';

export interface WebsitePublicationsQueryData {
    website: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        webLogoUrl?: string | null;
        org: { __typename?: 'OrganizationType'; pk: string } | null;
    };
}

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { host } = req.headers;
    const finalhost = domainNameBasedOnEnv(host as string);
    const client = getClient;

    const result = await client.query<
        WebsitePublicationsQueryData,
        WebsitePublicationsQueryVariables
    >({ query: getWebsitePublicationsPage, variables: { domain_name: finalhost as string } });

    if (result.error || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.error ?? result.data,
        });

        throw result.error ?? result.data;
    }

    const { org } = result.data.website;
    res.status(200).json({ org });
}

export default getDomainData;
