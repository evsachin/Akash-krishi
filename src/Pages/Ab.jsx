// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import ima from "../assets/a.png";

// export default function Ab() {
//   const [stats, setStats] = useState({
//     farmers: 0,
//     products: 0,
//     years: 0,
//     satisfaction: 0
//   });

//   // Counter animation
//   useEffect(() => {
//     const targets = {
//       farmers: 2000,
//       products: 8,
//       years: 2,
//       satisfaction: 95
//     };

//     const duration = 2000; // 2 seconds
//     const steps = 50;
//     const interval = duration / steps;

//     let currentStep = 0;
//     const timer = setInterval(() => {
//       if (currentStep < steps) {
//         setStats({
//           farmers: Math.floor((targets.farmers / steps) * currentStep),
//           products: Math.floor((targets.products / steps) * currentStep),
//           years: Math.floor((targets.years / steps) * currentStep),
//           satisfaction: Math.floor((targets.satisfaction / steps) * currentStep)
//         });
//         currentStep++;
//       } else {
//         setStats(targets);
//         clearInterval(timer);
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 overflow-hidden">
      
//       {/* Enhanced HERO SECTION with Parallax Effect */}
//       <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800 text-white overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div 
//             className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <motion.div 
//             className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               opacity: [0.2, 0.4, 0.2],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
          
//           {/* Floating Particles */}
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white/20 rounded-full"
//               initial={{
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight,
//               }}
//               animate={{
//                 y: [null, -30, 30, -30],
//                 x: [null, 30, -30, 30],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider border border-white/20">
//               ✦ SINCE 2025 ✦
//             </span>
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
//           >
//             <span className="inline-block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//               Toshni Agro
//             </span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
//           >
//             Empowering Farmers with Innovation, Quality, and Sustainable Growth.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <button className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-semibold overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
//               <span className="relative z-10">Explore Products</span>
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400"
//                 initial={{ x: "100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </button>
            
//             <button className="px-8 py-4 border-2 border-white/30 text-blue-900 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
//               Watch Video
//               <svg className="inline-block w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </button>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         {/* <motion.div 
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
//           </div>
//         </motion.div> */}
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { label: "Farmers Trust", value: stats.farmers, suffix: "+", icon: "👨‍🌾" },
//               { label: "Products", value: stats.products, suffix: "+", icon: "🌱" },
//               { label: "Years Experience", value: stats.years, suffix: "+", icon: "⭐" },
//               { label: "Satisfaction", value: stats.satisfaction, suffix: "%", icon: "😊" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
//                   {stat.icon}
//                 </div>
//                 <motion.div 
//                   className="text-3xl md:text-4xl font-bold text-blue-900 mb-2"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {stat.value}{stat.suffix}
//                 </motion.div>
//                 <div className="text-sm text-gray-600 uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced COMPANY STORY */}
//       <section className="py-20 px-6 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
          
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
//               <img 
//                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop"
//                 alt="About Toshani"
//                 className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Floating Badge */}
//               <motion.div 
//                 className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl"
//                 initial={{ x: 50, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
                
//               </motion.div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
//             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span 
//               className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-6"
//               whileHover={{ scale: 1.05 }}
//             >

                
//               🌾 Our Story
//             </motion.span>
            
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-blue-900">Journey of</span>
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
//                 Excellence & Growth
//               </span>
//             </h2>
            
//             <div className="space-y-6 text-gray-600 leading-relaxed">
//               <p className="text-lg">
//                 Toshani Agro is dedicated to delivering high-quality agricultural 
//                 solutions including micronutrients, water soluble fertilizers, 
//                 and crop growth enhancers.
//               </p>
//               <p className="text-lg">
//                 Our mission is to support farmers with innovative and reliable 
//                 products that increase productivity while maintaining soil health 
//                 and sustainability.
//               </p>
//             </div>

//             {/* Timeline */}
//             <div className="mt-10 space-y-4">
//               {[
//                 { year: "2025", event: "Company Founded", icon: "🚀" },
//                 { year: "2025", event: "Expanded to Maharashtra States", icon: "📈" },
             
//                 { year: "2025", event: "Serving 2000+ Farmers", icon: "🌾" }
//               ].map((item, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors"
//                   whileHover={{ x: 10 }}
//                 >
//                   <span className="text-2xl">{item.icon}</span>
//                   <span className="font-bold text-blue-900 w-20">{item.year}</span>
//                   <span className="text-gray-700">{item.event}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced VISION & MISSION */}
//       <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-emerald-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//               Our Purpose
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-10">
            
