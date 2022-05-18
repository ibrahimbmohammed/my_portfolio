import HomeWrapper from '@hoc/home-wrapper';
import SigninVerification from '@organisms/o-reg-signin-verify-otp';

const SigninVerificationPage = () => {
    return <SigninVerification />;
};

export default HomeWrapper(SigninVerificationPage);
