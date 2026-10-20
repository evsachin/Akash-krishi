// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { Parallax } from "react-parallax";
// import { FaUsers, FaLeaf, FaAward, FaHandshake, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useState, useRef } from "react";
// import heroVideo from "../assets/hero5.mp4";

// function Home() {

//   /* ✅ Added Mute Logic */
//   const [muted, setMuted] = useState(true);
//   const videoRef = useRef(null);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !muted;
//       setMuted(!muted);
//     }
//   };

//   return (
//     <div className="overflow-hidden">

//       {/* ================= VIDEO HERO ================= */}
//       <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

//         {/* Background Video */}
//         <video
//           ref={videoRef}   /* ✅ Added Ref */
//           autoPlay
//           loop
//           muted={muted}    /* ✅ Dynamic Muted */
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={heroVideo} type="video/mp4" />
//         </video>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/25"></div>

//         {/* ✅ Mute Button Added */}
//         <button
//           onClick={toggleMute}
//           className="absolute bottom-2 right-6 z-20 bg-black/50 p-4 rounded-full text-orange-500 text-xl hover:scale-110 transition"
//         >
//           {muted ? <FaVolumeMute /> : <FaVolumeUp />}
//         </button>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, y: -60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 text-center px-6"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             Transforming Agriculture with <br />
//             <span className="text-orange-400">
//               Advanced Crop Solutions
//             </span>
//           </h1>

//           <p className="mt-6 text-xl max-w-2xl mx-auto">
//             Empowering farmers with innovation, quality & trust.
//           </p>

//           <div className="mt-8 flex justify-center gap-6">
//             <Link
//               to="/products"
//               className="bg-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
//             >
//               Explore Products →
//             </Link>

//             <Link
//               to="/contact"
//               className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
//             >
//               Become Distributor
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= ANIMATED COUNTERS ================= */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-15 text-center px-6">
//           {[
//             { icon: <FaUsers />, value: 2000, label: "Happy Farmers" },
//             { icon: <FaLeaf />, value: 8, label: "Products" },
//             { icon: <FaAward />, value: 2, label: "Years Experience" },
//             { icon: <FaHandshake />, value: 100, label: "Distributors" },
//           ].map((item, i) => (
//             <div key={i} className="bg-green-50 p-8 rounded-2xl shadow-md">
//               <div className="text-4xl text-green-700 mb-4 flex justify-center">
//                 {item.icon}
//               </div>
//               <h3 className="text-3xl font-bold text-green-800">
//                 <CountUp end={item.value} duration={3} />+
//               </h3>
//               <p className="text-gray-600">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= PARALLAX SECTION ================= */}
//       <Parallax
//         bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
//         strength={400}
//       >
//         <div className="h-[400px] flex items-center justify-center bg-black/50">
//           <h2 className="text-4xl md:text-5xl text-white font-bold text-center px-6">
//             Innovation. Quality. Farmer Trust.
//           </h2>
//         </div>
//       </Parallax>

//       {/* ================= TESTIMONIAL SLIDER ================= */}
//       <section className="py-20 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center text-green-800 mb-14">
//           Farmer Testimonials
//         </h2>

//         <div className="max-w-4xl mx-auto px-6">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             autoplay={{ delay: 3000 }}
//             loop={true}
//           >
//             <SwiperSlide>
//               <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
//                 <p className="text-lg italic">
//                   “Toshni Agro products increased my crop yield by 30%.”
//                 </p>
//                 <h4 className="mt-4 font-bold text-green-800">
//                   – Farmer, Maharashtra
//                 </h4>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
//                 <p className="text-lg italic">
//                   “Excellent quality and strong field support.”
//                 </p>
//                 <h4 className="mt-4 font-bold text-green-800">
//                   – Progressive Grower
//                 </h4>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>

//       {/* ================= DISTRIBUTOR SECTION ================= */}
//       <section className="py-20 bg-green-800 text-white text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           Become Our Authorized Distributor
//         </h2>

//         <p className="max-w-3xl mx-auto text-lg mb-8">
//           Join Toshni Agro’s growing distribution network and expand your agri
//           business with premium crop solutions and strong brand support.
//         </p>

