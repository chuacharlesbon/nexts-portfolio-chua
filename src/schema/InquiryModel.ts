import mongoose from "mongoose";

export interface Inquiry extends mongoose.Document {
  name: string;
  email: string;
  message: string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const InquirySchema = new mongoose.Schema<Inquiry>({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    maxlength: [60, "Email cannot be more than 60 characters"],
  },
  message: {
    type: String,
    required: [true, "Please provide a message."],
    maxlength: [1000, "Message cannot be more than 1000 characters"],
  },
});

// Attach timestamps automatically
// This adds `createdAt` and `updatedAt`
InquirySchema.set("timestamps", true);

export default mongoose.models.Pet || mongoose.model<Inquiry>("Inquiry", InquirySchema);