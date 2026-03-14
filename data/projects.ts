/**
 * Project data for the portfolio Projects section and case study pages.
 */
export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  problemStatement: string;
  technologies: string[];
  architecture: string;
  challenges: string[];
  screenshots: string[];
  githubUrl: string;
  image: string;
  imagePosition?: string;
}

export const projects: Project[] = [
  {
    slug: "rent-a-ride",
    title: "Rent-a-Ride",
    description:
      "Full-stack car rental web application with separate customer and admin workflows. Features an admin dashboard with CRUD operations for vehicle inventory, third-party CarAPI integration for vehicle specs, RESTful APIs for auth and bookings, and scalable image storage via AWS S3.",
    overview:
      "Rent-a-Ride is a full-stack car rental platform built to streamline the booking experience for customers while giving administrators complete control over vehicle inventory. The app supports separate workflows for customers (browsing, booking) and admins (inventory management, availability).",
    problemStatement:
      "Existing car rental solutions often lack intuitive admin tools for managing inventory or require expensive enterprise software. Rent-a-Ride addresses this by providing an all-in-one solution where admins can add vehicles, manage availability, and track bookings — while customers get a clean, searchable interface to find and reserve cars.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3", "CarAPI"],
    architecture:
      "The app uses a React frontend with a Node.js/Express backend. RESTful APIs handle authentication, bookings, and inventory. MongoDB stores vehicle data, user accounts, and booking records with related schemas. AWS S3 handles scalable image storage for vehicle photos. A third-party CarAPI populates vehicle specifications dynamically.",
    challenges: [
      "Integrating a third-party CarAPI while maintaining a consistent data model",
      "Designing MongoDB schemas to support complex relationships between vehicles, bookings, and users",
      "Implementing role-based access for customer vs. admin workflows",
      "Managing image uploads and cleanup with AWS S3",
    ],
    screenshots: [
      "https://placehold.co/800x450/1e293b/94a3b8?text=Rent-a-Ride+Home",
      "https://placehold.co/800x450/1e293b/94a3b8?text=Admin+Dashboard",
      "https://placehold.co/800x450/1e293b/94a3b8?text=Booking+Flow",
    ],
    githubUrl: "https://github.com/JoshRaimo/rent-a-ride",
    image: "/rent-a-ride.png",
    imagePosition: "25% center",
  },
  {
    slug: "ssusocial",
    title: "SSUSocial",
    description:
      "Social media platform for user profiles and content sharing. Built profile image upload with AWS S3 integration and automatic cleanup, responsive frontend for posts and user interaction, and dynamic profile UI with default image fallbacks.",
    overview:
      "SSUSocial is a social media platform enabling users to create profiles, share content, and interact with posts. Built as a collaborative academic project using Agile practices, it demonstrates full-stack development with a focus on user-generated content and media handling.",
    problemStatement:
      "Social platforms need reliable image upload, storage, and display — plus a responsive UI that works across devices. SSUSocial was built to explore these challenges: managing profile images, handling obsolete uploads, and providing a smooth experience with default fallbacks when images are missing.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3"],
    architecture:
      "React powers the frontend with responsive components for profiles, posts, and interactions. The Node.js/Express backend provides routes for user data, posts, and image uploads. MongoDB stores user profiles and content. AWS S3 hosts profile images with automatic cleanup of obsolete files when users update their avatars.",
    challenges: [
      "Implementing AWS S3 integration for profile image uploads with proper cleanup",
      "Designing dynamic profile UI with default image fallbacks",
      "Collaborating with Agile practices for feature planning and delivery",
      "Building responsive frontend components for diverse content types",
    ],
    screenshots: [
      "https://placehold.co/800x450/1e293b/94a3b8?text=SSUSocial+Feed",
      "https://placehold.co/800x450/1e293b/94a3b8?text=Profile+Page",
      "https://placehold.co/800x450/1e293b/94a3b8?text=Content+Sharing",
    ],
    githubUrl: "https://github.com/JoshRaimo/ssusocial",
    image: "/ssusocial.png",
    imagePosition: "75% center",
  },
];

/**
 * Get a project by slug for dynamic routes.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
