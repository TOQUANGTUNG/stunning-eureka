import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm tải xuống PDF bằng cách kích hoạt chế độ in
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header - Navigation */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Nguyễn Văn A</h1>

          {/* Desktop Navigation & Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6 text-sm md:text-base">
              <button onClick={() => setActiveSection('about')} className={`${activeSection === 'about' ? 'font-semibold underline' : ''}`}>Giới Thiệu</button>
              <button onClick={() => setActiveSection('skills')} className={`${activeSection === 'skills' ? 'font-semibold underline' : ''}`}>Kỹ Năng</button>
              <button onClick={() => setActiveSection('soft-skills')} className={`${activeSection === 'soft-skills' ? 'font-semibold underline' : ''}`}>Kỹ Năng Mềm</button>
              <button onClick={() => setActiveSection('weaknesses')} className={`${activeSection === 'weaknesses' ? 'font-semibold underline' : ''}`}>Điểm Yếu</button>
              <button onClick={() => setActiveSection('experience')} className={`${activeSection === 'experience' ? 'font-semibold underline' : ''}`}>Kinh Nghiệm</button>
              <button onClick={() => setActiveSection('projects')} className={`${activeSection === 'projects' ? 'font-semibold underline' : ''}`}>Dự Án</button>
              <button onClick={() => setActiveSection('hobbies')} className={`${activeSection === 'hobbies' ? 'font-semibold underline' : ''}`}>Sở Thích</button>
              <button onClick={() => setActiveSection('contact')} className={`${activeSection === 'contact' ? 'font-semibold underline' : ''}`}>Liên Hệ</button>
            </nav>
            <button
              onClick={handleDownloadPDF}
              className="bg-white text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              Tải Xuống PDF
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-indigo-900 p-4 space-y-3 text-center">
            <button onClick={() => { setActiveSection('about'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'about' ? 'font-semibold underline' : ''}`}>Giới Thiệu</button>
            <button onClick={() => { setActiveSection('skills'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'skills' ? 'font-semibold underline' : ''}`}>Kỹ Năng</button>
            <button onClick={() => { setActiveSection('soft-skills'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'soft-skills' ? 'font-semibold underline' : ''}`}>Kỹ Năng Mềm</button>
            <button onClick={() => { setActiveSection('weaknesses'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'weaknesses' ? 'font-semibold underline' : ''}`}>Điểm Yếu</button>
            <button onClick={() => { setActiveSection('experience'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'experience' ? 'font-semibold underline' : ''}`}>Kinh Nghiệm</button>
            <button onClick={() => { setActiveSection('projects'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'projects' ? 'font-semibold underline' : ''}`}>Dự Án</button>
            <button onClick={() => { setActiveSection('hobbies'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'hobbies' ? 'font-semibold underline' : ''}`}>Sở Thích</button>
            <button onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }} className={`block w-full ${activeSection === 'contact' ? 'font-semibold underline' : ''}`}>Liên Hệ</button>
            <button
              onClick={handleDownloadPDF}
              className="mt-2 block w-full bg-white text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              Tải Xuống PDF
            </button>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-20">
        {/* About Section */}
        <section id="about" className="max-w-3xl mx-auto text-center animate-fadeIn">
          <img src="https://placehold.co/200x200 " alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg" />
          <h2 className="text-3xl font-bold mb-4">Kỹ Sư Điện Công Nghiệp</h2>
          <p className="text-lg text-indigo-700 mb-4">Hơn 5 năm kinh nghiệm | TP.HCM, Việt Nam</p>
          <p className="text-gray-700 leading-relaxed">
            Tôi là kỹ sư điện với hơn 5 năm làm việc tại các nhà máy sản xuất lớn, chuyên về thiết kế, lắp đặt và bảo trì hệ thống điện công nghiệp.
            Luôn cẩn trọng, sáng tạo và không ngừng học hỏi để cải tiến hiệu suất và an toàn hệ thống.
          </p>
          <a href="#contact" className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition">Liên hệ với tôi</a>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Kỹ Năng Chuyên Môn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Thiết kế hệ thống điện công nghiệp",
              "Lắp đặt, vận hành tủ điện PLC, HMI",
              "Sử dụng AutoCAD, ETAP, MATLAB",
              "Hiểu biết về hệ thống SCADA",
              "Bảo trì, xử lý sự cố nhanh chóng",
              "An toàn lao động & quy định PCCC"
            ].map((skill, i) => (
              <div key={i} className="bg-white p-4 rounded shadow hover:shadow-md transition duration-300 transform hover:-translate-y-1">
                <span className="block">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills Section */}
        <section id="soft-skills" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Kỹ Năng Mềm</h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded shadow">
              <h3 className="font-semibold">Giao tiếp hiệu quả</h3>
              <p className="text-gray-600">Khả năng trao đổi rõ ràng với đồng nghiệp và cấp trên để đảm bảo mọi người đều hiểu đúng nhiệm vụ.</p>
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h3 className="font-semibold">Làm việc nhóm</h3>
              <p className="text-gray-600">Luôn lắng nghe ý kiến đồng đội và đóng góp tích cực trong các dự án chung.</p>
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h3 className="font-semibold">Quản lý thời gian</h3>
              <p className="text-gray-600">Biết lập kế hoạch chi tiết và ưu tiên công việc theo mức độ quan trọng và khẩn cấp.</p>
            </div>
          </div>
        </section>

        {/* Weaknesses Section */}
        <section id="weaknesses" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Điểm Yếu</h2>
          <div className="bg-white p-6 rounded shadow space-y-4">
            <p><strong>Tôi hơi cầu toàn:</strong> Đôi khi dành quá nhiều thời gian để hoàn thiện từng chi tiết nhỏ. Tuy nhiên, tôi đang cải thiện bằng cách xác định rõ tiêu chí thành công cho từng giai đoạn công việc.</p>
            <p><strong>Kỹ năng ngoại ngữ còn hạn chế:</strong> Tiếng Anh vẫn chưa thực sự lưu loát. Tôi đang tham gia các lớp online để cải thiện điều này.</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Kinh Nghiệm Làm Việc</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Kỹ Sư Điện - Công Ty TNHH ABC</h3>
              <p className="text-gray-600">Tháng 06/2020 - Hiện tại</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                <li>Thiết kế và giám sát thi công hệ thống điện cho nhà máy sản xuất linh kiện điện tử</li>
                <li>Cải tiến hệ thống điều khiển tự động giúp giảm 15% thời gian dừng máy</li>
                <li>Phối hợp đào tạo an toàn điện cho hơn 100 cán bộ kỹ thuật</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Kỹ Sư Thực Tập - Công TY XYZ</h3>
              <p className="text-gray-600">Tháng 03/2019 - Tháng 05/2020</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                <li>Hỗ trợ bảo trì và sửa chữa hệ thống điện trong nhà xưởng</li>
                <li>Lập trình PLC cơ bản điều khiển băng tải sản xuất</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Dự Án Tiêu Biểu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded shadow hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-lg">Hệ Thống Điều Khiển Tự Động Nhà Máy Xi Mạ</h3>
              <p className="text-gray-600 mt-2">
                Thiết kế hệ thống điều khiển tự động tủ điện PLC Siemens cùng HMI Weintek,
                áp dụng cảm biến nhiệt độ và dòng điện giám sát hoạt động liên tục.
              </p>
            </div>
            <div className="bg-white p-5 rounded shadow hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-lg">Cải Tiến Băng Tải Sản Xuất</h3>
              <p className="text-gray-600 mt-2">
                Lập trình lại hệ thống điều khiển, tích hợp biến tần và cảm biến quang,
                giúp tăng 20% hiệu suất vận hành dây chuyền.
              </p>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Sở Thích Cá Nhân</h2>
          <div className="bg-white p-6 rounded shadow space-y-4">
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Chạy bộ và đạp xe để rèn luyện sức khỏe</li>
              <li>Tham gia câu lạc bộ kỹ thuật điện địa phương</li>
              <li>Đọc sách về phát triển bản thân và kỹ thuật số</li>
              <li>Xem phim khoa học kỹ thuật và chương trình tài liệu công nghệ</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Thông Tin Liên Hệ</h2>
          <div className="bg-white p-6 rounded shadow space-y-4">
            <p><strong>Email:</strong> nguyenvana@example.com</p>
            <p><strong>Điện thoại:</strong> 0909 123 456</p>
            <p><strong>Địa chỉ:</strong> TP.HCM, Việt Nam</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/nguyenvana</p>
            <p><strong>Zalo:</strong> 0909123456</p>
            <div className="mt-4 text-center">
              <a href="mailto:nguyenvana@example.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition">Gửi Email</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer với Icon Mạng Xã Hội */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2025 Nguyễn Văn A. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://linkedin.com/in/nguyenvana " target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.563h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/nguyenvana " target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://facebook.com/nguyenvana " target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com/nguyenvana " target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://instagram.com/nguyenvana " target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-400">Designed with React & TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}