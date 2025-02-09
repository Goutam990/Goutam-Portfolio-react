import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NavItem, Section } from '../types';

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const navItems: NavItem[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'studies', label: 'Studies' },
  { id: 'skills', label: 'Technical Skills' },
];

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2 dark:text-white">Goutam Tiwari</h1>
        <div className="flex gap-2 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Full Stack Developer passionate about creating elegant solutions to complex problems.
        </p>

        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">India</div>
    </aside>
  );
}