//             <motion.div 
//               className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               whileHover={{ y: -10 }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">🔮</div>
//                 <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Our Vision</h3>
//                 <p className="text-lg leading-relaxed group-hover:text-blue-50 transition-colors">
//                   To become a trusted agricultural partner for farmers across India 
//                   by providing sustainable and scientifically advanced crop solutions.
//                 </p>
                
//                 {/* Stats Card */}
//                 <div className="mt-6 p-4 bg-blue-50 group-hover:bg-white/20 rounded-xl transition-colors">
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm font-semibold group-hover:text-white">Farmer Network</span>
//                     <span className="text-2xl font-bold text-blue-600 group-hover:text-white">2000+</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="group relative bg-gradient-to-br from-blue-900 to-blue-800 text-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               whileHover={{ y: -10 }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">🎯</div>
//                 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//                 <p className="text-lg leading-relaxed text-blue-100 group-hover:text-white transition-colors">
//                   To enhance crop yield and soil fertility through innovative 
//                   formulations, ensuring farmer prosperity and agricultural growth.
//                 </p>
                
//                 {/* Goals List */}
//                 <ul className="mt-6 space-y-3">
//                   {["Innovation First", "Farmer Success", "Sustainability"].map((item, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced WHY CHOOSE US with Cards */}
//       <section className="py-12 px-6 max-w-7xl mx-auto">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
//             ✦ Why Us ✦
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//             Why Choose Toshni Agro?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             We combine innovation with tradition to deliver the best agricultural solutions
//           </p>
//         </motion.div>

//         <motion.div 
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8"
//         >
//           {[
//             {
//               icon: "🏆",
//               title: "Premium Quality",
//               description: "Strict quality control and scientifically formulated products certified by agricultural experts.",
//               color: "from-blue-500 to-blue-600",
//               stats: "98% Purity"
//             },
//             {
//               icon: "👨‍🌾",
//               title: "Farmer Focused",
//               description: "Solutions designed to increase productivity and profitability for small and large farms.",
//               color: "from-emerald-500 to-green-600",
//               stats: "2000+ Farmers"
//             },
//             {
//               icon: "🌱",
//               title: "Sustainable Growth",
//               description: "Products that improve soil health and long-term crop strength for future generations.",
//               color: "from-teal-500 to-emerald-600",
//               stats: "100% Quality"
//             }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               variants={fadeInUp}
//               className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
//               <div className="p-8">
//                 <motion.div 
//                   className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   {item.icon}
//                 </motion.div>
                
//                 <h4 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700 transition-colors">
//                   {item.title}
//                 </h4>
                
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {item.description}
//                 </p>

//                 <div className="flex items-center justify-between pt-6 border-t border-gray-100">
//                   <span className="text-sm font-semibold text-gray-500">Feature</span>
//                   <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
//                     {item.stats}
//                   </span>
//                 </div>
//               </div>

//               {/* Corner Accent */}
//               <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-3xl"></div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

  
//       {/* Enhanced FOOTER CTA */}  
//       <section className="relative py-10 px-6 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img 
//             src={ima}
//             alt="Farm Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Growing Together with Farmers
//             </h2>
            
//             <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
//               Join us in building a stronger and more sustainable agricultural future for India.
//             </p>

//             <div className="flex flex-wrap gap-4 justify-center">
//               <motion.button 
//                 className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-semibold overflow-hidden shadow-2xl"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="relative z-10">Contact Us Today</span>
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400"
//                   initial={{ x: "100%" }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>

//               <motion.button 
//                 className="px-8 py-4 border-2 border-white/30 text-blue-400 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn More
//               </motion.button>
//             </div>

//             {/* Trust Badges */}
//             <motion.div 
//               className="flex flex-wrap justify-center gap-8 mt-16"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               {[ "Made in India", "Farmer First"].map((badge, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span className="text-sm font-medium">{badge}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//            </div> 
//       </section>


//     </div>
//   );
// }



import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ima from "../assets/a.png";
import heroVideo from "../assets/hero1.mp4";

