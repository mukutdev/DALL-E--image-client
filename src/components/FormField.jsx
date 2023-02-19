import React from 'react';

const FormField = ({LabelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label
                htmlFor={name}
                className="block text-sm font-medium text-slate-700"
                >
                        {LabelName}
                </label>
                {
                    isSurpriseMe && (
                        <button type='button' onClick={handleSurpriseMe}
                        className="font-semibold text-xs bg-slate-200 py-1 px-2 rounded text-slate-600"
                        >Surprise me</button>
                    )
                }
            </div>
            <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            required
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-lg
             outline-none w-full p-3 focus:ring-indigo-700 focus:border-indigo-700"
            
            />
            

        </div>
    );
};

export default FormField;