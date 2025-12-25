import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to keep you ahead of the competition.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We work as an extension of your team, not just a vendor.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We deliver nothing less than exceptional quality in every project we undertake.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">About Us</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6">
                We're <span className="gradient-text">Nexus Three</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A full-service digital agency connecting innovative ideas, cutting-edge technology, 
                and strategic thinking to create solutions that propel businesses forward.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to bridge the gap between businesses and their digital potential, 
                  Nexus Three emerged from a simple belief: every business deserves access to world-class 
                  digital solutions.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The "Three" in our name represents the three pillars of our approach: Innovation, 
                  Strategy, and Execution. These pillars guide every project we undertake, ensuring 
                  that our clients receive comprehensive solutions that deliver measurable results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to have helped dozens of businesses transform their digital 
                  presence and achieve their growth objectives. Our journey continues as we expand 
                  our capabilities and deepen our commitment to client success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl gradient-nexus flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-7xl md:text-9xl font-display font-bold">N3</p>
                    <p className="text-xl opacity-80 mt-2">Since 2019</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-card shadow-soft"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl gradient-nexus flex items-center justify-center mb-6">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
