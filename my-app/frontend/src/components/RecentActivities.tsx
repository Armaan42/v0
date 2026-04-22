"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Globe, FileText, MapPin, Users } from "lucide-react"

interface Activity {
  id: string
  type: "website" | "metadata" | "geolocation" | "social"
  target: string
  timestamp: string
  status: "completed" | "in-progress" | "failed"
}

export const RecentActivities: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    setActivities([
      {
        id: "1",
        type: "website",
        target: "example.com",
        timestamp: "2023-06-15 14:32:45",
        status: "completed",
      },
      {
        id: "2",
        type: "metadata",
        target: "document.pdf",
        timestamp: "2023-06-15 13:21:10",
        status: "completed",
      },
      {
        id: "3",
        type: "geolocation",
        target: "192.168.1.1",
        timestamp: "2023-06-15 12:45:33",
        status: "failed",
      },
      {
        id: "4",
        type: "social",
        target: "@username",
        timestamp: "2023-06-15 11:15:22",
        status: "in-progress",
      },
      {
        id: "5",
        type: "website",
        target: "anotherexample.com",
        timestamp: "2023-06-15 10:05:17",
        status: "completed",
      },
    ])
  }, [])

  const getTypeIcon = (type: Activity["type"]) => {
    switch (type) {
      case "website":
        return <Globe className="h-4 w-4 text-blue-500" />
      case "metadata":
        return <FileText className="h-4 w-4 text-green-500" />
      case "geolocation":
        return <MapPin className="h-4 w-4 text-red-500" />
      case "social":
        return <Users className="h-4 w-4 text-purple-500" />
    }
  }

  const getStatusBadge = (status: Activity["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Completed
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            In Progress
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
            Failed
          </Badge>
        )
    }
  }

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Recent Activities</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell>
                <div className="flex items-center">
                  {getTypeIcon(activity.type)}
                  <span className="ml-2 capitalize">{activity.type}</span>
                </div>
              </TableCell>
              <TableCell>{activity.target}</TableCell>
              <TableCell>{activity.timestamp}</TableCell>
              <TableCell>{getStatusBadge(activity.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

