// ✅ NO "use client"

import { Star, Quote } from "lucide-react";
import Motion from "@/components/animations/Motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        id: 1,
        question: "What types of projects do you take on?",
        answer:
            "We specialize in SaaS platforms, business management systems, and custom web applications. This includes MVPs for startups, industry-specific tools like POS or HRM systems, admin dashboards, and full product builds from design to deployment.",
    },
    {
        id: 2,
        question: "How long does it take to build an MVP?",
        answer:
            "A focused MVP typically takes 3 to 6 weeks depending on complexity. We start with a scoping call to define exactly what needs to be built, cut what doesn't, and give you a realistic timeline before any work begins.",
    },
    {
        id: 3,
        question: "Do you work with clients outside Pakistan?",
        answer:
            "Yes — most of our clients are based in the US, UK, Canada, and Australia. We work fully remotely and communicate async or over scheduled calls to match your timezone.",
    },
    {
        id: 4,
        question: "What if I only have an idea and no technical knowledge?",
        answer:
            "That's completely fine. We'll guide you through scoping your product, deciding what features matter for launch, choosing the right tech stack, and building a roadmap. You bring the vision — we handle the technical execution.",
    },
    {
        id: 5,
        question: "Do you offer ongoing support after launch?",
        answer:
            "Yes. We offer post-launch support and maintenance retainers so your product stays running, secure, and improvable. Most clients stay with us for feature additions after launch.",
    },
    {
        id: 6,
        question: "How do we get started?",
        answer:
            "Book a free 30-minute discovery call from our website. We'll listen to what you need, ask the right questions, and give you an honest assessment of scope, timeline, and cost — no pressure, no commitment.",
    },
    {
        id: 7,
        question: "What is your development process?",
        answer:
            "We follow a structured but lean process: Discovery → Design → Development → Testing → Deployment. You get regular updates throughout, not just a final delivery. We use tools like Figma, GitHub, and project boards so you always know what's happening.",
    },
    {
        id: 8,
        question: "How much does a project cost?",
        answer:
            "Every project is scoped individually. A simple MVP starts around $1,500–$3,000. Complex SaaS platforms or management systems range higher depending on features. We'll give you a clear quote after your discovery call — no hidden costs.",
    },
];

const FAQSection = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">

                {/* Section Header */}
                <Motion
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                        FAQ
                    </span>

                    <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
                        Frequently Asked<span className="gradient-text"> Questions</span>
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know before we start building together.
                    </p>
                </Motion>

                {/* Testimonials Grid */}
                <div className="grid gap-8 justify-center">
                    <Accordion
                        type="single"
                        defaultValue="item-1"
                        className="max-w-3xl"
                    >
                        {faqs.map((item) => (
                            <AccordionItem key={'item-' + item.id} value={'item-' + item.id}>
                                <AccordionTrigger className="[&[data-state=open]]:gradient-text [&[data-state=open]~div_.pb-4]:text-gray-300">{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;