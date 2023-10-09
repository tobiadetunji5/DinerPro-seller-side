import React from 'react'
import Image from "next/image";
import Link from "next/link";

const InventoryManagerModal = () => {
  return (
    <div className="absolute top-[15%] border bg-white border-zinc-400 text-black p-3 w-[15%] flex flex-col text-sm space-y-2 items-center rounded-md">
    <div className="flex justify-between items-center gap-5 hover:bg-primary">
      <Image
        priority
        src="/images/inventory/add_symbol.svg"
        alt="create icon"
        width="18"
        height="18"
      />
      <button
        onClick={() => setCreateInventory(true)}
        className="flex space-x-2 justify-between"
      >
        Create Inventory
      </button>
    </div>
    <div className="flex justify-between items-center gap-5 space-x-2">
      <Image
        priority
        src="/images/inventory/minus_symbol.svg"
        alt="view icon"
        width="18"
        height="18"
      />
      <Link href="/kitchen/inventory/table">
        <div>View Inventory</div>
      </Link>
    </div>
  </div>
  )
}

export default InventoryManagerModal