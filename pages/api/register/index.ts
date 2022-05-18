/* eslint-disable no-prototype-builtins */
/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next';
import { REGISTER_USER } from '@graphql/Mutation';
import { RegisterUserMutationVariables } from '@gentypes/index';
import getClient from 'apolloClient';

interface UserRegistrationError {
    username: [
        {
            message: string;
            code: string;
        },
    ];
    password2: [
        {
            message: string;
            code: string;
        },
    ];
    nonFieldErrors: [
        {
            message: string;
            code: string;
        },
    ];
}
interface UserRegistration {
    registerByOrganization: {
        __typename?: 'RegisterUserByOrganization';
        token?: string | null;
        success?: boolean | null;
        errors?: UserRegistrationError | null;
    };
}

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

    const result = await client.mutate<UserRegistration, RegisterUserMutationVariables>({
        mutation: REGISTER_USER,
        variables: { email, first_name, last_name, username, password_1, password_2, orgId },
    });

    if (result?.data?.registerByOrganization.errors?.hasOwnProperty('username')) {
        res.status(400).json({
            message: 'Something went wrong, Username Already Exist',
            error: result?.data?.registerByOrganization.errors?.username[0]?.message,
        });
    } else if (result?.data?.registerByOrganization.errors?.hasOwnProperty('nonFieldErrors')) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result?.data?.registerByOrganization.errors?.nonFieldErrors[0]?.message,
        });
    } else if (result?.data?.registerByOrganization.errors?.password2[0]) {
        res.status(400).json({
            message: 'Something went wrong, Password is Similar to the Email',
            error: result?.data?.registerByOrganization.errors?.password2[0]?.message,
        });
    } else {
        const { errors, success, token } = result.data!.registerByOrganization;

        res.status(200).json({ errors, success, token });
    }
}

export default getDomainData;
