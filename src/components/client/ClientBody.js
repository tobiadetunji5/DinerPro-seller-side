import React from 'react'
import Link from 'next/link';

let id = 0;
function createData(date, invoice, currency, amount, status) {
    id += 1;
    return { id, date, invoice, currency, amount, status };
}

// =========table row data=============
const rows = [
    createData('09 Apr 2022', 1174, 'NRA', 736.23, 'Pending'),
    createData('09 Apr 2022', 1174, 'NRA', 736.23, 'Overdue'),
    createData('09 Apr 2022', 1174, 'NRA', 736.23, 'Overdue'),
    createData('09 Apr 2022', 1174, 'NRA', 736.23, 'Paid'),
    createData('09 Apr 2022', 1174, 'NRA', 736.23, 'Paid'),
];

// ==========table 'status' styling==============
const makeStyles = (status) => {
    if (status === 'Pending') {
        return {
            background: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113)-46.42%)",
            color: "rgb(204, 161, 65)",
        }
    } else if (status === 'Overdue') {
        return {
            background: 'rgba(255, 173, 173, 0.56)',
            color: 'red',
        }
    } else {
        return {
            background: 'rgba(145, 254, 159, 0.47)',
            color: "green",
            // padding: '2px 0px 2px 0px',
        }
    }
}

const cards = [
    { title: 'Purchases', quantity: 14 },
    { title: 'Discounts applied', quantity: 1 },
    { title: 'Sales ranking', quantity: 103 },
]

const ClientBody = () => {
    return (
        <section className='text-zinc-600 mr-8 h-[60vh] pb-6'>
            {/* =========cards=========== */}

            <div className='flex items-center justify-evenly'>
                {cards.map((row, ind) => (
                    <div key={ind}
                        className='p-2 border border-zinc-400 rounded-lg flex flex-col items-center justify-around w-[30%] h-[30vh]'>
                        <div className='text-center my-1'>
                            <p className='bg-zinc-300 rounded-[50%] w-[50px] leading-[50px] font-bold text-lg'> {row.quantity} </p>
                        </div>
                        <p className='font-bold text-base'>{row.title}</p>
                    </div>
                ))}

            </div>

            {/* ==========bottom cards============== */}
            <div className=' flex items-center justify-evenly w-full mt-10 gap-5'>

                {/* =========left hand side============= */}
                <div className=' flex border border-zinc-400 h-[35vh] w-[50%] rounded-lg justify-between p-2 ml-6 overflow-auto'>
                            <div className='flex flex-col px-3 space-y-4'>
                                <div className='font-semibold text-left text-xl sticky top-0 bg-white'>Qualifier for loyalty program</div>
                                <div className="py-2 flex gap-3 font-semibold justify-start text-lg">
                                    <img src="/images/client/star.svg" alt='star picture' />
                                    <p>Number of purchases</p>
                                </div>
                                <div className="py-2 text-left flex gap-3 font-semibold text-lg justify-start">
                                    <img src="/images/client/star.svg" alt='star picture' />
                                    <p>Value of purchases</p>
                                </div>
                                <div className="py-2 text-left flex gap-3 font-semibold text-lg justify-start">
                                    <img src="/images/client/star.svg" alt='star picture' />
                                    <p>Frequency of purchases</p> 
                                </div>
                                <div className="py-2 text-left flex gap-3 font-semibold text-lg justify-start">
                                    <img src="/images/client/star.svg" alt='star picture' />
                                    <p>Frequency of purchases</p> 
                                </div>
                                <div className="py-2 text-left flex gap-3 font-semibold text-lg justify-start">
                                    <img src="/images/client/star.svg" alt='star picture' />
                                    <p>Frequency of purchases</p> 
                                </div>
                                <div className="py-2 text-left flex gap-3 font-semibold text-lg justify-start">
                                    <img src="/images/client/star.svg" alt='star picture' />
                                    <p>Frequency of purchases</p> 
                                </div>
                            </div>

                            <div className='flex flex-col space-y-4 px-3 text-left font-semibold '>
                                <div className='text-primary underline text-xl tracking-wide sticky top-0 bg-white'>Changes</div>
                                <div className="py-2 text-lg items-start ">12</div>
                                <div className="py-2 text-lg items-start"> 25,000.00</div>
                                <div className="py-2 text-lg items-start"> Semi-annually</div>
                                <div className="py-2 text-lg items-start"> Semi-annually</div>
                                <div className="py-2 text-lg items-start"> Semi-annually</div>
                                <div className="py-2 text-lg items-start"> Semi-annually</div>
                            </div>               
                </div>

                {/* ========= mini table ========== */}
                <div className='border border-zinc-400 space-y-5 h-[35vh] w-[50%] rounded-lg text-zinc-500 overflow-auto'>

                    <div className='flex justify-between items-center gap-5 font-semibold px-3 py-2 sticky top-0 bg-white'>
                        <h2 className=' text-2xl'>Recent Activity</h2>

                        <Link href='/kitchen/client/recent_activity'>
                            <p className='text-primary underline text-lg'>View all</p>
                        </Link>
                    </div>

                    <div>
                    <table className='bg-white w-full mx-2'>
                        <thead className='w-full sticky top-0'>
                            <tr className=''>
                                <th className="text-left p-1">Date</th>
                                <th className="text-left p-2">Invoice #</th>
                                <th className="text-left p-2">Currency</th>
                                <th className="text-left p-2">Amount</th>
                                <th className="text-left p-2">Status</th>
                                <th className="text-left p-2"></th>
                            </tr>
                        </thead>
                        <tbody className='overflow-auto'>
                            {rows.map(row => (
                                <tr key={row.id}>
                                    <td component="th" scope="row" className="text-left">
                                        {row.date}
                                    </td>
                                    <td className="text-left p-2">{row.invoice}</td>
                                    <td className="text-left p-2">{row.currency}</td>
                                    <td className="text-left p-2">{row.amount}</td>
                                    <td className="text-left">
                                        <span style={makeStyles(row.status)} className='rounded-md px-2 py-1'>{row.status}</span></td>
                                    <td className="text-left ">
                                        <img src='/images/client/arrow.svg' alt=''/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default ClientBody