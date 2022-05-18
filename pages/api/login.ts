import { NextApiRequest, NextApiResponse } from 'next';
import { SIGNIN_USER } from '@graphql/Mutation';
import { LoginUserMutationVariables } from '@gentypes/index';
import getClient from 'apolloClient';

interface ErrorObj {
    nonFieldErrors: [
        {
            message: string;
            code: string;
        },
    ];
}
interface UserLoginData {
    login: {
        token: null;
        success: false;
        errors: ErrorObj;
        __typename: 'ObtainJSONWebToken';
    };
}

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { username, password }: LoginUserMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<UserLoginData, LoginUserMutationVariables>({
        mutation: SIGNIN_USER,
        variables: { username, password },
    });

    if (result.data?.login.errors || result?.data?.login?.success === false) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result.data.login?.errors?.nonFieldErrors[0].message,
        });
    } else {
        const { token, success, errors } = result.data!.login;
        res.status(200).json({ token, success, errors });
    }
}

export default getDomainData;
