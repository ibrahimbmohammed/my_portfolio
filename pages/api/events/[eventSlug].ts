import { NextApiRequest, NextApiResponse } from 'next';
import { EventPageData } from '@graphql/Query';
import { WebsiteEventDetailQueryVariables, WebsiteEventDetailQuery } from '@gentypes/index';
import getClient from 'apolloClient';

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { eventSlug } = req.query;

    const client = getClient;
    const result = await client.query<WebsiteEventDetailQuery, WebsiteEventDetailQueryVariables>({
        query: EventPageData,
        variables: { event_slug: eventSlug as string },
    });
    if (result.error || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.error ?? result.data,
        });

        throw result.error ?? result.data;
    }

    const { eventBySlug } = result.data;
    // console.log('server', websiteAboutPage);
    res.status(200).json({ eventBySlug });
}

export default getDomainData;
