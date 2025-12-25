import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    avatar: "AT",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jessica Lee",
    role: "Creative Director",
    avatar: "JL",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Park",
    role: "Tech Lead",
    avatar: "DP",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Maria Garcia",
    role: "Marketing Head",
    avatar: "MG",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate team of innovators, creators, and strategists dedicated to your success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-6">
                <div className="w-full h-full rounded-2xl gradient-nexus flex items-center justify-center text-white text-3xl md:text-4xl font-display font-bold group-hover:scale-105 transition-transform duration-300">
                  {member.avatar}
                </div>
                {/* Social overlay */}
                <div className="absolute inset-0 rounded-2xl bg-foreground/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
