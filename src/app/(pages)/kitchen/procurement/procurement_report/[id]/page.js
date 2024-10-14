<<<<<<< HEAD
"use client";
import ProcurementReport from "@/app/components/kitchen/procurement/ProcurementReport";
=======
import ProcurementReport from "@/components/kitchen/procurement/ProcurementReport";
>>>>>>> Adedoyin
import React from "react";

export default function page(props) {
  console.log("Here");
  console.log("Props", props);
  const id = props.params.id ? props.params.id : null;
  console.log("Id", id);
  return (
    <div>
      <ProcurementReport id={id} />
    </div>
  );
}
