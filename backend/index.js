import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import mongoose from "mongoose";

// Import routes
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

// Import models for direct data fetch
import User from "./models/user.model.js";
import Job from "./models/job.model.js";

dotenv.config();

const app = express();

// ---------- Middleware ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ---------- CORS ----------
app.use(
  cors({
    origin: ["https://job-portal-website-khaki.vercel.app","http://localhost:5173"],       // your frontend origin
    credentials:true, // allow cookies / authorization headers
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ---------- Routes ----------
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Test route
// app.get("/", (req, res) => {
//   res.send("Hello World from Backend!");
  

// });


// app.get("/", (req, res) => {
//   const dbState = mongoose.connection.readyState; 
//   // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting

//   let dbStatus = "";
//   switch (dbState) {
//     case 0:
//       dbStatus = "❌ Disconnected";
//       break;
//     case 1:
//       dbStatus = "✅ Connected";
//       break;
//     case 2:
//       dbStatus = "🔄 Connecting";
//       break;
//     case 3:
//       dbStatus = "⚠️ Disconnecting";
//       break;
//     default:
//       dbStatus = "Unknown";
//   }

//   res.json({
//     message: "API is running",
//     database: dbStatus,
//   });
// });




// Health check route
app.get("/", (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    // Map states to text
    const states = {
      0: "❌ Disconnected",
      1: "✅ Connected",
      2: "🔄 Connecting",
      3: "⚠️ Disconnecting"
    };

    res.status(200).json({
      message: "API is running",
      database: states[dbState] || "Unknown"
    });
  } catch (err) {
    console.error("Health check error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




// ✅ Show all users
app.get("/api/v1/all-users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Show all jobs
app.get("/api/v1/all-jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});


