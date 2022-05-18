function index() {
    return <div>index</div>;
}

export default index;

// import React, { useState, useContext, useCallback } from 'react';
// import PasswordChecker from '@/utils/password';
// import { useAppData } from '../context/AppContext';
// import { useRouter } from 'next/router';
// import toast from '@/components/Toast';
// import { useMutation } from '@apollo/client';
// import { PASSWORD_RESET } from '../graphql/Mutation';
// import { getCookie, removeCookie, passwordRegex } from '@/utils/auth/helpers';
// import TopNavigation from '@/components/main/topNavigation';
// import usePasswordToggle from 'hooks/password-visibility';
// import PasswordCheckList from '@/utils/password';
// export default function NewPasswordPage(props) {
//     const [inputType, icon] = usePasswordToggle();
//     const [inputTypeTwo, iconTwo] = usePasswordToggle();
//     const [isSubmiting, setIsSubmitting] = useState(false);
//     const handleSubmit = () => {
//         setIsSubmitting(!isSubmiting);
//     };

//     const router = useRouter();

//     const [form, setform] = useState({
//         npassword: '',
//         cpassword: '',
//     });

//     const [executePasswordReset] = useMutation(PASSWORD_RESET);
//     const notify = useCallback((type, message) => {
//         toast({ type, message });
//     }, []);

//     const updateForm = (e, field) => {
//         let result;

//         switch (field) {
//             case 'npassword':
//                 result = e.target.value;
//                 break;

//             case 'cpassword':
//                 result = e.target.value;
//                 break;

//             default:
//                 result = e.target.value;
//                 break;
//         }

//         setform({
//             ...form,
//             [`${field}`]: result,
//         });
//     };

//     const handleError = (value, field) => {
//         let result;

//         switch (field) {
//             case 'npassword':
//                 result = e.target.value;
//                 break;

//             case 'cpassword':
//                 result = e.target.value;
//                 break;

//             default:
//                 result = value;
//                 break;
//         }

//         if (!result) {
//             notify('error', `${field} cannot be empty!`);
//             return;
//         }
//     };

//     const onSubmit = () => {
//         setIsSubmitting(true);
//         handleError(form.npassword, 'Email');
//         handleError(form.cpassword, 'Password');

//         if (passwordRegex.test(form?.npassword) === false) {
//             notify(
//                 'error',
//                 'Password must contain Uppercase, digits, special character and more than 7 characters',
//             );
//             setIsSubmitting(false);
//             return;
//         }

//         if (!(form.npassword === form.cpassword)) {
//             notify('error', 'Passwords do not match!');
//             setIsSubmitting(false);
//             return;
//         }

//         const resetToken = getCookie('resetPasswordToken');

//         const variables = {
//             token: `${resetToken}`,
//             newPassword1: form.npassword,
//             newPassword2: form.cpassword,
//         };

//         executePasswordReset({
//             variables: {
//                 token: resetToken,
//                 newPassword1: form.npassword,
//                 newPassword2: form.cpassword,
//             },
//         })
//             .then((res) => {
//                 if (res.data?.passwordReset?.success === true) {
//                     removeCookie('resetPasswordToken');
//                     notify('success', 'Password Reset Successful!');
//                     setIsSubmitting(false);
//                     router.push('/login');
//                 }
//             })
//             .catch((error) => {
//                 notify('error', JSON.stringify(error?.message));
//                 setIsSubmitting(false);
//             });
//     };

//     return (
//         <div>
//             <TopNavigation />
//             <section className="text-gray-600 body-font">
//                 <div className="container h-screen px-5 pb-32 mx-auto mt-6 flex flex-wrap items-center justify-center">
//                     <div className="lg:w-2/6 md:w-1/2 bg-gray-100  rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
//                         <h2 className="text-gray-900 text-lg font-medium title-font mb-1">
//                             Reset Your Password
//                         </h2>
//                         <h2 className="text-gray-500 text-md font-medium title-font mb-5">
//                             Enter your new password
//                         </h2>
//                         <div className="py-2">
//                             <div className="relative  border border-transparent">
//                                 <span className=" absolute -top-8 right-1  ">{icon}</span>
//                                 <input
//                                     type={inputType}
//                                     id="npassword"
//                                     placeholder="New Password"
//                                     name="npassword"
//                                     value={form.npassword}
//                                     onChange={(e) => updateForm(e, 'npassword')}
//                                     className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                                 />
//                             </div>
//                         </div>
//                         <div className="py-2 ">
//                             <div className="relative border border-transparent">
//                                 <span className=" absolute -top-8 right-1 ">{iconTwo}</span>
//                                 <input
//                                     type={inputTypeTwo}
//                                     id="cpassword"
//                                     placeholder="Confirm Password"
//                                     name="cpassword"
//                                     value={form.cpassword}
//                                     onChange={(e) => updateForm(e, 'cpassword')}
//                                     className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                                 />
//                             </div>
//                             <PasswordCheckList eventData={form.npassword} />
//                         </div>
//                         <div className="flex justify-center items-center w-full">
//                             <button
//                                 type="button"
//                                 className=" w-full  h-12 py-3 mt-2 mb-2 bg-secondaryColor
//                          text-white rounded-full focus:outline-none hover:bg-secondaryBtn hover:shadow-none"
//                                 onClick={() => onSubmit()}
//                                 disabled={isSubmiting}
//                             >
//                                 {' '}
//                                 {isSubmiting && (
//                                     <>
//                                         <i className="fas fa-spinner fa-pulse fa-1x fa-fw"></i>
//                                         <span className="sr-only">Loading...</span>
//                                     </>
//                                 )}{' '}
//                                 Submit
//                             </button>
//                         </div>
//                         <p className="text-xs text-gray-500 mt-3">
//                             You don't have an account?{' '}
//                             <a href="/" className="cursor-pointer text-secondaryColor">
//                                 <b>Register</b>
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </section>
//             <div></div>
//         </div>
//     );
// }
