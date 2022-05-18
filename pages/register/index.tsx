import type { WebsitePublicationsQueryData } from '@pages/api/register/org-id';
import useFetchQuery from '@lib/hooks/fetch-query';
import { useState, ChangeEvent } from 'react';
import usePasswordToggle from '@lib/hooks/password-visibility';
import { useAppDispatch } from '@lib/hooks/redux-hooks';
import HomeWrapper from '@hoc/home-wrapper';
import { path } from 'ramda';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RegisterUser, RegisterUserMutationVariables } from '@gentypes/index';
import { getValidationErrors } from '@lib/utils/helpers';
import PasswordCheckList from '@lib/utils/password';
import useMutation from '@lib/hooks/mutation-query';
import { setAuthToken } from '@lib/utils/cookies';
import registerSchema from '@lib/validations/register-validation';
import Button from '@atoms/a-button';
import LabeledInput from '@molecules/m-labeled-input';
import Toast from '@lib/utils/toast';
import { setUserEmail } from '@store/user-email';
import { setOrganizationId } from '@store/org-id';

function SigninPageContent() {
    const [userIdData] =
        useFetchQuery<WebsitePublicationsQueryData['website']>('/api/register/org-id');
    const orgId = userIdData?.org?.pk;
    const router = useRouter();
    const [inputType, icon] = usePasswordToggle();
    const [inputTypeTwo, iconTwo] = usePasswordToggle();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const dispatch = useAppDispatch();
    if (userIdData) {
        dispatch(setOrganizationId(orgId as unknown as number));
    }
    const [formValues, setform] = useState({
        firstName: '',
        lastName: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
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

    const [, executeLoginMutation] = useMutation<RegisterUser, RegisterUserMutationVariables>();

    const userData = {
        email: formValues.email,
        first_name: formValues.firstName,
        last_name: formValues.lastName,
        username: formValues.email,
        password_1: formValues.passwordOne,
        password_2: formValues.passwordTwo,
        orgId: Number(orgId),
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await registerSchema.validate(formValues, { abortEarly: false });
            const isValid = await registerSchema.isValid(formValues);
            if (isValid === false) return;
            executeLoginMutation('api/register', userData)
                ?.then((data) => {
                    if (data?.success === true) {
                        setAuthToken(data?.token as string);
                        dispatch(setUserEmail(userData.email));
                        Toast('Registration Successful!', { type: 'default' });
                        setIsSubmitting(false);
                        router.push('verify');
                    }
                })
                .catch((error) => {
                    Toast(error?.message as string, { type: 'error' });
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
                        <h2 className="font-normal text-xl text-primaryColor">Register</h2>
                        <p className="font-light text-sm text-center">
                            Hello there! Login to keep updated and review our recents updates.
                        </p>
                    </div>
                    <LabeledInput
                        id="firstName"
                        type="name"
                        name="firstName"
                        htmlFor="firstName"
                        label="First Name"
                        placeholder="First Name"
                        className=""
                        required
                        value={formValues.firstName}
                        handleChange={updateForm}
                        error={path(['firstName'], errors)}
                    />
                    <LabeledInput
                        id="lastName"
                        type="name"
                        name="lastName"
                        htmlFor="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                        className=""
                        required
                        value={formValues.lastName}
                        handleChange={updateForm}
                        error={path(['lastName'], errors)}
                    />
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
                            id="passwordOne"
                            type={inputType}
                            name="passwordOne"
                            htmlFor="passwordOne"
                            label="Password"
                            placeholder="Password"
                            className=""
                            required
                            value={formValues.passwordOne}
                            handleChange={updateForm}
                            error={path(['passwordOne'], errors)}
                        />
                    </div>
                    <div className="relative  border border-transparent">
                        <span className="absolute right-0 cursor-pointer"> {iconTwo}</span>

                        <LabeledInput
                            id="passwordTwo"
                            type={inputTypeTwo}
                            name="passwordTwo"
                            htmlFor="passwordTwo"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            className=""
                            required
                            value={formValues.passwordTwo}
                            handleChange={updateForm}
                            error={path(['passwordTwo'], errors)}
                        />
                    </div>
                    <PasswordCheckList eventData={formValues.passwordOne} />
                    <div className="flex justify-end text-sm text-blue-500 hover:underline">
                        <Link href="/forget">Forgot password?</Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="button" className="" disabled={isSubmitting} />
                        <Button label="Register" type="button" handleClick={handleSubmit} />
                        {isSubmitting && (
                            <>
                                <i className="fas fa-spinner fa-pulse fa-1x fa-fw" />
                                <span className="sr-only">Loading...</span>
                            </>
                        )}
                        Register
                    </div>
                    <div className="flex justify-center text-sm">
                        <span>Already have an account?</span>
                        <span className="ml-1 text-blue-500 hover:underline cursor-pointer">
                            <Link href="/login">Login</Link>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HomeWrapper(SigninPageContent);
