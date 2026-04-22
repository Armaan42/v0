import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Sidebar } from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import SocialMediaMining from "./pages/SocialMediaMining"
import WebsiteEnumeration from "./pages/WebsiteEnumeration"
import MetadataExtraction from "./pages/MetadataExtraction"
import GeolocationTracking from "./pages/GeolocationTracking"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="spydernet-theme">
      <Router>
        <div className="flex h-screen bg-background text-foreground">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/social-media" component={SocialMediaMining} />
              <Route path="/website-enum" component={WebsiteEnumeration} />
              <Route path="/metadata" component={MetadataExtraction} />
              <Route path="/geolocation" component={GeolocationTracking} />
              {/* Add more routes as needed */}
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

