'use client'
import React, { useEffect, useState } from 'react';
// import jsonData from '../data.json';
import Image from 'next/image';
import Editform from '../editform';

export default function Page() {

  // usestate for the first modal(edit, delete)
  // const [isEdit, setIsEdit] = useState(false) 
  // //usestate for the second modal(editform)
  // const [editInventory, setEditInventory] = useState(false)


  // useEffect(()=>{
  //   setIsEdit(false);
  // },[editInventory]);


  
  // const [records, setRecords] = useState(jsonData);
  const [render, setRender] = useState('all');
  const [isEdit, setIsEdit] = useState(false)
  const [editInventory, setEditInventory] = useState(false);
  // const [tableData, setTableData] = useState([]);
  
  // useEffect(()=>{
    //   const fetchData = async () => {
      //     try{
        //       const response =  await fetch ('../inventory/api/submitForm.js');
        //     const data = await response.json();
        //     setTableData(data);
        //     } catch (error){
          //       console.error('error fetching data:', error)
          //     }
          //   }
          
          //   fetchData();
          // }, []);
          
          // useEffect(() => {
          //   setDomLoaded(true)
          // }, [])
        
          // {domLoaded &&
          //   <DataTable  columns = {column}
          //   data = {records}
          //   pagination = {true}
          //   paginationPerPage = {5}
          //   paginationRowsPerPageOptions = {[5, 10]}
          //   fixedHeader={true}/>
          // }
          
    const showAlerts = () => {
    const newData = records.filter(row => {
      return (row.quantityalert.includes('alerted'));
    })
    let filteredData = newData;
    return filteredData
  }

  // {
  //   render === 'all' ? records
  //   : null
  // }
  
  if (setRender === 'alerted') {
    setRecords(showAlerts)
  }

useEffect(()=>{
  setIsEdit(false);
},[editInventory]);

// {
  //     isEdit ? (
            //       <div className='absolute bg-white shadow-2xl py-3 top-[50%] left-[85%] flex flex-col space-y-2 items-center rounded-md text-black w-[9%] text-sm'>
            //       <div className='flex justify-between items-center gap-4'>
            //       <Image
            //       priority
            //       src='/images/inventory/edit_icon.svg'
            //       alt='edit icon'
            //       width='20'
            //       height='20'/>
            //       <button 
            //       onClick={()=> setEditInventory(true)}>
            //       Edit Item</button>
            //       </div>
            
            //       <div className='flex justify-between items-center gap-2'>
            //       <Image
            //       priority
            //       src='/images/inventory/delete.svg'
            //       alt='delete icon'
            //       width='16'
            //       height='18'/>
            //       <button className='justify-end'>
            //       Delete Item</button>
            //       </div>
            //       </div>
            //     ) : null
            //   }
            
            
            const [rows, setRows] =  useState([]);
            
            useEffect(()=>{
              fetch('http://localhost:3000/data.json')
              .then(response => response.json())
              .then(data => {
                setRows(data)
              })
            }, [])
            

            return (
    <>
      <div className='px-8'>
        <section className='border-2 h-[80vh] border-zinc-400 rounded-2xl mt-10 p-6'>
          <div className='flex items-center justify-between p-3'>
            <ul className='border bg-primary bg-opacity-30 text-white p-2 rounded-full'>
              <div className='flex justify-between space-x-2'>

                <button className={render === 'all' ? 'bg-primary rounded-full px-10 py-3' : 'px-10 py-3'}
                  onClick={() => setRender('all')}>All</button>

                <button className={render === 'alerted' ? 'bg-primary rounded-full px-10 py-3' : 'px-10 py-3'}
                  onClick={() => setRender('alerted')}>
                  Limit alerts
                </button>

              </div>
            </ul>

            <div className='flex justify-between align-center gap-5
    border border-primary rounded-full py-1 px-7 text-primary hover:bg-primary hover:text-white'>
              <Image
                priority
                src='/images/inventory/filter.svg'
                alt='filter icon'
                width='24'
                height='24' />
              <button >
                Filter
              </button>
            </div>
          </div>

          <div>
          <table className='w-full text-center'>
          <thead className='border-b-2 border-b-zinc-300'>
            <tr className='text-xl font-medium space-x-2'>
            <th className='p-3'>ID</th>
            <th>Inventory name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Initial Quantity</th>
            <th>Current Quantity</th>
            <th>Quantity Alert</th>
            <th>Action</th>
            </tr>
          </thead>
        
          <tbody className='font-medium text-lg bg-red-400 mt-6'>
          {rows.map((row, index) => (
              <tr key = {index} className='border-b-2'>
              <td className='p-4'>{row.id}</td>
              <td>{row.inventoryname}</td>
              <td>{row.category}</td>
              <td>{row.brand}</td>
              <td>{row.initialquantity}</td>
              <td>{row.currentquantity}</td>
              <td>{row.quantityalert}</td>
              </tr>
              ))}
            </tbody>
          </table>  
     
          </div>
        </section>
      </div>

     <Editform isVisible={editInventory} onClose={()=> setEditInventory(false)}/>
    </>
  )

}
