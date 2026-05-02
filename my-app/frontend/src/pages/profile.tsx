"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { toast } from "../components/ui/use-toast"

const SocialMediaMining = () => {
  const [username, setUsername] = useState("")
  const [platform, setPlatform] = useState("")
  const [results, setResults] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/api/osint/social-media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, platform }),
      })
      const data = await response.json()
      setResults(data)
      toast({
        title: "Success",
        description: "Social media mining completed successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during social media mining.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Social Media Mining</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter Social Media Details</CardTitle>
          <CardDescription>Provide a username and platform to mine data from social media.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="platform" className="text-sm font-medium">
                Platform
              </label>
              <Select onValueChange={setPlatform} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Mine Data</Button>
          </form>
        </CardContent>
      </Card>
      {results && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">{JSON.stringify(results, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default SocialMediaMining

