// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ selectedGender, handleGenderChange }) => {

  return (
    <div className='flex px-1'>
        <div className='form-control'>
            <label className='label-primary label gap-2 cursor-pointer'>
                <span className='label-text'>Male</span>
                  <input type='checkbox' name='gender' className={`checkbox ${selectedGender === 'male' ? 'checkbox-success' : ''}` } checked={selectedGender === 'male'} onChange={() => handleGenderChange("male")}/>
            </label>
        </div>
        <div className='form-control'>
            <label className='label-primary label gap-2 cursor-pointer'>
                <span className='label-text'>Female</span>
                  <input type='checkbox' name='gender' className={`checkbox ${selectedGender === 'female' ? 'checkbox-success' : ''}` } checked={selectedGender === 'female'} onChange={() => handleGenderChange("female")} />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox