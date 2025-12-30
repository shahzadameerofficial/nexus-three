import phoenixRewardsPoster from "@/assets/projects/phoenix-rewards-poster.png";
import retailerConnectPoster from "@/assets/projects/retailer-connect-poster.png";
import nymaCastPoster from "@/assets/projects/nyma-cast-poster.png";
import zibaPropertyPoster from "@/assets/projects/ziba-property-poster.png";
import hrmPoster from "@/assets/projects/hrm-poster.png";
import atsPoster from "@/assets/projects/ats-poster.png";
import researchDecodePoster from "@/assets/projects/research-decode-poster.png";
import showbizhubPoster from "@/assets/projects/showbizhub-poster.png";
import firstBizAdvisoryPoster from "@/assets/projects/first-biz-advisory-poster.png";
import nymoDentalPoster from "@/assets/projects/nymo-dental-poster.png";

// Phoenix Rewards Screenshots
import phoenixRewards1 from "@/assets/projects/phoenix-rewards-1.png";
import phoenixRewards2 from "@/assets/projects/phoenix-rewards-2.png";
import phoenixRewards3 from "@/assets/projects/phoenix-rewards-3.png";
import phoenixRewards4 from "@/assets/projects/phoenix-rewards-4.png";
import phoenixRewards5 from "@/assets/projects/phoenix-rewards-5.png";
import phoenixRewards6 from "@/assets/projects/phoenix-rewards-6.png";

// Retailer Connect Screenshots
import retailerConnect1 from "@/assets/projects/retailer-connect-1.jpeg";
import retailerConnect2 from "@/assets/projects/retailer-connect-2.jpeg";

// Ziba Property Screenshots
import zibaProperty1 from "@/assets/projects/ziba-property-1.png";
import zibaProperty2 from "@/assets/projects/ziba-property-2.png";
import zibaProperty3 from "@/assets/projects/ziba-property-3.png";

// HRM Screenshots
import hrm1 from "@/assets/projects/hrm-1.png";
import hrm2 from "@/assets/projects/hrm-2.png";

// ATS Screenshots
import ats1 from "@/assets/projects/ats-1.png";
import ats2 from "@/assets/projects/ats-2.png";
import ats3 from "@/assets/projects/ats-3.png";
import ats4 from "@/assets/projects/ats-4.png";

// Research Decode Screenshots
import researchDecode1 from "@/assets/projects/research-decode-1.png";
import researchDecode2 from "@/assets/projects/research-decode-2.png";

