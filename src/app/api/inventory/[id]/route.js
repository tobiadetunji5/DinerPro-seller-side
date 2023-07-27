import { connectToDB } from '@/../utils/database';
import Inventory from '@/../models/inventory';

// GET (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const inventory = await Inventory.findById(params.id);
    if (!inventory) {
      return new Response(JSON.stringify('Inventory not found'), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(inventory), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch inventory'), {
      status: 500,
    });
  }
};

// PATCH (update)
export const PATCH = async (request, { params }) => {
  const { itemName, quantity, price } = await request.json();
  try {
    await connectToDB();

    const existingInventory = await Inventory.findById(params.id);
    if (!existingInventory) {
      return new Response('Inventory not found', { status: 404 });
    }

    existingInventory.itemName = itemName || existingInventory.itemName;
    existingInventory.quantity = quantity || existingInventory.quantity;
    existingInventory.price = price || existingInventory.price;

    await existingInventory.save();
    return new Response(JSON.stringify(existingInventory), { status: 200 });
  } catch (error) {
    return new Response('Failed to update inventory', { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const inventory = await Inventory.findById(params.id);
    if (!inventory) {
      return new Response('Inventory not found', { status: 404 });
    }
    await Inventory.findByIdAndRemove(params.id);
    return new Response('Inventory deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to delete inventory', { status: 500 });
  }
};
