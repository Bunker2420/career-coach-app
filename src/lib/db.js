const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

if (!url) {
  throw new Error('ATLAS_URL is not defined in environment variables');
}

export default async function connectDB() {
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (mongoose.connection.readyState === 1) {
    return; // already connected
  }

  try {
    await mongoose.connect(url);
    console.log('✅ MongoDB Connection Successful');
  } catch (err) {
    console.error('❌ MongoDB Connection Failed:', err.message);
    throw err;
  }
}

