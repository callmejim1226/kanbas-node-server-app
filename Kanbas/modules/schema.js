import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    moduleId: { type: String, required: true, unique: true },
    name: String,
    description: String,
    course: String,
    lessons: [
      {
        _id: String,
        name: String,
        description: String,
        module: String,
      }
    ]
  },
  { collection: "modules" });
export default moduleSchema;