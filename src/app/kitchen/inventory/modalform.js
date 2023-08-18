import React, { useState } from 'react';
import Image from 'next/image';

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

//     const data = {
//       first: e.target.first.value,
//       last: e.target.last.value,
//     }

//     fetch ('https://localhost:3000/api',{
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//     .then (data => console.log(data))
//     .then(error => console.log(error));
//}

// const handleSubmit = async (event) => {
//   // Stop the form from submitting and refreshing the page.
//   event.preventDefault()

//   // Get data from the form.
//   const data = {
//     first: event.target.itemName.value,
//     last: event.target.quantity.value,
//   }

//   // Send the data to the server in JSON format.
//   const JSONdata = JSON.stringify(data)

//   // API endpoint where we send form data.
//   const endpoint = '/api/inventory/new'

//   // Form the request for sending data to the server.
//   const options = {
//     // The method is POST because we are sending data.
//     method: 'POST',
//     // Tell the server we're sending JSON.
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // Body of the request is the JSON data we created above.
//     body: JSONdata,
//   }

//   // Send the form data to our forms API on Vercel and get a response.
//   const response = await fetch(endpoint, options)
//   console.log(`this is response: ${response}`)

//   // Get the response data from server as JSON.
//   // If server returns the name submitted, that means the form works.
//   const result = await response.json()
//   console.log(`this is result: ${result}`)
//   console.log(`Is this your full name: ${result.data}`)
// }

  return (
    <div className='absolute inset-0 bg-black bg-opacity-25'>
   
    <div className='absolute bg-white left-[23%] top-[18%] flex flex-col rounded-lg space-y-7 px-5 py-6'>
   
    <div className=' flex items-center justify-between'>
    <p className='text-2xl font-semibold'> Add Inventory</p>
    <button onClick={onClose}>
    <Image
    priority
    src='/images/inventory/close_icon.svg'
    alt='view icon'
    width='24'
    height='24'/>
    </button>
    </div>

    <form  className='space-y-4'>
   
    <div className='flex space-x-1 p-2'>
   <label htmlFor='name' className='items-start justify-center p-2'>Item name:</label>
   <input type='text' name='itemName' id='itemName' placeholder='input type name'
   className='border place-items-center font-mono w-[20vw] p-2'/>
   </div>

   <div className='flex space-x-4 p-2'>
   <label htmlFor='category' className='items-start justify-center p-2'>Category:</label>
   <select name="category" id='category'
   className='border place-items-center font-mono w-[20vw] p-2 ml-4 block bg-white focus:ring-primary focus:border-primary'>
   <option defaultValue='select category'>select category</option>
   <option value="grocery">Groceries and seasonings</option>
   <option value="flour">Flour based supplies</option>
   <option value="grain">Grain food</option>
   <option value="vegetables">Vegetables</option>
   <option value="fruit">Fruits</option>
   <option value="meat">Meat and chicken</option>
   <option value="tuber">Tubers</option>
   <option value="dairy">Dairy products</option>
   <option value="egg">Egg</option>
   <option value="oil">Oils</option>
   <option value="cereal">Cereals</option>
   <option value="fish">Fish</option>
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
   <select name="quantity" className='border font-mono w-[20vw] p-2 block' data-dropdown-toggle="dropdown">
   <option defaultValue='select unit'>select unit</option>
   <option value="litre">Litres(l)</option>
   <option value="grams">Gram(g)</option>
   <option value="kilo">Kilograms(kg)</option>
   <option value="sachet">Sachets)</option>
   <option value="pound">Pound(9libs)</option>
   <option value='tuber'>Tubers</option>
   <option value="ounz">Ounze(oz)</option>
   <option value="tonne">Tonne</option>
   <option value="cups">Cup</option>
   <option value="basket">Basket</option>
   </select>
   </div>

   <div className='flex space-x-11 p-2'>
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
