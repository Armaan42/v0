import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "./theme-provider"

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              SpyderNet
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/social-media" className="text-foreground hover:text-primary">
              Social Media
            </Link>
            <Link to="/website-enum" className="text-foreground hover:text-primary">
              Website Enum
            </Link>
            <Link to="/metadata" className="text-foreground hover:text-primary">
              Metadata
            </Link>
            <Link to="/geolocation" className="text-foreground hover:text-primary">
              Geolocation
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

