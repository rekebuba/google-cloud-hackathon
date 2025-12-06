"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              AI for Every Ethiopian Language
            </span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            <span className="block">Local AI: Bringing</span>
            <span className="block text-primary">Knowledge to Every</span>
            <span className="block">Ethiopian Language</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-4">
            Experience the power of AI in Amharic, Afan Oromo, Tigrigna, and
            English. Breaking language barriers to make knowledge accessible to
            all Ethiopians.
          </p>

          {/* Amharic text */}
          <p className="text-muted-foreground mb-8 text-lg">
            የአርቴፊሻል ኢንተለጀንስ ኃይልን በአማርኛ ይለማመዱ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/chat">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base"
              >
                Try Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="px-8 h-12 text-base bg-transparent"
              >
                Login
              </Button>
            </Link>
            <a href="#features">
              <Button
                size="lg"
                variant="ghost"
                className="px-8 h-12 text-base text-muted-foreground"
              >
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 relative"
        >
          {/* Preview card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-accent/50" />
                <div className="w-3 h-3 rounded-full bg-primary/50" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                    U
                  </div>
                  <div className="flex-1 bg-muted rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm text-foreground">
                      እባክዎ ይህን ወደ እንግሊዝኛ ይተርጉሙልኝ
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-medium text-primary-foreground">
                    AI
                  </div>
                  <div className="flex-1 bg-primary/10 rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm text-foreground">
                      {'"Please translate this to English for me."'}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Translation from Amharic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
