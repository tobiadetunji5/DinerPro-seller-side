export const POST = () => {
  try {
    return new Response('CREATE new order', { status: 200 });
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
};
