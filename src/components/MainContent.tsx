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
              <h3 className="text-xl font-semibold">Junior Engineer | HomePage InfoTech Solutions LLP </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sept 2025 - Present</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                <li>Developed and maintained enterprise-level applications using ASP.NET Core, C#, and SQL Server, ensuring scalability and performance.</li>
                <li>Built and consumed RESTful APIs to enable seamless communication between front-end applications and backend services.</li>
                <li>Implemented authentication and authorization using ASP.NET Identity and JWT, enhancing application security.</li>
                <li>Optimized database queries and stored procedures, reducing response time by 35% and improving overall efficiency.</li>
                <li>Collaborated with senior developers in debugging, troubleshooting, and resolving production issues to ensure system stability.</li>
                <li>Worked on designing reusable components and modules, following industry best practices and clean coding standards.</li>

              </ul>
            </div>
{/*             
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Professional Java Programming | Intern Crowd Enterprise, LLP</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">1 Month</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                <li>Designed and implemented secure RESTful APIs in the new system, facilitating seamless user authentication for over 1,000 simultaneous sessions and ensuring data integrity and security protocols were maintained.</li>
                <li>Developed RESTful APIs for user authentication and task management.</li>
                <li>Integrated MongoDB for structured data storage, enhancing database performance.</li>
                <li>Implemented secure login and authentication using JWT to enhance data security.</li>
                <li>Enabled real-time updates by collaborating with frontend developers using WebSockets.</li>
              </ul>
              <a href="https://drive.google.com/file/d/1KXsn0Blo9_Yqdk4AgCFSW-D_n3KarY10/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
            </div> */}
            
          </div>
        </section>

        <section id="studies" ref={(el) => (sectionsRef.current.studies = el)} className="space-y-8">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2025</p>
              <p className="mt-2">Bachelor's in Computer Science & Engineering</p>
              <p className="mt-2">7.6 CGPA</p>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Maharishi Vidya Mandir, Seoni, Madhya Pradesh</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2021</p>
              <p className="mt-2">12th</p>
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
                  TypeScript
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
                  Supabase
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
              <h3 className="text-xl font-semibold mb-4">Testing</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Junit
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Mockito
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Vitest
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Postman
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Insomnia
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
              <a href="https://goutam990.github.io/Amazon-clone/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Project 3: BookReview</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">BookReview is a web application that allows users to explore, review, and rate books across various genres. Built with TypeScript, React, and Supabase, it provides a seamless experience for book lovers.</p>
              <a href="https://aquamarine-narwhal-76f00b.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Project 4: Spring Boot Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">This project is a Spring Boot application that provides a backend system for managing users, patients, and heart rate data. It includes RESTful API endpoints for user registration, login, patient management, and heart rate data recording.</p>
              <a href="https://github.com/Goutam990/Spring-boot-backend" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Project 5: CRUD App Backend </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">This is a RESTful API built using Node.js, Express.js, and MongoDB that performs CRUD (Create, Read, Update, Delete) operations for managing data.</p>
              <a href="https://github.com/Goutam990/Crud-app-backend" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </section>

        <section id="certifications" ref={(el) => (sectionsRef.current.certifications = el)} className="space-y-8">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div className="space-y-6">
          <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Apna college | DSA with Java | Certificate of Completion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Issued by Apna college</p>
              <a href="https://drive.google.com/file/d/17kTLFEHFM3W3CZnbC3N57EL7jrcopMh5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">The Joy of Computing Using Python</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Issued by NPTEL Online Certification</p>
              <a href="https://drive.google.com/file/d/15aZRD3wExg6snKfHBA7Lg9ET8XnOm--x/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Technical English for Engineers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Issued by NPTEL Online Certification</p>
              <a href="https://drive.google.com/file/d/1dinGS_z9h1R_gE2sBzW7jtgqu5iI-EO8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Soft Skills</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Issued by NPTEL Online Certification</p>
              <a href="https://drive.google.com/file/d/1hWSmxlzWzdAK3lVqzjiT_FRScD6j0E9O/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Introduction to Cloud Computing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Issued by IBM and offered through Coursera</p>
              <a href="https://drive.google.com/file/d/1MDgMzemdWwZSNLfwkgEwFXhAqqH5_xhY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
            </div>
          </div>
        </section>

        <section id="blog" ref={(el) => (sectionsRef.current.blog = el)} className="space-y-8">
          <h2 className="text-3xl font-bold">Blog</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Blog Post 1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Description of blog post 1.</p>
              <a href="https://example.com/blog-post-1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold">Blog Post 2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Description of blog post 2.</p>
              <a href="https://example.com/blog-post-2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
