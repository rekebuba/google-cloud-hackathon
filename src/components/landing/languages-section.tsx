"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const languages = [
  {
    name: "Amharic",
    nativeName: "አማርኛ",
    speakers: "32M+ speakers",
    features: [
      "Full translation support",
      "Voice recognition",
      "Text-to-speech",
    ],
  },
  {
    name: "Afan Oromo",
    nativeName: "Afaan Oromoo",
    speakers: "37M+ speakers",
    features: ["Translation support", "Learning assistance", "Document help"],
  },
  {
    name: "Tigrigna",
    nativeName: "ትግርኛ",
    speakers: "9M+ speakers",
    features: ["Translation support", "Basic assistance", "Growing support"],
  },
  {
    name: "English",
    nativeName: "English",
    speakers: "Global language",
    features: ["Full support", "Advanced features", "Professional tools"],
  },
];

export function LanguagesSection() {
  return (
    <section id="languages" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Languages We Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed specifically for Ethiopian languages with deep cultural
            understanding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {language.name}
                </h3>
                <p className="text-2xl font-bold text-primary">
                  {language.nativeName}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {language.speakers}
                </p>
              </div>
              <ul className="space-y-2">
                {language.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
