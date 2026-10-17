// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";



// function Footer() {
//   return (
//     <>
//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/7028389588"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
//       >
//         <FaWhatsapp className="text-white text-2xl" />
//       </a>

//       <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">

       

//         {/* Main Footer */}
//         <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

//           {/* Company Info */}
//           <div>
//             <h2 className="text-2xl font-bold text-white mb-4">
//               Toshni Agro
//             </h2>
//             <p className="text-sm leading-6">
//               We provide high-quality Bio-Stimulants & Nutrient Enhancers fertilizers 
//               to boost crop yield and farmer prosperity across India.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-3 text-sm">
//               {["Home", "About Us", "Products", "Farmer Reviews", "Contact"].map((item) => (
//                 <li
//                   key={item}
//                   className="relative w-fit cursor-pointer hover:text-green-400 transition duration-300 after:block after:h-[2px] after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-6">
//               Contact Us
//             </h3>
//             <p className="text-sm mb-2">📍 Satara, Maharashtra</p>
//             <p className="text-sm mb-2">📞 +91 7028389588</p>
//             <p className="text-sm mb-4">📧 toshniagro2001@gmail.com</p>

//             {/* Social Icons */}
//             <div className="flex space-x-4 mt-4">
//               {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition duration-300 cursor-pointer"
//                 >
//                   <Icon size={14} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Google Map */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Our Location
//             </h3>
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.033544778824!2d74.0173453!3d17.691966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239f1b3a0a0a1%3A0x19b4a6c6e6e6e6e6!2sSatara%2C%20Maharashtra%20415001!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
//               className="w-full h-40 rounded-lg border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="bg-black text-center py-4 text-sm text-gray-400">
//           © 2026 Toshni Agro. All Rights Reserved. | Designed with ❤️ in India
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;




import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Toshni Agro</h3>
            <p className="text-gray-400 mb-4">
              Empowering farmers with innovative agricultural solutions for sustainable growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="/ab" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="/co" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Satara, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+917028389588" className="hover:text-orange-400">+91 7028389588</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:toshniagro2001@gmail.com" className="hover:text-orange-400">toshniagro2001@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Toshani Agro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;