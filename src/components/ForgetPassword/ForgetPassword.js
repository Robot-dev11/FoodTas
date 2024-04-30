import React from 'react'
import { useFormik } from 'formik'
import { ForgetPasswordSchema } from '../../schemas'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'



const initialValues = {
    email : '',
}

const ForgetPassword = () => {

    const navigate = useNavigate();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema: ForgetPasswordSchema,
        validateOnChange: true,
        validateOnBlur: false,

        onSubmit: (values) => {
            sendPasswordResetEmail(auth, values.email)
                .then((data) => {
                    alert("Check your gmail");
                    navigate("/login")
                })
                .catch((error) => {
                    console.log(error.message);
                    alert("Invalid Email");
                })
        }
    })


    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1> Forget Password </h1>

                    <div className='input-block'>
                        <label htmlFor='email' className='input-label'>
                            Email
                        </label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Email'
                        />
                    </div>
                    {errors.email && touched.email ? (
                        <p className='form-error'>{errors.email}</p>
                    ) : null}
                    <div className="modal-buttons">
                        <button className="input-button" type="submit">
                            Reset
                        </button>
                    </div>

                </form>
            </div>
        
        </>
    )
}

export default ForgetPassword;