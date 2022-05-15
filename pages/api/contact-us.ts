import { NextApiRequest, NextApiResponse } from 'next';
import { getWebsiteAboutPage } from '@graphql/Query';
import { domainNameBasedOnEnv } from '@utils/helpers';
import { ContactUsPageQueryVariables, ContactUsPageQuery } from '@gentypes/index';
import getClient from 'apolloClient';

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { host } = req.headers;
    const finalhost = domainNameBasedOnEnv(host as string);
    const client = getClient;
    const result = await client.query<ContactUsPageQuery, ContactUsPageQueryVariables>({
        query: getWebsiteAboutPage,
        variables: { domain_name: finalhost as string },
    });
    if (result.error || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.error ?? result.data,
        });

        throw result.error ?? result.data;
    }

    const { website } = result.data;
    // console.log('server', websiteAboutPage);
    res.status(200).json({ website });
}

export default getDomainData;
