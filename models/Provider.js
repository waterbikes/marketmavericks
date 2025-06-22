// models/Provider.js
import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  services: {
    type: [String], // e.g., ['cleaning', 'plumbing']
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      default: [0, 0],
    },
  },
}, {
  timestamps: true,
});

providerSchema.index({ location: '2dsphere' });

const Provider = mongoose.models.Provider || mongoose.model('Provider', providerSchema);
export default Provider;
