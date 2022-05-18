/* eslint-disable react/no-array-index-key */
import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useMutation from '@lib/hooks/mutation-query';
import {
    VerifyAccountByOrganizationMutation,
    VerifyAccountByOrganizationMutationVariables,
    ResendActivationEmailMutation,
    ResendActivationEmailMutationVariables,
} from '@gentypes/index';
import { useAppSelector } from '@lib/hooks/redux-hooks';
import { removeCookie } from '@lib/utils/cookies';
import Toast from '@lib/utils/toast';
import Button from '@atoms/a-button';
import Input from '@atoms/a-input';

function Otp() {
    const router = useRouter();
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [seconds, setSeconds] = useState(50);
    const [minutes, setMinutes] = useState(4);
    const userEmail = useAppSelector((state) => state.userEmail.email);
    const organisationId = useAppSelector((state) => state.orgId.orgId as number);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 1) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(60);
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    const [, executeVerifyAccountMutation] =
        useMutation<
            VerifyAccountByOrganizationMutation['verifyAccountByOrganization'],
            VerifyAccountByOrganizationMutationVariables
        >();
    const [, executeResendCodeMutation] =
        useMutation<
            ResendActivationEmailMutation['resendActivationEmail'],
            ResendActivationEmailMutationVariables
        >();

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        if (Number.isNaN(e.target.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? e.target.value : d))]);
        if (e.target.nextSibling) {
            // @ts-ignore
            e.target.nextSibling.focus();
        }
    };

    const onSubmit = async () => {
        const queryVariables = {
            code: otp.join(''),
            orgId: organisationId,
        };

        executeVerifyAccountMutation('api/verify', queryVariables)
            ?.then((data) => {
                if (data?.ok === true) {
                    Toast('Account verification successful', { type: 'default' });
                    removeCookie('regEmail');
                    router.push('/dashboard/membership/registration');
                }
            })
            .catch((error) => {
                Toast(error?.message as string, { type: 'error' });
            });
    };

    const resendCode = async () => {
        setSeconds(60);
        setMinutes(4);

        const qeuryVariables = {
            email: userEmail ?? 'restart the process',
        };

        executeResendCodeMutation('api/resend-register', qeuryVariables)
            ?.then((data) => {
                if (data?.ok) {
                    Toast('Verification code has been sent', { type: 'default' });
                    router.push('/dashboard/membership/registration');
                }
            })
            .catch((error) => {
                Toast(error?.message as string, { type: 'error' });
            });
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="min-h-[28rem] w-4/5 md:w-3/5 lg:w-[38rem] mt-[1rem] bg-white rounded-2xl drop-shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)]">
                <h2 className="text-center font-semibold text-2xl mb-4 mt-8">Email Verification</h2>
                <div className="flex flex-col text-center w-full h-full mb-12">
                    <p className="text-lg">
                        Enter the OTP sent to <b>{`${userEmail}`}</b> to verify your account.
                    </p>
                    <p className="text-lg text-red-500">
                        Please do not go back or close this screen
                    </p>
                </div>
                <div className="text-center mb-10">
                    {otp.map((data, index) => {
                        return (
                            <Input
                                key={index}
                                type="text"
                                name="otp"
                                value={data}
                                handleChange={(e) => handleChange(e, index)}
                                maxLength={1}
                                handleFocus={(e) => e.target.select()}
                                className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 mx-2 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        );
                    })}
                </div>
                <div className="text-center mb-10">
                    {seconds ? (
                        <p>
                            Resend code in {minutes} min {seconds}s
                        </p>
                    ) : null}
                </div>
                <div className="container w-full">
                    <div className="flex flex-row justify-center w-full">
                        <Button
                            type="button"
                            label="RESET"
                            className="mx-2 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg"
                            handleClick={() => setOtp(new Array(6).fill(''))}
                        />

                        <Button
                            type="button"
                            label="VERIFY"
                            className="mx-2 text-white bg-primaryColor border-0 py-2 px-8 focus:outline-none hover:bg-secondaryBtn rounded text-lg"
                            handleClick={() => onSubmit()}
                        />

                        {seconds === 0 && (
                            <Button
                                type="button"
                                label="RESEND"
                                className="mx-2 text-white bg-primaryBtn border-0 py-2 px-8 focus:outline-none hover:bg-secondaryBtn rounded text-lg"
                                handleClick={() => resendCode()}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Otp;
