import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://tour-guide-serve.herokuapp.com/services',data)
    .then(res=>{
        console.log(res.data);
        if (res.data.insertedId){
            alert("data adeded")
            reset()
        }
        console.log(res);
    });
  }
    return (
        <div>
            <h1 className='d-flex justify-content-center'>Add Packege</h1>
            <form className=' my-5' style={{marginLeft:'40%'}} onSubmit={handleSubmit(onSubmit)}>
                <input className='py-2 my-2 px-4' {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" /> <br />
                <input className='py-2 my-2 px-4' {...register("description")} placeholder="Description" /> <br />
                <input className='py-2 my-2 px-4' type="number" {...register("price")} placeholder="price" /> <br />
                <input className='py-2 my-2 px-4' {...register("img")} placeholder="image url" /> <br />
                <input className='py-2 my-2 px-4' type="submit" />
            </form>
        </div>
    );
};

export default AddService;