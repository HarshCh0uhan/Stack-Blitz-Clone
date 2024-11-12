import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1B1E] bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-white" />
              <span className="text-white font-semibold text-xl">StackBlitz</span>
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-white">Docs</a>
                <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
                <a href="#" className="text-gray-300 hover:text-white">Enterprise</a>
                <a href="#" className="text-gray-300 hover:text-white">WebContainers</a>
                <a href="#" className="text-gray-300 hover:text-white">Blog</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white bg-green-500 rounded-full px-3 py-1 text-sm">NEW</button>
            <button className="text-gray-300 hover:text-white">Sign in</button>
            <button className="bg-[#1A7EF8] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}