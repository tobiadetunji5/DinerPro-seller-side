import { connectToDB } from '@/../utils/database.js';
import Order from '@/../models/order.js';

// NOTE: This functionality is needed on the buyer side

export const POST = async (req, res) => {
  const { userId, items, totalAmount, orderDate, status } = await req.json();

  try {
    await connectToDB();

    // TODO: Validate the request body against the inventory
    const newOrder = new Order({
      //   customer: userId,
      items,
      totalAmount,
      orderDate,
      status: 'pending',
    });
    await newOrder.save();

    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    console.log(error.message || error.toString());
    return new Response(JSON.stringify('Failed to create a new order'), {
      status: 500,
    });
  }
};
