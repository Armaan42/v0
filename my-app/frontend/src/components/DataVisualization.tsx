"use client"

import type React from "react"
import { useEffect, useRef } from "react"

export const DataVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvasRef.current.width = canvasRef.current.offsetWidth
    canvasRef.current.height = 300

    // Sample data for visualization
    const data = {
      labels: ["Social Media", "Websites", "Metadata", "Geolocation", "Public Records", "Dark Web"],
      datasets: [
        {
          label: "Data Points Collected",
          data: [1200, 1900, 800, 500, 1500, 350],
          backgroundColor: [
            "rgba(147, 51, 234, 0.7)", // Purple
            "rgba(59, 130, 246, 0.7)", // Blue
            "rgba(16, 185, 129, 0.7)", // Green
            "rgba(239, 68, 68, 0.7)", // Red
            "rgba(245, 158, 11, 0.7)", // Yellow
            "rgba(99, 102, 241, 0.7)", // Indigo
          ],
          borderWidth: 1,
        },
      ],
    }

    // Draw a simple bar chart
    const barWidth = (canvasRef.current.width - 100) / data.labels.length
    const maxValue = Math.max(...data.datasets[0].data)
    const barHeightMultiplier = (canvasRef.current.height - 60) / maxValue

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Draw bars
    data.labels.forEach((label, index) => {
      const x = 50 + index * barWidth
      const barHeight = data.datasets[0].data[index] * barHeightMultiplier
      const y = canvasRef.current!.height - 30 - barHeight

      // Draw bar
      ctx.fillStyle = data.datasets[0].backgroundColor[index]
      ctx.fillRect(x, y, barWidth - 10, barHeight)

      // Draw label
      ctx.fillStyle = "#ffffff"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(label, x + (barWidth - 10) / 2, canvasRef.current!.height - 10)

      // Draw value
      ctx.fillText(data.datasets[0].data[index].toString(), x + (barWidth - 10) / 2, y - 5)
    })

    // Draw title
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Data Points by Source Type", canvasRef.current.width / 2, 20)
  }, [])

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Data Visualization</h3>
      <div className="w-full h-[300px] bg-card rounded-md overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
    </div>
  )
}

