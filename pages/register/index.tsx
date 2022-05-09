function index() {
    return <div>index</div>;
}

export default index;

// import { domainNameBasedOnEnv, validateEmail, formatSignupErrorMessage } from '../utils/helpers';
// import React, { useState, useCallback } from 'react';
// import PasswordCheckList from '@/utils/password';
// import { useAppData } from '../context/AppContext';
// import { useQuery, useMutation } from '@apollo/client';
// import { getCurrentValues } from '@/utils/helpers';
// import { REGISTER_USER } from '../graphql/Mutation';
// import { useRouter } from 'next/router';
// import { Form } from 'formik';
// import toast from '@/components/Toast';
// import Link from 'next/link';
// import { setAuthToken, passwordRegex } from '@/utils/auth/helpers';
// import usePasswordToggle from 'hooks/password-visibility';
// import { setCookie } from '@/utils/auth/helpers';

// const Register = (props) => {
//     const router = useRouter();
//     const [inputType, icon] = usePasswordToggle();
//     const [inputTypeTwo, iconTwo] = usePasswordToggle();
//     const [passwordCheckListToggle, setPasswordCheckListToggle] = useState(false);
//     const { orgId } = props;
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const { redirect, redirectPath } = router.query;
//     const fullUrlDomain = domainNameBasedOnEnv();
//     const [form, setform] = useState({
//         email: '',
//         first_name: '',
//         last_name: '',
//         password_1: '',
//         password_2: '',
//     });
//     const [executeRegisterMutation] = useMutation(REGISTER_USER);
//     const notify = useCallback((type, message) => {
//         toast({ type, message });
//     }, []);

//     const handleChecklist = () => {
//         setPasswordCheckListToggle(true);
//     };
//     const handleChecklistLeave = () => {
//         setPasswordCheckListToggle(false);
//     };
//     const updateForm = (e, field) => {
//         let result;
//         switch (field) {
//             case 'email':
//                 result = e.target.value;
//                 break;

//             case 'first_name':
//                 result = e.target.value;
//                 break;

//             case 'last_name':
//                 result = e.target.value;
//                 break;

//             case 'password_1':
//                 result = e.target.value;
//                 break;

//             case 'password_2':
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
//                 result = value;
//                 break;

//             case 'first_name':
//                 result = value;
//                 break;

//             case 'last_name':
//                 result = value;
//                 break;

//             case 'password_1':
//                 result = value;
//                 break;

//             case 'password_2':
//                 result = value;
//                 break;

//             default:
//                 result = value ? value : '';
//                 break;
//         }
//         if (!result) {
//             notify('error', `${field} cannot be empty!`);
//             return;
//         }
//     };

//     const handleSetSubmitting = (value) => {
//         setIsSubmitting(value);

//         setTimeout(() => setIsSubmitting(!value), 5000);
//     };

//     async function onSubmit() {
//         //set isSubmitting state to true
//         handleSetSubmitting(true);

//         handleError(form?.email, 'Email');
//         handleError(form?.first_name, 'First Name');
//         handleError(form?.last_name, 'Last Name');
//         handleError(form?.password_1, 'Password');
//         handleError(form?.password_2, 'Confirm Password');

//         if (passwordRegex.test(form?.password_1) === false) {
//             notify(
//                 'error',
//                 'Password must contain Uppercase, digit, special character and more than 7 characters',
//             );
//             return;
//         }
//         if (!validateEmail(form.email)) {
//             notify('error', 'Invalid email address');
//             return;
//         }
//         if (!(form.password_1 === form.password_2)) {
//             notify('error', 'Passwords do not match!');
//             return;
//         }
//         const queryVariables = {
//             email: form.email,
//             first_name: form.first_name,
//             last_name: form.last_name,
//             username: form.email,
//             password_1: form.password_1,
//             password_2: form.password_2,
//             orgId: Number(orgId),
//         };

//         executeRegisterMutation({ variables: queryVariables })
//             .then((res) => {
//                 if (res?.data?.registerByOrganization?.errors) {
//                     if (res?.data?.registerByOrganization?.errors.hasOwnProperty('username')) {
//                         notify(
//                             'error',
//                             `${res?.data?.registerByOrganization?.errors?.username[0]?.message}`,
//                         );
//                     }
//                     if (
//                         res?.data?.registerByOrganization?.errors.hasOwnProperty('nonFieldErrors')
//                     ) {
//                         notify(
//                             'error',
//                             `${res?.data?.registerByOrganization?.errors?.nonFieldErrors[0]?.message}`,
//                         );
//                     }
//                     if (res?.data.registerByOrganization.errors.password2[0]) {
//                         notify(
//                             'error',
//                             `${res?.data.registerByOrganization.errors.password2[0]?.message}`,
//                         );
//                     }
//                 } else if (res?.data?.registerByOrganization?.success === true) {
//                     setAuthToken(res.data?.registerByOrganization?.token);
//                     // executeJoinOrgMutation({orgId:variables?.orgId}).then((info) => {
//                     //     //console.log(info);
//                     //     if (info?.data?.joinOrganization?.request?.approved === false) {
//                     //         notify(
//                     //             "error",
//                     //             `An error occured while joining ${info?.data?.joinOrganization?.request?.organization?.name}`,
//                     //             formatSignupErrorMessage(info.data?.register)
//                     //           );
//                     //     }
//                     //   });
//                     setCookie('regEmail', queryVariables?.email);
//                     notify('success', 'Registration successful!');
//                     if (redirect) {
//                         if (redirectPath === fullUrlDomain) {
//                             window.location = `${process.env.NEXT_PUBLIC_ENVIRONMENT_PROTOCOL}${redirectPath}`;
//                         } else {
//                             router.push(`/${redirectPath}`);
//                         }
//                     } else {
//                         router.push('/register/verify');
//                     }
//                 }
//             })
//             .catch((error) => {
//                 notify('error', JSON.stringify(error?.message));
//                 setIsSubmitting(false);
//             });

