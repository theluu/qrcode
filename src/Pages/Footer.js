import { FaEnvelope, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { SiTiktok } from "react-icons/si";
const Footer = () => (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/qrx-logo.png" alt="QRX Logo" className="h-8 mb-4" />
            <h3 className="font-bold mb-2">HÀ NỘI</h3>
            <p className="text-sm text-gray-600">Tầng 4 - Tòa nhà GTC, Số 69, phố Tố Hữu, Vạn Phúc, Hà Đông, Hà Nội</p>
            <h3 className="font-bold mt-4 mb-2">TP. HỒ CHÍ MINH</h3>
            <p className="text-sm text-gray-600">211, đường 9A Trung Sơn, Bình Hưng, Bình Chánh, TP Hồ Chí Minh</p>
            <p className="mt-4"><FaPhoneAlt className="inline mr-2" /> 0969 059 786</p>
            <p><FaEnvelope className="inline mr-2" /> qrcode@miraway.vn</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-orange-500 hover:underline">QR Marketing</a></li>
              <li><a href="#" className="text-orange-500 hover:underline">QR Chống giả</a></li>
              <li><a href="#" className="text-orange-500 hover:underline">QR Bảo hành</a></li>
              <li><a href="#" className="text-orange-500 hover:underline">QR Loyalty</a></li>
              <li><a href="#" className="text-orange-500 hover:underline">Zalo mini app</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">QRX</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-orange-500 hover:underline">Tập đoàn Miraway</a></li>
              <li><a href="#" className="text-orange-500 hover:underline">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-orange-500 hover:underline">FAQ</a></li>
              <li><a href="#" className="text-orange-500 hover:underline">Question Form</a></li>
              <li><a href="#" className="text-orange-500 hover:underline">Tài liệu hướng dẫn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600">Copyright © 2023 Miraway</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-orange-500"><TiSocialInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-orange-500"><SiTiktok /></a>
            <a href="#" className="text-gray-600 hover:text-orange-500"><FaPhoneAlt /></a>
          </div>
        </div>
      </div>
    </footer>
  );

  export default Footer;