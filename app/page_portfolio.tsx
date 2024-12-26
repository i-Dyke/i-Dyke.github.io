'use client'

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Github, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { cn } from "../lib/utils"
import { Montserrat } from 'next/font/google'
import ErrorBoundary from '../components/ErrorBoundary'
import AttributeSort from '../components/AttributeSort'

const montserrat = Montserrat({ subsets: ['latin'] })

// Enhanced project data with more examples and priority attribute
const projects = [
  {
    id: 1,
    title: "MOHRA",
    subtitle: "Machined Open Source Humanoid Robot",
    description: "Senior Project 2024 - Advanced bipedal robotics platform with open-source architecture",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["robotics", "mechanical", "senior-project"],
    year: "2024",
    priority: 1
  },
  {
    id: 2,
    title: "Autonomous Drone System",
    subtitle: "Vision-Based Navigation Platform",
    description: "Research project focusing on autonomous navigation and obstacle avoidance",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["robotics", "autonomous", "research"],
    year: "2023",
    priority: 2
  },
  {
    id: 3,
    title: "Racing Drivetrain",
    subtitle: "CWRU Motorsports Transmission Design",
    description: "Custom sequential gearbox design for Formula SAE competition",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["motorsports", "mechanical", "design"],
    year: "2023",
    priority: 3
  },
  {
    id: 4,
    title: "Sprag Element Clutches",
    subtitle: "CWRU Motorsports",
    description: "Advanced clutch system design for improved power delivery",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["motorsports", "mechanical"],
    year: "2021-2023",
    priority: 4
  },
  {
    id: 5,
    title: "Robot Arm Control",
    subtitle: "6-DOF Manipulator Project",
    description: "Development of precise control algorithms for industrial automation",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["robotics", "control-systems", "research"],
    year: "2022",
    priority: 5
  },
  {
    id: 6,
    title: "Smart Home IoT System",
    subtitle: "Connected Device Network",
    description: "Development of a scalable IoT platform for home automation and energy management",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["iot", "software", "electrical"],
    year: "2023",
    priority: 6
  },
  {
    id: 7,
    title: "Biomechanical Exoskeleton",
    subtitle: "Assistive Technology for Mobility",
    description: "Design and prototyping of a lower-body exoskeleton for individuals with limited mobility",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["biomedical", "mechanical", "robotics"],
    year: "2022",
    priority: 7
  }
]

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortAttribute, setSortAttribute] = useState<string | null>(null)

  // Memoize sortedProjects to optimize re-renders
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (sortAttribute) {
        if (a.tags.includes(sortAttribute) && !b.tags.includes(sortAttribute)) return -1
        if (!a.tags.includes(sortAttribute) && b.tags.includes(sortAttribute)) return 1
      }
      
      if (selectedTags.length === 0) return a.priority - b.priority
      
      const aRelevance = selectedTags.filter(tag => a.tags.includes(tag)).length
      const bRelevance = selectedTags.filter(tag => b.tags.includes(tag)).length
      
      if (aRelevance !== bRelevance) return bRelevance - aRelevance
      
      return a.priority - b.priority
    })
  }, [selectedTags, sortAttribute])

  return (
    <div className={cn(
      "min-h-screen bg-background-primary text-text-body-primary",
      montserrat.className
    )}>
      {/* Header with social links */}
      <header className="fixed top-0 w-full z-50 bg-background-primary/90 backdrop-blur-sm border-b border-background-secondary">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-light tracking-wider"
          >
            Portfolio
          </motion.h1>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="ghost" size="icon" className="hover:bg-background-secondary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Button variant="ghost" size="icon" className="hover:bg-background-secondary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <ErrorBoundary>
        <main className="container mx-auto px-4 pt-24 pb-16">
          {/* Hero section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-text-heading">
              Engineering Portfolio
            </h2>
            <p className="text-xl text-header-primary font-light">
              Robotics & Motorsport Engineering
            </p>
          </motion.section>

          {/* Attribute sort buttons */}
          <AttributeSort
            attributes={allTags}
            selectedAttribute={sortAttribute}
            onSelectAttribute={setSortAttribute}
          />

          {/* Tags filter */}
          <section className="mb-12">
            <h3 className="text-xl mb-4 font-light">Project Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className={cn(
                    "cursor-pointer text-sm py-1 px-3",
                    selectedTags.includes(tag)
                      ? "bg-header-primary hover:bg-header-secondary"
                      : "bg-background-secondary hover:bg-background-tertiary"
                  )}
                  onClick={() => {
                    setSelectedTags(prev =>
                      prev.includes(tag)
                        ? prev.filter(t => t !== tag)
                        : [...prev, tag]
                    )
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </section>

          {/* Projects grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-background-secondary border-none hover:bg-background-tertiary transition-colors duration-200">
                  <CardHeader>
                    <div className="relative h-48 mb-4">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        fill
                        className="rounded-lg object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-xl font-light tracking-wide">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-header-primary">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-text-body-secondary mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge 
                          key={tag}
                          variant="outline"
                          className="bg-background-primary/50 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </section>
        </main>
      </ErrorBoundary>

      {/* Footer with signature */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-background-secondary bg-footer-primary">
        <Image
          src="/placeholder.svg"
          alt="Signature"
          width={200}
          height={60}
          className="mx-auto opacity-70"
        />
        <p className="text-sm text-text-body-secondary mt-4">
          © {new Date().getFullYear()} Engineering Portfolio
        </p>
      </footer>
    </div>
  )
}

