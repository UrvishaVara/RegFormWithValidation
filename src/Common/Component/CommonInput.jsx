import React from 'react'

const CommonInput = ({ label, type, name, value, onChange }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border bg-transparent mb-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <label className="block text-center text-black ">{label}</label>
        </div>

    )
}

export default CommonInput