// CRUD

const { MongoClient, MongoServerError, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "task-manager";

async function main() {
  // Use connect method to connect to the server
  try {
    await client.connect();
    console.log("Connected Successfully to Server");
    const db = client.db(dbName);
    const users = db.collection("users");

    // Query for a movie that has title "Yongsu"
    const query = { name: "bye world" };

    const result = await users.deleteMany(query);
    console.log("Deleted " + result.deletedCount + " documents.");
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`);
    }
    // throw error;
  }
}

main()
  .then((client) => console.log(client))
  .catch((error) => console.error(error))
  .finally(() => client.close());
