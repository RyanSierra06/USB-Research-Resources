import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-green-400 mb-4">404</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Oops! The page you're looking for doesn't exist. It might have been moved, 
                        deleted, or you entered the wrong URL.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                        to="/"
                        className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    >
                        <Home className="w-5 h-5" />
                        <span>Go Home</span>
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()} 
                        className="flex items-center space-x-2 bg-black/40 hover:bg-black/60 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 border border-gray-700 hover:border-gray-600"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Go Back</span>
                    </button>
                </div>

                {/* Help Section */}
                <div className="mt-12 bg-black/40 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center justify-center mb-4">
                        <Search className="w-6 h-6 text-green-400 mr-2" />
                        <h3 className="text-xl font-semibold text-white">Need Help?</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        If you think this is an error, try these helpful links:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link 
                            to="/faq" 
                            className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
                        >
                            FAQ
                        </Link>
                        <Link 
                            to="/organizations-and-programs" 
                            className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
                        >
                            Programs
                        </Link>
                        <Link 
                            to="/calendar" 
                            className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
                        >
                            Calendar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
