```markdown
# Victor's Tech Blog

## Project Overview

This project is a personal technology blog created by Victor Grisson. It serves as a platform to document and share insights from homelab experiments, network configurations, infrastructure projects, and explorations in information systems. The blog aims to showcase hands-on learning and experiences in various tech domains.

The application is built with a modern web development stack, ensuring a responsive and interactive user experience.

**Key Technical Goals & Topics Covered:**
* **Homelab Infrastructure:** Detailed documentation of a home lab setup simulating enterprise-grade IT infrastructure, including virtualization (Unraid), OPNsense firewall, 10GbE networking, and power resilience with UPS monitoring.
* **Networking:** In-depth explanations of network setup, IP schema, 10GbE connectivity challenges and solutions, wireless infrastructure, and planned VLAN segmentation for enhanced security and organization.
* **Storage Solutions:** Overview of the Unraid server configurations, including array details, cache pool setups for performance, and data management strategies for redundancy and backup.
* **Security:** Implementation details of network security measures using OPNsense, Cloudflare Tunnels, SWAG for reverse proxy, and planned enhancements like VLANs.
* **Web Development:** Showcasing web development projects, including this blog itself and other portfolio sites, detailing tech stacks (Next.js, React, Tailwind CSS) and deployment strategies (Firebase, GitHub Actions).
* **Docker & Virtualization:** Extensive use of Docker on Unraid to host a variety of services, from media servers (Plex, Jellyfin) to development tools (code-server) and photo management (Immich).

## Technologies Used

This project leverages a modern and robust technology stack:

* **Frontend Framework:** React
* **Build Tool:** Vite
* **Language:** TypeScript
* **UI Components:** Shadcn UI
* **Styling:** Tailwind CSS & Tailwind CSS Typography plugin
* **Routing:** React Router DOM
* **State Management/Data Fetching:** TanStack React Query
* **Component Libraries & Utilities:**
    * Lucide React (Icons)
    * Class Variance Authority (for styling variants)
    * clsx (for constructing className strings)
    * tailwind-merge (for merging Tailwind CSS classes)
    * date-fns (for date manipulation)
    * Embla Carousel React (for carousels)
    * Sonner & react-hot-toast (for notifications/toasts)
    * Recharts (for charts)
    * Vaul (for drawers)
* **Linting & Formatting:** ESLint with TypeScript ESLint, Prettier (implied by common practice with this stack)

## Project Structure

The project follows a standard structure for Vite-based React applications, with clear separation of concerns.

```
.
├── public/
│   └── robots.txt              # Instructions for web crawlers
├── src/
│   ├── components/
│   │   ├── ui/                 # Shadcn UI components (accordion, button, card, etc.)
│   │   ├── BlogContent.tsx     # Main content display area, switches based on selected topic
│   │   ├── BlogFooter.tsx      # Footer component with copyright and social links
│   │   ├── BlogHeader.tsx      # Header component with blog title and sidebar trigger
│   │   ├── BlogHero.tsx        # Hero section for the main page (currently not used on Index.tsx but present)
│   │   ├── BlogPost.tsx        # Component to display individual blog post previews
│   │   ├── FeaturedPosts.tsx   # Component to display a grid of featured blog posts (currently not used on Index.tsx but present)
│   │   ├── HomelabNetwork.tsx  # Detailed content for Homelab Infrastructure section
│   │   ├── NetworkSetupDetails.tsx # Detailed content for Network Setup section
│   │   ├── SecurityDetails.tsx   # Detailed content for Security section
│   │   ├── StorageSolutionsDetails.tsx # Detailed content for Storage Solutions section
│   │   ├── VlansNetworkingDetails.tsx # Detailed content for VLANs & Advanced Networking section
│   │   └── WebDevelopmentProjects.tsx # Detailed content for Web Development Projects
│   ├── hooks/
│   │   ├── use-mobile.tsx      # Custom hook to detect mobile screen sizes
│   │   └── use-toast.ts        # Custom hook for managing toast notifications
│   ├── lib/
│   │   ├── blogData.ts         # Data source for blog posts and their content
│   │   └── utils.ts            # Utility functions, e.g., `cn` for merging class names
│   ├── pages/
│   │   ├── BlogPostPage.tsx    # Page to display a single, full blog post
│   │   ├── Index.tsx           # Main landing page of the blog, orchestrates content display
│   │   └── NotFound.tsx        # 404 error page
│   ├── App.css                 # Global CSS styles (though primarily using Tailwind)
│   ├── App.tsx                 # Root application component, sets up routing and providers
│   ├── index.css               # Main CSS entry point, imports Tailwind CSS layers
│   ├── main.tsx                # Main entry point for the React application
│   └── vite-env.d.ts           # TypeScript definitions for Vite environment variables
├── .eslintrc.cjs               # ESLint configuration (older file, likely superseded by eslint.config.js)
├── eslint.config.js            # ESLint configuration for code linting
├── index.html                  # Main HTML file for the Vite application
├── package-lock.json           # Records exact versions of dependencies
├── package.json                # Project metadata, dependencies, and scripts
├── postcss.config.js           # PostCSS configuration (for Tailwind CSS and Autoprefixer)
├── README.md                   # This file - project explanation and documentation
├── tailwind.config.ts          # Tailwind CSS configuration file
├── tsconfig.app.json           # TypeScript configuration for the application source code
├── tsconfig.json               # Root TypeScript configuration, references other tsconfig files
├── tsconfig.node.json          # TypeScript configuration for Node.js-specific files (e.g., Vite config)
└── vite.config.ts              # Vite build tool configuration
```

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_URL>
    cd <YOUR_PROJECT_NAME>
    ```

2.  **Install dependencies:**
    Ensure you have Node.js and npm installed.
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:3000`.

4.  **Build for production:**
    ```sh
    npm run build
    ```
    This command compiles the TypeScript code and bundles the application for production into the `dist` directory.

## Key Features & Functionality

* **Dynamic Content Sections:** The main page (`Index.tsx`) uses a sidebar navigation to switch between different content sections (e.g., "Homelab Infrastructure", "Network Setup", "Web Development").
* **Blog Post Display:**
    * Latest posts are showcased on the homepage.
    * Individual blog posts are rendered on dedicated pages (`/blog/:slug`) with their full content.
* **Responsive Design:** Utilizes Tailwind CSS and custom hooks (`use-mobile.tsx`) for a responsive experience across different screen sizes.
* **UI Components:** Leverages Shadcn UI for a consistent and modern set of UI elements, including a collapsible sidebar, cards, buttons, tooltips, etc.
* **Client-Side Routing:** Uses React Router DOM for navigating between pages without full page reloads.
* **Data Fetching (Client-Side):** TanStack React Query is set up for managing asynchronous data, though its specific use cases are not fully detailed in the provided files beyond setup in `App.tsx`.

## Development Practices

* **Modular Components:** The UI is broken down into reusable React components located primarily in `src/components/`.
* **TypeScript:** The entire frontend is written in TypeScript for improved type safety and developer experience.
* **Styling with Tailwind CSS:** Utility-first CSS framework used for styling, with custom configurations in `tailwind.config.ts`.
* **Code Quality:** ESLint is configured for static code analysis to maintain code quality and consistency.
* **Path Aliases:** Uses `@/*` alias for cleaner import paths, configured in `tsconfig.json` and `vite.config.ts`.

## Deployment

While the original README mentions deployment via Lovable, the project structure and `package.json` scripts (`npm run build`) suggest a standard Vite build process that outputs static assets to the `dist` folder. These assets can then be deployed to any static hosting provider.

The `WebDevelopmentProjects.tsx` component also describes automated deployment pipelines using GitHub Actions to Firebase Hosting for other projects, indicating a familiarity with CI/CD practices.

```