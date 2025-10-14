import { Globe, Camera } from 'lucide-react';
import React from "react";

export default function HomePage() {
    return (
        <div className="min-h-screen -mt-7 pt-20 flex flex-col">
            <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight flex items-center justify-center">
                            <img
                                src="./Purdue%20USB%20Research%20Resources.png"
                                alt="USB Research Resources Icon"
                                className="w-16 h-16 md:w-20 md:h-20 object-contain mr-4"
                                draggable={false}
                            />
                            <span className="text-white">
                                Research
                            </span>
                            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">&nbsp;Resources</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                            "Anything you can imagine, any unanswered question you can fathom is likely being explored at some level through a research project here on Purdue's campus."<br />- Amber Stanley, Undergraduate Programs Specialist
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/spushpa_purdue_edu/EZm7Z_PgrZlGmrzaz22eTakBxWx92LKsC73_Hp3ERQexaQ?rtime=2Y9k3_ny3Ug"
                               target="_blank" rel="noopener noreferrer"
                               className="border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                                Amber's Research Thoughts
                            </a>
                            <a href="/calendar"
                               className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
                                View Research Calendar
                            </a>
                        </div>
                    </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm py-30 flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">Connect with USB</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Still have questions about undergraduate research or want to reach out? Check out our Instagram and website for more about Purdue USB.
                        </p>
                        <div className="flex justify-center items-center space-x-12">
                            <a
                                href="https://purdueusb.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-400 hover:text-yellow-300 text-xl font-semibold transition-colors duration-300 flex items-center space-x-2"
                            >
                                <Globe className="w-6 h-6"/>
                                <span>USB Website</span>
                            </a>
                            <a
                                href="https://www.instagram.com/purdueusb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-400 hover:text-pink-300 text-xl font-semibold transition-colors duration-300 flex items-center space-x-2"
                            >
                                <Camera className="w-6 h-6"/>
                                <span>USB Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}