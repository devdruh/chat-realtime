import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex px-1'>
        <div className='form-control'>
            <label className='label-primary label gap-2 cursor-pointer'>
                <span className='label-text'>Male</span>
                <input type='radio' name='gender' className='radio'/>
            </label>
        </div>
        <div className='form-control'>
            <label className='label-primary label gap-2 cursor-pointer'>
                <span className='label-text'>Female</span>
                <input type='radio' name='gender' className='radio'/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox