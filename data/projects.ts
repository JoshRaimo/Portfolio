/**
 * Project data for the portfolio Projects section.
 * Add or update projects here.
 */
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Rent-a-Ride",
    description:
      "Full-stack car rental web application with separate customer and admin workflows. Features an admin dashboard with CRUD operations for vehicle inventory, third-party CarAPI integration for vehicle specs, RESTful APIs for auth and bookings, and scalable image storage via AWS S3.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3", "CarAPI"],
    githubUrl: "https://github.com/JoshRaimo/rent-a-ride",
    image: "https://placehold.co/600x340/1e293b/94a3b8?text=Rent-a-Ride",
  },
  {
    title: "SSUSocial",
    description:
      "Social media platform for user profiles and content sharing. Built profile image upload with AWS S3 integration and automatic cleanup, responsive frontend for posts and user interaction, and dynamic profile UI with default image fallbacks.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3"],
    githubUrl: "https://github.com/JoshRaimo/ssusocial",
    image: "https://placehold.co/600x340/1e293b/94a3b8?text=SSUSocial",
  },
];
