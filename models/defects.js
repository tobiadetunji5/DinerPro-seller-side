import {Schema, models, model} from 'mongoose';

const DefectSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      quantityAffected: {
        type: Number,
        required: true,
        min: 0
      },
      description: {
        type: String,
        required: true
      },
      date: {
          type: Date,
          default: Date.now
      }
});

const Defect = models.Defect || model('Defect', DefectSchema);

export default Defect;