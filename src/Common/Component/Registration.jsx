import React, { use, useState } from 'react'
import CommonInput from './CommonInput'

const Registration = () => {

    const [firstName, setFirstName] = useState()
    const [middleName, setMiddleName] = useState()
    const [lastName, setLastName] = useState()

    const handleChange = () => {

    }

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-2xl font-bold text-center mb-1'>Registration Form</div>
                <div className='text-xl text-center mb-1 text-gray-600'>Fill out the form carefully for registration</div>
                <div>
                    <div className='text-xl text-center mb-1'>Student Name*</div>
                    {/* StudentName */}
                    <div className='flex gap-3'>

                        <CommonInput
                            label="First Name"
                            type="text"
                            name="firstname"
                            value={firstName}
                            onChange={handleChange}/>

                        <CommonInput
                            type="text"
                            name="middlename"
                            value={middleName}
                            onChange={handleChange}
                            label="Middle Name" />

                        <CommonInput
                            type="text"
                            name="lastname"
                            value={lastName}
                            onChange={handleChange}
                            label="Last Name" />

                    </div>
                    {/* \\Birthdate and Gender */}

                </div>
            </div>
        </div>
    )
}

export default Registration