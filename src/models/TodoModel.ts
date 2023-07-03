import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Todo document
interface ITodo extends Document {
  text: string
  date:Date
}

// Define the Todo schema
const todoSchema = new Schema<ITodo>({
  text: { 
    type: String,
    required: true 
  },
  date:{
    type:Date,
    default:Date.now
  }
});

// Define and export the Todo model
export default mongoose.model<ITodo>('Todo', todoSchema);
