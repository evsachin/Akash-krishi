

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import products from "../data/products";

// function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);
//   const [selectedPack, setSelectedPack] = useState(
//     product?.packSizes?.[0] || ""
//   );

//   // Scroll to top when component mounts
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     });
//   }, []);

//   if (!product)
//     return (
//       <div className="h-screen flex items-center justify-center text-2xl font-semibold">
//         Product Not Found
//       </div>
//     );

//   return (
//     <div className="bg-gradient-to-b from-yellow-50 to-emerald-50   text-gray-900">

//       {/* HERO SECTION */}
//       <section className="min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="uppercase tracking-widest text-sm text-white font-semibold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 rounded-full inline-block shadow-lg">
//               {product.category}
//             </p>

//             <h1 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
//               {product.name}
//             </h1>

//             <p className="text-2xl font-medium mb-8 italic bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//               {product.tagline}
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed mb-10">
//               {product.shortDescription}
//             </p>

//             {/* PACK SELECTOR */}
//             <div className="flex flex-wrap gap-4 mb-12">
//               {product.packSizes?.map((pack, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedPack(pack)}
//                   className={`px-8 py-3 rounded-full border transition-all duration-300 ${
//                     selectedPack === pack
//                       ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl border-green-600"
//                       : "bg-white hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 shadow-md border-gray-200 hover:border-green-300"
//                   }`}
//                 >
//                   {pack}
//                 </button>
//               ))}
//             </div>

//             {/* CTA */}
//             <button className="px-12 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-lg hover:scale-105 transition duration-300 shadow-2xl hover:from-green-700 hover:to-emerald-700">
//               Contact Distributor
//             </button>
//           </motion.div>

//          <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.7 }}
//   whileHover={{ y: -10 }}
//   className="relative flex justify-center items-center"
// >
//   <div className="absolute inset-0 bg-green-400 blur-3xl opacity-30 rounded-full"></div>

//   <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
//     <img
//       src={product.image}
//       alt={product.name}
//       className="rounded-2xl w-full h-96 object-contain"
//     />
//   </div>
// </motion.div>


//         </div>
//       </section>

//       {/* BENEFITS */}
//       <section className="py-28 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
//             Why Farmers Choose {product.name}
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             {product.benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -8 }}
//                 className="bg-white p-10 rounded-3xl shadow-xl"
//               >
//                 <div className="text-4xl mb-6 text-green-500">✓</div>
//                 <p className="text-lg font-medium text-gray-800">
//                   {benefit}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CROP COMPATIBILITY */}
//       <section className="py-24 text-center">
//         <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           Suitable Crops
//         </h2>

//         <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto px-6">
//           {product.crops?.map((crop, index) => (
//             <span
//               key={index}
//               className="px-8 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full shadow-md hover:shadow-lg hover:from-green-200 hover:to-emerald-200 transition-all duration-300 font-medium"
//             >
//               {crop}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* DOSAGE SECTION */}
//       <section className="py-28 bg-black text-white text-center">
//         <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
//           Recommended Dosage
//         </h2>

//         <div className="inline-block px-16 py-8 border border-white rounded-full text-3xl tracking-wide shadow-2xl">
//           {product.dosage}
//         </div>
//       </section>

//       {/* STORY SECTION */}
//       <section className="py-28 bg-white">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
//             Built For Real Farming Conditions
//           </h2>

//           <p className="text-lg text-gray-700 leading-relaxed">
//             {product.story}
//           </p>
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="py-32 bg-gray-50">
//         <div className="max-w-3xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
//             What Farmers Say
//           </h2>
//           <div className="bg-white p-14 rounded-3xl shadow-2xl relative">
//             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-2xl">
//               ❝
//             </div>

//             <p className="text-xl italic text-gray-700 mt-6">
//               “{product.testimonial?.feedback}”
//             </p>

//             <div className="mt-10">
//               <h4 className="font-semibold text-lg bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
//                 {product.testimonial?.name}
//               </h4>
//               <p className="text-gray-500">
//                 {product.testimonial?.location}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

// export default ProductDetails;