export default function Ab() {
  const [stats, setStats] = useState({
    farmers: 0,
    products: 0,
    years: 0,
    satisfaction: 0
  });

  // Counter animation
  useEffect(() => {
    const targets = {
      farmers: 2000,
      products: 8,
      years: 2,
      satisfaction: 95
    };

    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setStats({
          farmers: Math.floor((targets.farmers / steps) * currentStep),
          products: Math.floor((targets.products / steps) * currentStep),
          years: Math.floor((targets.years / steps) * currentStep),
          satisfaction: Math.floor((targets.satisfaction / steps) * currentStep)
        });
        currentStep++;
      } else {
        setStats(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 overflow-hidden">
      
      {/* HERO SECTION WITH VIDEO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider border border-white/20">
              ✦ SINCE 2025 ✦
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="inline-block  text-white">
              Toshni Agro
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white-200                                                        max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Empowering Farmers with Innovation, Quality, and Sustainable Growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
              Explore Products
            </button>

            <button className="px-8 py-4 border-2 border-white/30 text-blue-900 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Watch Video
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Farmers Trust", value: stats.farmers, suffix: "+", icon: "👨‍🌾" },
              { label: "Products", value: stats.products, suffix: "+", icon: "🌱" },
              { label: "Years Experience", value: stats.years, suffix: "+", icon: "⭐" },
              { label: "Satisfaction", value: stats.satisfaction, suffix: "%", icon: "😊" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-blue-900 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced COMPANY STORY */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
               src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop"
                alt="About Toshani"
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >

                
              🌾 Our Story
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-blue-900">Journey of</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Excellence & Growth
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Toshani Agro is dedicated to delivering high-quality agricultural 
                solutions including micronutrients, water soluble fertilizers, 
                and crop growth enhancers.
              </p>
              <p className="text-lg">
                Our mission is to support farmers with innovative and reliable 
                products that increase productivity while maintaining soil health 
                and sustainability.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 space-y-4">
              {[
                { year: "2025", event: "Company Founded", icon: "🚀" },
                { year: "2025", event: "Expanded to Maharashtra States", icon: "📈" },
             
                { year: "2025", event: "Serving 2000+ Farmers", icon: "🌾" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-blue-900 w-20">{item.year}</span>
                  <span className="text-gray-700">{item.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced VISION & MISSION */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Purpose
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            
            <motion.div 
              className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">🔮</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Our Vision</h3>
                <p className="text-lg leading-relaxed group-hover:text-blue-50 transition-colors">
                  To become a trusted agricultural partner for farmers across India 
                  by providing sustainable and scientifically advanced crop solutions.
                </p>
                
                {/* Stats Card */}
                <div className="mt-6 p-4 bg-blue-50 group-hover:bg-white/20 rounded-xl transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold group-hover:text-white">Farmer Network</span>
                    <span className="text-2xl font-bold text-blue-600 group-hover:text-white">2000+</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative bg-gradient-to-br from-blue-900 to-blue-800 text-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed text-blue-100 group-hover:text-white transition-colors">
                  To enhance crop yield and soil fertility through innovative 
                  formulations, ensuring farmer prosperity and agricultural growth.
                </p>
                
                {/* Goals List */}
                <ul className="mt-6 space-y-3">
                  {["Innovation First", "Farmer Success", "Sustainability"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced WHY CHOOSE US with Cards */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            ✦ Why Us ✦
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Why Choose Toshni Agro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine innovation with tradition to deliver the best agricultural solutions
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "🏆",
              title: "Premium Quality",
              description: "Strict quality control and scientifically formulated products certified by agricultural experts.",
              color: "from-blue-500 to-blue-600",
              stats: "98% Purity"
            },
            {
              icon: "👨‍🌾",
              title: "Farmer Focused",
              description: "Solutions designed to increase productivity and profitability for small and large farms.",
              color: "from-emerald-500 to-green-600",
              stats: "2000+ Farmers"
            },
            {
              icon: "🌱",
              title: "Sustainable Growth",
              description: "Products that improve soil health and long-term crop strength for future generations.",
              color: "from-teal-500 to-emerald-600",
              stats: "100% Quality"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8">
                <motion.div 
                  className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                
                <h4 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm font-semibold text-gray-500">Feature</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                    {item.stats}
                  </span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-3xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

  
      {/* Enhanced FOOTER CTA */}  
      <section className="relative py-10 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={ima}
            alt="Farm Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Growing Together with Farmers
            </h2>
            
            <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
              Join us in building a stronger and more sustainable agricultural future for India.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button 
                className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-semibold overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Us Today</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button 
                className="px-8 py-4 border-2 border-white/30 text-blue-400 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[ "Made in India", "Farmer First"].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
           </div> 
      </section>


    </div>
  );
}