import mongoose, { Schema, Document } from 'mongoose';

export interface ISalary extends Document {
  employeeId: mongoose.Types.ObjectId;
  amount: number;
  date: Date;
}

const SalarySchema: Schema = new Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model<ISalary>('Salary', SalarySchema);
