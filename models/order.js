import { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema({
  //   customer: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Customer',
  //   },
  items: [
    {
      itemName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: [true, 'Total Amount is required'],
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'processed', 'delivered'],
    default: 'pending',
  },
});

const Order = models.Order || model('Order', OrderSchema);

export default Order;
