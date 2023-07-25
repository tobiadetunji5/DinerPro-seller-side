import { Schema, model, models } from 'mongoose';

const InventorySchema = new Schema({
  itemName: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Inventory = models.Inventory || model('Inventory', InventorySchema);

export default Inventory;
