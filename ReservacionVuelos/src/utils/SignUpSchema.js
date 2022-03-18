import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, '*Too Short!')
    .max(50, '*Too Long!')
    .required('*Required'),
  email: Yup.string().email('Invalid email').required('*Required'),
  password: Yup.string()
    .required('*Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      '*Follow password recommendations ',
    ),
  terms: Yup.boolean().oneOf([true], '*You must agree to terms and conditions'),
});

export default SignupSchema;
