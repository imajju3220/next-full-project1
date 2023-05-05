import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: 'login',
    description: 'this is user login',
}

const Login = () => {
    return (
        <div className='col-sm-4 offset-sm-4 my-5 text-center'>
            <input type='email' className='form-control mb-3' placeholder='enter email' />
            <input type='password' className='form-control mb-3' placeholder='enter password' />
            <button type='submit' className='btn btn-dark'>login now</button>
            <p>OR</p>
            <Link href={"/register"}>New User</Link>
        </div>
    )
};

export default Login
