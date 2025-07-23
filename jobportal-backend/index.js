
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/job.js"; // ✅ import job routes

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes); // ✅ register route


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        console.log("✅ DB name:", mongoose.connection.name);
        app.listen(5000, () => console.log("🚀 Server running on port 5000"));
    })
    .catch((err) => {
        console.error("❌ MongoDB Error:", err.message);
    });


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// // Routes
// import authRoutes from "./routes/auth.js";
// import jobRoutes from "./routes/job.js";
// // import uploadRoute from "./routes/upload.js";
// // app.use("/api", uploadRoute);


// dotenv.config();

// const app = express();

// // ✅ Log payload size before parsing body
// app.use((req, res, next) => {
//   let size = 0;
//   req.on("data", (chunk) => size += chunk.length);
//   req.on("end", () => {
//     const kb = (size / 1024).toFixed(2);
//     console.log("📦 Incoming Payload:", kb, "KB");
//     if (size > 10 * 1024 * 1024) { // 100MB
//       return res.status(413).send("Payload too large");
//     }
//     next();
//   });
// });

// // ✅ Enable CORS
// app.use(cors());

// // ✅ Body parser with increased limit
// app.use(express.json({ limit: "100mb" }));
// app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// // ✅ Register routes
// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     console.log("✅ DB Name:", mongoose.connection.name);
//     app.listen(5000, () => console.log("🚀 Server running on port 5000"));
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Error:", err.message);
//   });
