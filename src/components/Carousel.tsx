import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, ReactNode, useEffect } from "react";

interface CarouselProps {
  children: ReactNode[]; // Accept multiple React components as slides.
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = children.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]); // Only re-run if number of slides changes

  return (
    <div className="relative w-full h-fit overflow-hidden">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none cursor-pointer"
      >
        <ChevronLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none cursor-pointer"
      >
        <ChevronRight />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
