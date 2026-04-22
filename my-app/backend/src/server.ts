import express from "express"
import cors from "cors"
import helmet from "helmet"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { rateLimit } from "express-rate-limit"

import authRoutes from "./routes/auth"
import osintRoutes from "./routes/osint"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/osint", osintRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

