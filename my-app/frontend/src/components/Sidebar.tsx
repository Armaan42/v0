import type React from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  Home,
  Globe,
  FileText,
  MapPin,
  Users,
  Shield,
  Database,
  Search,
  Settings,
  HelpCircle,
  AlertTriangle,
  FileCode,
  Fingerprint,
  Mail,
} from "lucide-react"

interface SidebarItemProps {
  icon: React.ReactNode
  title: string
  href: string
  isActive: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, href, isActive }) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary",
        isActive ? "bg-muted text-primary" : "text-muted-foreground",
      )}
    >
      {icon}
      {title}
    </Link>
  )
}

export const Sidebar: React.FC = () => {
  const location = useLocation()
  const pathname = location.pathname

  const mainItems = [
    { icon: <Home className="h-4 w-4" />, title: "Dashboard", href: "/" },
    { icon: <Search className="h-4 w-4" />, title: "New Scan", href: "/new-scan" },
    { icon: <Database className="h-4 w-4" />, title: "Saved Scans", href: "/saved-scans" },
    { icon: <AlertTriangle className="h-4 w-4" />, title: "Alerts", href: "/alerts" },
  ]

  const toolItems = [
    { icon: <Globe className="h-4 w-4" />, title: "Website Enumeration", href: "/website-enum" },
    { icon: <FileText className="h-4 w-4" />, title: "Metadata Extraction", href: "/metadata" },
    { icon: <MapPin className="h-4 w-4" />, title: "Geolocation Tracking", href: "/geolocation" },
    { icon: <Users className="h-4 w-4" />, title: "Social Media Mining", href: "/social-media" },
    { icon: <Shield className="h-4 w-4" />, title: "Threat Intelligence", href: "/threat-intel" },
    { icon: <FileCode className="h-4 w-4" />, title: "Document Analysis", href: "/document-analysis" },
    { icon: <Fingerprint className="h-4 w-4" />, title: "Identity Research", href: "/identity-research" },
  ]

  const otherItems = [
    { icon: <Settings className="h-4 w-4" />, title: "Settings", href: "/settings" },
    { icon: <HelpCircle className="h-4 w-4" />, title: "Help & Documentation", href: "/help" },
    { icon: <Mail className="h-4 w-4" />, title: "Contact Support", href: "/contact" },
  ]

  return (
    <div className="h-screen w-64 border-r border-border bg-background p-4">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">SpyderNet</span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-xs font-semibold text-muted-foreground">Main</h3>
          <nav className="space-y-1">
            {mainItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                title={item.title}
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-semibold text-muted-foreground">OSINT Tools</h3>
          <nav className="space-y-1">
            {toolItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                title={item.title}
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-semibold text-muted-foreground">Other</h3>
          <nav className="space-y-1">
            {otherItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                title={item.title}
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

