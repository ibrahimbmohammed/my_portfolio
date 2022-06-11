import { ImSpinner2 } from 'react-icons/im';

const SpinnerIcon = () => (
    <div className="flex h-full w-full items-center justify-center">
        <span className="animate-spin">
            <ImSpinner2 className="text-xl text-white" />
        </span>
    </div>
);

export default SpinnerIcon;
