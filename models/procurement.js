import {Schema,model,models} from 'mongoose';
import Defect from './defects';
import Supplier from './supplier';

const ProcurementSchema = new Schema({
    itemName:{
        type:String,
        unique:true
    },
    quantity:{
        type:Number,
        min:0,
        required:true
    },
    brand:{
        type:String
    },
    inventory:{
        type:String
    },
    recipientEmail:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['Pending','Delivered'],
        default:'Pending'
    },
    defect: {
        type: Schema.Types.ObjectId,
        ref: 'Defect'
      },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier'
    }
});

const Procurement = models.Procurement || model('Procurement',ProcurementSchema);

export default Procurement;

