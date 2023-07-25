// CRUD operations for a particular order

export const GET = () => {
  try {
    return new Response('GET order by id', { status: 200 });
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
};

export const PATCH = () => {
  try {
    return new Response('UPDATE order by id', { status: 200 });
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
};

export const DELETE = () => {
  try {
    return new Response('DELETE order by id', { status: 200 });
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
};