//         <Link
//           to="/contact"
//           className="bg-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
//         >
//           Apply Now →
//         </Link>
//       </section>

//     </div>
//   );
// }

// export default Home;

// import { motion, useScroll, useTransform } from "framer-motion";
// import CountUp from "react-countup";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Parallax } from "react-parallax";
// import {
//   FaUsers,
//   FaLeaf,
//   FaAward,
//   FaHandshake,
//   FaVolumeMute,
//   FaVolumeUp,
//   FaSeedling,
//   FaTractor,
//   FaSun,
//   FaWater,
//   FaArrowRight,
//   FaQuoteLeft,
//   FaStar,
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube
// } from "react-icons/fa";
// import { HiOutlineSparkles } from "react-icons/hi";
// import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import heroVideo from "../assets/hero5.mp4";

// function Home() {
//   const [muted, setMuted] = useState(true);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [activeCounter, setActiveCounter] = useState(false);
//   const videoRef = useRef(null);
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"]
//   });

//   const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
//   const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setActiveCounter(true);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !muted;
//       setMuted(!muted);
//     }
//   };

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8 }
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const stats = [
//     { icon: <FaUsers />, value: 5000, label: "Happy Farmers", suffix: "+", color: "from-blue-500 to-cyan-500" },
//     { icon: <FaLeaf />, value: 50, label: "Products", suffix: "+", color: "from-green-500 to-emerald-500" },
//     { icon: <FaAward />, value: 15, label: "Years Experience", suffix: "+", color: "from-orange-500 to-red-500" },
//     { icon: <FaHandshake />, value: 200, label: "Distributors", suffix: "+", color: "from-purple-500 to-pink-500" }
//   ];

//   const testimonials = [
//     {
//       text: "Toshni Agro products increased my crop yield by 30%. The quality is unmatched and their support team is always available.",
//       name: "Rajesh Kumar",
//       location: "Farmer, Maharashtra",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=150"
//     },
//     {
//       text: "Excellent quality and strong field support. Been using their products for 5 years now, never disappointed.",
//       name: "Priya Sharma",
//       location: "Progressive Grower, Punjab",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b5b?w=150"
//     },
//     {
//       text: "The best agricultural solutions provider in the region. Their products are scientifically proven and farmer-friendly.",
//       name: "Suresh Patel",
//       location: "Distributor, Gujarat",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1574943320219-553eb673f441?w=150"
//     }
//   ];

//   const products = [
//     {
//       name: "Organic Soil Conditioner",
//       image: "https://images.unsplash.com/photo-1464226180484-05a7a8c8b2a9?w=800",
//       category: "Soil Health",
//       price: "₹29.99"
//     },
//     {
//       name: "Premium Crop Nutrition",
//       image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800",
//       category: "Fertilizers",
//       price: "₹49.99"
//     },
//     {
//       name: "Liquid Seaweed Extract",
//       image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=800",
//       category: "Bio-stimulants",
//       price: "₹34.99"
//     }
//   ];

//   return (
//     <div className="overflow-hidden bg-gradient-to-b from-gray-50 to-white">

//       {/* ================= LOADING ANIMATION ================= */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-orange-500 z-50"
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 1.5 }}
//         style={{ transformOrigin: "0%" }}
//       />

//       {/* ================= VIDEO HERO SECTION ================= */}
//       <section ref={heroRef} className="relative h-screen flex items-center justify-center text-white overflow-hidden">

//         {/* Video Background with Parallax */}
//         <motion.div
//           style={{
//             scale: heroScale,
//             y: heroY,
//             opacity: heroOpacity
//           }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <video
//             ref={videoRef}
//             autoPlay
//             loop
//             muted={muted}
//             playsInline
//             onLoadedData={() => setVideoLoaded(true)}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               videoLoaded ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <source src={heroVideo} type="video/mp4" />
//           </video>

//           {/* Animated Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-orange-900/30"
//               animate={{
//                 opacity: [0.3, 0.5, 0.3],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
//           </div>
//         </motion.div>

