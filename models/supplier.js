import {Schema, models, model} from 'mongoose';

const supplierSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
});

const Supplier = models.Supplier || model('Supplier', supplierSchema);

export default Supplier;