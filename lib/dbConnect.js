import mongoose from "mongoose";

const DB_STRING =
  "mongodb+srv://judis_nexus:Incorrect@9876@cluster0.janph.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//   to mantain a cached connection during hot reloads in devlepoment
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true,
    };

    cached.promise = mongoose.connect(DB_STRING, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
