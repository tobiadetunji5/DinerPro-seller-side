import { connectToDB } from '@/../utils/database.js';
import Procurement from '@/../models/procurement';

export const GET = async () => {
  try {
    await connectToDB();
    const procurements = await Procurement.find({});
    return new Response(JSON.stringify(procurements), { status: 200 });
  } catch (error) {
    return new Response(
        JSON.stringify('Failed to fetch procurements'), {
        status: 500,
    });
  }
};