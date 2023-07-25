import { connectToDB } from '../../../utils/database.js';

export const GET = async () => {
  await connectToDB();

  try {
    return new Response('API root endpoint', { status: 200 });
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
};
