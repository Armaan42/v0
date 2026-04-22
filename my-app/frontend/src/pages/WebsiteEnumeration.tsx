"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Loader2, Globe, AlertTriangle } from "lucide-react"

interface WebsiteData {
  title: string
  metaTags: Array<{ name: string | null; content: string | null }>
  links: Array<{ href: string | null; text: string }>
}

const WebsiteEnumeration = () => {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<WebsiteData | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // In a real application, you would call your API
      // For demo purposes, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setData({
        title: "Example Website",
        metaTags: [
          { name: "description", content: "This is an example website for demonstration purposes." },
          { name: "keywords", content: "example, demo, website" },
          { name: "author", content: "SpyderNet" },
          { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        ],
        links: [
          { href: "https://example.com/about", text: "About" },
          { href: "https://example.com/contact", text: "Contact" },
          { href: "https://example.com/products", text: "Products" },
          { href: "https://example.com/services", text: "Services" },
          { href: "https://example.com/blog", text: "Blog" },
        ],
      })
    } catch (err) {
      setError("An error occurred while enumerating the website.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Website Enumeration</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Enter Website URL</CardTitle>
          <CardDescription>
            Analyze a website to extract metadata, discover links, and identify technologies.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>Analyze</>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {data && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-blue-500" />
                Website Information
              </CardTitle>
              <CardDescription>Basic information about the website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Title</h3>
                  <p className="text-lg font-medium">{data.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="meta" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="meta">Meta Tags</TabsTrigger>
              <TabsTrigger value="links">Links</TabsTrigger>
            </TabsList>
            <TabsContent value="meta" className="p-4 bg-card rounded-md border">
              <h3 className="text-lg font-medium mb-4">Meta Tags</h3>
              <div className="space-y-4">
                {data.metaTags.map((tag, index) => (
                  <div key={index} className="p-3 bg-muted rounded-md">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">
                        {tag.name || "No Name"}
                      </Badge>
                    </div>
                    <p className="text-sm">{tag.content || "No Content"}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="links" className="p-4 bg-card rounded-md border">
              <h3 className="text-lg font-medium mb-4">Links</h3>
              <div className="space-y-2">
                {data.links.map((link, index) => (
                  <div key={index} className="p-3 bg-muted rounded-md flex justify-between items-center">
                    <span className="text-sm">{link.text}</span>
                    <a
                      href={link.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline"
                    >
                      {link.href}
                    </a>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

export default WebsiteEnumeration

