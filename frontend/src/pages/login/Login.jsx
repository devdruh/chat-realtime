import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold'>Login <span className='text-blue-500'>Chat App</span></h1>

                <form className='py-4'>
                    <div className='py-2'>
                        <input type="text" placeholder="Username" className="input input-sm input-bordered w-full max-w-xs" />
                    </div>
                    <div className='py-2'>
                        <input type="password" placeholder="Password" className="input input-sm input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <button className='btn btn-md btn-block btn-primary mt-5 max-w-xs'>Login</button>
                    </div>

                    <div className='mt-4'>Don't have an account? <Link to='/signup' className='text-sm text-blue-500 hover:text-blue-600 inline-block'>Sign Up </Link></div>
                </form>
            </div>
        </div>
    )
}

export default Login