// Nymo Dental Screenshots
import nymoDental1 from "@/assets/projects/nymo-dental-1.png";
import nymoDental2 from "@/assets/projects/nymo-dental-2.png";
import nymoDental3 from "@/assets/projects/nymo-dental-3.png";
import nymoDental4 from "@/assets/projects/nymo-dental-4.png";
import nymoDental5 from "@/assets/projects/nymo-dental-5.png";
import nymoDental6 from "@/assets/projects/nymo-dental-6.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  image: string;
  screenshots: string[];
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "phoenix-rewards",
    title: "Phoenix Rewards – Loyalty Dashboard with Rewards & Gamification",
    category: "Web Development",
    client: "CMC Incentives",
    image: phoenixRewardsPoster,
    screenshots: [phoenixRewards1, phoenixRewards2, phoenixRewards3, phoenixRewards4, phoenixRewards5, phoenixRewards6],
    shortDescription: "Enterprise loyalty and gamification platform featuring admin dashboards, participant portals, and interactive reward systems.",
    fullDescription: "<p><strong>Phoenix Rewards</strong> is a comprehensive <em>loyalty and gamification platform</em> designed to drive customer engagement and reward program participation. Built for <strong>CMC Incentives</strong>, this enterprise-grade solution transforms how businesses connect with their customers through innovative reward mechanics.</p><p>The solution features a powerful <em>Admin Dashboard</em> for complete program management, including participant tracking, reward configuration, and real-time analytics. Administrators can create and manage quizzes, spin-to-win games, and point allocation rules with intuitive controls.</p><p>The dynamic <em>Participant Portal</em> provides users with an engaging experience where they can earn points, track their progress, redeem rewards from the catalog, and participate in interactive games. The platform supports multi-tier reward structures and personalized user journeys.</p>",
    technologies: ["Laravel", "SQL", "PHP", "Angular JS", "Bootstrap", "SCSS", "TypeScript", "JavaScript"],
    features: [
      "Admin Dashboard for managing participants, rewards, and points",
      "Gamification settings with quiz and spin-to-win games",
      "Real-time analytics and reporting dashboard",
      "Participant Portal with points tracking and redemption",
      "Responsive design optimized for all devices",
      "Secure API integration and data management"
    ],
    challenge: "The client needed a scalable loyalty platform that could engage participants through gamification while providing administrators with complete control over reward programs, user management, and detailed analytics.",
    solution: "We developed a dual-portal system using Angular for the frontend and Laravel for the backend. The Admin Dashboard provides comprehensive tools for managing quizzes, spinner games, point allocations, and participant tracking. The Participant Portal offers an engaging experience with interactive games, real-time point balances, and seamless reward redemption."
  },
  {
    id: "retailer-connect",
    title: "Retailer Connect – Complete POS & Retail Management System",
    category: "Web Development",
    client: "Retail Solutions",
    image: retailerConnectPoster,
    screenshots: [retailerConnect1, retailerConnect2],
    shortDescription: "Full-featured Point of Sale and retail management system for supermarkets, retail shops, and small businesses.",
    fullDescription: "<p><strong>Retailer Connect</strong> is a powerful, all-in-one <em>POS and Retail Management System</em> built for modern retail operations. Designed specifically for retail shops, supermarkets, and small businesses, the platform streamlines daily operations with intelligent automation and real-time data insights.</p><p>The intuitive dashboard provides comprehensive visibility into <em>sales, purchases, expenses, inventory, customers, and suppliers</em>. Retailers can track stock levels with automated alerts, manage multi-branch operations, and generate detailed financial reports with just a few clicks.</p><p>The <strong>Point of Sale</strong> interface enables lightning-fast checkout with barcode scanning, multiple payment methods including <em>Card, Cash, and Split Bill</em>, and seamless receipt generation. The system also includes employee management with role-based access control for secure operations.</p>",
    technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Custom CSS", "JavaScript", "TypeScript"],
    features: [
      "Real-time sales and purchase tracking dashboard",
      "Complete inventory management with stock alerts",
      "Customer and supplier relationship management",
      "Multi-branch and multi-store support",
      "Expense tracking and financial reporting",
      "Product catalog with barcode scanning",
      "Multiple payment methods (Card, Cash, Split Bill)",
      "Employee management and role-based access"
    ],
    challenge: "Retail businesses needed a unified platform to manage their entire operation—from point of sale transactions to inventory control, customer management, and financial reporting—without juggling multiple disconnected systems.",
    solution: "We built a comprehensive full-stack solution using Angular for a responsive frontend and Node.js with Express for a robust backend API. The MongoDB database ensures fast, flexible data handling for products, transactions, and analytics. The POS interface enables quick product selection, cart management, and seamless checkout with multiple payment options."
  },
  {
    id: "nyma-cast",
    title: "NYMA Cast – Next-Gen Digital Signage Platform",
    category: "Web Development",
    client: "NYMA Technologies",
    image: nymaCastPoster,
    screenshots: [],
    shortDescription: "Advanced SaaS platform for streaming and managing digital signage content across screens worldwide with real-time broadcasting.",
    fullDescription: "<p><strong>NYMA Cast</strong> is a powerful <em>next-generation digital signage software</em> designed for businesses to stream and manage content on screens worldwide. This comprehensive SaaS platform transforms how organizations communicate visually with their audiences across multiple locations.</p><p>The platform enables companies to create and manage <em>screens, playlists, and channels</em> with intuitive controls. Features include role-based user access, <strong>custom canvas design tools</strong>, background music integration, and real-time content scheduling that ensures the right message reaches the right audience at the right time.</p><p>Built for enterprise scale, NYMA Cast serves <em>retail stores, corporate offices, educational institutions</em>, and more. With <strong>Stripe subscription billing</strong> and multi-space organization support, businesses can easily scale their digital signage operations while maintaining centralized control.</p>",
    technologies: ["Laravel 11", "PHP", "SQL", "JavaScript", "Vue 3", "PrimeVue", "TailwindCSS", "SCSS"],
    features: [
      "Screen, playlist, and channel management",
      "Role-based user access control",
      "Custom canvas design tools",
      "Background music integration",
      "Stripe subscription billing",
      "Multi-space organization support",
      "Real-time web player broadcasting",
      "Enterprise-grade content scheduling"
    ],
    challenge: "Businesses needed a unified platform to manage digital signage across multiple locations, with the ability to schedule content, manage user permissions, and handle subscription billing—all while ensuring real-time content delivery to screens worldwide.",
    solution: "We developed NYMA Cast using Laravel 11 for a robust backend API and Vue 3 with PrimeVue for a modern, responsive admin interface. The platform features multi-tenant architecture with Stripe integration for subscription management, real-time web players for instant content broadcasting, and comprehensive tools for canvas design and playlist scheduling."
  },
  {
    id: "ziba-property",
    title: "Ziba Property – Smart Real Estate & Services Platform",
    category: "Web Development",
    client: "Ziba Property Malaysia",
    image: zibaPropertyPoster,
    screenshots: [zibaProperty1, zibaProperty2, zibaProperty3],
    shortDescription: "Global real estate marketplace for buying, selling, renting properties with multi-role user management and comprehensive business services.",
    fullDescription: "<p><strong>Ziba Property</strong> is a dynamic <em>global real estate marketplace</em> that goes beyond traditional property listings. Built for the Malaysia-based company, the platform enables users worldwide to buy, sell, rent, or manage properties with ease and transparency.</p><p>The platform also offers access to a range of <em>business services and household products</em>, creating a comprehensive ecosystem for property owners and seekers. Users benefit from advanced search with interactive maps, verified listings, and detailed property analytics.</p><p>The system features multiple user roles—<strong>agents, seekers, owners, managers, and individuals</strong>—each with tailored dashboards, personalized recommendations, and role-specific tools. The <em>Figma-to-Nuxt</em> implementation ensures a pixel-perfect, responsive experience across all devices.</p>",
    technologies: ["Laravel", "PHP", "SQL", "JavaScript", "Nuxt 3", "Bootstrap", "SCSS", "API Integrations", "Figma to Nuxt"],
    features: [
      "Multi-role user system (agents, seekers, owners, managers)",
      "Advanced property search with filters and maps",
      "Property listing management and showcase",
      "Business services and products marketplace",
      "Role-based tailored dashboards",
      "Form validation and API integrations",
      "Responsive Figma-to-Nuxt design implementation",
      "Global property management capabilities"
    ],
    challenge: "Creating a comprehensive real estate platform that serves multiple user types—from property seekers to agents and managers—while integrating additional business services and maintaining a seamless, personalized experience for users across different regions.",
    solution: "We developed a robust full-stack solution using Laravel for the backend API and Nuxt 3 for a fast, SEO-friendly frontend. The platform features a sophisticated role-based access system, advanced property search with interactive maps, and a modular architecture that supports both real estate listings and business services marketplace functionality."
  },
  {
    id: "hrm",
    title: "HRM – Human Resource Manager System",
    category: "Web Development",
    client: "UK Enterprise Client",
    image: hrmPoster,
    screenshots: [hrm1, hrm2],
    shortDescription: "Comprehensive HR management system for employee management, recruitment, payroll, attendance, and workforce planning.",
    fullDescription: "<p><strong>HRM</strong> is a powerful HR management system built with <em>Laravel and PHP</em>, inspired by leading platforms like HiBOB. Developed for a UK client, this solution provides companies with a fully customizable digital HR platform that centralizes all workforce management needs.</p><p>The platform handles the complete employee lifecycle—from <em>onboarding and job assignments</em> to <strong>performance tracking and offboarding</strong>. HR teams can manage recruitment pipelines, schedule interviews, and streamline the hiring process with automated workflows.</p><p>With comprehensive modules for <em>leave management, timesheet tracking, payroll processing, and financial reporting</em>, HRM eliminates the need for multiple disconnected tools. The <strong>subscription and payment integrations</strong> make it one of the most advanced and scalable HR solutions for modern enterprises.</p>",
    technologies: ["Laravel", "PHP", "SQL", "Bootstrap", "Custom Theme", "API Building", "API Integration"],
    features: [
      "Employee onboarding and job assignments",
      "Recruitment and interview scheduling",
      "Payroll processing and financial reporting",
      "Leave and timesheet management",
      "Attendance tracking with real-time status",
      "Performance tracking and analytics",
      "Subscription and payment integrations",
      "Workforce planning and reporting"
    ],
    challenge: "UK businesses needed a scalable, all-in-one HR platform that could replace multiple disconnected tools for managing employees, payroll, recruitment, attendance, and performance—while providing real-time insights and customizable workflows.",
    solution: "We built HRM using Laravel for a robust backend with comprehensive API architecture. The system features modular HR components including recruitment pipelines, timesheet management, payroll processing, and employee self-service portals. With subscription billing and payment integrations, HRM serves as one of the most advanced and scalable HR solutions for modern enterprises."
  },
  {
    id: "ats",
    title: "ATS – Advanced Application Tracking System",
    category: "Web Development",
    client: "Recruitment Tech Client",
    image: atsPoster,
    screenshots: [ats1, ats2, ats3, ats4],
    shortDescription: "Smart recruitment and hiring software with Trello-style candidate pipelines, customizable career pages, and automated offer letters.",
    fullDescription: "<p><strong>ATS</strong> is a powerful <em>Application Tracking System</em> inspired by TeamTailor, designed to help companies post jobs, track candidates, and streamline hiring workflows. The platform transforms recruitment from a chaotic process into an organized, efficient pipeline.</p><p>Features include multi-role dashboards for <em>companies, employees, candidates, and admins</em>, each tailored to their specific needs. Companies can create <strong>customizable career pages</strong> that showcase their employer brand while attracting top talent.</p><p>The <em>Trello-style candidate pipeline</em> enables intuitive drag-and-drop management of applicants through hiring stages. With <strong>automated offer letters</strong> and SMTP email integration, ATS brings efficiency, transparency, and professionalism to modern recruitment processes.</p>",
    technologies: ["Laravel", "PHP", "SQL", "Vue 3", "Bootstrap", "Vuexy Theme", "SCSS", "SMTP Implementation"],
    features: [
      "Multi-role dashboards (companies, employees, candidates, admins)",
      "Customizable company career pages",
      "Trello-style candidate pipeline management",
      "Automated offer letter generation",
      "SMTP email integration and notifications",
      "Job posting and application tracking",
      "Interview scheduling and management",
      "Comprehensive recruitment analytics"
    ],
    challenge: "Companies needed a modern, user-friendly recruitment platform that could handle the entire hiring lifecycle—from job posting to candidate tracking to offer letters—while providing dedicated access and workflows for different user roles.",
    solution: "We developed ATS using Laravel for a robust backend API and Vue 3 with the Vuexy theme for a polished, modern interface. The platform features intuitive drag-and-drop candidate pipelines, automated email workflows via SMTP, and customizable career pages that allow companies to showcase their employer brand while streamlining the hiring process."
  },
  {
    id: "research-decode",
    title: "Research Decode – Freelance Research Collaboration Platform",
    category: "Web Development",
    client: "Research Decode India",
    image: researchDecodePoster,
    screenshots: [researchDecode1, researchDecode2],
    shortDescription: "Freelance research collaboration platform connecting students with research experts for academic guidance and paid consultancy services.",
    fullDescription: "<p><strong>Research Decode</strong> is a <em>freelance research collaboration platform</em> designed specifically for the Indian academic market. The platform bridges the gap between students seeking guidance and experienced research experts willing to share their knowledge.</p><p>Students can connect with experts during their academic journey, <em>avail expert services</em>, and collaborate on research projects in real-time. The platform supports <strong>service listings by experts</strong> and research request postings by students, creating a dynamic marketplace for academic collaboration.</p><p>With integrated payment processing through <em>Razorpay</em>, the platform facilitates secure transactions within India. Features include <strong>real-time chat via WebSockets</strong>, earnings dashboards, bank account management for payouts, and comprehensive SMTP email notifications to keep all parties informed.</p>",
    technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Custom Theme", "Stripe", "SMTP Integration", "WebSockets"],
    features: [
      "Student and expert profile management",
      "Expert service listings and bookings",
      "Student research request posting",
      "Real-time chat and collaboration via WebSockets",
      "Razorpay payment integration for India",
      "Earnings dashboard with transaction history",
      "Bank account management for payouts",
      "SMTP email notifications"
    ],
    challenge: "Indian students needed a reliable platform to find and collaborate with research experts while ensuring secure payments. Experts needed a way to monetize their knowledge and manage their earnings efficiently.",
    solution: "We built Research Decode using Angular for a responsive frontend and Node.js with Express for a scalable backend. MongoDB handles flexible data storage for users, services, and transactions. Real-time communication is powered by WebSockets, while Razorpay integration enables seamless payments and payouts within India."
  },
  {
    id: "showbizhub",
    title: "ShowbizHub – TMDB Inspired Movies & Entertainment Platform",
    category: "Web Development",
    client: "Personal Project",
    image: showbizhubPoster,
    screenshots: [],
    shortDescription: "Entertainment discovery platform powered by TMDB API with Netflix-style UI, movie & TV show listings, and celebrity profiles.",
    fullDescription: "<p><strong>ShowbizHub</strong> is a <em>TMDB-powered entertainment discovery platform</em> inspired by IMDb and built with Angular 17+ and Laravel. The platform brings the world of movies, TV shows, and celebrities to users with a stunning, modern interface.</p><p>The platform features a beautiful <em>Netflix-style UI</em> with dynamic landing pages, comprehensive movie & TV show listings, and detailed celebrity profiles with filmographies. Users can explore content through <strong>advanced discovery filters</strong> and genre-based browsing.</p><p>With <em>Server-Side Rendering (SSR)</em> for optimal SEO and performance, ShowbizHub delivers a seamless entertainment browsing experience. <strong>Firebase authentication</strong> handles user accounts while PrimeNG components and custom styling create the sleek, immersive interface.</p>",
    technologies: ["Angular 17", "SSR", "TMDb API", "API Integration", "Firebase Auth", "PrimeNG Theme", "Bootstrap", "Custom CSS"],
    features: [
      "Netflix-style dynamic landing pages",
      "Movie and TV show listings with details",
      "Celebrity profiles and filmographies",
      "Advanced discovery and genre filters",
      "Powerful search functionality",
      "Firebase authentication integration",
      "Server-side rendering for SEO",
      "Trending and upcoming content sections"
    ],
    challenge: "Creating an entertainment browsing platform that could aggregate content from TMDB API while providing a polished, Netflix-inspired user experience with fast performance and SEO optimization.",
    solution: "We developed ShowbizHub using Angular 17+ with Server-Side Rendering for optimal SEO and performance. The platform integrates seamlessly with the TMDB API to fetch movie, TV show, and celebrity data. Firebase Auth handles user authentication, while PrimeNG components and custom styling create the sleek, Netflix-inspired interface."
  },
  {
    id: "first-biz-advisory",
    title: "First Biz Advisory – Business Advisory Services Website",
    category: "Web Development",
    client: "First Biz Advisory UK",
    image: firstBizAdvisoryPoster,
    screenshots: [],
    shortDescription: "Custom WordPress landing page website for UK-based business advisory services with Figma to WordPress implementation.",
    fullDescription: "<p><strong>First Biz Advisory</strong> is a custom <em>WordPress 5-page website</em> developed for a UK-based business advisory services company. The project showcases professional web design meeting strategic business communication needs.</p><p>Built using <em>Elementor with custom theme design</em>, the project involved converting detailed Figma designs to a fully functional, pixel-perfect WordPress site. The website highlights the company's commitment to <strong>community, diversity & inclusion values</strong>.</p><p>The site features dedicated sections for <em>business advisory services, career opportunities, and partnership showcases</em>. With SEO-optimized content structure and responsive design, the website serves as an effective digital presence for attracting clients and talent in the UK market.</p>",
    technologies: ["WordPress", "Elementor", "Custom Theme", "Figma to WordPress", "CSS"],
    features: [
      "Custom Elementor page designs",
      "Figma to WordPress conversion",
      "Responsive landing page design",
      "Community and partnership showcase",
      "Business advisory services pages",
      "Careers and employer information",
      "Contact and newsletter integration",
      "SEO-optimized content structure"
    ],
    challenge: "Creating a professional, community-focused website that effectively communicates the company's values, advisory services, and commitment to diversity while converting detailed Figma designs into a fully responsive WordPress site.",
    solution: "We developed a custom WordPress theme using Elementor, carefully translating the client's Figma designs into pixel-perfect web pages. The site features a strong visual identity with navy blue and green brand colors, compelling content sections highlighting community partnerships, and clear calls-to-action for potential clients and job seekers."
  },
  {
    id: "nymo-dental",
    title: "Nymo Dental – Professional Dental Practice Management Suite",
    category: "Web Development",
    client: "Nymo Technologies",
    image: nymoDentalPoster,
    screenshots: [nymoDental1, nymoDental2, nymoDental3, nymoDental4, nymoDental5, nymoDental6],
    shortDescription: "Comprehensive dental practice management SaaS platform inspired by Dentally, featuring patient records, appointments, tooth charts, and NHS claims.",
    fullDescription: "<p><strong>Nymo Dental</strong> is a comprehensive <em>dental practice management suite</em> inspired by industry-leading platforms like Dentally. Built as a multi-tenant SaaS solution, it empowers dental clinics, hospitals, and practices to manage their entire workflow from patient intake to treatment completion.</p><p>The platform features an interactive <em>dental chart</em> with tooth-by-tooth tracking, treatment planning, and clinical notes. Practitioners can manage appointments through an intuitive <strong>calendar interface</strong> with drag-and-drop scheduling, waiting room management, and real-time availability tracking across multiple practitioners.</p><p>With built-in support for <em>NHS FP17 claims submission</em>, UDA tracking, and comprehensive reporting, Nymo Dental streamlines compliance and administrative tasks. The system also includes patient records with <strong>family management</strong>, dental history, imaging integration, and secure payment processing for both NHS and private treatments.</p>",
    technologies: ["Vue 3", "Laravel", "PHP", "SQLite", "TailwindCSS", "Custom Theme"],
    features: [
      "Interactive dental chart with tooth-by-tooth tracking",
      "Appointment calendar with multi-practitioner support",
      "Patient records and family management",
      "NHS FP17 claims and UDA management",
      "Treatment planning and clinical notes",
      "Waiting room and patient flow management",
      "Imaging and X-ray integration",
      "Staff management and role-based access",
      "Payment processing and invoicing",
      "Comprehensive reporting and analytics"
    ],
    challenge: "Dental practices needed an all-in-one solution to replace fragmented systems for patient management, appointment scheduling, clinical charting, NHS claims processing, and practice administration—while ensuring HIPAA compliance and seamless multi-tenant support.",
    solution: "We developed Nymo Dental using Laravel for a robust multi-tenant backend and Vue 3 with TailwindCSS for a modern, responsive interface. The platform features an interactive dental chart for treatment planning, a sophisticated appointment system with waiting room management, and integrated NHS claims processing with UDA tracking. The SaaS architecture supports clinics of all sizes with role-based access control and comprehensive reporting."
  }
];

// Featured projects for landing page (first 4)
export const featuredProjects = projects.slice(0, 4);
