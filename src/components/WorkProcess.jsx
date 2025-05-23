import React from "react";
import { Search, PenTool, Code, Rocket, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const processes = [
    {
      step: 1,
      title: "Discover",
      description: "Understanding your goals and needs to create a strong foundation for your project.",
      icon: Search,
      color: "red"
    },
    {
      step: 2,
      title: "Design",
      description: "Crafting intuitive, engaging, and visually appealing solutions tailored to your brand.",
      icon: PenTool,
      color: "purple"
    },
    {
      step: 3,
      title: "Develop",
      description: "Bringing ideas to life through clean, efficient, and future-proof code implementation.",
      icon: Code,
      color: "blue"
    },
    {
      step: 4,
      title: "Deliver",
      description: "Ensuring successful deployment, thorough testing, and continuous support.",
      icon: Rocket,
      color: "green"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-1/3 bg-red-50 opacity-30 blur-3xl -translate-x-1/2 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 font-extrabold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-red-50 rounded-full text-red-800 text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="ttext-5xl md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 leading-tight">Our Work Process</h2>
          <p className="text-lg text-gray-600">
            Our proven methodology ensures quality results, timely delivery, and exceptional client satisfaction.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-32 left-0 w-full h-1 bg-gray-200 z-0"></div>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="hidden md:flex absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-200 text-gray-500 items-center justify-center font-bold shadow-md">
                  {process.step}
                </div>

                <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col relative">
                  <div className="md:hidden absolute -top-3 -left-3 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                    {process.step}
                  </div>

                  <div className={`w-16 h-16 rounded-2xl bg-${process.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <process.icon className={`text-${process.color}-600`} size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-800 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 flex-grow mb-6">
                    {process.description}
                  </p>

                  <div className="mt-auto">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-red-800 group-hover:underline">
                      Learn more <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>

                  <div className={`absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-${process.color}-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/process" className="px-8 py-4 bg-red-800 text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-800/20 hover:shadow-red-800/30">
            Learn More About Our Process
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;