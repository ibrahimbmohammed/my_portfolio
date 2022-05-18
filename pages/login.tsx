import { useState, ChangeEvent } from 'react';
import usePasswordToggle from '@lib/hooks/password-visibility';
import HomeWrapper from '@hoc/home-wrapper';
import { path } from 'ramda';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LoginUserMutation, LoginUserMutationVariables } from '@gentypes/index';
import { getValidationErrors } from '@lib/utils/helpers';
import PasswordCheckList from '@lib/utils/password';
import useMutation from '@lib/hooks/mutation-query';
import { setAuthToken } from '@lib/utils/cookies';
import loginSchema from '@lib/validations/login-validation';
import Button from '@atoms/a-button';
import LabeledInput from '@molecules/m-labeled-input';
import Toast from '@lib/utils/toast';

function SigninPageContent() {
    const router = useRouter();
    const [inputType, icon] = usePasswordToggle();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const [formValues, setform] = useState({
        email: '',
        password: '',
    });

    const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setform({
            ...formValues,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: null,
        });
    };

    const [, executeLoginMutation] =
        useMutation<LoginUserMutation['login'], LoginUserMutationVariables>();

    const userData = {
        username: formValues.email,
        password: formValues.password,
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await loginSchema.validate(formValues, { abortEarly: false });
            const isValid = await loginSchema.isValid(formValues);
            if (isValid === false) return;
            executeLoginMutation('api/login', userData)
                ?.then((data) => {
                    if (data?.success === true) {
                        setAuthToken(data?.token as string);
                        Toast('Login Successful!', { type: 'default' });
                        setIsSubmitting(false);
                        router.push('/dashboard');
                    }
                })
                .catch((error) => {
                    Toast(error?.error as string, { type: 'error' });
                });
        } catch (err) {
            setIsSubmitting(false);
            const error = getValidationErrors(err);
            setErrors({ ...error });
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <form className="min-h-[28rem] w-4/5 md:w-3/5 lg:w-[38rem] mt-[1rem] bg-white rounded-2xl drop-shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)]">
                <div className="flex flex-col space-y-3 px-[5rem] py-[4rem]">
                    <div className="space-y-2">
                        <h2 className="font-normal text-xl text-primaryColor">Login</h2>
                        <p className="font-light text-sm text-center">
                            Hello there! Login to keep updated and review our recents updates.
                        </p>
                    </div>
                    <LabeledInput
                        id="email"
                        type="email"
                        name="email"
                        htmlFor="email"
                        label="Email"
                        placeholder="Email"
                        className=""
                        required
                        value={formValues.email}
                        handleChange={updateForm}
                        error={path(['email'], errors)}
                    />
                    <div className="relative  border border-transparent">
                        <span className="absolute right-0 cursor-pointer"> {icon}</span>

                        <LabeledInput
                            id="password"
                            type={inputType}
                            name="password"
                            htmlFor="Password"
                            label="Password"
                            placeholder="Password"
                            className=""
                            required
                            value={formValues.password}
                            handleChange={updateForm}
                            error={path(['password'], errors)}
                        />
                    </div>
                    <PasswordCheckList eventData={formValues.password} />
                    <div className="flex justify-end text-sm text-blue-500 hover:underline">
                        <Link href="/forget">Forgot password?</Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="button" className="" disabled={isSubmitting} />
                        <Button label="Submit" type="button" handleClick={handleSubmit} />
                        {isSubmitting && (
                            <>
                                <i className="fas fa-spinner fa-pulse fa-1x fa-fw" />
                                <span className="sr-only">Loading...</span>
                            </>
                        )}
                        Login
                    </div>
                    <div className="flex justify-center text-sm">
                        <span>Don&apos;t have an account?</span>
                        <span className="ml-1 text-blue-500 hover:underline cursor-pointer">
                            <Link href="/register">Register</Link>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HomeWrapper(SigninPageContent);
