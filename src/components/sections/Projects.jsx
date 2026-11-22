import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '../../lib/utils';
import { SOCIAL_LINKS } from '../../lib/constants';
import cameraProjectImg from '../../assets/images/camera_project.avif';
import travelServicesProjectImg from '../../assets/images/travelservices_project.jpg';
import k8sAnsibleProjectImg from '../../assets/images/k8s_ansible_project.jpg';
import wpProjectImg from '../../assets/images/wp_project.jpg';

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
    repoUrl: 'https://github.com/nilnguyen2k/TravelServices',
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
    repoUrl: 'https://github.com/nilnguyen2k/WPEcommerce',
  },
];

const GITHUB_URL = SOCIAL_LINKS.find((l) => l.icon === 'github')?.url;

function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="section bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <SectionHeading index="03" label="projects" title="Featured Projects" subtitle="Selected work from research and personal projects." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: (index % 2) * 0.1 }}
                className="group card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={cn(
                    'absolute top-3 right-3 inline-block px-2 py-1 text-xs font-bold uppercase rounded-lg border shadow-sm backdrop-blur',
                    project.status === 'Completed'
                      ? 'bg-green-100/90 dark:bg-green-950/80 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                      : 'bg-yellow-100/90 dark:bg-yellow-950/80 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
                  )}>
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-primary font-medium text-xs uppercase tracking-wide mb-1">{project.projectType}</p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary hover:underline focus-ring rounded"
                    >
                      View source
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {GITHUB_URL && (
            <div className="flex justify-center mt-12">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:border-primary hover:text-primary transition-colors focus-ring"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                More on GitHub
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
