import { NextApiRequest, NextApiResponse } from 'next';
import { PASSWORD_RESET } from '@graphql/Mutation';
import { PasswordResetMutationVariables } from '@gentypes/index';
import getClient from 'apolloClient';

interface PasswordResetMutationData {
    passwordReset: {
        __typename?: 'PasswordReset' | undefined;
        success?: boolean | null | undefined;
        errors?: any | null;
    };
}

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { token, newPassword1, newPassword2 }: PasswordResetMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<PasswordResetMutationData, PasswordResetMutationVariables>({
        mutation: PASSWORD_RESET,
        variables: { token, newPassword1, newPassword2 },
    });

    if (result.data?.passwordReset?.errors || result?.data?.passwordReset?.success === false) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result.data.passwordReset?.errors,
        });
    } else {
        const { success, errors } = result.data!.passwordReset;
        res.status(200).json({ success, errors });
    }
}

export default getDomainData;