//         //set isSubmitting state to false
//         setIsSubmitting(false);
//     }
//     return (
//         <div className="h-screen flex justify-center items-center mt-52 md:mt-0 lg:mt-44 xl:mt-24">
//             <div className="max-h-min w-4/5 md:w-3/5 lg:w-2/5">
//                 <h2 className="text-center font-semibold text-3xl">Membership Registration</h2>
//                 <p class=" mx-auto leading-relaxed text-base text-center">
//                     To begin your membership application process, fill the form below. You would
//                     have to verify your email address, before you can proceed to complete your
//                     registration from within your dashboard. Ensure you enter a valid email.
//                 </p>
//                 <div className=" first_name_and_last_name_div -mx-3 md:flex mb-6">
//                     <input
//                         id="first_name"
//                         type="text"
//                         name="first_name"
//                         placeholder="First Name"
//                         className=" first_name_input block w-full py-3 px-1 mt-8 appearance-none border-b border-black focus:outline-none focus:border-gray-200"
//                         required
//                         value={form.first_name}
//                         onChange={(e) => updateForm(e, 'first_name')}
//                     />
//                     <input
//                         id="last_name"
//                         type="text"
//                         name="last_name"
//                         placeholder="Last Name"
//                         className="block w-full py-3 px-1 mt-8 appearance-none border-b border-black focus:outline-none focus:border-gray-200"
//                         required
//                         value={form.last_name}
//                         onChange={(e) => updateForm(e, 'last_name')}
//                     />
//                 </div>
//                 <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="block w-full py-3 px-1 mt-8
//                          appearance-none
//                         border-b border-black
//                          focus:outline-none focus:border-gray-200"
//                     required
//                     value={form.email}
//                     onChange={(e) => updateForm(e, 'email')}
//                 />
//                 <div className="relative  border border-transparent">
//                     <span className=" absolute -top-1 right-1  ">{icon}</span>
//                     <input
//                         id="password"
//                         type={inputType}
//                         name="password"
//                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                         placeholder="Password"
//                         className="block w-full py-3 px-1 mt-7 mb-5
//                     appearance-none
//                     border-b border-black
//                     focus:text-gray-500 focus:outline-none focus:border-gray-200"
//                         required
//                         value={form.password_1}
//                         onChange={(e) => updateForm(e, 'password_1')}
//                         onClick={() => handleChecklist()}
//                     />
//                 </div>
//                 <div className="relative  border border-transparent">
//                     <span className=" absolute -top-1 right-1  ">{iconTwo}</span>
//                     <input
//                         id="confirmPassword"
//                         type={inputTypeTwo}
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         className="block w-full py-3 px-1 mt-7 mb-5
//                          appearance-none
//                         border-b border-black
//                         focus:text-gray-500 focus:outline-none focus:border-gray-200"
//                         required
//                         value={form.password_2}
//                         onChange={(e) => updateForm(e, 'password_2')}
//                     />
//                 </div>
//                 {passwordCheckListToggle && <PasswordCheckList eventData={form.password_1} />}
//                 <div className="flex justify-center items-center">
//                     <button
//                         className=" w-40 md:w-56 lg:w-4/12 h-14 py-3 mt-10 mb-8 bg-primaryBtn
//                          text-white rounded-full focus:outline-none hover:bg-secondaryBtn hover:shadow-none"
//                         onClick={() => onSubmit()}
//                         disabled={isSubmitting}
//                     >
//                         {' '}
//                         {isSubmitting && (
//                             <>
//                                 <i className="fas fa-spinner fa-pulse fa-1x fa-fw"></i>
//                                 <span className="sr-only">Loading...</span>
//                             </>
//                         )}{' '}
//                         Register
//                     </button>
//                 </div>
//                 <div className="flex justify-center text-sm">
//                     <span>Already have an account?</span>
//                     <span className="ml-1 text-blue-500 hover:underline cursor-pointer">
//                         <Link href="/login">Login</Link>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Register;
