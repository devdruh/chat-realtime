import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold'>Sign Up <span className='text-blue-500'>Chat App</span></h1>

                <form className='py-4'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder="" className="input input-sm input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder="" className="input input-sm input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="" className="input input-sm input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder="" className="input input-sm input-bordered w-full max-w-xs" />
                    </div>

                    <GenderCheckbox/>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 max-w-xs'>Sign Up</button>
                    </div>

                    <div className='pt-4'>Already have an account? <a href='#' className='text-sm text-blue-500 hover:text-blue-600 mt-2 inline-block'>Login </a></div>
                </form>
            </div>
        </div>
    )
}

export default Signup