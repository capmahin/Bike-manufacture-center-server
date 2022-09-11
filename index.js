const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
var nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");
const dbConnect = require("./utils/dbConnect");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

const serviceRoutes = require("./routes/v1/service.route");

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/vi/service", serviceRoutes);

// function verifyJWT(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send({ message: "UnAuthorized access" });
//   }
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
//     if (err) {
//       return res.status(403).send({ message: "Forbidden access" });
//     }
//     req.decoded = decoded;
//     next();
//   });
// }

async function run() {
  try {
    // await client.connect();
    // const serviceCollection = client.db("Assignment-12").collection("services");
    // const bookingCollection = client.db("Assignment-12").collection("bookings");
    // const userCollection = client.db("Assignment-12").collection("users");
    // const mechanicCollection = client
    //   .db("Assignment-12")
    //   .collection("mechanics");
    // const paymentCollection = client.db("Assignment-12").collection("payments");
    // const verifyAdmin = async (req, res, next) => {
    //   const requester = req.decoded.email;
    //   const requesterAccount = await userCollection.findOne({
    //     email: requester,
    //   });
    //   if (requesterAccount.role === "admin") {
    //     next();
    //   } else {
    //     res.status(403).send({ message: "forbidden" });
    //   }
    // };
    // app.get("/piyal", (req, res) => {
    //   res.send({ name: "piyal" });
    // });
    // app.post("/create-payment-intent", verifyJWT, async (req, res) => {
    //   const service = req.body;
    //   const price = service.price;
    //   const amount = price * 100;
    //   const paymentIntent = await stripe.paymentIntents.create({
    //     amount: amount,
    //     currency: "usd",
    //     payment_method_types: ["card"],
    //   });
    //   res.send({ clientSecret: paymentIntent.client_secret });
    // });
    // app.get("/service", async (req, res) => {
    //   const query = {};
    //   const cursor = serviceCollection.find(query).project({ name: 1 });
    //   const services = await cursor.toArray();
    //   res.send(services);
    // });
    // app.get("/user", verifyJWT, async (req, res) => {
    //   const users = await userCollection.find().toArray();
    //   res.send(users);
    // });
    // app.get("/admin/:email", async (req, res) => {
    //   const email = req.params.email;
    //   const user = await userCollection.findOne({ email: email });
    //   const isAdmin = user.role === "admin";
    //   res.send({ admin: isAdmin });
    // });
    // app.put("/user/admin/:email", verifyJWT, verifyAdmin, async (req, res) => {
    //   const email = req.params.email;
    //   const filter = { email: email };
    //   const updateDoc = {
    //     $set: { role: "admin" },
    //   };
    //   const result = await userCollection.updateOne(filter, updateDoc);
    //   res.send(result);
    // });
    // app.put("/user/:email", async (req, res) => {
    //   const email = req.params.email;
    //   const user = req.body;
    //   const filter = { email: email };
    //   const options = { upsert: true };
    //   const updateDoc = {
    //     $set: user,
    //   };
    //   const result = await userCollection.updateOne(filter, updateDoc, options);
    //   const token = jwt.sign(
    //     { email: email },
    //     process.env.ACCESS_TOKEN_SECRET,
    //     { expiresIn: "1h" }
    //   );
    //   res.send({ result, token });
    // });
    // app.get("/available", async (req, res) => {
    //   const date = req.query.date || "May 11,2022";
    //   const services = await serviceCollection.find().toArray();
    //   const query = { date: date };
    //   const bookings = await bookingCollection.find(query).toArray();
    //   services.forEach((service) => {
    //     const serviceBookings = bookings.filter(
    //       (book) => book.fixing === service.name
    //     );
    //     const bookedMinimum_quantitys = serviceBookings.map(
    //       (book) => book.minimum_quantity
    //     );
    //     const available = service.minimum_quantitys.filter(
    //       (minimum_quantity) =>
    //         !bookedMinimum_quantitys.includes(minimum_quantity)
    //     );
    //     service.minimum_quantitys = available;
    //   });
    //   res.send(services);
    // });
    // app.get("/booking", verifyJWT, async (req, res) => {
    //   const buyer = req.query.buyer;
    //   const decodedEmail = req.query.buyer;
    //   if (buyer === decodedEmail) {
    //     const query = { buyer: buyer };
    //     const bookings = await bookingCollection.find(query).toArray();
    //     return res.send(bookings);
    //   } else {
    //     return res.status(403).send({ message: "forbidden access" });
    //   }
    // });
    // app.get("/booking/:id", verifyJWT, async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: ObjectId(id) };
    //   const booking = await bookingCollection.findOne(query);
    //   res.send(booking);
    // });
    // app.post("/booking", async (req, res) => {
    //   const booking = req.body;
    //   const query = {
    //     fixing: booking.fixing,
    //     date: booking.date,
    //     buyer: booking.buyer,
    //   };
    //   const exists = await bookingCollection.findOne(query);
    //   if (exists) {
    //     return res.send({ success: false, booking: exists });
    //   }
    //   const result = await bookingCollection.insertOne(booking);
    //   console.log("sending email");
    //   sendManufactureEmail(booking);
    //   return res.send({ success: true, result });
    // });
    // app.patch("/booking/:id", verifyJWT, async (req, res) => {
    //   const id = req.params.id;
    //   const payment = req.body;
    //   const filter = { _id: ObjectId(id) };
    //   const updatedDoc = {
    //     $set: {
    //       paid: true,
    //       transactionId: payment.transactionId,
    //     },
    //   };
    //   const result = await paymentCollection.insertOne(payment);
    //   const updatedBooking = await bookingCollection.updateOne(
    //     filter,
    //     updatedDoc
    //   );
    //   res.send(updatedDoc);
    // });
    // app.get("/mechanic", verifyJWT, verifyAdmin, async (req, res) => {
    //   const mechanics = await mechanicCollection.find().toArray();
    //   res.send(mechanics);
    // });
    // app.post("/mechanic", verifyJWT, verifyAdmin, async (req, res) => {
    //   const mechanic = req.body;
    //   const result = await mechanicCollection.insertOne(mechanic);
    //   res.send(result);
    // });
    // app.delete("/mechanic/:email", verifyJWT, verifyAdmin, async (req, res) => {
    //   const email = req.params.email;
    //   const filter = { email: email };
    //   const result = await mechanicCollection.deleteOne(filter);
    //   res.send(result);
    // });
  } finally {
  }
}

run().catch((err) => console.error(err.message));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("No route found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
