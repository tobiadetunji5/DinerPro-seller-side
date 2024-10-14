import React from 'react'
import Image from "next/image";
import Link from "next/link";

const ClientMngModal = () => {
  return (
    <div className="absolute top-[73%] right-[0%] border bg-white border-zinc-400 text-black p-2 w-[20%] flex flex-col text-sm space-y-2 items-center rounded-md z-10">
    <div className="flex justify-between items-center gap-5 hover:bg-primary">
      <Image
        priority
        src="/images/inventory/add_symbol.svg"
        alt="create icon"
        width="18"
        height="18"
      />
      <button
        // onClick={() => setCreateInventory(true)}
        className="flex space-x-2 justify-between"
      >
    Add New Clients
      </button>
    </div>
    <div className="flex justify-between items-center gap-5 space-x-2">
      <Image
        priority
        src="/images/inventory/minus_symbol.svg"
        alt="view icon"
        width="18"
        height="18" />
      <Link href="/kitchen/client/view_clients_table">
        <div>View Clients</div>
      </Link>
    </div>
  </div>
  )
}

export default ClientMngModal;