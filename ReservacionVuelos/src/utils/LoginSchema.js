import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('*Required'),
    password: Yup.string()
        .required('*Please Enter your password')
});

export default LoginSchema;