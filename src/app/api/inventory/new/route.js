import { connectToDB } from '@/../utils/database.js';
import Inventory from '@/../models/inventory.js';

// TODO: Implement security measures to prevent unauthorized access

export const POST = async (req, res) => {
  const { itemName, quantity, price } = await req.json();

  try {
    await connectToDB();

    const newInventory = new Inventory({
      itemName,
      quantity,
      price,
    });
    await newInventory.save();

    return new Response(JSON.stringify(newInventory), { status: 201 });
  } catch (error) {
    console.log(error.message || error.toString());
    return new Response(JSON.stringify('Failed to create a new inventory'), {
      status: 500,
    });
  }
};
