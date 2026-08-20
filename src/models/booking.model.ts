import { Schema, model, Types } from "mongoose";

export type BookingStatus = "booked" | "cancelled";

const bookingSchema = new Schema({
  
});

export default model("Booking", bookingSchema);