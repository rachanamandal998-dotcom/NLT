import {
    Camera, Video, Film, Code2, Smartphone, Cpu, Palette, Sparkles,
    Megaphone, Search, Share2, BadgeDollarSign, CalendarDays, GraduationCap
} from "lucide-react";

export const services = [
    { slug: "photography", title: "Professional Photography", description: "From corporate portraits to commercial campaigns, captured with cinematic precision.", icon: Camera, category: "Media" },
    { slug: "videography", title: "Videography", description: "End-to-end videography for brands, events and social campaigns.", icon: Video, category: "Media" },
    { slug: "film-production", title: "Film Production", description: "Full-service film production — scripting, direction, cinematography and post.", icon: Film, category: "Media" },
    { slug: "graphic-design", title: "Graphic Design", description: "Print, digital and motion design with a premium finish.", icon: Palette, category: "Media" },
    { slug: "branding", title: "Branding", description: "Logo, voice and full brand systems that scale across channels.", icon: Sparkles, category: "Media" },
    { slug: "web-development", title: "Website Development", description: "Modern, scalable web platforms built on the latest stack.", icon: Code2, category: "Technology" },
    { slug: "app-development", title: "Mobile App Development", description: "Native-feeling cross-platform apps for ambitious products.", icon: Smartphone, category: "Technology" },
    { slug: "software", title: "Software Solutions", description: "ERPs, CRMs and bespoke SaaS tailored to your operations.", icon: Cpu, category: "Technology" },
    { slug: "digital-marketing", title: "Digital Marketing", description: "Strategy-led marketing across search, social and content.", icon: Megaphone, category: "Marketing" },
    { slug: "seo", title: "SEO", description: "Technical SEO, content and link building that compounds.", icon: Search, category: "Marketing" },
    { slug: "smm", title: "Social Media Marketing", description: "Content systems and community building across major platforms.", icon: Share2, category: "Marketing" },
    { slug: "paid-ads", title: "Paid Advertising", description: "Meta, Google and TikTok ad management built around ROAS.", icon: BadgeDollarSign, category: "Marketing" },
    { slug: "events", title: "Event Management", description: "Corporate, cultural and brand events end-to-end.", icon: CalendarDays, category: "Events" },
    { slug: "training", title: "IT Training", description: "Hands-on training in development, design and digital marketing.", icon: GraduationCap, category: "Training" },
];
