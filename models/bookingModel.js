const { MongoClient, ObjectId } = require("mongodb");

const url = process.env.MONGO_URL ;
const client = new MongoClient(url);
const dbName = process.env.DB_NAME || "mern";

async function getCollection() {
  await client.connect();
  const db = client.db(dbName);
  return db.collection("events");
}

async function addBooking(obj, res) {
  try {
    const collection = await getCollection();
    const result = await collection.insertOne(obj);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getBookings(res) {
  try {
    const collection = await getCollection();
    const result = await collection.find().toArray();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateBooking(id, obj, res) {
  try {
    const collection = await getCollection();
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: obj });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteBooking(id, res) {
  try {
    const collection = await getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { addBooking, getBookings, updateBooking, deleteBooking };
