"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Globe,
  GraduationCap,
  Languages,
  MessageSquare,
  Mic,
} from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Smart Translation",
    description:
      "Translate between Amharic, Afan Oromo, Tigrigna, and English with high accuracy.",
    amharic: "ብልጥ ትርጉም",
  },
  {
    icon: GraduationCap,
    title: "Learning Assistant",
    description:
      "Get help with homework, understand complex topics, and learn at your own pace.",
    amharic: "የመማሪያ ረዳት",
  },
  {
    icon: Mic,
    title: "Speech Tools",
    description:
      "Voice input and text-to-speech support for natural conversations.",
    amharic: "የንግግር መሳሪያዎች",
  },
  {
    icon: FileText,
    title: "Form Explainer",
    description:
      "Understand government forms and official documents in your language.",
    amharic: "ቅጽ ማብራሪያ",
  },
  {
    icon: MessageSquare,
    title: "Natural Chat",
    description:
      "Have natural conversations in your preferred language with context awareness.",
    amharic: "ተፈጥሯዊ ውይይት",
  },
  {
    icon: Globe,
    title: "Cultural Context",
    description:
      "AI that understands Ethiopian culture and local context for better responses.",
    amharic: "ባህላዊ ዐውድ",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to communicate, learn, and work in your
            language.
          </p>
          <p className="text-muted-foreground mt-2">ኃይለኛ ባህሪያት</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {feature.description}
              </p>
              <p className="text-xs text-primary/70">{feature.amharic}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
