import React from 'react'

const MessageInput = () => {
	return (
		<form className='px-4 my-3'>
			<div className='w-full relative'>
				<input type='text' className='border text-sm rounder-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send a message' />
			
				<button className='absolute inset-y-0 end-0 flex items-center pe-3' type='submit'>
					<svg fill="none" viewBox="0 0 15 15" height='1rem'>
						<path
							fill="currentColor"
							d="M14.5.5l.46.197a.5.5 0 00-.657-.657L14.5.5zm-14 6l-.197-.46a.5.5 0 00-.06.889L.5 6.5zm8 8l-.429.257a.5.5 0 00.889-.06L8.5 14.5zM14.303.04l-14 6 .394.92 14-6-.394-.92zM.243 6.93l5 3 .514-.858-5-3-.514.858zM5.07 9.757l3 5 .858-.514-3-5-.858.514zm3.889 4.94l6-14-.92-.394-6 14 .92.394zM14.146.147l-9 9 .708.707 9-9-.708-.708z"
						/>
					</svg>
				</button>
			</div>
		</form>
	)
}

export default MessageInput