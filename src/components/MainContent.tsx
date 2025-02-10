import React, { useEffect, useRef } from 'react';
import { Section } from '../types';

interface MainContentProps {
  setActiveSection: (section: Section) => void;
}

export function MainContent({ setActiveSection }: MainContentProps) {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [setActiveSection]);

  return (
    <main className="ml-64 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 space-y-16">
        <section id="introduction" ref={(el) => (sectionsRef.current.introduction = el)} className="space-y-6">
          <h2 className="text-3xl font-bold">Hello, I'm Goutam</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm a Full Stack Developer from India, passionate about turning ideas into powerful digital experiences. I specialize in creating sleek, user-friendly frontends and building strong, scalable backends. Whether it’s crafting beautiful interfaces or developing efficient server-side logic, I love bringing projects to life. Let’s create something amazing together! 🚀
          </p>
        </section>

        <section id="experience" ref={(el) => (sectionsRef.current.experience = el)} className="space-y-8">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Professional Java Programming - Intercrown Enterprise, LTD</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">1 Month</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                <li>Designed and implemented secure RESTful APIs in the new system, facilitating seamless user authentication for over 1,000 simultaneous sessions and ensuring data integrity and security protocols were maintained.</li>
                <li>Developed RESTful APIs for user authentication and task management.</li>
                <li>Integrated MongoDB for structured data storage, enhancing database performance.</li>
                <li>Implemented secure login and authentication using JWT to enhance data security.</li>
                <li>Enabled real-time updates by collaborating with frontend developers using WebSockets.</li>
              </ul>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Web Development Intern - Corevo Private Limited, Delhi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">3 Months</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                <li>Led and developed multiple full-stack web applications, integrating dynamic frontend interfaces with efficient backend APIs, resulting in a 30% improvement in page load speed.</li>
                <li>Collaborated closely with front-end developers to implement responsive designs across seven different devices; ensured seamless functionality through comprehensive cross-browser compatibility tests prior to launch phases.</li>
                <li>Designed and deployed responsive web applications, ensuring 100% cross-browser compatibility and improving mobile performance by 25%, leading to a better user experience.</li>
                <li>Diagnosed and resolved critical performance bottlenecks, reducing API response time by 40%, enhancing website efficiency, and increasing user retention rates.</li>
                <li>Implemented robust debugging and troubleshooting strategies, leading to a 50% decrease in reported bugs and a more stable, high-performing application.</li>
                <li>Collaborated with cross-functional teams to optimize UI/UX, improving customer engagement and increasing conversion rates by 20% through user-focused design enhancements.</li>
                <li>Collaborated with cross-functional teams to design and implement user-friendly interfaces.</li>
                <li>Assisted in resolving technical issues.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="studies" ref={(el) => (sectionsRef.current.studies = el)} className="space-y-8">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Bachelor's in Computer Science & Engineering</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2025</p>
              <p className="mt-2">SVVV</p>
              <p className="mt-2">7.36 CGPA</p>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">12th</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2021</p>
              <p className="mt-2">Maharishi Vidya Mandir, Seoni</p>
              <p className="mt-2">82%</p>
            </div>
          </div>
        </section>

        <section id="skills" ref={(el) => (sectionsRef.current.skills = el)} className="space-y-8">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  React
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  JavaScript
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  MongoDB
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools and Others</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Docker
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  PgAdmin
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Postman
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Insomnia
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Testing Tools
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" ref={(el) => (sectionsRef.current.projects = el)} className="space-y-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Project 1: Portfolio Website - React</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">A personal portfolio website to showcase my work and skills.</p>
              <a href="https://frontend-seven-gold-19.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Project 2: Amazon Clone Web</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">An e-commerce platform built with HTML, CSS, and JS.</p>
              <a href="https://goutam990.github.io/New--Amazon/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
