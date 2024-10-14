'use client'
import { ErrorMessage, Field } from "formik";

export default function Input_Text({label='', type='text', placeholder='', name='', className='placeholder:pl-2', gap='gap-4', height='h-12', rounded=''}) {
  return (
    <div className={`flex flex-col ${gap} w-full justify-center`}>
        <label htmlFor={name}>{label}</label>
        <Field type={type} placeholder={placeholder} name={name} className={`border border-zinc-300 outline-none w-full ${height} ${rounded} px-1 ${className}`}/>
        <ErrorMessage name={name}>{err=><div className="text-red-600">{err}</div>}</ErrorMessage>
    </div>
  )
}
