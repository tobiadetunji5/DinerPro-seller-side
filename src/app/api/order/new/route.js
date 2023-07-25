import { connectToDB } from '@/../utils/database.js';
import Order from '@/../models/order.js';

export const POST = async (req, res) => {
  const { userId, orderId, items, totalAmount, orderDate, status } =
    await req.json();

  try {
    await connectToDB();

    console.log(req.json());
    const newOrder = new Order({
      //   customer: userId,
      orderId,
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
