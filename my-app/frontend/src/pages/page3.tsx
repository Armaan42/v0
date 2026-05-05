"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Search,
  FileText,
  MapPin,
  Users,
  Database,
  Shield,
  AlertTriangle,
  Clock,
  ArrowRight,
} from "lucide-react"
import { RecentActivities } from "../components/RecentActivities"
import { StatsCard } from "../components/StatsCard"
import { DataVisualization } from "../components/DataVisualization"

const Dashboard = () => {
  const [stats, setStats] = useState({
    scansCompleted: 0,
    dataPointsCollected: 0,
    activeSources: 0,
    alerts: 0,
  })

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    setStats({
      scansCompleted: 124,
      dataPointsCollected: 8743,
      activeSources: 17,
      alerts: 3,
    })
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">SpyderNet Dashboard</h1>
        <Button>
          New Scan <Search className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Scans Completed"
          value={stats.scansCompleted}
          icon={<Clock className="h-5 w-5 text-blue-500" />}
          description="Total OSINT scans completed"
        />
        <StatsCard
          title="Data Points"
          value={stats.dataPointsCollected}
          icon={<Database className="h-5 w-5 text-green-500" />}
          description="Total data points collected"
        />
        <StatsCard
          title="Active Sources"
          value={stats.activeSources}
          icon={<Globe className="h-5 w-5 text-purple-500" />}
          description="Active OSINT data sources"
        />
        <StatsCard
          title="Alerts"
          value={stats.alerts}
          icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
          description="Active security alerts"
        />
      </div>

      <Tabs defaultValue="visualization" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="visualization">Data Visualization</TabsTrigger>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
        </TabsList>
        <TabsContent value="visualization" className="p-4 bg-card rounded-md border">
          <DataVisualization />
        </TabsContent>
        <TabsContent value="activities" className="p-4 bg-card rounded-md border">
          <RecentActivities />
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Globe className="mr-2 h-5 w-5 text-blue-500" />
              Website Enumeration
            </CardTitle>
            <CardDescription>Analyze websites for hidden information</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Extract metadata, discover subdomains, analyze technologies, and map website structure.</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => (window.location.href = "/website-enum")}
            >
              Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <FileText className="mr-2 h-5 w-5 text-green-500" />
              Metadata Extraction
            </CardTitle>
            <CardDescription>Extract hidden data from files</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Analyze documents, images, and other files to extract hidden metadata and information.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" onClick={() => (window.location.href = "/metadata")}>
              Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-red-500" />
              Geolocation Tracking
            </CardTitle>
            <CardDescription>Track and analyze location data</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Identify locations from IP addresses, images, and social media posts.</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => (window.location.href = "/geolocation")}
            >
              Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Users className="mr-2 h-5 w-5 text-purple-500" />
              Social Media Mining
            </CardTitle>
            <CardDescription>Extract data from social platforms</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Gather and analyze information from various social media platforms.</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => (window.location.href = "/social-media")}
            >
              Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Shield className="mr-2 h-5 w-5 text-yellow-500" />
              Threat Intelligence
            </CardTitle>
            <CardDescription>Analyze potential security threats</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Identify and analyze potential security threats from collected OSINT data.</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => (window.location.href = "/threat-intel")}
            >
              Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Database className="mr-2 h-5 w-5 text-indigo-500" />
              Data Integration
            </CardTitle>
            <CardDescription>Combine data from multiple sources</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Integrate and correlate data from various OSINT sources for comprehensive analysis.</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => (window.location.href = "/data-integration")}
            >
              Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

