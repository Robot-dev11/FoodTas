import * as Yup from 'yup';


export const SignUpSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    firstName: Yup.string().min(2).max(15).required("Please enter your First Name"),
    lastName: Yup.string().min(2).max(20).required("Please enter your Last Name"),
    password: Yup.string().min(8).required("Please enter your password"),
    confirm_password : Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], "Password must match"),
})

export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).required("Please enter your password"),
})

export const ForgetPasswordSchema = Yup.object({
    email: Yup.string().email('Inavalid Email Address').required("Please enter your email"),
})