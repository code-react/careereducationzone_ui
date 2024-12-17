"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Senior Developer",
    image: "/placeholder.svg?height=80&width=80",
    content: "Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "UX Researcher",
    image: "/placeholder.svg?height=80&width=80",
    content: "Faucibus venenatis felis id augue sit cursus pellentesque enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "David Miller",
    role: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80",
    content: "Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim. Lorem ipsum dolor sit amet.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-16">Loved From Customers</h2>

      <div className="relative">
        {/* Orange circle background */}
        <div className="absolute inset-0 rounded-full bg-[#F5A524] transform -translate-y-1/4" />

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 z-10 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            aria-label="Previous testimonial">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial cards */}
          <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img src={testimonials[currentIndex].image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600 mb-6">{testimonials[currentIndex].role}</p>
                  <p className="text-gray-700 leading-relaxed">{testimonials[currentIndex].content}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 w-12 h-12 rounded-full bg-[#F5A524] flex items-center justify-center hover:bg-[#E69513] transition-colors"
            aria-label="Next testimonial">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
