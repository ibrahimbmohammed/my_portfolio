function index() {
    return <div>index</div>;
}

export default index;
// import React, { useState, useCallback } from 'react';
// import { validateEmail } from '../utils/helpers';
// import { useAppData } from '../context/AppContext';
// import { useRouter } from 'next/router';
// import toast from '@/components/Toast';
// import Loader from '@/components/Loader';
// import { SEND_PASSWORD_RESET } from '../graphql/Mutation';
// import TopNavigation from '@/components/main/topNavigation';
// import { useQuery, useMutation } from '@apollo/client';
// import { setCookie } from '@/utils/auth/helpers';

// export default function ForgetPassword(props) {
//     const router = useRouter();

//     // router.events.on('routeChangeStart', )
//     const {
//         dispatch,
//         state: { conferenceData, token, user },
//     } = useAppData();
//     const [form, setform] = useState({
//         email: '',
//     });
//     const [isSubmiting, setIsSubmitting] = useState(false);

//     const [sendEmail] = useMutation(SEND_PASSWORD_RESET);
//     const notify = useCallback((type, message) => {
//         toast({ type, message });
//     }, []);

//     const updateForm = (e, field) => {
//         let result;

//         switch (field) {
//             case 'email':
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
//             case 'email':
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
//         handleError(form.email, 'Email');
//         setIsSubmitting(true);
//         if (!validateEmail(form.email)) {
//             notify('error', 'Invalid email address');
//             return;
//         }
//         const variable = {
//             email: form.email,
//         };
//         sendEmail({ variables: { email: form.email } })
//             .then((res) => {
//                 if (res.data?.sendPasswordResetEmail?.ok === true) {
//                     notify('success', 'email address success');
//                     setCookie('resetEmail', variable?.email);
//                     router.push('/reset');
//                     setIsSubmitting(false);
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
//             <section className="text-gray-600 body-font ">
//                 <div className="container h-screen px-5 pb-32 mx-auto flex flex-wrap items-end justify-center">
//                     <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full md:mt-0">
//                         <h2 className="text-gray-900 text-lg font-medium title-font mb-1">
//                             Reset Your Password
//                         </h2>

//                         <div className="my-3" />
//                         <div className="p-2 w-full">
//                             <div className="relative mb-4">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     placeholder="Email"
//                                     name="email"
//                                     value={form.email}
//                                     onChange={(e) => updateForm(e, 'email')}
//                                     className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                                 />
//                             </div>
//                         </div>
//                         <div className="" />
//                         <div className="flex justify-center items-center w-full">
//                             <button
//                                 className=" w-full  h-12 py-3  mb-2 bg-secondaryColor
//                            text-white rounded-full focus:outline-none hover:bg-secondaryBtn hover:shadow-none"
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
//                                 Reset
//                             </button>
//                         </div>
//                         <p className="text-xs text-gray-500 mt-3">
//                             Back to{' '}
//                             <b
//                                 onClick={() => router.push('/login')}
//                                 className="cursor-pointer text-secondaryColor"
//                             >
//                                 Login
//                             </b>
//                         </p>
//                         <p className="text-xs text-gray-500 mt-3">
//                             You don't have an account?{' '}
//                             <a href="/register" className="cursor-pointer">
//                                 <b className="text-secondaryColor">Register</b>
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </section>
//             <div></div>
//         </div>
//     );
// }

// export async function geServerSideProps() {
//     await new Promise((resolve) => {
//         setTimeout(resolve, 1000);
//     });
//     return { props: {} };
// }
