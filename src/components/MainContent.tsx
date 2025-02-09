import React from 'react';
import { Section } from '../types';

interface MainContentProps {
  activeSection: Section;
}

export function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Hello, I'm John</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A passionate Full Stack Developer with 5+ years of experience in building scalable web applications.
              I specialize in React, Node.js, and cloud technologies.
            </p>
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <h3 className="text-xl font-semibold">Senior Developer @ Tech Corp</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2020 - Present</p>
                <p className="mt-2">Led development of enterprise-scale React applications.</p>
              </div>
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <h3 className="text-xl font-semibold">Full Stack Developer @ StartupX</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2018 - 2020</p>
                <p className="mt-2">Built and maintained multiple client projects.</p>
              </div>
            </div>
          </div>
        );
      case 'studies':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <h3 className="text-xl font-semibold">Master's in Computer Science</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2016 - 2018</p>
                <p className="mt-2">University of Technology</p>
              </div>
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <h3 className="text-xl font-semibold">Bachelor's in Computer Engineering</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2012 - 2016</p>
                <p className="mt-2">Institute of Engineering</p>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    React & React Native
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Tailwind CSS
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
                    AWS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="ml-64 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-all duration-300">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}