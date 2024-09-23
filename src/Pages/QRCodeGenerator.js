import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';

const NewsSection = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8">Tin tức và Ứng dụng</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NewsCard
          image="/fpt-edu.jpg"
          title="FPT Edu khẳng định thương hiệu nhà giáo với Danh thiếp điện tử QRX Vcard"
        />
        <NewsCard
          image="/vietinbank.jpg"
          title="Vietinbank giao tiếp khách hàng vượt trội với QR Code Marketing"
        />
        <NewsCard
          image="/pisen.jpg"
          title="Pisen Việt Nam - Chống giả và bảo hành điện tử tiên phong"
        />
        <NewsCard
          image="/heineken.jpg"
          title="Heineken ứng dụng QRX vào đào tạo an toàn nội bộ"
        />
        <NewsCard
          image="/ssi.jpg"
          title="Chứng khoán SSI - QRX giúp gia tăng trải nghiệm cho nhân viên"
        />
        <NewsCard
          image="/vnpay.jpg"
          title="VNPay - QRX quản lý tài sản nội bộ mạnh mẽ"
        />
      </div>
    </div>
  </section>
);

const NewsCard = ({ image, title }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  </div>
);

const QRCodeGenerator = () => {
  const [qrType, setQRType] = useState("link");
  const [inputData, setInputData] = useState("");
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = () => {
    setQRCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputData)}`);
  };

  const renderInput = () => {
    switch (qrType) {
      case "link":
        return (
          <input
            type="url"
            placeholder="Enter URL"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="w-full p-2 border rounded"
          />
        );
      case "email":
        return (
          <input
            type="email"
            placeholder="Enter email address"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="w-full p-2 border rounded"
          />
        );
      // Add cases for other QR code types
      default:
        return (
          <input
            type="text"
            placeholder="Enter data"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="w-full p-2 border rounded"
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-3xl font-bold text-center mb-8">Generate Your QR Code</h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select QR Code Type</label>
                <select
                  value={qrType}
                  onChange={(e) => setQRType(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="link">Link</option>
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="location">Location</option>
                  <option value="tel">Telephone</option>
                  <option value="sms">SMS</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="skype">Skype</option>
                  <option value="zoom">Zoom</option>
                  <option value="wifi">WiFi</option>
                  <option value="vcard">vCard</option>
                  <option value="event">Event</option>
                  <option value="paypal">PayPal</option>
                  <option value="bitcoin">Bitcoin</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter {qrType.charAt(0).toUpperCase() + qrType.slice(1)} Data</label>
                {renderInput()}
              </div>
              <button
                onClick={generateQRCode}
                className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600 transition duration-300"
              >
                Generate QR Code
              </button>
              {qrCode && (
                <div className="mt-8 text-center">
                  <img src={qrCode} alt="Generated QR Code" className="mx-auto" />
                  <a
                    href={qrCode}
                    download="qrcode.png"
                    className="inline-flex items-center mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    <FaDownload className="mr-2" />
                    Download QR Code
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <NewsSection />
      <Footer />
    </div>
  );
};

export default QRCodeGenerator;