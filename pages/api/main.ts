import { NextApiRequest, NextApiResponse } from 'next';
import { getAllDomainData } from '@graphql/Query';
import { domainNameBasedOnEnv } from '@utils/helpers';
import { AllDataQueryQuery, AllDataQueryQueryVariables } from '@gentypes/index';
import getClient from '../../apolloClient';

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { host } = req.headers;
    const finalhost = domainNameBasedOnEnv(host as string);
    const client = getClient;
    const result = await client.query<AllDataQueryQuery, AllDataQueryQueryVariables>({
        query: getAllDomainData,
        variables: { domain_name: finalhost as string },
    });
    if (result.error || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.error ?? result.data,
        });

        throw result.error ?? result.data;
    }

    const { orgConference } = result.data;

    res.status(200).json({ orgConference });
}

export default getDomainData;