import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Droplet, 
  Sun, 
  Shield, 
  Star,
  ChevronRight,
  Package,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Sprout,
  Flower2,
  Wheat,
  Apple,
  Grape,
  Bean
} from "lucide-react";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedPack, setSelectedPack] = useState(
    product?.packSizes?.[0] || ""
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-emerald-50">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl"
        >
          <Sprout className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a 
            href="/products" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Back to Products
          </a>
        </motion.div>
      </div>
    );
  }

  // Icons for benefits
  const benefitIcons = [
    <Leaf className="w-12 h-12 text-green-600" />,
    <Droplet className="w-12 h-12 text-blue-600" />,
    <Sun className="w-12 h-12 text-yellow-600" />,
    <Shield className="w-12 h-12 text-purple-600" />,
    <Flower2 className="w-12 h-12 text-pink-600" />,
    <Bean className="w-12 h-12 text-amber-600" />
  ];

  // Icons for crops
  const cropIcons = {
    "Wheat": <Wheat className="w-5 h-5" />,
    "Rice": <Sprout className="w-5 h-5" />,
    "Vegetables": <Leaf className="w-5 h-5" />,
    "Fruits": <Apple className="w-5 h-5" />,
    "Grapes": <Grape className="w-5 h-5" />,
    "Default": <Bean className="w-5 h-5" />
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-emerald-50 text-gray-900 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-gray-500 mb-8"
          >
            <a href="/" className="hover:text-green-600 transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/products" className="hover:text-green-600 transition-colors">Products</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-600 font-medium">{product.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Frame */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute -top-4 -right-4 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-md"></div>
                        <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-xl">
                          🔥 {product.badge}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Rating Badge */}
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-gray-900">{product.rating || "4.8"}</span>
                    <span className="text-gray-500">({product.reviews || "1.1K"})</span>
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gray-100 rounded-2xl animate-pulse"></div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      onLoad={() => setImageLoaded(true)}
                      className={`rounded-2xl w-full h-[450px] object-contain transition-opacity duration-500 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </motion.div>

                  {/* Pack Size Indicator */}
                  <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                    {selectedPack || product.packSizes?.[0]}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500">Free Shipping</p>
                    <p className="font-semibold text-gray-900">All India</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500">Delivery</p>
                    <p className="font-semibold text-gray-900">3-4 Days</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Category */}
              <div>
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-700">
                  {product.name}
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl text-gray-600 italic border-l-4 border-green-600 pl-6">
                {product.tagline || "Premium quality for better yields"}
              </p>

              {/* Price Section
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price</p>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                        <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold">
                          Save {Math.round((1 - product.price/product.originalPrice) * 100)}%
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div> */}

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.shortDescription || product.description}
              </p>

              {/* Pack Size Selector */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Pack Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.packSizes?.map((pack, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedPack(pack)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        selectedPack === pack
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      {pack}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                {product.keyBenefits?.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Distributor
                </motion.button>

                <motion.a
                  href={`mailto:toshniagro2001@gmail.com`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-2 border-green-600 text-green-600 rounded-2xl font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </motion.a>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">{product.stock || "In Stock"}</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-600">{product.stockAvailable || "500"} units available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">
                Why Choose {product.name}?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven benefits trusted by thousands of farmers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits?.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {benefitIcons[index % benefitIcons.length]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Benefit {index + 1}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Effectiveness</span>
                    <span className="font-bold text-green-600">98%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green-500/10 to-transparent rounded-tl-3xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Compatibility */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
              🌾 SUITABLE FOR
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                Compatible Crops
              </span>
            </h2>
            <p className="text-xl text-gray-600">Perfect for these and many more crops</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {product.crops?.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-green-100">
                  {cropIcons[crop] || cropIcons["Default"]}
                  <span className="font-medium text-gray-800">{crop}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Crops Supported", value: "50+", icon: "🌾" },
              { label: "Success Rate", value: "95%", icon: "📈" },
              { label: "Happy Farmers", value: "2000+", icon: "👨‍🌾" },
              { label: "Years of Research", value: "1+", icon: "🔬" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dosage Section */}
      <section className="relative py-15 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920"
            alt="Farm Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl  font-bold mb-6">
              Recommended Dosage
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-5"></div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {product.dosage}
              </div>
              <p className="text-xl text-gray-300">per acre application</p>

              <div className="grid md:grid-cols-3 gap-2 mt-12">
                <div>
                  <div className="text-3xl font-bold text-green-400">2-3</div>
                  <div className="text-sm text-gray-400">Applications per season</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">7-10</div>
                  <div className="text-sm text-gray-400">Days between applications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">10</div>
                  <div className="text-sm text-gray-400">Results visible within days</div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-gray-300">
              Best applied during early morning or late evening for optimal results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-4">
              📖 OUR STORY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                Built For Real Farming
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
                  alt="Farmer Story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">Field trials since 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.story || "Developed through years of research and field trials, this product represents our commitment to sustainable agriculture. We've worked closely with farmers to understand their needs and challenges, resulting in a formulation that delivers consistent results under real farming conditions."}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">2000+</span> farmers trust us
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-full text-sm font-semibold mb-4">
              ⭐ FARMER TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-yellow-600">
                What Farmers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from real farmers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl flex items-center justify-center text-4xl transform rotate-12 shadow-xl">
              ❝
            </div>

            {/* Content */}
            <div className="mt-8">
              <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed">
                “{product.testimonial?.feedback || "This product has completely transformed my farm's productivity. The yield increased by 40% in the first season itself. Highly recommended for all farmers!"}”
              </p>

              <div className="flex items-center justify-between mt-10">
                <div>
                  <h4 className="font-bold text-xl bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    {product.testimonial?.name || "Rajesh Kumar"}
                  </h4>
                  <p className="text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {product.testimonial?.location || "Farmer, Punjab"}
                  </p>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;






