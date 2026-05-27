"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, MapPin, AlertTriangle, ImageIcon } from "lucide-react"

interface GeoLocation {
  ip?: string
  country?: string
  region?: string
  city?: string
  latitude?: number
  longitude?: number
  timezone?: string
  isp?: string
}

const GeolocationTracking = () => {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [location, setLocation] = useState<GeoLocation | null>(null)
  const [activeTab, setActiveTab] = useState("ip")
  const mapRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // In a real application, you would call your API
      // For demo purposes, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 2000))

      if (activeTab === "ip") {
        setLocation({
          ip: input,
          country: "United States",
          region: "California",
          city: "San Francisco",
          latitude: 37.7749,
          longitude: -122.4194,
          timezone: "America/Los_Angeles",
          isp: "Example ISP",
        })
      } else if (activeTab === "image") {
        setLocation({
          latitude: 34.0522,
          longitude: -118.2437,
          country: "United States",
          region: "California",
          city: "Los Angeles",
        })
      }
    } catch (err) {
      setError("An error occurred while tracking geolocation.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (location && location.latitude && location.longitude && mapRef.current) {
      // In a real application, you would render a map here
      // For demo purposes, we'll just display a placeholder
      const mapPlaceholder = document.createElement("div")
      mapPlaceholder.className = "w-full h-full flex items-center justify-center bg-muted rounded-md"
      mapPlaceholder.innerHTML = `
        <div class="text-center">
          <div class="text-lg font-medium">Map Placeholder</div>
          <div class="text-sm text-muted-foreground">Latitude: ${location.latitude}, Longitude: ${location.longitude}</div>
        </div>
      `

      mapRef.current.innerHTML = ""
      mapRef.current.appendChild(mapPlaceholder)
    }
  }, [location])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)
    setError(null)

    try {
      // In a real application, you would upload the file to your API
      // For demo purposes, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setLocation({
        latitude: 40.7128,
        longitude: -74.006,
        country: "United States",
        region: "New York",
        city: "New York",
      })
    } catch (err) {
      setError("An error occurred while extracting geolocation from the image.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Geolocation Tracking</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ip">IP Address</TabsTrigger>
          <TabsTrigger value="image">Image EXIF</TabsTrigger>
        </TabsList>
        <TabsContent value="ip">
          <Card>
            <CardHeader>
              <CardTitle>Track IP Address Location</CardTitle>
              <CardDescription>Enter an IP address to track its geolocation.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="192.168.1.1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Tracking...
                      </>
                    ) : (
                      <>Track</>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="image">
          <Card>
            <CardHeader>
              <CardTitle>Extract Location from Image</CardTitle>
              <CardDescription>Upload an image to extract its geolocation from EXIF data.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop an image here, or click to select an image
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                    onChange={handleFileUpload}
                    disabled={isLoading}
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("image-upload")?.click()}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Extracting...
                      </>
                    ) : (
                      <>Select Image</>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {location && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-red-500" />
                Location Information
              </CardTitle>
              <CardDescription>
                Geolocation data for {activeTab === "ip" ? `IP: ${input}` : "the uploaded image"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {location.ip && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">IP Address</div>
                    <div className="text-sm">{location.ip}</div>
                  </div>
                )}
                {location.country && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Country</div>
                    <div className="text-sm">{location.country}</div>
                  </div>
                )}
                {location.region && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Region</div>
                    <div className="text-sm">{location.region}</div>
                  </div>
                )}
                {location.city && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">City</div>
                    <div className="text-sm">{location.city}</div>
                  </div>
                )}
                {location.latitude && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Latitude</div>
                    <div className="text-sm">{location.latitude}</div>
                  </div>
                )}
                {location.longitude && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Longitude</div>
                    <div className="text-sm">{location.longitude}</div>
                  </div>
                )}
                {location.timezone && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Timezone</div>
                    <div className="text-sm">{location.timezone}</div>
                  </div>
                )}
                {location.isp && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium text-muted-foreground mb-1">ISP</div>
                    <div className="text-sm">{location.isp}</div>
                  </div>
                )}
              </div>

              <div className="w-full h-64 bg-muted rounded-md overflow-hidden" ref={mapRef}>
                <div className="w-full h-full flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Export Location Data
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

export default GeolocationTracking

