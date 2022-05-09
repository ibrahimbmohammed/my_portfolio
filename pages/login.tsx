function login() {
    return <div>login</div>;
}

export default login;

// import { useState, useCallback } from 'react';
// import usePasswordToggle from '@lib/hooks/password-visibility';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useMutation } from '@apollo/client';
// import { validateEmail } from '@lib/utils/helpers';
// import PasswordCheckList from '@lib/utils/password';
// import toast from '@lib/utils/toast';
// import { SIGNIN_USER } from '@graphql/Mutation';
// import { setAuthToken } from '@lib/utils/cookies';

// function SigninPageContent() {
//     const router = useRouter();
//     const [inputType, icon] = usePasswordToggle();
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const [form, setform] = useState({
//         email: '',
//         password: '',
//     });

//     const notify = useCallback((type, message) => {
//         toast({ type, message });
//     }, []);

//     const updateForm = (e, field) => {
//         setform({
//             ...form,
//             [`${field}`]: e.target.value,
//         });
//     };

//     const handleError = (value, field) => {
//         let result;

//         switch (field) {
//             case 'email':
//                 result = e.target.value;
//                 break;

//             case 'password':
//                 result = e.target.value;
//                 break;

//             default:
//                 result = value;
//                 break;
//         }

//         if (!result) {
//             notify('error');
//             return;
//         }
//         `${field} cannot be empty!`;
//     };

//     // const handleSetSubmitting = (value) => {
//     //     setIsSubmitting(value);

//     //     setTimeout(() => setIsSubmitting(!value), 5000);
//     // };

//     // async function onSubmit() {
//     //     // set isSubmitting state to true
//     //     handleSetSubmitting(true);

//     //     handleError(form.email, 'Email');
//     //     handleError(form.password, 'Password');

//     //     if (!validateEmail(form.email)) {
//     //         notify('error', 'Invalid email address');
//     //         return;
//     //     }
//     //     // const variables = {
//     //     //     password: form.password,
//     //     //     username: form.email,
//     //     // };

//     //     executeSignInMutation({ variables: { password: form.password, username: form.email } })
//     //         .then((res) => {
//     //             if (res?.data?.login?.success === true) {
//     //                 // dispatch data to localStorage so that dashboard and related features can
//     //                 // use user's data for queries

//     //                 // set userToken for route and actions authentication
//     //                 setAuthToken(res.data?.login?.token);

//     //                 notify('success', 'Login Successful!');
//     //                 setTimeout(() => {
//     //                     // if redirect value is true, then push to redirectPath
//     //                     // else redirect to dashboard
//     //                     if (redirect) {
//     //                         if (redirectPath === fullUrlDomain) {
//     //                             window.location = `${process.env.NEXT_PUBLIC_ENVIRONMENT_PROTOCOL}${redirectPath}`;
//     //                         } else {
//     //                             router.push(`/${redirectPath}`);
//     //                         }
//     //                     } else {
//     //                         router.push('/dashboard');
//     //                     }
//     //                 }, 2000);
//     //                 setIsSubmitting(false);
//     //             } else if (res?.data?.login?.errors) {
//     //                 notify(
//     //                     'error',
//     //                     JSON.stringify(res?.data?.login.errors.nonFieldErrors[0].message),
//     //                 );
//     //                 setIsSubmitting(false);
//     //             }
//     //         })
//     //         .catch((error) => {
//     //             notify('error', JSON.stringify(error?.message));
//     //             setIsSubmitting(false);
//     //         });

//     // }

//     return (
//         <div className="h-screen flex justify-center items-center">
//             <div className="max-h-min w-4/5 md:w-3/5 lg:w-2/5 mt-24">
//                 <h2 className="text-center font-semibold text-3xl">Login</h2>

//                 <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="block w-full py-3 px-1 mt-8
//                      appearance-none
//                     border-b border-black
//                      focus:outline-none focus:border-gray-200"
//                     required
//                     value={form.email}
//                     onChange={(e) => updateForm(e, 'email')}
//                 />
//                 <div className="relative  border border-transparent">
//                     {icon}
//                     <input
//                         id="password"
//                         type={inputType}
//                         name="password"
//                         placeholder="Password"
//                         className="block w-full py-3 px-1 mt-7 mb-5
//           appearance-none
//           border-b border-black
//           focus:text-gray-500 focus:outline-nones focus:border-gray-200"
//                         required
//                         value={form.password}
//                         onChange={(e) => updateForm(e, 'password')}
//                     />
//                 </div>
//                 <PasswordCheckList eventData={form.password} />
//                 <div className="flex justify-end text-sm text-blue-500 hover:underline">
//                     <Link href="/forget">Forgot password?</Link>
//                 </div>
//                 <div className="flex justify-center items-center">
//                     <button
//                         type="button"
//                         className=" w-40 md:w-56 lg:w-4/12 h-14 py-3 mt-10 mb-8 bg-primaryBtn
//                          text-white rounded-full focus:outline-none hover:bg-secondaryBtn hover:shadow-none"
//                         onClick={() => onSubmit()}
//                         disabled={isSubmitting}
//                     >
//                         {' '}
//                         {isSubmitting && (
//                             <>
//                                 <i className="fas fa-spinner fa-pulse fa-1x fa-fw" />
//                                 <span className="sr-only">Loading...</span>
//                             </>
//                         )}{' '}
//                         Login
//                     </button>
//                 </div>
//                 <div className="flex justify-center text-sm">
//                     <span>Don`&apos;`t have an account?</span>
//                     <span className="ml-1 text-blue-500 hover:underline cursor-pointer">
//                         <Link href="/register">Register</Link>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SigninPageContent;