//         {/* Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(30)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white/30 rounded-full"
//               initial={{
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight,
//               }}
//               animate={{
//                 y: [null, -100, 100, -100],
//                 x: [null, 100, -100, 100],
//               }}
//               transition={{
//                 duration: Math.random() * 15 + 10,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//             />
//           ))}
//         </div>

//         {/* Mute Button with Animation */}
//         <motion.button
//           onClick={toggleMute}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 2 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-md p-4 rounded-full text-orange-500 text-xl hover:bg-white/20 transition-all border border-white/20"
//         >
//           {muted ? <FaVolumeMute /> : <FaVolumeUp />}
//         </motion.button>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <motion.div
//               className="w-1 h-3 bg-white rounded-full mt-2"
//               animate={{ y: [0, 15, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             />
//           </div>
//         </motion.div>

//         {/* Hero Content */}
//         <motion.div
//           style={{ opacity: heroOpacity }}
//           className="relative z-10 text-center px-6 max-w-6xl mx-auto"
//         >
//           {/* Floating Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20"
//           >
//             <HiOutlineSparkles className="text-orange-400" />
//             <span className="text-sm font-semibold tracking-wider">WELCOME TO TOSHANI AGRO</span>
//             <HiOutlineSparkles className="text-orange-400" />
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
//           >
//             <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
//               Transforming
//             </span>
//             <br />
//             <span className="relative">
//               Agriculture
//               <motion.span
//                 className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 1.5, duration: 1 }}
//               />
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 1 }}
//             className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
//           >
//             Empowering farmers with <span className="text-orange-400 font-semibold">innovation</span>,
//             <span className="text-green-400 font-semibold"> quality</span> &
//             <span className="text-blue-400 font-semibold"> trust</span>
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 1 }}
//             className="mt-12 flex flex-wrap justify-center gap-6"
//           >
//             <Link
//               to="/products"
//               className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold text-lg overflow-hidden shadow-2xl hover:shadow-orange-500/30"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Products
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
//                 initial={{ x: "100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </Link>

//             <Link
//               to="/contact"
//               className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105"
//             >
//               Become Distributor
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ================= ANIMATED COUNTERS SECTION ================= */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
//               ✦ OUR IMPACT ✦
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">
//                 Growing Together
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >
//                 {/* Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

//                 {/* Icon */}
//                 <div className="relative z-10 mb-6">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
//                     {stat.icon}
//                   </div>
//                 </div>

//                 {/* Value */}
//                 <h3 className="text-4xl font-bold text-gray-900 mb-2">
//                   {activeCounter && (
//                     <CountUp end={stat.value} duration={3} separator="," />
//                   )}
//                   {stat.suffix}
//                 </h3>

//                 {/* Label */}
//                 <p className="text-gray-600 text-lg">{stat.label}</p>

//                 {/* Decorative Line */}
//                 <motion.div
//                   className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                 />

//                 {/* Corner Accent */}
//                 <div className="absolute top-0 right-0 w-20 h-20">
//                   <div className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-br ${stat.color} opacity-20 rounded-bl-full`} />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Progress Bars */}
//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             {[
//               { label: "Farmer Satisfaction", value: 98 },
//               { label: "Product Quality", value: 100 },
//               { label: "On-time Delivery", value: 95 },
//               { label: "Support Response", value: 99 }
//             ].map((item, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="text-sm text-gray-500 mb-2">{item.label}</div>
//                 <div className="text-2xl font-bold text-gray-900 mb-2">{item.value}%</div>
//                 <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                   <motion.div
//                     className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${item.value}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1.5, delay: idx * 0.2 }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= FEATURED PRODUCTS SECTION ================= */}
//       <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-semibold mb-4">
//               🌱 FEATURED PRODUCTS
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
//                 Premium Agricultural Solutions
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600">Scientifically formulated for maximum yield</p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-3xl shadow-xl overflow-hidden"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm text-green-600 text-sm font-bold rounded-full shadow-lg">
//                     {product.category}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
//                     {product.name}
//                   </h3>

//                   <p className="text-gray-500 text-sm mb-4">
//                     Premium quality for better yields
//                   </p>

//                   <div className="flex items-center justify-between">
//                     <span className="text-2xl font-bold text-green-600">{product.price}</span>

