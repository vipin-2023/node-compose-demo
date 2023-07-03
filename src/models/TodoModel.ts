import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Todo document
interface ITodo extends Document {
  text: string;
}

// Define the Todo schema
const todoSchema = new Schema<ITodo>({
  text: { type: String, required: true },
});

// Define and export the Todo model
export default mongoose.model<ITodo>('Todo', todoSchema);
