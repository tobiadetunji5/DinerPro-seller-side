import { connectToDB } from "@/../utils/database.js";
import Procurement from "@/../models/procurement.js";

export const POST = async (req, res) => {
  const { itemName, quantity, brand, inventory, recipientEmail, date } =
    await req.json();

  try {
    await connectToDB();
    if (inventory) {
      const newProcurement = new Procurement({
        inventory,
        quantity,
        recipientEmail,
        date,
        status: "Pending",
      });
      await newProcurement.save();
      return new Response(JSON.stringify(newProcurement), { status: 201 });
    } else {
      const newProcurement = new Procurement({
        itemName,
        quantity,
        brand,
        recipientEmail,
        date,
        status: "Pending",
      });
      await newProcurement.save();
      return new Response(JSON.stringify(newProcurement), { status: 201 });
    }
  } catch (error) {
    console.error(error.message);
    return new Response(JSON.stringify("Failed to create procurement"), {
      status: 500,
    });
  }
};
