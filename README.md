# Zekinat-s-Portfolio
import React, { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

const projects = [
  {
    title: "VoxClips",
    date: "November 2022 – March 2024",
    website: "#",
    image: "/images/voxclips.png",
    testimonial: "Zekinat's leadership and attention to user needs were crucial to our product's success. – VoxClips CEO",
    problem: "Podcasters face challenges in organic growth and discoverability due to limited visual tools and distribution capabilities.",
    solution: "VoxClips provided a user-friendly platform for creating engaging cartoon videos from audio clips, improving shareability and reach.",
    role: "Zekinat led product development, prioritized features, conducted user research, and managed agile sprints.",
    metrics: [
      "Reduced app latency by 30% through backend optimization.",
      "Redesigned onboarding flow, increasing activation rates by 15%.",
      "Implemented push notifications, raising DAU by 22%."
    ],
    tools: ["MixPanel", "UI/UX Design"],
  },
  {
    title: "Konectar",
    date: "January 2023 – October 2023",
    website: "#",
    image: "/images/konectar.png",
    testimonial: "Thanks to Zekinat’s customer-centric thinking, Konectar launched with a product that truly met farmers’ needs. – Project Lead",
    problem: "Inefficiencies in the agricultural supply chain limited real-time access to wholesale buyers and fair pricing for farmers.",
    solution: "Built a B2B marketplace to connect farmers and wholesale buyers in real time, eliminating middlemen.",
    role: "Zekinat gathered customer feedback, supported agile sprints, and delivered product demos to stakeholders.",
    metrics: [
      "User adoption increased significantly post feature implementation based on direct feedback.",
      "Improved sprint delivery timelines by over 20%."
    ],
    tools: ["API integrations", "Agile methodology"],
  },
  {
    title: "iPayFast",
    date: "June 2024 – Present",
    website: "https://ipayfast.co/",
    image: "/images/ipayfast.png",
    testimonial: "Zekinat was instrumental in helping us understand our customers better and design a seamless crypto experience. – iPayFast Founder",
    problem: "Digital currency transactions in West Africa face issues of security, complexity, and trust.",
    solution: "iPayFast simplifies and secures digital currency transactions for users in Nigeria, Kenya, and Ghana.",
    role: "Zekinat led strategic growth, product design, and compliance efforts to ensure market fit.",
    metrics: [
      "Boosted repeat transactions and response rates through CRM-driven communication workflows.",
      "Improved activation rates by 15% via redesign of onboarding flows."
    ],
    tools: ["Hubspot", "Data Analysis"],
  },
  {
    title: "Quantumica Website (JimPaul Real Estate)",
    date: "February 2025 – March 2025",
    website: "https://jimpaul.ng",
    image: "/images/quantumica.png",
    testimonial: "Zekinat delivered a clean, functional, and high-converting real estate website that impressed both users and stakeholders.",
    problem: "JimPaul Real Estate needed a website that reflected credibility and generated quality leads.",
    solution: "Rebuilt the website using a Lightsource BP-inspired design. Added lead forms, SEO optimizations, blog, and product showcase sections.",
    role: "Led UX strategy, coordinated development sprints, integrated HubSpot, and oversaw QA and deployment.",
    metrics: [
      "Increased web lead conversion by 40% after relaunch.",
      "Improved SEO ranking by 3x through technical SEO upgrades.",
      "Reduced bounce rate by 20% after design overhaul."
    ],
    tools: ["Framer", "Webflow", "Google Analytics", "HubSpot"],
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="p-6 md:p-10 bg-white text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Selected Case Studies</h2>

      <Carousel className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <CarouselItem key={idx}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 italic mb-2">{project.date}</p>
                <p className="mb-2"><strong>Problem:</strong> {project.problem}</p>
                <p className="mb-2"><strong>Solution:</strong> {project.solution}</p>
                <p className="mb-2"><strong>Role:</strong> {project.role}</p>
                <ul className="list-disc ml-6 mb-2">
                  {project.metrics.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mb-2"><strong>Tools:</strong> {project.tools.join(", ")}</p>
                {project.testimonial && (
                  <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 my-4">{project.testimonial}</blockquote>
                )}
                {project.website && project.website !== "#" && (
                  <Button variant="outline" className="mt-2" asChild>
                    <a href={project.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </Button>
                )}
              </CardContent>
            </motion.div>
          </CarouselItem>
        ))}
      </Carousel>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-3xl overflow-y-auto max-h-[90vh]">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover rounded-xl mb-4" />
              <p className="text-sm text-gray-600 italic mb-2">{selectedProject.date}</p>
              <p className="mb-2"><strong>Problem:</strong> {selectedProject.problem}</p>
              <p className="mb-2"><strong>Solution:</strong> {selectedProject.solution}</p>
              <p className="mb-2"><strong>Role:</strong> {selectedProject.role}</p>
              <ul className="list-disc ml-6 mb-2">
                {selectedProject.metrics.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mb-2"><strong>Tools:</strong> {selectedProject.tools.join(", ")}</p>
              <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 my-4">{selectedProject.testimonial}</blockquote>
              {selectedProject.website && selectedProject.website !== "#" && (
                <Button variant="outline" className="mt-4" asChild>
                  <a href={selectedProject.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </Button>
              )}
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
}
