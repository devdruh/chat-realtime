import React from 'react'

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

                    <a href='#' className='text-sm hover:text-blue-600 mt-2 inline-block'>Don't have an account?</a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 max-w-xs'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login