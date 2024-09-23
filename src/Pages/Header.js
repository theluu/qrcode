const Header = () => (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/qrx-logo.png" alt="QRX Logo" className="h-8 mr-2" />
          <span className="text-2xl font-bold text-orange-500">QRX</span>
          <span className="text-xl text-blue-600">.com.vn</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-gray-700 hover:text-orange-500">Tạo mã QR</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-orange-500">About</a></li>
            <li><a href="/product" className="text-gray-700 hover:text-orange-500">Sản phẩm</a></li>
            <li><a href="/blog" className="text-gray-700 hover:text-orange-500">Blog</a></li>
            <li><a href="/support" className="text-gray-700 hover:text-orange-500">Hỗ trợ</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-orange-500">Liên hệ</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-orange-500">Đăng nhập</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Dùng thử miễn phí</button>
        </div>
      </div>
    </header>
  );

export default Header;