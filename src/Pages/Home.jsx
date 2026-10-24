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

      {/* RESPONSIVE VIDEO HERO SECTION */}
  
   
      <section
        ref={heroRef}
        className="relative isolate min-h-[100svh] flex items-center justify-center
             text-white overflow-hidden bg-[#263323]"
      >
        {/* MOBILE FALLBACK BACKGROUND */}
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 block sm:hidden w-full h-full object-cover object-center"
        />

        {/* RESPONSIVE VIDEO BACKGROUND - DESKTOP + MOBILE */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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
              muted
              playsInline
              webkit-playsinline="true"
              preload="metadata"
              poster={img}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoLoaded(false)}
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
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
