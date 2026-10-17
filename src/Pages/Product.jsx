



// import products from "../data/products";
// import ProductCard from "../components/Productcard";
// import { useState, useEffect, useRef } from "react";

// function Products() {
//   const [visibleProducts, setVisibleProducts] = useState(8);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const sectionRef = useRef(null);

//   // Categories derived from products
//   const categories = ["all", ...new Set(products.map(p => p.category))];

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory === "all" 
//     ? products 
//     : products.filter(p => p.category === selectedCategory);

//   // Load more products
//   const loadMore = () => {
//     setVisibleProducts(prev => Math.min(prev + 4, filteredProducts.length));
//   };

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fadeInUp');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = document.querySelectorAll('.product-card');
//     cards.forEach(card => observer.observe(card));

//     return () => observer.disconnect();
//   }, [filteredProducts, visibleProducts]);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-24 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 overflow-hidden"
//       aria-label="Products section"
//     >
//       {/* Enhanced Background Elements with Animation */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/30 via-transparent to-transparent -z-10 pointer-events-none animate-pulse-slow"></div>
//       <div className="absolute top-40 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10 pointer-events-none animate-float"></div>
//       <div className="absolute bottom-40 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl -z-10 pointer-events-none animate-float-delayed"></div>
      
//       {/* Decorative Leaves Pattern - Animated */}
//       <div className="absolute top-20 left-10 opacity-10 rotate-12 pointer-events-none animate-spin-slow">
//         <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 2C12 2 16 6 16 10C16 14 12 18 12 18C12 18 8 14 8 10C8 6 12 2 12 2Z" fill="currentColor" className="text-green-800"/>
//         </svg>
//       </div>

//       {/* Additional Decorative Elements */}
//       <div className="absolute bottom-20 right-10 opacity-10 -rotate-12 pointer-events-none animate-spin-slow-reverse">
//         <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 2C12 2 16 6 16 10C16 14 12 18 12 18C12 18 8 14 8 10C8 6 12 2 12 2Z" fill="currentColor" className="text-emerald-800"/>
//         </svg>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Enhanced Header Section with Animation */}
//         <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInDown">
//           <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-sm font-bold tracking-widest text-green-700 uppercase mb-6 shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
//             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//             <span className="relative">
//               Exclusive Products
//               <span className="absolute -top-1 -right-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
//             </span>
//           </div>
          
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight mb-4">
//             Inspired by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 animate-gradient">Nature</span>
//           </h1>
          
//           <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
//             Discover our premium range of soil conditioners and crop nutrition solutions designed to improve soil fertility and maximize farm productivity.
//           </p>
          
//           {/* Stats/Features Row with Hover Effects */}
//           <div className="flex justify-center gap-8 mt-8">
//             {[
//               { value: `${products.length}+`, label: 'Products' },
//               { value: '24/7', label: 'Support' },
           
//               { value: '3 yr', label: 'Warranty' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center group cursor-pointer">
//                 <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-gray-500 group-hover:text-green-600 transition-colors duration-300">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Category Filter Section */}
//         <div className="mb-12">
//           {/* Mobile Filter Button */}
//           <button
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="lg:hidden w-full py-3 px-4 bg-white rounded-lg shadow-md flex items-center justify-between mb-4"
//             aria-expanded={isFilterOpen}
//             aria-controls="category-filter"
//           >
//             <span className="font-medium text-gray-700">Filter by Category</span>
//             <svg 
//               className={`w-5 h-5 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>

