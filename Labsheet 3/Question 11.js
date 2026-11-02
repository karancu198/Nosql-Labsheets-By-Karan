

db.wallets.insertMany([
 {user:"Amit",balance:5000},
 {user:"Riya",balance:3000}
]);

// Transactions require a MongoDB replica set.
const session = db.getMongo().startSession();
const walletDB = session.getDatabase("LabSheet3");

session.startTransaction();

try {
 walletDB.wallets.updateOne(
  {user:"Amit",balance:{$gte:1000}},
  {$inc:{balance:-1000}}
 );

 walletDB.wallets.updateOne(
  {user:"Riya"},
  {$inc:{balance:1000}}
 );

 session.commitTransaction();
} catch (e) {
 session.abortTransaction();
 print(e);
} finally {
 session.endSession();
}

db.wallets.find();
