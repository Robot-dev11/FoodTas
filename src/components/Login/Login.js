import React from 'react';
import './Login.css';
import { LoginSchema } from '../../schemas/index';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';



const initialValues = {
    email: '',
    password: '',
}

const Login = () => {

    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        validateOnChange: true,
        validateOnBlur: false,

        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();

            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredentials) => {
                    console.log(userCredentials.user.values);
                    navigate('/')
                })
                .catch((error) => {
                    console.log(error.message);
                    alert("Invalid email and password");
                });
        }
    });
    console.log(errors);

    const handleReset = () => {
        navigate('/reset');
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1> Sign In </h1>

                    <div className="input-block">
                        <label htmlFor="email" className="input-label">
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched.email ? (
                        <p className='form-error'>{errors.email}</p>
                    ) : null}


                    <div className='input-block'>
                        <label htmlFor='password' className='input-label'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                            autoComplete='off'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.password && touched.password ? (
                        <p className='form-error'>{errors.password}</p>
                    ) : null}
                    <p onClick={handleReset} style={{color: 'blue', cursor: 'pointer'}}>Forget Password ?</p>
                    <div className='modal-button'>
                        <button className='input-button' type='submit'>
                            Login
                        </button>
                        <div>Create a new Account <Link to="/signup">Register</Link></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login