import React from 'react'

export default function Editform() {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25'>
   
    <div className='absolute bg-white left-[23%] top-[18%] flex flex-col rounded-lg space-y-7 px-5 py-6'>
   
    <div className=' flex items-center justify-between'>
    <p className='text-2xl font-semibold'> Add Inventory</p>
    <button>
    X
    </button>
    </div>

    <form method='POST' action='?' className='space-y-4'>
   
    <div className='flex space-x-5 p-2'>
   <label for='name' className='items-start justify-center p-2'>Item name:</label>
   <input type='text' name='name' placeholder='input type name'
   className='border place-items-center font-mono w-[20vw] p-2'/>
   </div>

   <div className='flex space-x- p-2'>
   <label for='category' className='items-start justify-center p-2'>Category:</label>
   <select name="category" className='border place-items-center font-mono w-[20vw] p-2 ml-4 block'>
   <option selected>select category</option>
   <option value="drink">Drink</option>
   <option value="grain">Grain</option>
   <option value="tubers">Tubers</option>
   <option value="spice">Spice</option>
   </select>
   </div>

   <div className='flex space-x-10 p-2'>
   <label for='brand' className='items-start justify-center p-2'>Brand:</label>
   <input type='text' name='brand' placeholder='input brand name'
   className='border place-items-center font-mono w-[20vw] p-2'/>
   </div>

   <div className='flex justify-between space-x-5 p-2'>
   <label for='quantity' className='items-start justify-center p-2'>Quantity:</label>
   <input type='text' name='quantity' placeholder='input number'
   className='border items-end font-mono w-[20vw] p-2'/>
   <select name="quantity" className='border font-mono w-[20vw] p-2 block'>
   <option selected>select unit</option>
   <option value="drink">Litres</option>
   <option value="grain">Bags</option>
   <option value="tins">Tins</option>
   </select>
   </div>

   <div className='flex space-x-5 p-2'>
   <label className='items-start justify-center p-2'>Price:</label>
   <input type='text' name='Item name' placeholder='input amount'
   className='border place-items-center font-mono w-[20vw] p-2 '/>
   </div>

   <div className='space-x-2'>
   <input type='checkbox' name='Item name' className='p-1'/>
   <label className='text-lg font-bold'>Set minimum inventory alert notification
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
