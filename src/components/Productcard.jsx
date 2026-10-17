// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-white rounded-xl shadow-lg p-6 text-center"
//     >
//       <img
//         src={product.image}
//         alt={product.name}
//         className="h-48 w-full object-contain rounded-lg mb-4 bg-white p-2"
//       />

//       <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
      
//       {product.tagline && (
//         <p className="text-sm text-green-600 font-medium mb-2">{product.tagline}</p>
//       )}

    

//       <Link
//         to={`/products/${product.id}`}
//         className="bg-green-700 text-white px-4 py-2  rounded hover:bg-green-800"
//       >
//         View Details
//       </Link>

//     </motion.div>
//   );
// }

// export default ProductCard;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({ product }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Default placeholder if image fails to load
  const handleImageError = (e) => {
    e.target.src = "/images/placeholder-product.jpg";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Premium Badge */}
      {product.isPremium && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Premium
          </motion.div>
        </div>
      )}

      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-4 left-4 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.1 }}
            className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          >
            -{product.discount}%
          </motion.div>
        </div>
      )}

      {/* Image Container with Loading State */}
      <div className="relative h-56 bg-gradient-to-br from-green-50 to-emerald-50 p-4 overflow-hidden">
        {/* Loading Skeleton */}
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          onLoad={() => setIsImageLoaded(true)}
          onError={handleImageError}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 2 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`h-full w-full object-contain transition-opacity duration-300 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Category Tag */}
        {product.category && (
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3"
          >
            {product.category}
          </motion.span>
        )}

        {/* Product Name */}
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors duration-300"
        >
          {product.name}
        </motion.h3>
        
        {/* Tagline */}
        {product.tagline && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-green-600 font-medium mb-3 line-clamp-2"
          >
            {product.tagline}
          </motion.p>
        )}

        {/* Description */}
        {product.description && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-600 mb-4 line-clamp-2"
          >
            {product.description}
          </motion.p>
        )}

        {/* Rating Stars */}
        {product.rating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400' 
                    : i < product.rating 
                    ? 'text-yellow-300' 
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviews || 0})</span>
          </motion.div>
        )}

        {/* View Details Button - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to={`/products/${product.id}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>View Details</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* Stock Status */}
        {product.stock !== undefined && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-3 text-xs text-center"
          >
            {product.stock > 0 ? (
              <span className="text-green-600 flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="text-red-500 flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Out of Stock
              </span>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom Border Gradient on Hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default ProductCard;