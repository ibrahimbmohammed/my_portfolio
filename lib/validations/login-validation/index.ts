import * as yup from 'yup';

const contactSchema = yup.object().shape({
    user_name: yup.string().required().typeError('your name is required'),
    user_email: yup.string().email().required().typeError('email is required'),
    message: yup
        .string()
        .required()
        .min(50, 'Message to short')
        .typeError('a valid message is required'),
});

export default contactSchema;
