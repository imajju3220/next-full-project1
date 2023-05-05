import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'register',
    description: 'this is user register',
}

const Register = () => {
    return (
        <div className='col-sm-4 offset-sm-4 my-5 text-center'>
            <input type='email' className='form-control mb-3' placeholder='enter email' />
            <input type='text' className='form-control mb-3' placeholder='enter name' />
            <input type='password' className='form-control mb-3' placeholder='enter password' />
            <button type='submit' className='btn btn-dark'>sign up</button>
            <p>OR</p>
            <Link href={"/login"}>login</Link>
        </div>
    )
}

export default Register
