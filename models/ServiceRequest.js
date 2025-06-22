import mongoose from 'mongoose';

const ServiceRequestSchema = new mongoose.Schema({
  service: { type: String, required: true },
  description: { type: String, required: true },
  preferredTime: { type: String },
  estimatedPrice: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ServiceRequest ||
  mongoose.model('ServiceRequest', ServiceRequestSchema);