//                     <Link
//                       to="/products"
//                       className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition-colors flex items-center gap-2"
//                     >
//                       <span>View</span>
//                       <BsArrowUpRight />
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Hover Border */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             className="text-center mt-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <Link
//               to="/products"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors group"
//             >
//               View All Products
//               <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= PARALLAX SECTION ================= */}
//       <Parallax
//         bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920"
//         strength={400}
//         className="relative"
//       >
//         <div className="h-[500px] flex items-center justify-center bg-black/40">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="text-center text-white px-6"
//           >
//             <FaSeedling className="text-6xl text-orange-400 mx-auto mb-6" />
//             <h2 className="text-4xl md:text-6xl font-bold mb-6">
//               Innovation. Quality.
//               <br />
//               <span className="text-orange-400">Farmer Trust.</span>
//             </h2>
//             <p className="text-xl max-w-2xl mx-auto">
//               Committed to sustainable agriculture and farmer prosperity
//             </p>
//           </motion.div>
//         </div>
//       </Parallax>

//       {/* ================= TESTIMONIAL SLIDER ================= */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
//               ⭐ FARMER TESTIMONIALS
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
//                 What Farmers Say
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600">Real stories from real farmers</p>
//           </motion.div>

//           <Swiper
//             modules={[Autoplay, EffectFade, Navigation, Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             autoplay={{ delay: 5000 }}
//             loop={true}
//             pagination={{ clickable: true }}
//             navigation={true}
//             className="testimonial-swiper"
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative"
//                 >
//                   {/* Quote Icon */}
//                   <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center text-4xl transform rotate-12 shadow-xl">
//                     <FaQuoteLeft />
//                   </div>

//                   <div className="mt-8">
//                     {/* Rating */}
//                     <div className="flex gap-1 mb-6">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <FaStar key={i} className="text-yellow-400" />
//                       ))}
//                     </div>

//                     {/* Testimonial Text */}
//                     <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
//                       "{testimonial.text}"
//                     </p>

//                     {/* Author Info */}
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         className="w-16 h-16 rounded-full object-cover"
//                       />
//                       <div>
//                         <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
//                         <p className="text-gray-500">{testimonial.location}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Background Pattern */}
//                   <div className="absolute inset-0 opacity-5" style={{
//                     backgroundImage: 'radial-gradient(circle at 2px 2px, #a855f7 1px, transparent 0)',
//                     backgroundSize: '20px 20px'
//                   }}></div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       {/* ================= DISTRIBUTOR SECTION ================= */}
//       <section className="relative py-32 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1574943320219-553eb673f441?w=1920"
//             alt="Farm Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-green-800/95"></div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
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
//             className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
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
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <FaHandshake className="text-6xl text-orange-400 mx-auto mb-6" />

//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Become Our Authorized Distributor
//             </h2>

//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Join Toshni Agro's growing distribution network and expand your agri
//               business with premium crop solutions and strong brand support.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                 <FaLeaf className="text-green-400" />
//                 <span>Premium Products</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                 <FaAward className="text-orange-400" />
//                 <span>Brand Support</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                 <FaUsers className="text-blue-400" />
//                 <span>Growing Network</span>
//               </div>
//             </div>

//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
//             >
//               Apply Now
//               <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </Link>

//             <p className="mt-6 text-sm text-gray-400">
//               Limited opportunities available in selected regions
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= NEWSLETTER SECTION ================= */}
//       <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
//         <div className="max-w-4xl mx-auto px-6 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-3xl font-bold mb-4">Stay Updated with Toshani Agro</h3>
//             <p className="text-green-100 mb-8">Get the latest farming tips, product launches, and exclusive offers</p>

//             <div className="flex flex-wrap gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="px-6 py-4 rounded-full w-96 max-w-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300"
//               />
//               <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all hover:shadow-xl flex items-center gap-2 group">
//                 Subscribe
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <p className="text-sm text-green-200 mt-4">
//               Join 10,000+ farmers who trust us for their farming needs
//             </p>
//           </motion.div>
//         </div>

