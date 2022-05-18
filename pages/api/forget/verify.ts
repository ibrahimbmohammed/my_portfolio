import { NextApiRequest, NextApiResponse } from 'next';
import { VERIFY_ACCOUNT_BY_ORGANIZATION } from '@graphql/Mutation';
import { VerifyResetPasswordTokenMutationVariables } from '@gentypes/index';
import getClient from 'apolloClient';

interface VerifyAccountByOrganizationData {
    verifyPasswordResetToken: {
        __typename?: 'VerifyResetPasswordToken' | undefined;
        ok?: boolean | null | undefined;
        error?: string | null | undefined;
    };
}

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { code }: VerifyResetPasswordTokenMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<
        VerifyAccountByOrganizationData,
        VerifyResetPasswordTokenMutationVariables
    >({
        mutation: VERIFY_ACCOUNT_BY_ORGANIZATION,
        variables: { code },
    });

    if (
        result.data?.verifyPasswordResetToken?.error ||
        result?.data?.verifyPasswordResetToken?.ok === false
    ) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result.data.verifyPasswordResetToken?.error,
        });
    } else {
        const { ok, error } = result.data!.verifyPasswordResetToken;
        res.status(200).json({ ok, error });
    }
}

export default getDomainData;