//           {/* Category Filter */}
//           <div 
//             id="category-filter"
//             className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${
//               isFilterOpen ? 'block' : 'hidden lg:flex'
//             }`}
//           >
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setSelectedCategory(category);
//                   setVisibleProducts(8);
//                   setIsFilterOpen(false);
//                 }}
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
//                   selectedCategory === category
//                     ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg'
//                     : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
//                 }`}
//                 aria-pressed={selectedCategory === category}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//                 {category !== 'all' && (
//                   <span className="ml-2 text-xs opacity-75">
//                     ({products.filter(p => p.category === category).length})
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Grid Section with Animation */}
//         <div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//           role="list"
//           aria-label="Product grid"
//         >
//           {filteredProducts.slice(0, visibleProducts).map((product, index) => (
//             <div 
//               key={product.id} 
//               className="product-card transform transition-all duration-500 hover:-translate-y-2 opacity-0"
//               style={{ animationDelay: `${index * 100}ms` }}
//               role="listitem"
//             >
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleProducts < filteredProducts.length && (
//           <div className="text-center mt-12 animate-fadeIn">
//             <button
//               onClick={loadMore}
//               className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 overflow-hidden"
//               aria-label="Load more products"
//             >
//               <span className="relative z-10">Load More Products</span>
//               <svg 
//                 className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
//               </svg>
//               <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </div>
//         )}

//         {/* No Products Message */}
//         {filteredProducts.length === 0 && (
//           <div className="text-center py-12 animate-fadeIn">
//             <div className="text-6xl mb-4">🌱</div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Products Found</h3>
//             <p className="text-gray-600 mb-4">We couldn't find any products in this category.</p>
//             <button
//               onClick={() => {
//                 setSelectedCategory("all");
//                 setVisibleProducts(8);
//               }}
//               className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
//             >
//               View All Products
//             </button>
//           </div>
//         )}




//         {/* Enhanced Footer Section */}
//         <div className="mt-20 text-center">
//           {/* Newsletter Signup */}
//           <div className="max-w-md mx-auto mb-12">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay Updated</h3>
//             <p className="text-gray-600 mb-4">Get the latest updates on new products and farming tips</p>
//             <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 aria-label="Email for newsletter"
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>

//           {/* Trust Badges with Animation */}
//           <div className="flex justify-center items-center gap-8 mt-12 text-gray-400">
//             {[
            
//               { icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z", text: "1,000+ Happy Farmers" },
//               { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Premium Quality" }
//             ].map((badge, index) => (
//               <div 
//                 key={index} 
//                 className="flex items-center gap-2 group cursor-pointer"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d={badge.icon} clipRule="evenodd"/>
//                 </svg>
//                 <span className="text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">
//                   {badge.text}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Add custom CSS animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-30px); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes spin-slow-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
        
//         .animate-spin-slow-reverse {
//           animation: spin-slow-reverse 25s linear infinite;
//         }
        
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
        
//         .animate-fadeInDown {
//           animation: fadeInDown 0.8s ease-out forwards;
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards !important;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Products;





















import products from "../data/products";
import ProductCard from "../components/Productcard";
import { useState, useEffect, useRef } from "react";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const sectionRef = useRef(null);

  // Categories derived from products
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 overflow-hidden"
      aria-label="Products section"
    >
      {/* Beautiful Nature Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&auto=format&fit=crop"
          alt="Beautiful nature landscape with green fields"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80"></div>
      </div>

      {/* Enhanced Background Elements with Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent -z-10 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -z-10 pointer-events-none animate-float"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl -z-10 pointer-events-none animate-float-delayed"></div>
      
      {/* Decorative Leaves Pattern - Animated */}
      <div className="absolute top-20 left-10 opacity-20 rotate-12 pointer-events-none animate-spin-slow z-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 16 6 16 10C16 14 12 18 12 18C12 18 8 14 8 10C8 6 12 2 12 2Z" fill="currentColor" className="text-green-700"/>
        </svg>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-20 right-10 opacity-20 -rotate-12 pointer-events-none animate-spin-slow-reverse z-10">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 16 6 16 10C16 14 12 18 12 18C12 18 8 14 8 10C8 6 12 2 12 2Z" fill="currentColor" className="text-emerald-700"/>
        </svg>
      </div>

      {/* Floating Leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-green-600/20 text-4xl animate-float-${i % 3 + 1}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🌿
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Simplified without box */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInDown">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="relative">
              Our Products
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-white rounded-full animate-ping"></span>
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Premium Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 animate-gradient">Solutions</span>
          </h1>
          
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
            Discover our premium range of soil conditioners and crop nutrition solutions designed to improve soil fertility and maximize farm productivity.
          </p>
          
          {/* Stats/Features Row with Hover Effects */}
          <div className="flex justify-center gap-8 mt-8">
            {[
              { value: `${products.length}+`, label: 'Products' },
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Organic' },
              { value: '3 yr', label: 'Warranty' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="mb-12">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden w-full py-3 px-4 bg-white rounded-lg shadow-md flex items-center justify-between mb-4"
            aria-expanded={isFilterOpen}
            aria-controls="category-filter"
          >
            <span className="font-medium text-gray-700">Filter by Category</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Category Filter */}
          <div 
            id="category-filter"
            className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${
              isFilterOpen ? 'block' : 'hidden lg:flex'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsFilterOpen(false);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {category !== 'all' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({products.filter(p => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid Section - All products loaded */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          role="list"
          aria-label="Product grid"
        >
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card transform transition-all duration-500 hover:-translate-y-2 opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 animate-fadeIn">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-4">We couldn't find any products in this category.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-20 text-center">
          <div className="max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Get the latest updates on new products and farming tips</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Trust Badges with Animation */}
          <div className="flex justify-center items-center gap-8 mt-8 text-gray-600">
            {[
              { icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z", text: "1,000+ Happy Farmers" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Premium Quality" }
            ].map((badge, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <svg className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={badge.icon} clipRule="evenodd"/>
                </svg>
                <span className="text-sm text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(10deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-50px) rotate(15deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-1 {
          animation: float-1 7s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 9s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 11s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards !important;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}

export default Products;