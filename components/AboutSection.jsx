// AboutSection.jsx - ปรับปรุงเพื่อเพิ่ม scroll animations
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  
  return (
    <div ref={ref} className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto w-full pt-24 pb-32 px-4">
        {/* Main Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Column - Image with parallax effect */}
          <motion.div 
            className="w-full lg:w-1/2 sticky top-24 h-[70vh] lg:h-auto"
            style={{ scale: imageScale }}
          >
            <Card className="overflow-hidden border-0 shadow-lg h-full rounded-lg">
              <CardContent className="p-0 h-full">
                <img
                  src="/images/About1.jpg"
                  alt="Elegant tea brewing ceremony"
                  className="w-full h-full object-cover"
                />
                {/* Fancy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-medium mb-2 brand-heading">Heritage & Craft</h3>
                  <div className="w-16 h-1 bg-primary mb-4"></div>
                  <p className="text-white/80 max-w-xs">
                    Centuries of tradition meets modern expertise
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Content with scroll animation */}
          <div className="w-full lg:w-1/2 space-y-24 py-8">
            <motion.div 
              className="space-y-8"
              style={{ opacity: textOpacity, y: textY }}
            >
              <h2 className="text-4xl lg:text-5xl gold-shine-text font-semibold tracking-tight leading-tight">
                The Art of Premium Tea
              </h2>

              <p className="text-xl lg:text-2xl text-primary leading-relaxed">
                Our carefully selected teas come from the finest estates around
                the world. Each leaf is harvested at the perfect moment, ensuring
                exceptional flavor and aromatic complexity that can only come from
                generations of expertise.
              </p>

              <p className="text-lg lg:text-xl text-primary leading-relaxed">
                Whether you prefer the delicate notes of white tea, the grounded
                earthiness of pu-erh, or the soothing comfort of chamomile, our
                collection offers something for every palate and occasion.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              style={{ 
                opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
                y: useTransform(scrollYProgress, [0.3, 0.5], [50, 0])
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium">Exceptional Quality</h3>
              </div>
              
              <p className="text-lg lg:text-xl text-primary leading-relaxed">
                We honor traditions that span centuries while embracing modern
                brewing techniques that bring out the best in every cup. Our tea
                masters craft each blend with precision and care, creating an
                experience that transcends the ordinary.
              </p>

              <div className="pt-8">
                <motion.button 
                  className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg rounded-md transition-colors duration-200 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Collection
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;