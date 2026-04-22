"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, FileText, AlertTriangle, Upload } from "lucide-react"

interface Metadata {
  [key: string]: string
}

const MetadataExtraction = () => {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [metadata, setMetadata] = useState<Metadata | null>(null)
  const [activeTab, setActiveTab] = useState("url")

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // In a real application, you would call your API
      // For demo purposes, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setMetadata({
        Title: "Example Document",
        Author: "John Doe",
        Created: "2023-05-15T10:30:45Z",
        Modified: "2023-06-01T14:22:33Z",
        Application: "Microsoft Word",
        Version: "16.0",
        Company: "Example Corp",
        "Content Type": "application/pdf",
        Pages: "15",
        "Word Count": "2500",
        "Character Count": "15000",
        Language: "en-US",
        Keywords: "example, metadata, document",
        Description: "This is an example document for metadata extraction demonstration.",
      })
    } catch (err) {
      setError("An error occurred while extracting metadata.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)
    setError(null)

    try {
      // In a real application, you would upload the file to your API
      // For demo purposes, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setMetadata({
        Filename: file.name,
        Size: `${(file.size / 1024).toFixed(2)} KB`,
        Type: file.type,
        "Last Modified": new Date(file.lastModified).toLocaleString(),
        Title: "Uploaded Document",
        Author: "Jane Smith",
        Created: "2023-04-10T09:15:30Z",
        Modified: "2023-05-20T11:45:22Z",
        Application: "Adobe Acrobat",
        Version: "22.0",
        "Content Type": file.type,
        Pages: "8",
        "Word Count": "1200",
        "Character Count": "7500",
        Language: "en-US",
      })
    } catch (err) {
      setError("An error occurred while extracting metadata from the file.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Metadata Extraction</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="url">URL</TabsTrigger>
          <TabsTrigger value="file">File Upload</TabsTrigger>
        </TabsList>
        <TabsContent value="url">
          <Card>
            <CardHeader>
              <CardTitle>Extract Metadata from URL</CardTitle>
              <CardDescription>Enter the URL of a document or image to extract its metadata.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUrlSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="url"
                    placeholder="https://example.com/document.pdf"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Extracting...
                      </>
                    ) : (
                      <>Extract</>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="file">
          <Card>
            <CardHeader>
              <CardTitle>Extract Metadata from File</CardTitle>
              <CardDescription>Upload a document, image, or other file to extract its metadata.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop a file here, or click to select a file
                  </p>
                  <Input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileUpload}
                    disabled={isLoading}
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("file-upload")?.click()}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Extracting...
                      </>
                    ) : (
                      <>Select File</>
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

      {metadata && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-green-500" />
              Extracted Metadata
            </CardTitle>
            <CardDescription>Metadata extracted from the {activeTab === "url" ? "URL" : "file"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(metadata).map(([key, value]) => (
                <div key={key} className="p-3 bg-muted rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-1">{key}</div>
                  <div className="text-sm">{value}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Export Metadata
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

export default MetadataExtraction

