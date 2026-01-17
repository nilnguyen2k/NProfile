import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';
import cameraProjectImg from '../../assets/images/camera_project.avif';
import travelServicesProjectImg from '../../assets/images/travelservices_project.png';
import k8sAnsibleProjectImg from '../../assets/images/k8s_ansible_project.jpg';
import wpProjectImg from '../../assets/images/wp_project.png';

// Projects data
const PROJECTS = [
  {
    id: 1,
    image: cameraProjectImg,
    title: 'Smart Security Camera System',
    projectType: 'Scientific Research',
    status: 'Completed',
    description: 'Camera-based system using facial recognition for automatic student attendance tracking with notification management.',
    techStack: ['Python', 'Django', 'OpenCV', 'Android Java', 'Firebase'],
  },
  {
    id: 2,
    image: travelServicesProjectImg,
    title: 'A Tourism Service Booking Software',
    projectType: 'Personal Project',
    status: 'Completed',
    description: 'This application facilitates the seamless search, booking, organization, management, and exploration of various travel services with ease.',
    techStack: ['Flutter', 'Spring Boot', 'Google Map', 'Cloudinary', 'Elasticsearch'],
  },
  {
    id: 3,
    image: k8sAnsibleProjectImg,
    title: 'Kubernetes & GPU Provisioning with Ansible',
    projectType: 'Personal Project',
    status: 'In Progress',
    description: 'Ansible automation for setting up K8S and installing GPU drivers and NVIDIA Container Toolkit. Support in deploying Model AI to this cluster.',
    techStack: ['Ansible', 'Containerd', 'Kubernetes', 'Networking', 'GPU'],
  },
  {
    id: 4,
    image: wpProjectImg,
    title: 'WordPress Deployment Template',
    projectType: 'Personal Project',
    status: 'Completed',
    description: 'Create a template for deploying WordPress, utilizing Caddy for reverse proxy, and supporting custom domains.',
    techStack: ['Docker', 'Portainer', 'WordPress', 'Caddy', 'Networking'],
  },
];

function Projects() {
  const scrollRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 400; // Width of each card
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;
      const newIndex = direction === 'left'
        ? Math.max(0, activeIndex - 1)
        : Math.min(PROJECTS.length - 1, activeIndex + 1);

      scrollRef.current.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth',
      });
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const cardWidth = 400;
        const gap = 24;
        const scrollLeft = scrollRef.current.scrollLeft;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(index, PROJECTS.length - 1));
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener('scroll', handleScroll);
    return () => scrollElement?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="section bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">
            <span className="text-primary">Projects</span>
          </h2>

          {/* Horizontal Scroll Container */}
          <div className="relative flex items-center">
            {/* Left Button */}
            <button
              onClick={() => scroll('left')}
              className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors z-10"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-6" style={{ width: 'max-content' }}>
                {PROJECTS.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                    className="card p-6 w-[360px] flex-shrink-0 rounded-2xl overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="mb-4 -mt-6 -mx-6 rounded-t-2xl overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      {/* Status Badge - Top Right */}
                      <div className="absolute top-3 right-3">
                        <span className={cn(
                          'inline-block px-2 py-1 text-xs font-bold uppercase rounded-lg border shadow-sm',
                          project.status === 'Completed'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
                        )}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Content Container - Equal padding on both sides */}
                    <div className="px-1">
                      {/* Title & Role */}
                      <div className="mb-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-0.5 text-left">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium text-xs text-left">{project.projectType}</p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-700 dark:text-slate-300 text-xs mb-2 text-justify">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1 font-semibold">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.techStack.map((tech) => (
                            <motion.span
                              key={`${tech}-${theme}`}
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
                                borderColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(16, 185, 129, 0.3)',
                                transition: { duration: 0.2 }
                              }}
                              className="inline-flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={() => scroll('right')}
              className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors z-10"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
