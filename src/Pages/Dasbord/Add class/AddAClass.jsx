import React from 'react';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/useAxiousSecure';


const img_hosting_token = import.meta.env.VITE_image_upload_token;
console.log(img_hosting_token);


const AddAClass = () => {

    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data);
        const fromData = new FormData();
        fromData.append('image', data.Image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json())
        .then(imageRes => {
            if(imageRes.success){
                const ImgUrl = imageRes.data.display_url;
                const { Name, Instructor_name, Available_seats, Price} = data;
                const classes = { Name, Instructor_name, Available_seats: parseFloat(Available_seats), Price: parseFloat(Price), Image: ImgUrl}
                console.log(classes);

                axiosSecure.post('/classes', classes)
                .then(data => {
                    console.log('posted');
                })
            }


        })

        
    };
    return (
        <div className='w-full md:ps-10'>
            <h1 className='bg-orange-400 p-4 rounded-sm text-white text-center font-semibold text-2xl mb-5'>Add A class from here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <div className="form-control w-full  mb-5 me-5">
                        <input type="text"
                            {...register("Name", { required: true })}
                            placeholder="Class Name" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full  mb-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Upload Image</span>

                            </label>
                            <input
                                {...register("Image", { required: true })}
                                type="file" className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className="form-control w-full  mb-5 me-5">
                        <input
                            {...register("Instructor_name", { required: true })}
                            type="text" placeholder="Instractor Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full ">
                        <input
                            {...register("instractorEmail", { required: true })}
                            type="text" placeholder="Instarctor email" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className='md:flex'>
                    <div className="form-control w-full max-w-xs mb-5 me-5">
                        <input
                            {...register("Available_seats", { required: true })}
                            type="text" placeholder="availabe Seats" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("Price", { required: true })}
                            type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <input type="submit" className='btn border-none bg-orange-400 font-semibold text-white hover:text-black w-full' />
            </form>
        </div>
    );
};

export default AddAClass;