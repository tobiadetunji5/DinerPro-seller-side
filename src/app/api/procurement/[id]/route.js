import { connectToDB } from '@/../utils/database';
import Procurement from '@/../models/procurement';


export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const procurement = await Procurement.findById(params.id);
    if (!procurement) {
      return new Response(JSON.stringify('Not found'), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(procurement), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to get this procurement'), {
      status: 500,
    });
  }
};


export const PATCH = async (req, { params }) => {
  const { itemName, quantity, brand, inventory, recipientEmail, date } = await req.json();
  try {
    await connectToDB();

    const procurementExists = await Procurement.findById(params.id);
    if (!procurementExists) {
      return new Response('Not found', { status: 404 });
    }

    procurementExists.itemName = itemName || procurementExists.itemName;
    procurementExists.quantity = quantity || procurementExists.quantity;
    procurementExists.brand = brand || procurementExists.brand;
    procurementExists.recipientEmail = recipientEmail || procurementExists.recipientEmail;
    procurementExists.inventory = inventory || procurementExists.inventory;
    procurementExists.date = date || procurementExists.date;

    await procurementExists.save();
    return new Response(JSON.stringify(procurementExists), { status: 200 });
  } catch (error) {
    return new Response('Procurement update failed', { status: 500 });
  }
};


export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    const procurement = await Procurement.findById(params.id);
    if (!procurement) {
      return new Response('Not found', { status: 404 });
    }
    await Procurement.findByIdAndRemove(params.id);
    return new Response('Successfully deleted', { status: 200 });
  } catch (error) {
    return new Response('Failed to delete procurement', { status: 500 });
  }
};