//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-12">
//             {/* Company Info */}
//             <div>
//               <h3 className="text-2xl font-bold mb-4">Toshani Agro</h3>
//               <p className="text-gray-400 mb-4">
//                 Empowering farmers with innovative agricultural solutions for sustainable growth.
//               </p>
//               <div className="flex gap-4">
//                 <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
//                   <FaFacebookF />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
//                   <FaLinkedinIn />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
//                   <FaYoutube />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
//                 <li><a href="/about" className="hover:text-orange-400 transition-colors">About Us</a></li>
//                 <li><a href="/products" className="hover:text-orange-400 transition-colors">Products</a></li>
//                 <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="font-bold mb-4">Contact Us</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li className="flex items-center gap-2">
//                   <FaMapMarkerAlt />
//                   <span>Satara, Maharashtra</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <FaPhone />
//                   <a href="tel:+917028389588" className="hover:text-orange-400">+91 7028389588</a>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <FaEnvelope />
//                   <a href="mailto:toshniagro2001@gmail.com" className="hover:text-orange-400">toshniagro2001@gmail.com</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Business Hours */}
//             <div>
//               <h4 className="font-bold mb-4">Business Hours</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
//                 <li>Saturday: 9:00 AM - 2:00 PM</li>
//                 <li>Sunday: Closed</li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 Toshani Agro. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../assets/a.png";
import { Parallax } from "react-parallax";
import {
  FaUsers,
  FaLeaf,
  FaAward,
  FaHandshake,
  FaVolumeMute,
  FaVolumeUp,
  FaSeedling,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import heroVideo from "../assets/hero5.mp4";

function Home() {
  const [muted, setMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeCounter, setActiveCounter] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveCounter(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    {
      icon: <FaUsers />,
      value: 2000,
      label: "Happy Farmers",
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaLeaf />,
      value: 8,
      label: "Products",
      suffix: "+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaAward />,
      value: 1,
      label: "Years Experience",
      suffix: "+",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaHandshake />,
      value: 100,
      label: "Distributors",
      suffix: "+",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const testimonials = [
    {
      text: "Toshni Agro products increased my crop yield by 30%. The quality is unmatched and their support team is always available.",
      name: "Rajesh Kumar",
      location: "Farmer, Maharashtra",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=150",
    },
    {
      text: "Excellent quality and strong field support. Been using their products for 5 years now, never disappointed.",
      name: "Priya Sharma",
      location: "Progressive Grower, Punjab",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b5b?w=150",
    },
    {
      text: "The best agricultural solutions provider in the region. Their products are scientifically proven and farmer-friendly.",
      name: "Suresh Patel",
      location: "Distributor, Gujarat",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb673f441?w=150",
    },
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* ================= LOADING ANIMATION ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-orange-500 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        style={{ transformOrigin: "0%" }}
      />

      {/* ================= VIDEO HERO SECTION ================= */}
      {/* ================= RESPONSIVE VIDEO HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[100svh] flex items-center justify-center text-white overflow-hidden bg-[#263323]"
      >
        {/* MOBILE FALLBACK BACKGROUND */}
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 block sm:hidden w-full h-full object-cover object-center"
        />

        {/* DESKTOP VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0 hidden sm:block overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              scale: heroScale,
              y: heroY,
              opacity: heroOpacity,
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={muted}
              playsInline
              preload="metadata"
              poster={img}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoLoaded(false)}
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/30 to-black/60" />

        {/* SUBTLE BRAND COLOR OVERLAY */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-green-950/20 via-transparent to-orange-950/20" />

        {/* HERO CONTENT */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 pt-20 pb-16 sm:py-24 text-center"
        >
          {/* WELCOME BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 sm:px-6 sm:py-3 backdrop-blur-md mb-6 sm:mb-8"
          >
            <HiOutlineSparkles className="shrink-0 text-orange-400" />

            <span className="text-[10px] sm:text-sm font-semibold tracking-wide sm:tracking-wider">
              WELCOME TO TOSHNI AGRO
            </span>

            <HiOutlineSparkles className="shrink-0 text-orange-400" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-5xl text-[2.65rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Transforming
            </span>

            <br />

            <span className="relative inline-block mt-1 sm:mt-2">
              Agriculture
              <motion.span
                className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mx-auto mt-7 sm:mt-8 max-w-2xl text-base sm:text-xl md:text-2xl leading-relaxed text-white/90"
          >
            Empowering farmers with{" "}
            <span className="font-semibold text-orange-400">innovation</span>,{" "}
            <span className="font-semibold text-green-400">quality</span> &amp;{" "}
            <span className="font-semibold text-blue-300">trust</span>
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              to="/products"
              className="group inline-flex min-h-12 w-full max-w-[230px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 text-base sm:text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/30"
            >
              Explore Products
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/co"
              className="inline-flex min-h-12 w-full max-w-[230px] items-center justify-center rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-base sm:text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              Become Distributor
            </Link>
          </motion.div>
        </motion.div>

        {/* VIDEO SOUND CONTROL - DESKTOP ONLY */}
        <motion.button
          type="button"
          onClick={toggleMute}
          aria-label={
            muted ? "Unmute background video" : "Mute background video"
          }
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center justify-center rounded-full border border-white/25 bg-black/30 p-3.5 text-xl text-white backdrop-blur-md transition-colors hover:bg-black/50"
        >
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </motion.button>
      </section>

      {/* ================= ANIMATED COUNTERS SECTION ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
              ✦ OUR IMPACT ✦
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">
                Growing Together
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Value */}
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {activeCounter && (
                    <CountUp end={stat.value} duration={3} separator="," />
                  )}
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p className="text-gray-600 text-lg">{stat.label}</p>

                {/* Decorative Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div
                    className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-br ${stat.color} opacity-20 rounded-bl-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Bars */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Farmer Satisfaction", value: 98 },
              { label: "Product Quality", value: 100 },
              { label: "On-time Delivery", value: 95 },
              { label: "Support Response", value: 99 },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-sm text-gray-500 mb-2">{item.label}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {item.value}%
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PARALLAX SECTION ================= */}
      <Parallax
        // bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920"
        bgImage={img}
        strength={400}
        className="relative"
      >
        <div className="h-[500px] flex items-center justify-center bg-black/40">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-6"
          >
            <FaSeedling className="text-6xl text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Innovation. Quality.
              <br />
              <span className="text-orange-400">Farmer Trust.</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Committed to sustainable agriculture and farmer prosperity
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* ================= NEW TESTIMONIAL DESIGN ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-semibold mb-4">
              ⭐ FARMER TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-600">
                What Farmers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real farmers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group"
              >
                {/* Top colored bar */}
                <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>

                <div className="p-8">
                  {/* Quote icon */}
                  <div className="text-4xl text-orange-500/20 mb-4">
                    <FaQuoteLeft />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-200"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors group"
            >
              Share Your Story
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= DISTRIBUTOR SECTION ================= */}
      {/* ================= DISTRIBUTOR SECTION ================= */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb673f441?w=1920"
            alt="Farm Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-600"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaHandshake className="text-5xl text-orange-400 mx-auto mb-4" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Become Our Authorized Distributor
            </h2>

            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Join Toshni Agro's growing distribution network and expand your
              agri business with premium crop solutions and strong brand
              support.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                <FaLeaf className="text-green-400 text-sm" />
                <span>Premium Products</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                <FaAward className="text-orange-400 text-sm" />
                <span>Brand Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                <FaUsers className="text-blue-400 text-sm" />
                <span>Growing Network</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold text-base hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
            >
              Apply Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
            </Link>

            <p className="mt-4 text-xs text-gray-300">
              Limited opportunities available in selected regions
            </p>
          </motion.div>
        </div>
      </section>
      {/* ================= NEWSLETTER SECTION =================
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Toshani Agro</h3>
            <p className="text-green-100 mb-8">Get the latest farming tips, product launches, and exclusive offers</p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-full w-96 max-w-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300"
              />
              <button className="px-8 py-4 bg-orange-500 text-black rounded-full font-semibold hover:bg-orange-600 transition-all hover:shadow-xl flex items-center gap-2 group">
                Subscribe
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-sm text-green-200 mt-4">
              Join 10,000+ farmers who trust us for their farming needs
            </p>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
