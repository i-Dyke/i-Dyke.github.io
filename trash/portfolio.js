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
var link_1 = require("next/link");
var card_1 = require("@/components/ui/card");
var google_1 = require("next/font/google");
var montserrat = (0, google_1.Montserrat)({ subsets: ['latin'] });
// Enhanced project data with more examples
var projects = [
    {
        id: 1,
        title: "MOHRA",
        subtitle: "Machined Open Source Humanoid Robot",
        description: "Senior Project 2024 - Advanced bipedal robotics platform with open-source architecture",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["robotics", "mechanical", "senior-project"],
        year: "2024"
    },
    {
        id: 2,
        title: "Autonomous Drone System",
        subtitle: "Vision-Based Navigation Platform",
        description: "Research project focusing on autonomous navigation and obstacle avoidance",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["robotics", "autonomous", "research"],
        year: "2023"
    },
    {
        id: 3,
        title: "Racing Drivetrain",
        subtitle: "CWRU Motorsports Transmission Design",
        description: "Custom sequential gearbox design for Formula SAE competition",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["motorsports", "mechanical", "design"],
        year: "2023"
    },
    {
        id: 4,
        title: "Sprag Element Clutches",
        subtitle: "CWRU Motorsports",
        description: "Advanced clutch system design for improved power delivery",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["motorsports", "mechanical"],
        year: "2021-2023"
    },
    {
        id: 5,
        title: "Robot Arm Control",
        subtitle: "6-DOF Manipulator Project",
        description: "Development of precise control algorithms for industrial automation",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["robotics", "control-systems", "research"],
        year: "2022"
    }
];
var allTags = Array.from(new Set(projects.flatMap(function (project) { return project.tags; })));
function Home() {
    var _a = (0, react_1.useState)([]), selectedTags = _a[0], setSelectedTags = _a[1];
    // New sorting logic based on tag relevance
    var sortedProjects = __spreadArray([], projects, true).sort(function (a, b) {
        if (selectedTags.length === 0)
            return 0;
        var aRelevance = selectedTags.filter(function (tag) { return a.tags.includes(tag); }).length;
        var bRelevance = selectedTags.filter(function (tag) { return b.tags.includes(tag); }).length;
        return bRelevance - aRelevance;
    });
    return className = { cn: function (, montserrat) { }, : .className } >
        { /* Header with social links */}
        < header;
    className = "fixed top-0 w-full z-50 bg-[#1A1A2E]/90 backdrop-blur-sm border-b border-[#2A2A4E]" >
        className;
    "container mx-auto px-4 py-4 flex justify-between items-center" >
        initial;
    {
        {
            opacity: 0, y;
            -20;
        }
    }
    animate = {};
    {
        opacity: 1, y;
        0;
    }
}
className = "text-2xl font-light tracking-wider"
    >
        Portfolio
    < /motion.h1>
    < div;
className = "flex gap-4" >
    href;
"https://linkedin.com";
target = "_blank" >
    variant;
"ghost";
size = "icon";
className = "hover:bg-[#2A2A4E]" >
    className;
"h-5 w-5" /  >
    className;
"sr-only" > LinkedIn < /span>
    < /Button>
    < /Link>
    < link_1.default;
href = "https://github.com";
target = "_blank" >
    variant;
"ghost";
size = "icon";
className = "hover:bg-[#2A2A4E]" >
    className;
"h-5 w-5" /  >
    className;
"sr-only" > GitHub < /span>
    < /Button>
    < /Link>
    < /div>
    < /div>
    < /header>;
{ /* Main content */ }
className;
"container mx-auto px-4 pt-24 pb-16" >
    { /* Hero section */}
    < framer_motion_1.motion.section;
initial = {};
{
    opacity: 0;
}
animate = {};
{
    opacity: 1;
}
transition = {};
{
    duration: 0.6;
}
className = "py-16 text-center"
    >
        className;
"text-4xl md:text-6xl font-light tracking-wider mb-6" >
    Engineering;
Portfolio
    < /h2>
    < p;
className = "text-xl text-blue-300 font-light" >
    Robotics & Motorsport;
Engineering
    < /p>
    < /motion.section>;
{ /* Tags filter */ }
className;
"mb-12" >
    className;
"text-xl mb-4 font-light" > Project;
Categories: /h3>
    < div;
className = "flex flex-wrap gap-2" >
    { allTags: allTags, : .map(function (tag) { return key = { tag: tag }; }, variant = { selectedTags: selectedTags, : .includes(tag) ? "default" : "secondary" }, className = { cn: function (, selectedTags) { }, : .includes(tag)
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-[#2A2A4E] hover:bg-[#3A3A5E]" }) };
onClick = {}();
{
    setSelectedTags(function (prev) {
        return prev.includes(tag)
            ? prev.filter(function (t) { return t !== tag; })
            : __spreadArray(__spreadArray([], prev, true), [tag], false);
    });
}
    >
        { tag: tag }
    < /Badge>;
/div>
    < /section>;
{ /* Projects grid */ }
className;
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
    { sortedProjects: sortedProjects, : .map(function (project, index) { return key = { project: project, : .id }; }, initial = {}, { opacity: 0, y: 20 }) };
animate = {};
{
    opacity: 1, y;
    0;
}
transition = {};
{
    delay: index * 0.1;
}
    >
        className;
"bg-[#2A2A4E] border-none hover:bg-[#3A3A5E] transition-colors duration-200" >
    className;
"relative h-48 mb-4" >
    src;
{
    project.image;
}
alt = { project: project, : .title };
fill;
className = "rounded-lg object-cover"
    /  >
    /div>
    < card_1.CardTitle;
className = "text-xl font-light tracking-wide" >
    { project: project, : .title }
    < /CardTitle>
    < card_1.CardDescription;
className = "text-blue-300" >
    { project: project, : .subtitle }
    < /CardDescription>
    < /CardHeader>
    < card_1.CardContent >
    className;
"text-sm text-gray-300 mb-4" >
    { project: project, : .description }
    < /p>
    < div;
className = "flex flex-wrap gap-2" >
    { project: project, : .tags.map(function (tag) { return key = { tag: tag }; }, variant = "outline", className = "bg-[#1A1A2E]/50 text-xs"
            >
                { tag: tag }
            < /Badge>) }
    < /div>
    < /CardContent>
    < /Card>
    < /motion.div>;
/section>
    < /main>;
{ /* Footer with signature */ }
className;
"container mx-auto px-4 py-8 text-center border-t border-[#2A2A4E]" >
    src;
"/placeholder.svg";
alt = "Signature";
width = { 200:  };
height = { 60:  };
className = "mx-auto opacity-70"
    /  >
    className;
"text-sm text-gray-400 mt-4" >
;
{
    new Date().getFullYear();
}
Engineering;
Portfolio
    < /p>
    < /footer>
    < /div>;
