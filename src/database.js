const { MongoClient } = require("mongodb");

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri =
    "mongodb+srv://vidhigandhi1405_db_user:1zq4DFWFbqR9LOvp@cluster0.gfct3ux.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("FirstDB");
    const personalInfo = database.collection("PersonalInfo");
    const sort={length:-1};
    const data=await personalInfo.find({}).sort(sort).toArray();
    console.log(data);
    

   
    
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
