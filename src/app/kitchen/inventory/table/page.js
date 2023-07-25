'use client'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import jsonData from '../data.json';

export default function Page() {

  const columns = [
      {
        name: 'ID',
        selector: row => row.id
      },
      {
        name: 'Inventory name',
        selector: row => row.inventoryname
      },
      {
        name: 'Category',
        selector: row => row.category
      },
      {
        name: 'Brand',
        selector: row => row.brand
      },
      {
        name: 'Initial quantity',
        selector: row => row.initialquantity
      },
      {
        name: 'Current quantity',
        selector: row => row.currentquantity
      },
      {
        name: 'Quantity alert',
        selector: row => row.quantityalert
      },
      {
        name:' ',
        
      }
    ]
  
const [domLoaded, setDomLoaded] =  useState(false);
const [records, setRecords] = useState(jsonData);
const [render, setRender] = useState('all');
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

const showAlerts = () => {
  const newData = records.filter(row => {
      return(row.quantityalert.includes('alerted'));
    })
 let filteredData = newData;
 return filteredData
}

{
  render ==='all' ? records
  : null
}

useEffect(()=> {
  setDomLoaded(true)
},[domLoaded])

if (setRender === 'alerted'){
  setRecords(showAlerts)
}

  return (
    <div className='px-8 h-max'>
    <section className='border-2 border-zinc-400 rounded-2xl mt-10 p-6'>
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
  
    <button className='border border-primary rounded-full py-1 px-7 text-primary'>
    Filter
    </button>
  
    </div>
    <div>
    {domLoaded && 
      <DataTable columns={columns} data={records} pagination={true} paginationPerPage={5}
      paginationRowsPerPageOptions={[5,10]}
      sortable={true}
      fixedHeader
      className=''>
      </DataTable>
    }
  </div>
  </section>
  
  </div>
  )
  
}

{/*
    <table>
    <thead>
    <tr>
    <th>First Name</th>
    <th>Last Name</th>
    </tr>
    </thead>

    <tbody>
    {tableData.map((data, index) => (
      <tr key = {index}>
      <td>{data.name}</td>
      <td>{data.category}</td>
      </tr>
    ))}
    </tbody>
    </table>  
    */ }