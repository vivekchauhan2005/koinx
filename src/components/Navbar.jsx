import { RiExchangeLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-1.5">
              <RiExchangeLine className="text-white text-xl" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Koin<span className="text-primary">X</span>
            </span>
          </div>

          {/* Nav links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-primary text-sm font-medium transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm font-medium transition-colors">
              Tax Reports
            </a>
            <a href="#" className="text-primary text-sm font-medium border-b-2 border-primary pb-0.5">
              Tax Harvesting
            </a>
          </div>

          {/* User avatar */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
              U
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
