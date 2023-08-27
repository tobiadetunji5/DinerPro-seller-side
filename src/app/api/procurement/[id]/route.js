<<<<<<< HEAD
import { connectToDB } from "@/../utils/database";
import Procurement from "@/../models/procurement";
=======
import { connectToDB } from '@/../utils/database';
import Procurement from '@/../models/procurement';

>>>>>>> master

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const procurement = await Procurement.findById(params.id);
    if (!procurement) {
<<<<<<< HEAD
      return new Response(JSON.stringify("Not found"), {
=======
      return new Response(JSON.stringify('Not found'), {
>>>>>>> master
        status: 404,
      });
    }
    return new Response(JSON.stringify(procurement), { status: 200 });
  } catch (error) {
<<<<<<< HEAD
    return new Response(JSON.stringify("Failed to get this procurement"), {
=======
    return new Response(JSON.stringify('Failed to get this procurement'), {
>>>>>>> master
      status: 500,
    });
  }
};

<<<<<<< HEAD
export const PATCH = async (req, { params }) => {
  const { itemName, quantity, brand, inventory, recipientEmail, date } =
    await req.json();
=======

export const PATCH = async (req, { params }) => {
  const { itemName, quantity, brand, inventory, recipientEmail, date } = await req.json();
>>>>>>> master
  try {
    await connectToDB();

    const procurementExists = await Procurement.findById(params.id);
    if (!procurementExists) {
<<<<<<< HEAD
      return new Response("Not found", { status: 404 });
=======
      return new Response('Not found', { status: 404 });
>>>>>>> master
    }

    procurementExists.itemName = itemName || procurementExists.itemName;
    procurementExists.quantity = quantity || procurementExists.quantity;
    procurementExists.brand = brand || procurementExists.brand;
<<<<<<< HEAD
    procurementExists.recipientEmail =
      recipientEmail || procurementExists.recipientEmail;
=======
    procurementExists.recipientEmail = recipientEmail || procurementExists.recipientEmail;
>>>>>>> master
    procurementExists.inventory = inventory || procurementExists.inventory;
    procurementExists.date = date || procurementExists.date;

    await procurementExists.save();
    return new Response(JSON.stringify(procurementExists), { status: 200 });
  } catch (error) {
<<<<<<< HEAD
    return new Response("Procurement update failed", { status: 500 });
  }
};

=======
    return new Response('Procurement update failed', { status: 500 });
  }
};


>>>>>>> master
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    const procurement = await Procurement.findById(params.id);
    if (!procurement) {
<<<<<<< HEAD
      return new Response("Not found", { status: 404 });
    }
    await Procurement.findByIdAndRemove(params.id);
    return new Response("Successfully deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete procurement", { status: 500 });
=======
      return new Response('Not found', { status: 404 });
    }
    await Procurement.findByIdAndRemove(params.id);
    return new Response('Successfully deleted', { status: 200 });
  } catch (error) {
    return new Response('Failed to delete procurement', { status: 500 });
>>>>>>> master
  }
};
