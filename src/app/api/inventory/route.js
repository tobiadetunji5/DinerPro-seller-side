import { connectToDB } from '@/../utils/database.js';
import Inventory from '@/../models/inventory.js';

export const GET = async () => {
  try {
    await connectToDB();

    const inventories = await Inventory.find({});
    return new Response(JSON.stringify(inventories), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch inventories'), {
      status: 500,
    });
  }
};
