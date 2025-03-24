import React from 'react'

const SelectInput = ({label, name, value, onChange ,options}) => {
    return (
        <div>

            <div className="mb-4">
                <label className="block text-gray-600">{label}</label>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SelectInput