import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectScreenshotsCarouselProps {
  screenshots: string[];
  projectTitle: string;
}

const ProjectScreenshotsCarousel = ({ screenshots, projectTitle }: ProjectScreenshotsCarouselProps) => {
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
            <motion.img
              key={currentIndex}
              src={screenshots[currentIndex]}
              alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full h-auto object-contain cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />
          </AnimatePresence>

          {/* Zoom indicator */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ZoomIn size={20} className="text-foreground" />
          </button>

          {/* Navigation Arrows */}
          {screenshots.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={24} />
              </Button>
            </>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {screenshots.length > 1 && (
          <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-accent shadow-lg scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={screenshot}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 bg-secondary/50 hover:bg-secondary"
            >
              <X size={24} />
            </Button>

            {screenshots.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary/50 hover:bg-secondary"
                >
                  <ChevronLeft size={32} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary/50 hover:bg-secondary"
                >
                  <ChevronRight size={32} />
                </Button>
              </>
            )}

            <motion.img
              key={currentIndex}
              src={screenshots[currentIndex]}
              alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
              {currentIndex + 1} / {screenshots.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectScreenshotsCarousel;
