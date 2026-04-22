import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Lock, PenTool, Shield, Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-purple-500" />
          <span className="text-xl font-bold">MultiSkilled Pro</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:flex border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
        >
          Resume
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Securing the Web, One Line of Code at a Time
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Cybersecurity Expert | Pentester | Full Stack Developer | UI/UX Designer
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">View Projects</Button>
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-purple-500" />,
                title: "Cybersecurity",
                description: "Protecting digital assets with advanced threat detection and vulnerability assessment.",
              },
              {
                icon: <Lock className="h-10 w-10 text-red-500" />,
                title: "Penetration Testing",
                description: "Identifying security weaknesses through simulated cyberattacks and ethical hacking.",
              },
              {
                icon: <Code className="h-10 w-10 text-blue-500" />,
                title: "Full Stack Development",
                description: "Building robust web applications from front-end interfaces to back-end systems.",
              },
              {
                icon: <PenTool className="h-10 w-10 text-green-500" />,
                title: "UI/UX Design",
                description: "Crafting intuitive and visually appealing user interfaces and experiences.",
              },
            ].map((skill, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <div className="mb-4">{skill.icon}</div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
              <TabsTrigger value="pentesting">Pentesting</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="uiux">UI/UX</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "SecureNet",
                    description: "A comprehensive network security solution with real-time threat detection.",
                    image: "/placeholder.svg?height=200&width=300&text=SecureNet",
                    tags: ["Cybersecurity", "Python", "Machine Learning"],
                  },
                  {
                    title: "VulnScanner Pro",
                    description: "Advanced vulnerability scanner for web applications and networks.",
                    image: "/placeholder.svg?height=200&width=300&text=VulnScanner",
                    tags: ["Pentesting", "Go", "Docker"],
                  },
                  {
                    title: "E-Commerce Platform",
                    description: "Full stack e-commerce solution with secure payment integration.",
                    image: "/placeholder.svg?height=200&width=300&text=E-Commerce",
                    tags: ["Full Stack", "React", "Node.js", "MongoDB"],
                  },
                  {
                    title: "FinTech Dashboard",
                    description: "Intuitive dashboard design for a financial technology application.",
                    image: "/placeholder.svg?height=200&width=300&text=FinTech+UI",
                    tags: ["UI/UX", "Figma", "Adobe XD"],
                  },
                  {
                    title: "Threat Intelligence Portal",
                    description: "Centralized platform for gathering and analyzing cyber threat data.",
                    image: "/placeholder.svg?height=200&width=300&text=Threat+Intel",
                    tags: ["Cybersecurity", "Full Stack", "React", "Python"],
                  },
                  {
                    title: "Mobile App Security Audit",
                    description: "Comprehensive security assessment of a popular mobile banking app.",
                    image: "/placeholder.svg?height=200&width=300&text=Mobile+Security",
                    tags: ["Pentesting", "Mobile", "iOS", "Android"],
                  },
                ].map((project, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="text-purple-400 hover:text-purple-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Add similar TabsContent for other categories */}
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 mb-6">
                With over a decade of experience in the tech industry, I've honed my skills across multiple disciplines.
                My journey began in cybersecurity, where I developed a passion for protecting digital assets and
                uncovering vulnerabilities. This led me to explore penetration testing, allowing me to think like a
                hacker to better defend against real-world threats.
              </p>
              <p className="text-gray-400 mb-6">
                As I delved deeper into the world of security, I realized the importance of understanding the full stack
                of web development. This pursuit not only made me a better security professional but also opened up new
                avenues in creating robust, secure applications from the ground up.
              </p>
              <p className="text-gray-400 mb-6">
                My interest in user experience naturally led me to UI/UX design, where I learned to create interfaces
                that are not only secure and functional but also intuitive and visually appealing. This unique
                combination of skills allows me to approach projects holistically, ensuring security, functionality, and
                user satisfaction are all given equal importance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-500" />
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>Threat Modeling</li>
                    <li>Incident Response</li>
                    <li>Security Architecture</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-red-500" />
                    Pentesting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>Web App Testing</li>
                    <li>Network Penetration</li>
                    <li>Social Engineering</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-500" />
                    Full Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>React, Vue, Angular</li>
                    <li>Node.js, Python, Go</li>
                    <li>SQL and NoSQL DBs</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PenTool className="h-5 w-5 mr-2 text-green-500" />
                    UI/UX Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>User Research</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>Have a project in mind? Let's discuss how I can help.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="h-6 w-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-purple-500" />
              <span className="font-bold">MultiSkilled Pro</span>
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

