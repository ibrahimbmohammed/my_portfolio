import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

function PasswordCheckList({ eventData }: { eventData: string }) {
    const [contains8C, setContains8C] = useState(false); // min 8 characters
    const [containsUL, setContainsUL] = useState(false); // uppercase letter
    const [containsLL, setContainsLL] = useState(false); // lowercase letter
    const [containsN, setContainsN] = useState(false); // number
    const [containsSC, setContainsSC] = useState(false); // special character

    useEffect(() => {
        const validate = (eventValue: string) => {
            // has 8 characters
            if (eventValue.length >= 8) setContains8C(true);
            else setContains8C(false);

            // has uppercase letter
            if (eventValue?.toLowerCase() !== eventValue) setContainsUL(true);
            else setContainsUL(false);

            // has lowercase letter
            if (eventValue.toUpperCase() !== eventValue) setContainsLL(true);
            else setContainsLL(false);

            // has number
            if (/\d/.test(eventValue)) setContainsN(true);
            else setContainsN(false);

            // has special character
            if (/[~`!#@$%\\^&*+=\-\\[\]\\';,/{}|\\":<>\\?]/g.test(eventValue)) setContainsSC(true);
            else setContainsSC(false);
        };
        validate(eventData);
    }, [eventData]);

    return (
        <div className="flex flex-col p-2">
            <div className="flex items-center space-x-1">
                {contains8C ? (
                    <FaCheck className="text-green-400 text-sm" />
                ) : (
                    <ImCross className="text-red-400 text-xs" />
                )}{' '}
                <p className="text-primaryColor text-xs">: Password has more than 7 characters </p>{' '}
            </div>
            <div className="flex items-center space-x-1">
                {containsUL ? (
                    <FaCheck className="text-green-400 text-sm" />
                ) : (
                    <ImCross className="text-red-400 text-xs" />
                )}{' '}
                <p className="text-primaryColor text-xs">: Password has a capital letter</p>{' '}
            </div>
            <div className="flex items-center space-x-1">
                {containsLL ? (
                    <FaCheck className="text-green-400 text-sm" />
                ) : (
                    <ImCross className="text-red-400 text-xs" />
                )}{' '}
                <p className="text-primaryColor text-xs">: Password has a lower case letter</p>{' '}
            </div>
            <div className="flex items-center space-x-1">
                {containsN ? (
                    <FaCheck className="text-green-400 text-sm" />
                ) : (
                    <ImCross className="text-red-400 text-xs" />
                )}{' '}
                <p className="text-primaryColor text-xs">: Password has a number</p>{' '}
            </div>
            <div className="flex items-center space-x-1">
                {containsSC ? (
                    <FaCheck className="text-green-400 text-sm" />
                ) : (
                    <ImCross className="text-red-400 text-xs" />
                )}{' '}
                <p className="text-primaryColor text-xs">: Password has a special character</p>{' '}
            </div>
        </div>
    );
}
export default PasswordCheckList;
