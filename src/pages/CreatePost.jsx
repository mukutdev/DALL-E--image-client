import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import preview from '../assets/preview.png'
import Loader from '../components/Loader';
import { getRandomPrompt } from '../utility';

const CreatePost = () => {

    const navigate = useNavigate()
    const [form , setForm] = useState({
        name:'',
        prompt:'',
        photo : '',
    });
    const [generatingImg , setGeneratingImg] = useState(false)
    const [loading , setLoading] = useState(false)

    const generateImg = async()=>{
        console.log(form.prompt);
        // const requestBody = { prompt: form.prompt };
        if(form.prompt){
            try {
                setGeneratingImg(true)
                const response = await fetch('http://localhost:8080/api/v1/dalle',{
                    method : 'POST',
                    headers :{
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({ prompt: form.prompt} )
                })

                const data = await response.json()
                console.log(data);
                setForm({...form , photo : `data:image/jpeg;base64,${data.photo}`})
                
            } catch (error) {
             alert(error)   
            }
            finally{
                setGeneratingImg(false)
            }
        }else{
            alert('Please enter prompt')
        }

    }

    const handleSubmitForm = ()=>{

    }

    const handleChange = e =>{
        setForm({...form , [e.target.name] : [e.target.value]})

    }
    const handleSurpriseMe = ()=>{

        const randomPrompt = getRandomPrompt()
        setForm({...form , prompt : randomPrompt})

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
                    LabelName="Name"
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
                <div className='relative mt-10 bg-gray-50 border border-gray-300 text-slate-700 rounded-lg text-sm
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

                <div className='mt-5'>
                    <button type='button' onClick={generateImg}
                    className="text-white bg-green-700 text-sm font-medium w-full sm:w-auto rounded-md px-3 py-2 text-center"
                    >
                        {
                            generatingImg ? 'Generating....' : 'Generate'
                        }

                    </button>

                </div>
                <div className='mt-10'>
                    <p className='mt-2 text-slate-500 text-sm'>Once you created you can share it to the community</p>
                </div>
                <button className='mt-3 text-white bg-indigo-700 px-5 py-3 rounded-md w-full sm:w-auto text-center
                text-sm'>
                        {
                            loading ? 'Sharing' : 'Share with community'
                        }
                </button>
            </form>
        </section>
    );
};

export default CreatePost;