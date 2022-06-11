import { ImSpinner2 } from 'react-icons/im';

const LoadingScreen = () => (
    <div className="flex h-[100vh] w-[100vw] items-center bg-black justify-center">
        <span className="animate-spin">
            <ImSpinner2 className="text-xl text-white" />
        </span>
    </div>
);

export default LoadingScreen;
