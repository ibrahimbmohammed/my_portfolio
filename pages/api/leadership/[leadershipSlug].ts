import { NextApiRequest, NextApiResponse } from 'next';
import { getLeadersData } from '@graphql/Query';
import { LeaderDataQueryVariables, LeaderDataQuery } from '@gentypes/index';
import getClient from 'apolloClient';

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { leadershipSlug } = req.query;

    const client = getClient;
    const result = await client.query<LeaderDataQuery, LeaderDataQueryVariables>({
        query: getLeadersData,
        variables: { id: leadershipSlug as string },
    });
    if (result.error || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.error ?? result.data,
        });

        throw result.error ?? result.data;
    }

    const { orgExecutive } = result.data;
    // console.log('server', websiteAboutPage);
    res.status(200).json({ orgExecutive });
}

export default getDomainData;
