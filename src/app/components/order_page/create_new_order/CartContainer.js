import React from "react";

export default function CartContainer() {
  return (
    <div className="w-[500px] border border-[#FFA902] rounded-lg h-[829px] p-5 overflow-y-auto flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">My Orders</h1>
      <div>
        <ul className="flex items-center justify-between space-x-4">
          <li>Items</li>
          <li>Qty</li>
          <li>Amount</li>
        </ul>
        <hr className="border-[#ccc] mt-3" />
      </div>
    </div>
  );
}
