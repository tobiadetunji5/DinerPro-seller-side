import { connectToDB } from '@/../utils/database.js';
import Order from '@/../models/order.js';

export const GET = async () => {
  try {
    await connectToDB();

    // const orders = await Order.find({}).populate('creator');
    const orders = await Order.find({});
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch orders'), {
      status: 500,
    });
  }
};
