import { NextApiRequest, NextApiResponse } from 'next';
import { SEND_PASSWORD_RESET } from '@graphql/Mutation';
import { SendPasswordResetEmailMutationVariables } from '@gentypes/index';
import getClient from 'apolloClient';

interface SendPasswordResetEmailData {
    sendPasswordResetEmail: {
        __typename?: 'SendPasswordResetEmail' | undefined;
        ok?: boolean | null | undefined;
        error?: string | null | undefined;
    };
}

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { email }: SendPasswordResetEmailMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<
        SendPasswordResetEmailData,
        SendPasswordResetEmailMutationVariables
    >({
        mutation: SEND_PASSWORD_RESET,
        variables: { email },
    });

    if (
        result.data?.sendPasswordResetEmail?.error ||
        result?.data?.sendPasswordResetEmail?.ok === false
    ) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result.data.sendPasswordResetEmail?.error,
        });
    } else {
        const { ok, error } = result.data!.sendPasswordResetEmail;
        res.status(200).json({ ok, error });
    }
}

export default getDomainData;
