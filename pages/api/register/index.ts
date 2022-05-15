/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next';
import { REGISTER_USER } from '@graphql/Mutation';
import { RegisterUserMutationVariables, RegisterUser } from '@gentypes/index';
import getClient from 'apolloClient';

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const {
        email,
        first_name,
        last_name,
        username,
        password_1,
        password_2,
        orgId,
    }: RegisterUserMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<RegisterUser, RegisterUserMutationVariables>({
        mutation: REGISTER_USER,
        variables: { email, first_name, last_name, username, password_1, password_2, orgId },
    });
    if (result.errors || !result.data) {
        res.status(500).json({
            message: 'Something went wrong',
            error: result.errors ?? result.data,
        });

        throw result.errors ?? result.data;
    }

    const { errors, refreshToken, success, token } = result.data;

    res.status(200).json({ errors, refreshToken, success, token });
}

export default getDomainData;
