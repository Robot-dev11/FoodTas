import React from 'react';
import { useFormik } from 'formik';
import { SignUpSchema } from '../../schemas';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Link, useNavigate} from 'react-router-dom';
import './SignupForm.css'



const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: "",
}


const SignupForm = () => {

    const navigate = useNavigate();

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues,
        validationSchema: SignUpSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();

            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredentials) => {
                console.log(" User created: ", userCredentials.user.values);
                navigate('/');
            })
            .catch((error) => {
                console.error("Error during sign-up: ", error.message)
            });
        }
    });

    console.log(errors);


    return(
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1> SignUp Form </h1>
                    <div className='input-block'>
                        <label htmlFor='email' className="input-label">Email Address</label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email ? (
                        <p className='form-error'>{errors.email}</p>
                    ) : null}
                    </div>
                    
                    <div className='input-block'>
                        <label htmlFor='firstName' className="input-label">First Name</label>
                        <input
                            id='firstName'
                            name='firstName'
                            type='firstName'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />
                        {errors.firstName && touched.firstName ? (
                        <p className='form-error'>{errors.firstName}</p>
                    ) : null}
                    </div>
                    
                    <div className='input-block'>
                        <label htmlFor='lastName' className="input-label">Last Name</label>
                        <input
                            id='lastName'
                            name='lastName'
                            type='lastName'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                        />
                        {errors.lastName && touched.lastName ? (
                        <p className='form-error'>{errors.lastName}</p>
                    ) : null}
                    </div>
                    
                    <div className='input-block'>    
                        <label htmlFor='password' className="input-label">Password</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                       {errors.password && touched.password ? (
                        <p className='form-error'>{errors.password}</p>
                    ) : null}
                    </div>
                    <div className="input-block">
                        <label htmlFor="confirm_password" className="input-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            autoComplete="off"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.confirm_password && touched.confirm_password ? (
                        <p className='form-error'>{errors.confirm_password}</p>
                    ) : null}
                    <div className='modal-buttons'>
                        <button className="input-button" type="submit"> 
                            Submit
                        </button>
                        <div>Already have an account <Link to="/login">Login</Link></div>
                    </div>
                    
                </form>
            </div>
            
        </>
        
    )
}


export default SignupForm