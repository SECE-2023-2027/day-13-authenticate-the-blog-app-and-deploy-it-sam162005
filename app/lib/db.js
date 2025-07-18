import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log('✅ Using existing DB connection');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'blog_app',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('✅ MongoDB Connected'); // <--- This should show up!
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
  }
};
