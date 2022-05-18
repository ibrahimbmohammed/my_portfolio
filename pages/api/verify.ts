import { NextApiRequest, NextApiResponse } from 'next';
import { VERIFY_ACCOUNT_BY_ORGANIZATION } from '@graphql/Mutation';
import { VerifyAccountByOrganizationMutationVariables } from '@gentypes/index';
import getClient from 'apolloClient';

interface VerifyAccountByOrganizationData {
    verifyAccountByOrganization: {
        __typename?: 'VerifyAccountByOrganization' | undefined;
        ok?: boolean | null | undefined;
        error?: string | null | undefined;
    };
}

async function getDomainData(req: NextApiRequest, res: NextApiResponse) {
    const { code, orgId }: VerifyAccountByOrganizationMutationVariables = req.body;
    const client = getClient;

    const result = await client.mutate<
        VerifyAccountByOrganizationData,
        VerifyAccountByOrganizationMutationVariables
    >({
        mutation: VERIFY_ACCOUNT_BY_ORGANIZATION,
        variables: { code, orgId },
    });

    if (
        result.data?.verifyAccountByOrganization?.error ||
        result?.data?.verifyAccountByOrganization?.ok === false
    ) {
        res.status(400).json({
            message: 'Something went wrong',
            error: result.data.verifyAccountByOrganization?.error,
        });
    } else {
        const { ok, error } = result.data!.verifyAccountByOrganization;
        res.status(200).json({ ok, error });
    }
}

export default getDomainData;
