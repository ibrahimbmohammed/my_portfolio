/* eslint-disable import/no-unresolved */
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import Input from '@molecules/m-labeled-input';
import TextArea from '@atoms/a-text-area';
import Label from '@atoms/a-input-label';
import { path } from 'ramda';
import { GoLocation } from 'react-icons/go';
import { FiMail, FiPhone } from 'react-icons/fi';
import { getValidationErrors } from '@lib/utils/helpers';
import contactSchema from '@lib/validations/login-validation';

import Toast from '@lib/utils/toast';
import emailjs from 'emailjs-com';

function SectionFive() {
    const initialState = {
        user_name: '',
        user_email: '',
        message: '',
    };
    const [formValues, setform] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [, setIsSubmitting] = useState(false);
    const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setform({
            ...formValues,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: null,
        });
    };

    const reset = () => {
        setform(initialState);
    };

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await contactSchema.validate(formValues, { abortEarly: false });
            const isValid = await contactSchema.isValid(formValues);
            if (isValid === false) return;
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                    e.target,
                    process.env.NEXT_PUBLIC_PUBLIC_KEY,
                )
                .then(
                    () => {
                        Toast('Message Sent Successful!', { type: 'success' });
                        setIsSubmitting(false);
                        reset();
                    },
                    (error) => {
                        Toast(error?.text as string, { type: 'error' });
                    },
                );
        } catch (err) {
            setIsSubmitting(false);
            const error = getValidationErrors(err);

            setErrors({ ...error });
        }
    };

    return (
        <section className="sect relative flex items-center justify-center w-full md:px-[3rem]">
            <span className="inline-block  absolute top-0 right-[12rem]">
                <h1 className="font-extrabold  self-center mx-auto text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 mt-40 md:mt-32 md:ml-16">
                    GET IN TOUCH
                </h1>
            </span>
            <div className="flex w-full h-full  flex-col md:flex-row  items-center justify-between">
                <form
                    onSubmit={handleSubmit}
                    className="form flex w-full md:w-1/3 flex-col space-y-5"
                >
                    <Input
                        id="name"
                        type="text"
                        name="user_name"
                        htmlFor="name"
                        label="name"
                        labelClassName="flex flex-col"
                        value={formValues.user_name}
                        handleChange={updateForm}
                        placeholder="Enter your Name"
                        className="bg-[#21252D] border border-gray-500 rounded-sm py-2 px-1 outline-none"
                        error={path(['user_name'], errors)}
                    />
                    <Input
                        id="email"
                        type="email"
                        name="user_email"
                        htmlFor="email"
                        label="email"
                        labelClassName="flex flex-col"
                        value={formValues.user_email}
                        handleChange={updateForm}
                        placeholder="Enter you email Address"
                        className="bg-[#21252D] border border-gray-500 rounded-sm py-2 px-1 outline-none"
                        error={path(['user_email'], errors)}
                    />
                    <div className="flex flex-col">
                        <Label htmlFor="message" label="message" className="" />
                        <TextArea
                            id="message"
                            name="message"
                            value={formValues.message}
                            rows={8}
                            cols={8}
                            // @ts-ignore
                            handleChange={updateForm}
                            placeholder="Enter Message"
                            className="bg-[#21252D] border border-gray-500 rounded-sm py-2 px-1 outline-none"
                            error={path(['message'], errors)}
                        />
                    </div>

                    <input
                        className="bg-white text-black cursor-pointer rounded-xl py-2"
                        type="submit"
                        value="Send"
                    />
                </form>
                <div className="contact card w-full md:w-1/3">
                    <div className="border px-4 py-6">
                        <span className="flex space-x-2 items-center">
                            <FiMail />
                            <span className="flex flex-col">
                                <p className="text-gray-500 text-xs font-semibold">Email</p>
                                <p className="text-xs ">ibrahim7224@yahoo.com</p>
                            </span>
                        </span>
                        <span className="flex space-x-2 items-center">
                            <FiPhone />
                            <span className="flex flex-col">
                                <p className="text-gray-500 text-xs font-semibold">Phone</p>
                                <p className="text-xs ">+2347036097214</p>
                            </span>
                        </span>
                        <span className="flex space-x-2 items-center">
                            <GoLocation />
                            <span className="flex flex-col">
                                <p className="text-gray-500 text-xs font-semibold">Address</p>
                                <p className="text-xs ">221B Baker Street</p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionFive;
