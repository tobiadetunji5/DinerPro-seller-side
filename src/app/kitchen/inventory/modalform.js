import React, { useState } from 'react';

export default function Modalform({isVisible, onClose}) {
  if(!isVisible) return null;

//   const [formData, setFormData] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('step 1 done')
//   try{
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body:JSON.stringify(formData),
//     })
//     console.log(`step 3 : ${body}`);
//     console.log(`step 2 : ${formData}`);

//     const data = await response.json();
//     console.log(`i am ${data}`);
//   }catch (error){
//     console.error('error submitting form:', error)
//   }
// }

// const handleChange = (e) => {
//   setFormData ({...formData, [e.target.name]: e.target.value});
// }

// const formEl = document.getElementsByTagName('form');
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData(formEl);
//     const data = Object.fromEntries(form);

//     fetch ('https://jsonplaceholder.typicode.com/users',{
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//     .then (data => console.log(data))
//     .then(error => console.log(error));
// }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25'>
   
    <div className='absolute bg-white left-[23%] top-[18%] flex flex-col rounded-lg space-y-7 px-5 py-6'>
   
    <div className=' flex items-center justify-between'>
    <p className='text-2xl font-semibold'> Add Inventory</p>
    <button onClick={onClose}>
    X
    </button>
    </div>

    <form onSubmit={handleSubmit} className='space-y-4'>
   
    <div className='flex space-x-5 p-2'>
   <label htmlFor='name' className='items-start justify-center p-2'>Item name:</label>
   <input type='text' name='name' id='name' placeholder='input type name'
   className='border place-items-center font-mono w-[20vw] p-2'/>
   </div>

   <div className='flex space-x- p-2'>
   <label htmlFor='category' className='items-start justify-center p-2'>Category:</label>
   <select name="category" id='category'
   className='border place-items-center font-mono w-[20vw] p-2 ml-4 block'>
   <option defaultValue='select category'>select category</option>
   <option value="drink">Drink</option>
   <option value="grain">Grain</option>
   <option value="tubers">Tubers</option>
   <option value="spice">Spice</option>
   </select>
   </div>

   <div className='flex space-x-10 p-2'>
   <label htmlFor='brand' className='items-start justify-center p-2'>Brand:</label>
   <input type='text' name='brand' placeholder='input brand name'
  
   className='border place-items-center font-mono w-[20vw] p-2'/>
   </div>

   <div className='flex justify-between space-x-5 p-2'>
   <label htmlFor='quantity' className='items-start justify-center p-2'>Quantity:</label>
   <input type='number' name='quantity' placeholder='input number'
   className='border items-end font-mono w-[20vw] p-2'/>
   <select name="quantity" className='border font-mono w-[20vw] p-2 block'>
   <option defaultValue='select unit'>select unit</option>
   <option value="drink">Litres</option>
   <option value="grain">Bags</option>
   <option value="tins">Tins</option>
   </select>
   </div>

   <div className='flex space-x-5 p-2'>
   <label htmlFor='price' className='items-start justify-center p-2'>Price:</label>
   <input type='text' name='price' placeholder='input amount'
   className='border place-items-center font-mono w-[20vw] p-2 '/>
   </div>

   <div className='space-x-2'>
   <input type='checkbox' name='checkbox' className='p-1'/>
   <label htmlFor='checkbox' className='text-lg font-bold'>Set minimum inventory alert notification
   </label>
   </div>

   <div className='flex justify-center items-center'>
   <button type='submit' className='bg-primary p-2 w-[15vw] rounded-lg text-white'> Add Inventory</button>
   </div>

   </form>
    </div>

    </div>
  )
}
