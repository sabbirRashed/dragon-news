"use client"

import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleRegisterForm = (data) => {
        const {name, email, photoURL, password} = data;
        console.log(name, email, photoURL, password);


    }
    // console.log(errors);

    return (
        <div className='container mx-auto min-h-[95vh] flex justify-center items-center'>
            <div className='p-10 rounded-xl bg-white w-sm'>
                <h2 className='font-bold text-xl text-center border-b border-b-base-300 pb-4'>Register Your Account</h2>

                <form onSubmit={handleSubmit(handleRegisterForm)}
                    className='mt-6 space-y-4'>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="url"
                            className="input"
                            placeholder="Enter your photo url"
                            {...register("photoURL", { required: "Photo URL is required" })} />
                        {errors.photoURL && <p className='text-red-500'>{errors.photoURL.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn bg-slate-800 text-base-100 w-full'>Login</button>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;