import { NextApiRequest, NextApiResponse } from 'next';
import { SIGNIN_USER } from '@graphql/Mutation';
import { LoginUserMutation, LoginUserMutationVariables } from '@gentypes/index';
import getClient from '../../apolloClient';

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { username, password }: LoginUserMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<LoginUserMutation, LoginUserMutationVariables>({
        mutation: SIGNIN_USER,
        variables: { username, password },
    });
    if (result.errors || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.errors ?? result.data,
        });

        throw result.errors ?? result.data;
    }

    if (result.data.login?.errors || result.data.login?.success === false) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result.data.login?.errors ?? result.data.login?.errors,
        });

        throw result.errors ?? result.data;
    }

    const loginData = result.data.login;

    res.status(200).json({ loginData });
}

export default getDomainData;
