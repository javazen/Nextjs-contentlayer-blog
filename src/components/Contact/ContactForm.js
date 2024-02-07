"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form 
    onSubmit={handleSubmit(onSubmit)} 
    className='mt-12 text-xl font-medium leading-relaxed font-in'
    >
      Hello! My name is {" "}
      <input 
      type="text" 
      placeholder="your name" 
      {...register("name", {required: true, maxLength:80})} 
      className='outline-none border-0 p-0 mx-2 focus:ring-0 border-gray bg-transparent placeholder:text-center text-lg border-b border-r-gray'
      />
      and I want to discuss a potential project. You can email me at
      <input 
      type="email" 
      placeholder="your@email" 
      className='outline-none border-0 p-0 mx-2 focus:ring-0 border-gray bg-transparent placeholder:text-center text-lg border-b border-r-gray'
      {...register("email", {required: true, pattern: /^\S+@\S+$/i})} 
      />
      or reach out to me at
      <input 
      type="tel" 
      placeholder="your phone" 
      className='outline-none border-0 p-0 mx-2 focus:ring-0 border-gray bg-transparent placeholder:text-center text-lg border-b border-r-gray'
      {...register("phone", {})} 
      />
      Here are some details about my project: <br />
      <textarea 
      placeholder="My project is about..." 
      rows={3}
      className='w-full outline-none border-0 p-0 mx-2 focus:ring-0 border-gray bg-transparent placeholder:text-lg border-b border-r-gray'
      {...register("project details", {})} 
      />

      <input type="submit" value="Send Request" className='mt-8 font-medium inline-block capitalize text-xl py-3 px-8 
      border-2 border-solid border-dark rounded cursor-pointer'/>
    </form>
  );
}