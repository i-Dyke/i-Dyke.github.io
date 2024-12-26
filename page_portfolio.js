'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var badge_1 = require("../components/ui/badge");
var button_1 = require("../components/ui/button");
var card_1 = require("../components/ui/card");
var utils_1 = require("../lib/utils");
var google_1 = require("next/font/google");
var ErrorBoundary_1 = require("../components/ErrorBoundary");
var AttributeSort_1 = require("../components/AttributeSort");
var montserrat = (0, google_1.Montserrat)({ subsets: ['latin'] });
// Enhanced project data with more examples and priority attribute
var projects = [
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
];
var allTags = Array.from(new Set(projects.flatMap(function (project) { return project.tags; })));
function Home() {
    var _a = (0, react_1.useState)([]), selectedTags = _a[0], setSelectedTags = _a[1];
    var _b = (0, react_1.useState)(null), sortAttribute = _b[0], setSortAttribute = _b[1];
    // Memoize sortedProjects to optimize re-renders
    var sortedProjects = (0, react_1.useMemo)(function () {
        return __spreadArray([], projects, true).sort(function (a, b) {
            if (sortAttribute) {
                if (a.tags.includes(sortAttribute) && !b.tags.includes(sortAttribute))
                    return -1;
                if (!a.tags.includes(sortAttribute) && b.tags.includes(sortAttribute))
                    return 1;
            }
            if (selectedTags.length === 0)
                return a.priority - b.priority;
            var aRelevance = selectedTags.filter(function (tag) { return a.tags.includes(tag); }).length;
            var bRelevance = selectedTags.filter(function (tag) { return b.tags.includes(tag); }).length;
            if (aRelevance !== bRelevance)
                return bRelevance - aRelevance;
            return a.priority - b.priority;
        });
    }, [selectedTags, sortAttribute]);
    return (<div className={(0, utils_1.cn)("min-h-screen bg-background-primary text-text-body-primary", montserrat.className)}>
      {/* Header with social links */}
      <header className="fixed top-0 w-full z-50 bg-background-primary/90 backdrop-blur-sm border-b border-background-secondary">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <framer_motion_1.motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-light tracking-wider">
            Portfolio
          </framer_motion_1.motion.h1>
          <div className="flex gap-4">
            <link_1.default href="https://linkedin.com" target="_blank">
              <button_1.Button variant="ghost" size="icon" className="hover:bg-background-secondary">
                <lucide_react_1.Linkedin className="h-5 w-5"/>
                <span className="sr-only">LinkedIn</span>
              </button_1.Button>
            </link_1.default>
            <link_1.default href="https://github.com" target="_blank">
              <button_1.Button variant="ghost" size="icon" className="hover:bg-background-secondary">
                <lucide_react_1.Github className="h-5 w-5"/>
                <span className="sr-only">GitHub</span>
              </button_1.Button>
            </link_1.default>
          </div>
        </div>
      </header>

      {/* Main content */}
      <ErrorBoundary_1.default>
        <main className="container mx-auto px-4 pt-24 pb-16">
          {/* Hero section */}
          <framer_motion_1.motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-16 text-center">
            <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-text-heading">
              Engineering Portfolio
            </h2>
            <p className="text-xl text-header-primary font-light">
              Robotics & Motorsport Engineering
            </p>
          </framer_motion_1.motion.section>

          {/* Attribute sort buttons */}
          <AttributeSort_1.default attributes={allTags} selectedAttribute={sortAttribute} onSelectAttribute={setSortAttribute}/>

          {/* Tags filter */}
          <section className="mb-12">
            <h3 className="text-xl mb-4 font-light">Project Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(function (tag) { return (<badge_1.Badge key={tag} variant={selectedTags.includes(tag) ? "default" : "secondary"} className={(0, utils_1.cn)("cursor-pointer text-sm py-1 px-3", selectedTags.includes(tag)
                ? "bg-header-primary hover:bg-header-secondary"
                : "bg-background-secondary hover:bg-background-tertiary")} onClick={function () {
                setSelectedTags(function (prev) {
                    return prev.includes(tag)
                        ? prev.filter(function (t) { return t !== tag; })
                        : __spreadArray(__spreadArray([], prev, true), [tag], false);
                });
            }}>
                  {tag}
                </badge_1.Badge>); })}
            </div>
          </section>

          {/* Projects grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map(function (project, index) { return (<framer_motion_1.motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <card_1.Card className="bg-background-secondary border-none hover:bg-background-tertiary transition-colors duration-200">
                  <card_1.CardHeader>
                    <div className="relative h-48 mb-4">
                      <image_1.default src={project.image} alt={"".concat(project.title, " - ").concat(project.subtitle)} fill className="rounded-lg object-cover" loading="lazy"/>
                    </div>
                    <card_1.CardTitle className="text-xl font-light tracking-wide">
                      {project.title}
                    </card_1.CardTitle>
                    <card_1.CardDescription className="text-header-primary">
                      {project.subtitle}
                    </card_1.CardDescription>
                  </card_1.CardHeader>
                  <card_1.CardContent>
                    <p className="text-sm text-text-body-secondary mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(function (tag) { return (<badge_1.Badge key={tag} variant="outline" className="bg-background-primary/50 text-xs">
                          {tag}
                        </badge_1.Badge>); })}
                    </div>
                  </card_1.CardContent>
                </card_1.Card>
              </framer_motion_1.motion.div>); })}
          </section>
        </main>
      </ErrorBoundary_1.default>

      {/* Footer with signature */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-background-secondary bg-footer-primary">
        <image_1.default src="/placeholder.svg" alt="Signature" width={200} height={60} className="mx-auto opacity-70"/>
        <p className="text-sm text-text-body-secondary mt-4">
          © {new Date().getFullYear()} Engineering Portfolio
        </p>
      </footer>
    </div>);
}
