"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleRegisterForm = async (data) => {
        const { name, email, photoURL, password } = data;

        const { data: serverData, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photoURL,
        })

        
        if (serverData) {
            toast.success("SignUp successfully", {
                autoClose: 2000
            })

            router.push('/')
        }
        else {
            toast.error(error.message, {
                autoClose: 2000
            })
        }

    }
    // console.log(errors);



    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
            <div className='p-8 md:p-10  rounded-xl bg-white  w-sm mx-4'>
                <h2 className='font-bold text-xl text-center border-b border-b-base-300 pb-4'>Register your account</h2>

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

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input "
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })} />
                        {
                            isShowPassword ? <FaEye
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className='absolute top-4.5 right-3 cursor-pointer'></FaEye> 
                                :
                                <FaEyeSlash 
                                onClick={( )=> setIsShowPassword(!isShowPassword)}
                                className="absolute top-4.5 right-3 cursor-pointer"/>
                        }
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn bg-slate-800 text-base-100 w-full'>Register</button>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;