import express from "express"
import {
  socialMediaMining,
  websiteEnumeration,
  metadataExtraction,
  geolocationTracking,
} from "../services/osintServices"
import { authenticateToken } from "../middleware/auth"

const router = express.Router()

router.use(authenticateToken)

router.post("/social-media", async (req, res) => {
  try {
    const data = await socialMediaMining(req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "An error occurred during social media mining" })
  }
})

router.post("/website-enum", async (req, res) => {
  try {
    const data = await websiteEnumeration(req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "An error occurred during website enumeration" })
  }
})

router.post("/metadata", async (req, res) => {
  try {
    const data = await metadataExtraction(req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "An error occurred during metadata extraction" })
  }
})

router.post("/geolocation", async (req, res) => {
  try {
    const data = await geolocationTracking(req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "An error occurred during geolocation tracking" })
  }
})

export default router

