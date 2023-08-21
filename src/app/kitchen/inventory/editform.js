import React from 'react';
import Image from 'next/image';

export default function Editform({isVisible, onClose}) {
  if(!isVisible) return null;

    return (
      <div className='absolute inset-0 bg-black bg-opacity-25'>
   
      <div className='absolute bg-white left-[23%] top-[18%] flex flex-col rounded-lg space-y-7 px-5 py-6 w-[50%]'>
     
      <div className=' flex items-center justify-between'>
      <p className='text-2xl font-semibold'>Edit Inventory</p>
      <button onClick={onClose}>
      <Image
      priority
      src='/images/inventory/close_icon.svg'
      alt='view icon'
      width='24'
      height='24'/>
      </button>
      </div>
  
      <form className='space-y-4'>
     
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
  
     <div className='flex space-x-5 p-2'>
     <label htmlFor='quantity' className='items-start justify-center p-2'>Quantity:</label>
     <input type='number' name='quantity' placeholder='input number'
     className='border place-items-center font-mono w-[20vw] p-2'/>
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
     <button type='submit' className='bg-primary p-2 w-[15vw] rounded-lg text-white'> Save Edit</button>
     </div>
  
     </form>
      </div>
  
      </div>
  )
}
