import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb+srv://johankyurem:913475418@cluster0.zlcmx.mongodb.net/food-del');
    console.log("db connected");
  } catch (error) {
    console.error("Error de conexión:", error);
  }
};

export default connectDB;
