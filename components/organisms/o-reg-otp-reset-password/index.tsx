function index() {
    return <div>index</div>;
}

export default index;

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { VERIFY_RESET_PASSWORD_TOKEN, RESEND_CODE } from '@graphql/Mutation';
// import { getCookie, removeCookie } from '@lib/utils/cookies';

// function Otp() {
//     const router = useRouter();
//     const [otp, setOtp] = useState(new Array(6).fill(''));
//     const [executeResendCodeMutation] = useMutation(RESEND_CODE);
//     const [executeResetPasswordToken] = useMutation(VERIFY_RESET_PASSWORD_TOKEN);
//     const [seconds, setSeconds] = useState(60);
//     const [minutes, setMinutes] = useState(4);
//     const userEmail = getCookie('resetEmail');

//     useEffect(() => {
//         let interval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 1) {
//                 if (minutes === 0) {
//                     clearInterval(interval);
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(60);
//                 }
//             }
//         }, 1000);
//         return () => {
//             clearInterval(interval);
//         };
//     });

//     const handleChange = (element, index) => {
//         if (isNaN(element.value)) return false;

//         setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//         if (element.nextSibling) {
//             element.nextSibling.focus();
//         }
//     };

//     const onSubmit = async () => {
//         const variables = {
//             code: otp.join(''),
//         };

//         try {
//             const mutationResult = await executeResetPasswordToken({
//                 variables: { code: otp.join('') },
//             });
//             if (mutationResult?.data?.verifyPasswordResetToken.ok === true) {
//                 console.log('token', mutationResult);
//                 Cookies.set('resetPasswordToken', variables?.code);
//                 notify('success', `verification successful`);
//                 router.push('/new_password');
//             }
//         } catch (error) {
//             notify('error', JSON.stringify(error?.message));
//             //setIsSubmitting(false)
//         }
//     };

//     const resendCode = async () => {
//         setSeconds(60);
//         setMinutes(4);
//         const variables = {
//             email: userEmail,
//         };
//         try {
//             const mutationResult = await executeResendCodeMutation({
//                 variables: { email: userEmail },
//             });
//             if (mutationResult?.data?.resendActivationEmail.ok) {
//                 notify('success', `Verification code has been sent`);
//                 removeCookie('resetEmail');
//             }
//         } catch (error) {
//             notify('error', JSON.stringify(error?.message));
//         }
//     };
//     return (
//         <div className="h-screen flex justify-center items-center">
//             <div className="max-h-min w-4/5 md:w-3/5 lg:w-2/5 mt-24">
//                 <h2 className="text-center font-semibold text-3xl mb-4">Email Verification</h2>
//                 <div className="flex flex-col text-center w-full h-full mb-12">
//                     <p className="text-lg">
//                         Enter the OTP sent to <b>{`${userEmail}`}</b> to verify your account.
//                     </p>
//                     <p className="text-lg text-red-500">
//                         Please do not go back or close this screen
//                     </p>
//                 </div>
//                 <div className="text-center mb-10">
//                     {otp.map((data, index) => {
//                         return (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 name="otp"
//                                 value={data}
//                                 onChange={(e) => handleChange(e.target, index)}
//                                 maxLength="1"
//                                 onFocus={(e) => e.target.select()}
//                                 className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 mx-2 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                         );
//                     })}
//                 </div>
//                 <div className="text-center mb-10">
//                     {seconds ? (
//                         <p>
//                             Resend code in {minutes} min {seconds}s
//                         </p>
//                     ) : null}
//                 </div>
//                 <div className="container w-full">
//                     <div className="flex flex-row justify-center w-full">
//                         <button
//                             type="button"
//                             className="mx-2 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg"
//                             onClick={() => setOtp([...otp.map((v) => (v = ''))])}
//                         >
//                             RESET
//                         </button>
//                         <button
//                             type="button"
//                             className="mx-2 text-white bg-primaryBtn border-0 py-2 px-8 focus:outline-none hover:bg-secondaryBtn rounded text-lg"
//                             onClick={() => onSubmit()}
//                         >
//                             VERIFY
//                         </button>
//                         {seconds === 0 && (
//                             <button
//                                 type="button"
//                                 className="mx-2 text-white bg-primaryBtn border-0 py-2 px-8 focus:outline-none hover:bg-secondaryBtn rounded text-lg"
//                                 onClick={() => resendCode()}
//                             >
//                                 RESEND
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Otp;
