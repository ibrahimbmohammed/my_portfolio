import { NextApiRequest, NextApiResponse } from 'next';
import { RESEND_CODE } from '@graphql/Mutation';
import { ResendActivationEmailMutationVariables } from '@gentypes/index';
import getClient from 'apolloClient';

interface ResendActivationEmailData {
    resendActivationEmail: {
        __typename?: 'ResendActivationEmail' | undefined;
        ok?: boolean | null | undefined;
        error?: string | null | undefined;
    };
}

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { email }: ResendActivationEmailMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<
        ResendActivationEmailData,
        ResendActivationEmailMutationVariables
    >({
        mutation: RESEND_CODE,
        variables: { email },
    });

    if (
        result.data?.resendActivationEmail?.error ||
        result?.data?.resendActivationEmail?.ok === false
    ) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result.data.resendActivationEmail?.error,
        });
    } else {
        const { ok, error } = result.data!.resendActivationEmail;
        res.status(200).json({ ok, error });
    }
}

export default getDomainData;
