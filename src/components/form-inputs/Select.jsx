'use client'
import { ErrorMessage, Field } from 'formik'

export default function Select({name='',label='',children, gap='gap-1',className='pl-2', rounded='', height='h-12'}) {
  return (
    <div className={`flex flex-col ${gap} w-full`}>
        <label htmlFor={name}>{label}</label>
        <Field name={name} as='select' className={`border border-zinc-300 outline-none w-full px-1 ${rounded} ${height} cursor-pointer ${className}`}>
            {children}
        </Field>
        <ErrorMessage name={name}>{err=><div className="text-red-600">{err}</div>}</ErrorMessage>
    </div>
  )
}
