"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { StaticImageData } from "next/image";

interface ProjectScreenshotsCarouselProps {
  screenshots: (StaticImageData | string)[];
  projectTitle: string;
}

const ProjectScreenshotsCarousel = ({
  screenshots,
  projectTitle,
}: ProjectScreenshotsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      <div className="relative group">
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-2xl bg-secondary/50 shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Image
                src={screenshots[currentIndex]}
                alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Zoom */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ZoomIn size={20} />
          </button>

          {/* Arrows */}
          {screenshots.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </Button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {screenshots.length > 1 && (
          <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-accent scale-105"
                    : "border-transparent opacity-60"
                }`}
              >
                <Image
                  src={screenshot}
                  alt={`Thumbnail ${index + 1}`}
                  width={200}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={24} />
            </Button>

            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[currentIndex]}
                alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
                width={1920}
                height={1080}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectScreenshotsCarousel;