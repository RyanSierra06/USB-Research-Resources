
import React, { useState } from "react";
import {CalendarIcon, ChevronDownIcon} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
    { 
        title: 'Why should I join a research project?', 
        content: 'A research project can provide you with a lot of experiences and skills. Similar to a job or internship, you will be working with different resources and technologies which you can use to gain experience and add to your resume. As well, you can explore other disciplines at Purdue like Biology, Astronomy, History, and much more!' 
    },
    { 
        title: 'How do I find a research project?', 
        content: 'You can check out our page here to find more about all the possible opportunities available! We have listed the different research orgs/programs available. If you want to find a project on your own, you can search up professors working in the field in which you want to and email them with your CV/Resume and a message.' 
    },
    { 
        title: 'What is CS research?', 
        content: 'CS Research can vary. It can be theoretical, analytical, or anything you can think of. Since CS is so versatile, it can be applied to any discipline. If you like digging into the theoretical concept of CS, that\'s a route that is available. Or if you like to leverage CS to discover trends, patterns, etc, that\'s also another route available. Depending on your preference, there is something for everyone in CS research' 
    },
    { 
        title: 'What are the different types of research I can be involved in?', 
        content: 'At Purdue, there are a vast amount of openings for all different openings. You can do only coding, you can do hands-on work with tech, or you can do something not related to CS! It\'s mainly about finding what kind of research you are interested in. Almost any type of research is available at Purdue.' 
    },
    { 
        title: 'Do I need a lot of experience to join a project?', 
        content: 'Depending on the project, experience level may matter. However, for most projects, a lot of people are looking for motivated students. If you see a project and you believe you have relevant skills, you should definitely apply!' 
    },
    { 
        title: 'How can I present my research?', 
        content: 'Purdue holds Undergraduate Research Conferences every semester for students to present their research. You can showcase your work in a panel or to judges walking by. As well, you can publish your completed Research Paper to the Journal of Purdue Undergraduate Research to make it available to the public.' 
    },
    { 
        title: 'Can I get credits/paid for my Research?', 
        content: 'Yes! Some research projects require you to sign up for 1-3 credits to add to your schedule, and some may be transferable to your plan of study. Talk to your advisor more about whether credits from research can be applied towards your graduation. As well, you can get paid for some research projects. Make sure to read the description of the projects to see if they will pay you.' 
    }
];

function AccordionItem({ title, content, isOpen, onToggle }) {
    const [isHovered, setIsHovered] = React.useState(false);
    
    return (
        <motion.div 
            className="bg-black/40 rounded-lg border border-gray-700 mb-4 overflow-hidden"
            initial={false}
            animate={{ 
                height: "auto",
                scale: isOpen ? 1.03 : isHovered ? 1.05 : 1,
                y: isOpen ? -4 : isHovered ? -6 : 0,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.3 }}
            style={{
                boxShadow: isOpen || isHovered 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(22, 163, 74, 0.4)' 
                    : 'none',
                borderColor: isOpen || isHovered ? 'rgb(22, 163, 74)' : 'rgb(55, 65, 81)',
            }}
        >
            <button
                className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-gray-700/50 transition-colors rounded-lg"
                onClick={onToggle}
            >
                <span className="font-semibold text-lg">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                    <ChevronDownIcon className="w-5 h-5 text-green-400" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                            duration: 0.35, 
                            ease: [0.04, 0.62, 0.23, 0.98],
                            opacity: { duration: 0.25 }
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div 
                            className="px-6 pb-4 pt-2 text-gray-300 leading-relaxed"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ 
                                duration: 0.25, 
                                ease: [0.04, 0.62, 0.23, 0.98],
                                delay: 0.1
                            }}
                        >
                            {content}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQPage() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <motion.div 
            className="min-h-screen pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <div className="max-w-4xl mx-auto px-6 py-12">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-green-400">Questions</span>
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        Find answers to common questions about undergraduate research at Purdue University.
                    </p>
                </motion.div>
                
                <div className="space-y-4">
                    {accordionData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openItems[index]}
                            onToggle={() => toggleItem(index)}
                        />
                    ))}
                </div>

                {/* Help Section */}
                <motion.div 
                    className="mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 text-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Need More Help? Schedule an Appointment!
                        </h2>
                        <p className="text-xl text-green-100 mb-6">
                            Still have some questions that weren't answered on this page or in our FAQ Section?
                        </p>
                        <motion.a
                            href="https://calendly.com/csstudentaffairs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CalendarIcon className="w-5 h-5 mr-2" />
                            Schedule an Appointment with Amber Stanley
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

        </motion.div>
    );
}