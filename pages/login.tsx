function login() {
    return <div>login</div>;
}

export default login;

// import { useState, ChangeEvent, FormEventHandler } from 'react';
// import usePasswordToggle from '@lib/hooks/password-visibility';
// import HomeWrapper from '@hoc/home-wrapper';
// import { path } from 'ramda';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { LoginUserMutation, LoginUserMutationVariables } from '@gentypes/index';
// import { getValidationErrors } from '@lib/utils/helpers';
// import PasswordCheckList from '@lib/utils/password';
// import useMutation from '@lib/hooks/mutation-query';
// import { setAuthToken } from '@lib/utils/cookies';
// import loginSchema from '@lib/validations/login-validation';
// import Button from '@atoms/button';
// import LabeledInput from '@molecules/labeled-input';

// function SigninPageContent() {
//     const router = useRouter();
//     const [inputType, icon] = usePasswordToggle();
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});

//     const [formValues, setform] = useState({
//         email: '',
//         password: '',
//     });

//     const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setform({
//             ...formValues,
//             [name]: value,
//         });
//     };

//     const [resData, executeLoginMutation] =
//         useMutation<LoginUserMutation, LoginUserMutationVariables>();

//     const handleSubmit = async () => {
//         try {
//             const isValid = await loginSchema.isValid(formValues);
//             await loginSchema.validate(formValues, { abortEarly: false });
//             console.log('hi', isValid);

//             const userData = {
//                 username: formValues.email,
//                 password: formValues.password,
//             };
//             executeLoginMutation('api/login', userData)
//                 ?.then((data) => console.log('datasss', data))
//                 .catch((error) => console.log('error', error));
//         } catch (err) {
//             const error = getValidationErrors(err);
//             setErrors({ ...error });
//         }
//     };

//     async function onSubmit() {
//         // set isSubmitting state to true
//         // handleSetSubmitting(true);
//         // handleError(formValues.email, 'Email');
//         // handleError(formValues.password, 'Password');
//         // if (!validateEmail(formValues.email)) {
//         //     // notify('error', 'Invalid email address');
//         //     return;
//         // }
//         // const variables = {
//         //     password: form.password,
//         //     username: form.email,
//         // };
//         // executeSignInMutation({ variables: { password: form.password, username: form.email } })
//         //     .then((res) => {
//         //         if (res?.data?.login?.success === true) {
//         //             // dispatch data to localStorage so that dashboard and related features can
//         //             // use user's data for queries
//         //             // set userToken for route and actions authentication
//         //             setAuthToken(res.data?.login?.token);
//         //             notify('success', 'Login Successful!');
//         //             setTimeout(() => {
//         //                 // if redirect value is true, then push to redirectPath
//         //                 // else redirect to dashboard
//         //                 if (redirect) {
//         //                     if (redirectPath === fullUrlDomain) {
//         //                         window.location = `${process.env.NEXT_PUBLIC_ENVIRONMENT_PROTOCOL}${redirectPath}`;
//         //                     } else {
//         //                         router.push(`/${redirectPath}`);
//         //                     }
//         //                 } else {
//         //                     router.push('/dashboard');
//         //                 }
//         //             }, 2000);
//         //             setIsSubmitting(false);
//         //         } else if (res?.data?.login?.errors) {
//         //             notify(
//         //                 'error',
//         //                 JSON.stringify(res?.data?.login.errors.nonFieldErrors[0].message),
//         //             );
//         //             setIsSubmitting(false);
//         //         }
//         //     })
//         //     .catch((error) => {
//         //         notify('error', JSON.stringify(error?.message));
//         //         setIsSubmitting(false);
//         //     });
//     }

//     return (
//         <div className="h-screen flex justify-center items-center">
//             <form
//                 // onSubmit={()=> handleSubmit}
//                 className="min-h-[28rem] w-4/5 md:w-3/5 lg:w-[38rem] mt-[1rem] bg-white rounded-2xl drop-shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)]"
//             >
//                 <div className="flex flex-col space-y-3 px-[5rem] py-[4rem]">
//                     <div className="space-y-2">
//                         <h2 className="font-normal text-xl text-primaryColor">Login</h2>
//                         <p className="font-light text-sm text-center">
//                             Hello there! Login to keep updated and review our recents updates.
//                         </p>
//                     </div>
//                     <LabeledInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         className=""
//                         required
//                         value={formValues.email}
//                         handleChange={updateForm}
//                         error={path(['email'], errors)}
//                     />
//                     <div className="relative  border border-transparent">
//                         <span className="absolute right-0 cursor-pointer"> {icon}</span>

//                         <LabeledInput
//                             id="password"
//                             type={inputType}
//                             name="password"
//                             placeholder="Password"
//                             className=""
//                             required
//                             value={formValues.password}
//                             handleChange={updateForm}
//                             error={path(['password'], errors)}
//                         />
//                     </div>
//                     <PasswordCheckList eventData={formValues.password} />
//                     <div className="flex justify-end text-sm text-blue-500 hover:underline">
//                         <Link href="/forget">Forgot password?</Link>
//                     </div>
//                     <div className="flex justify-center items-center">
//                         <input type="button" className="" disabled={isSubmitting} />
//                         <Button label="Submit" type="button" handleClick={handleSubmit} />
//                         {isSubmitting && (
//                             <>
//                                 <i className="fas fa-spinner fa-pulse fa-1x fa-fw" />
//                                 <span className="sr-only">Loading...</span>
//                             </>
//                         )}{' '}
//                         Login
//                     </div>
//                     <div className="flex justify-center text-sm">
//                         <span>Don`&apos;`t have an account?</span>
//                         <span className="ml-1 text-blue-500 hover:underline cursor-pointer">
//                             <Link href="/register">Register</Link>
//                         </span>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default HomeWrapper(SigninPageContent);
