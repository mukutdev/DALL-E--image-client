import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import preview from '../assets/preview.png'
import Loader from '../components/Loader';

const CreatePost = () => {

    const navigate = useNavigate()
    const [form , setForm] = useState({
        name:'',
        prompt:'',
        photo : '',
    });
    const [generatingImg , setGeneratingImg] = useState(false)
    const [loading , setLoading] = useState(false)


    const handleSubmitForm = ()=>{

    }

    const handleChange = e =>{

    }
    const handleSurpriseMe = ()=>{

    }

    return (
        <section>
             <div>
                <h1 className='font-extrabold text-slate-800 text-3xl'>This Community Showcase</h1>
                <p className='mt-2 text-gray-500 text-base mx-w-[500px]'>Create imaginative and visually stunning images through by DALL-E AI and share the community</p>
            </div>

            <form className='mt-16 max-w-3xl' onSubmit={handleSubmitForm}>
                <div className='flex flex-col gap-5'>
                    <FormField
                    LabelName="Prompt"
                    type="text"
                    name="name"
                    placeholder="Mukut"
                    value={form.name}
                    handleChange={handleChange}
                    />
                    <FormField
                    LabelName="Prompt"
                    type="text"
                    name="prompt"
                    placeholder="A Samurai riding a Horse on Mars, lomography."
                    value={form.prompt}
                    handleChange={handleChange}
                    isSurpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                    />
                </div>
                <div className='relative bg-gray-50 border border-gray-300 text-slate-700 rounded-lg text-sm
                focus:ring-indigo-700 focus:border-indigo-700 w-64 p-3 h-64 flex justify-center items-center'>
                    {
                    form.photo ?(
                           <img src={form.photo} alt={form.prompt} className="w-full h-full object-contain" />
                                 
                    ) : (
                        <img src={preview} alt="preview"  className='w-9/12 h-9/12 object-contain opacity-40'/>
                    )}
                    {
                        generatingImg && (
                            <div className='absolute inset-0 z-0 flex
                             justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                                <Loader/>
                            </div>
                        )
                    }
                </div>
            </form>
        </section>
    );
};

export default CreatePost;