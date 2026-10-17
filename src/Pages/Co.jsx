import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter, Linkedin, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";

function Co() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    success: false,
    error: false
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        error: false
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          loading: false,
          success: false,
          error: false
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 2000);
  };

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
    <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradients */}
        <motion.div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/40 to-green-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -50, 50, -50],
              x: [null, 50, -50, 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Organic Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 20 L30 30 L25 20 Z' fill='%232e7d32' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Premium Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold tracking-wider mb-6 shadow-lg shadow-green-200"
            whileHover={{ scale: 1.05 }}
          >
            ✦ GET IN TOUCH ✦
          </motion.span>
          
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Connect
            </span>{" "}
            With Us
          </h2>
          
          <p className="mt-4 text-xl text-gray-600 leading-relaxed">
            We are here to support your agricultural growth. 
            <span className="block mt-2 text-green-600 font-medium">Reach out to us anytime.</span>
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <span className="text-green-500">✦</span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Contact Info - Enhanced */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Business Hours Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-semibold bg-white/20 px-3 py-1 rounded-full">Closed</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span>Available for emergency calls 24/7</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-full"></div>
            </motion.div>

            {/* Address Card */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-start gap-5">
                <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-green-600 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Visit Our Office</h4>
                  <p className="text-gray-600 text-lg mb-3">
                    📍 Satara, Maharashtra 415001
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Get Directions <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-start gap-5">
                <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-green-600 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Call Us Anytime</h4>
                  <a
                    href="tel:+917028389588"
                    className="text-green-600 hover:text-green-700 text-lg font-semibold block mb-2 transition-colors"
                  >
                    +91 7028389588
                  </a>
                  <p className="text-sm text-gray-500">Available 24/7 for emergency support</p>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-start gap-5">
                <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-green-600 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Email Us</h4>
                  <a
                    href="mailto:toshniagro2001@gmail.com"
                    className="text-green-600 hover:text-green-700 text-lg font-semibold block mb-2 transition-colors"
                  >
                    toshniagro2001@gmail.com
                  </a>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-3xl shadow-xl"
            >
              <h4 className="font-bold text-lg text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, color: "bg-blue-600", hover: "hover:bg-blue-700", link: "#" },
                  { icon: <Instagram className="w-5 h-5" />, color: "bg-pink-600", hover: "hover:bg-pink-700", link: "#" },
                  { icon: <Twitter className="w-5 h-5" />, color: "bg-sky-500", hover: "hover:bg-sky-600", link: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, color: "bg-blue-700", hover: "hover:bg-blue-800", link: "#" },
                  { icon: <MessageCircle className="w-5 h-5" />, color: "bg-green-600", hover: "hover:bg-green-700", link: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className={`p-3 ${social.color} text-white rounded-xl ${social.hover} transition-all transform hover:scale-110 hover:rotate-6`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Enhanced */}
          <motion.div 
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Send Us a Message
                </h3>
              </div>

              {formStatus.success ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h4>
                  <p className="text-green-600">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help you..."
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all resize-none"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={formStatus.loading}
                    className={`w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden group ${
                      formStatus.loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {formStatus.loading ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white p-4 rounded-3xl shadow-2xl overflow-hidden">
            <iframe
              title="Toshani Agro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243287.0380003871!2d73.97554464622725!3d17.68681602406527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2399b6e5d5b4f%3A0x7f3b7e7b7e7b7e7b!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Contact us directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What are your delivery areas?",
                a: "We deliver across Maharashtra and select locations in India."
              },
              {
                q: "Do you offer technical support?",
                a: "Yes, our agronomists provide free technical support to farmers."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept UPI, bank transfer, and cash on delivery."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-left"
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Co;