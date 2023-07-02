import mongoose from "mongoose";

mongoose.connect("mongodb+srv://test:test@cluster0.mv9v4wm.mongodb.net/learning-nodejs");

let db = mongoose.connection;

export default db;