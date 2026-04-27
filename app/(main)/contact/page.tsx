// ⚠️ must stay client because of form + API
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

import Motion from "@/components/animations/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const dynamic = "force-static";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: process.env.NEXT_PUBLIC_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
  {
    icon: Phone,
    title: "Call Us",
    content: process.env.NEXT_PUBLIC_PHONE,
    href: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: process.env.NEXT_PUBLIC_ADDRESS,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      process.env.NEXT_PUBLIC_ADDRESS || ""
    )}`,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9AM - 6PM",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } else {
      toast({
        title: "Failed!",
        description: "Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom">

          <Motion
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-accent text-sm font-semibold uppercase">
              Contact Us
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear about it.
            </p>
          </Motion>

        </div>
      </section>

      {/* MAIN */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* FORM */}
            <Motion
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 bg-background rounded-2xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                  <Input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="company" placeholder="Company" onChange={handleChange} value={formData.company} />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border bg-background"
                  >
                    <option value="">Select service</option>
                    <option value="web">Web Development</option>
                    <option value="design">UI/UX Design</option>
                  </select>
                </div>

                <Textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  onChange={handleChange}
                  value={formData.message}
                />

                <Button type="submit" disabled={isSubmitting} variant="nexus">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </Button>

              </form>
            </Motion>

            {/* INFO */}
            <div className="lg:col-span-2 space-y-6">

              <h2 className="text-2xl font-display font-bold mb-8">
                Get in touch
              </h2>

              {contactInfo.map((item, index) => (
                <Motion
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft"
                >
                  <div className="w-12 h-12 gradient-nexus flex items-center justify-center rounded-lg">
                    <item.icon size={20} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>

                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-accent">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </Motion>
              ))}

            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default Contact;