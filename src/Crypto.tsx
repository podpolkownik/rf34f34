import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Crypto = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section');
    sections.forEach((section: any) => {
      if (scrollPosition + window.innerHeight >= section.offsetTop) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <article className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <motion.header 
          className="space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-semibold text-gray-800 leading-tight tracking-normal text-left">
            The Secret That Helped Me Forget Hemorrhoids Once and for All!
          </h1>
        </motion.header>

        <motion.div 
          className="relative h-64 rounded-xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://sun107-1.userapi.com/impg/ZInRa0L1nI9bfhbB_WbAsB4PiQgjd6r0P4TbqA/kMfOzJS2ImI.jpg?size=1280x853&quality=96&sign=8910813201f38c86a69a6dee120a2215&type=album"
            alt="Treatment Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Problem Start */}
        <motion.section 
          className="bg-gray-100 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-left">The Start of the Problem</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            It all started unexpectedly: at first, a mild discomfort turned into constant pain, which began to affect every aspect of my life. Simple actions became a real challenge. I tried to ignore the pain, hoping it would go away on its own, but each day it became harder. I started avoiding social events, feeling uncomfortable. All attempts to find a solution ended in failure. I couldn’t even sit comfortably during long trips or work at my computer without pain. This became a real problem for me.
          </p>
        </motion.section>

        {/* Struggle with the Problem */}
        <motion.section 
          className="bg-blue-50 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-700 text-left">Fighting the Problem</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            I tried many remedies: ointments, pills, folk methods. Nothing helped for long until my doctor recommended Vitacaps. At first, I was skeptical, but decided to give it a try. The doctor said it was a safe remedy that helps with chronic pain and can be used to relieve symptoms and address the root cause of the problem. I started taking the capsules, and after a few days, I noticed slight improvements. But I didn’t immediately believe this was the solution to my problems. However, I continued using the product because I felt something in my body was changing. This was a chance I couldn’t miss.
          </p>
        </motion.section>

        {/* The Result */}
        <motion.section 
          className="bg-green-50 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700 text-left">The Result</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            After a week of taking Vitacaps, the pain began to subside. After two weeks, I returned to my normal life: I could exercise again, meet friends, and simply enjoy each day. I was surprised at how quickly changes began to occur in my body. The problems I had been battling for years seemed far behind. I felt renewed. My life returned to normal, and I became confident again. At that moment, I realized how important that step was and how it changed my perception of life.
          </p>
        </motion.section>

        {/* How Vitacaps Helps with Hemorrhoids */}
        <motion.section 
          className="bg-indigo-50 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 text-left">How Vitacaps Helps with Hemorrhoids</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            Vitacaps are capsules specially designed for people suffering from chronic pain associated with hemorrhoids. They contain natural ingredients that help improve blood circulation, reduce inflammation, and relieve pain. This product does not cause side effects, making it ideal for long-term use. It is not just a temporary relief, but a real improvement in condition.
          </p>
        </motion.section>

      </article>
    </div>
  );
};

export default Crypto;
