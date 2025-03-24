import React, { use, useState } from 'react'
import CommonInput from './CommonInput'
import SelectInput from './SelectInput'

const Registration = () => {

    const [formData, setformData] = useState({})
    const [errors, setErrors] = useState({})

    const handleSubmit = () => {
        let localErrors = {};
        if (!formData.firstName) {
            localErrors = { ...localErrors, firstName: "please enter your FirstName" }
        }
        if (!formData.middleName) {
            localErrors = { ...localErrors, middleName: "please enter your MiddleName" }
        }
        if (!formData.lastName) {
            localErrors = { ...localErrors, lastName: "please enter your LastName" }
        }

        setErrors(localErrors);

    }


    const handleChange = (event) => {
        const inptVal = event.target.value;
        const inptName = event.target.name;

        if (inptVal === '') {
            setErrors({ ...errors, [inptName]: `enter your ${inptName}` })
        }
        else {
            setErrors({ ...errors, [inptName]: '' })
        }

        setformData({ ...formData, [inptName]: inptVal })
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
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            errors={errors}
                            label="First Name" />

                        <CommonInput
                            type="text"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            errors={errors}
                            label="Middle Name" />

                        <CommonInput
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            errors={errors}
                            label="Last Name" />

                    </div>
                    {/* //gender */}

                    <div className='text-xl text-center mb-2'>Gender*</div>
                    <SelectInput
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        options={["Male", "Female", "Other"]} />


                    {/* <button className='border border-black py-2 px-4 my-2 rounded-lg' type="submit" onClick={handleSubmit}>Submit</button> */}

                </div>
            </div>
        </div>
    )
}

export default Registration