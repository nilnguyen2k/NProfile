import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import { cn } from '../../lib/utils';

// Personal Projects data from CV
const EXPERIENCE = [
  {
    id: 1,
    company: 'PTN Global',
    role: 'DevOps Engineer',
    contractType: 'Full-time',
    period: '02/2023 - Present',
    businessDomains: ['HealthCare', 'Education', 'Home Maintenance', 'Transportation', 'CRM', 'ERP'],
    responsibilities: {
      'Cloud Infrastructure Management': [
        'Design and manage scalable infrastructure on AWS (EKS, ECS, VPC, RDS, S3, CloudFront) across multiple domains',
        'Architect infrastructure for Odoo projects on Azure, utilizing AKS, Container Registry, Azure Key Vaults, and Blob Storage',
      ],
      'Infrastructure as Code & Automation': [
        'Write Terraform and Pulumi scripts to provision consistent resources for AWS and Azure',
        'Automate local cluster provisioning using Ansible, deploying applications and AI models',
      ],
      'CI/CD Pipeline': [
        'Build and maintain pipelines with Jenkins, GitLab CI, Bitbucket Pipeline and GitHub Actions',
        'Integrate SonarQube to enforce high-quality code standards',
      ],
      'Container Orchestration': [
        'Leverage Docker to containerize microservices',
        'Provision and manage Kubernetes clusters (EKS, AKS) and AWS ECS with auto-scaling',
      ],
      'Monitoring & Observability': [
        'Integrate AWS CloudWatch, ELK, Grafana, Loki, and Prometheus for real-time monitoring',
        'Set up alert notifications via AWS SNS and AWS SES',
      ],
      'Security & Compliance': [
        'Set up secure VPNs using Pritunl, Pritunl Zero Trust and Tailscale for development teams',
        'Configure SSO (Single Sign-On) for several systems',
        'Perform data migration of user profiles from Auth0 to AWS Cognito',
      ],
      'Cost Optimization': [
        'Develop Lambda functions and EventBridge rules to automatically scale down EKS/AKS nodes',
      ],
      'Database Management & Testing': [
        'Configure AWS Backup for databases, volumes, and buckets',
        'Write load tests with K6 to assess application performance',
      ],
    },
  },
  {
    id: 2,
    company: 'AppCore',
    role: 'Internship Software Engineer',
    contractType: 'Internship',
    period: '05/2022 - 08/2022',
    businessDomains: ['eCommerce'],
    responsibilities: {
      'UX/UI Design': [
        'Designed and prototyped an intuitive UX/UI for the e-commerce platform in Figma',
        'Translated user needs into a seamless shopping experience ready for development',
      ],
      'Mobile Development': [
        'Developed a responsive, high-performance mobile application using Flutter',
        'Implemented Figma designs directly in the Flutter application',
        'Integrated with company APIs to deliver dynamic e-commerce features',
      ],
    },
  },
];

function Experience() {
  const [expandedId, setExpandedId] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="section bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">
            <span className="text-slate-600 dark:text-slate-400">Work </span>
            <span className="text-primary">Experiences</span>
          </h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.1 }}
                className={cn(
                  'relative mb-8 md:mb-10',
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                )}
              >
                {/* Experience Card */}
                <div>
                  <motion.div
                    className={cn(
                      'card p-6 cursor-pointer transition-all',
                      expandedId === exp.id && 'ring-2 ring-primary'
                    )}
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Role, Company, Contract Type */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg border border-primary/20">
                          {exp.contractType}
                        </span>
                      </div>
                      {exp.businessDomains && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {exp.businessDomains.map((domain) => (
                            <span key={domain} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700">
                              {domain}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Responsibilities Categories */}
                    <div className="mb-4">
                      <h4 className="text-slate-900 dark:text-slate-100 font-semibold mb-3">Key Responsibilities and Achievements</h4>
                      {Array.isArray(exp.responsibilities) ? (
                        // Old array format (for AppCore)
                        <ul className="space-y-2">
                          {exp.responsibilities.slice(0, expandedId === exp.id ? undefined : 2).map((resp, i) => (
                            <li key={i} className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">▹</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        // New object format with categories (for PTN Global)
                        <div className="space-y-2">
                          {Object.entries(exp.responsibilities).slice(0, expandedId === exp.id ? undefined : 2).map(([category, items]) => (
                            <div key={category}>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedCategory(expandedCategory === category ? null : category);
                                }}
                                className={cn(
                                  'w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all',
                                  expandedCategory === category
                                    ? 'bg-primary/10 text-primary'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                )}
                                whileHover={{ scale: prefersReducedMotion ? 1 : 1.01 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{category}</span>
                                  <svg
                                    className={cn(
                                      'w-4 h-4 transition-transform',
                                      expandedCategory === category && 'rotate-180'
                                    )}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </motion.button>
                              <AnimatePresence>
                                {expandedCategory === category && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <ul className="space-y-1 px-4 py-2">
                                      {items.map((item, i) => (
                                        <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2">
                                          <span className="text-primary mt-1">▹</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>


                    {/* Right Side - Work Timeline */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </div>
                      <div className="text-slate-500 text-xs flex items-center gap-1">
                        <span>{expandedId === exp.id ? 'Show less' : 'Show more'}</span>
                        <svg
                          className={cn(
                            'w-4 h-4 transition-transform',
                            expandedId === exp.id && 'rotate-180'
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
