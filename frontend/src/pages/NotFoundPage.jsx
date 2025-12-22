import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { motion } from 'framer-motion';

export default function NotFoundPage() {
    return (
        <motion.div 
            className="min-h-screen pt-20 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="max-w-2xl mx-auto text-center">
                <motion.div 
                    className="mb-8"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <motion.h1 
                        className="text-9xl font-bold text-green-400 mb-4"
                        animate={{ 
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        404
                    </motion.h1>
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    ></motion.div>
                </motion.div>

                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Oops! The page you're looking for doesn't exist. It might have been moved, 
                        deleted, or you entered the wrong URL.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            to="/"
                            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                        >
                            <Home className="w-5 h-5" />
                            <span>Go Home</span>
                        </Link>
                    </motion.div>
                    
                    <motion.button 
                        onClick={() => window.history.back()} 
                        className="flex items-center space-x-2 bg-black/40 hover:bg-black/60 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-gray-700 hover:border-gray-600"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Go Back</span>
                    </motion.button>
                </motion.div>

                {/* Help Section */}
                <motion.div 
                    className="mt-12 bg-black/40 rounded-lg p-6 border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                            <Search className="w-6 h-6 text-green-400 mr-2" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white">Need Help?</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        If you think this is an error, try these helpful links:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { path: '/faq', label: 'FAQ' },
                            { path: '/organizations-and-programs', label: 'Programs' },
                            { path: '/calendar', label: 'Calendar' }
                        ].map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.55 + index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Link 
                                    to={link.path} 
                                    className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
