import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import SectionHeading from '../ui/SectionHeading';
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
    highlights: [
      'Run production infrastructure on AWS and Azure for 6 business domains',
      'Codify cloud resources end-to-end with Terraform and Pulumi',
      'Cut idle cloud spend by auto-scaling down EKS/AKS and stopping RDS off-hours',
      'Migrate user identities from Auth0 to AWS Cognito',
    ],
    stack: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Pulumi', 'Ansible', 'Istio', 'Prometheus', 'Grafana'],
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
        'Provision and manage Kubernetes clusters (EKS, AKS) and AWS ECS with auto-scaling for peak traffic',
        'Manage ingress traffic with Istio Gateway',
      ],
      'Monitoring & Observability': [
        'Integrate AWS CloudWatch, ELK, Grafana, Loki, and Prometheus for real-time monitoring',
        'Set up alert notifications via AWS SNS and AWS SES',
      ],
      'Security & Compliance': [
        'Set up secure VPNs using Pritunl, Pritunl Zero Trust and Tailscale for development teams',
        'Configure SSO (Single Sign-On) for several systems',
        'Harden workloads with Cloudflare, AWS WAF, GuardDuty and Security Hub',
        'Perform data migration of user profiles from Auth0 to AWS Cognito',
      ],
      'Cost Optimization': [
        'Develop Lambda functions and EventBridge rules to automatically scale down EKS/AKS nodes and stop RDS outside business hours',
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
    highlights: [
      'Designed the e-commerce UX/UI in Figma',
      'Built the Flutter mobile app and wired it to company APIs',
    ],
    stack: ['Figma', 'Flutter', 'REST APIs'],
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
          <SectionHeading index="02" label="experience" title="Work Experience" subtitle="Designing, automating and operating cloud infrastructure across AWS and Azure." />

          <div className="max-w-4xl mx-auto">
            {EXPERIENCE.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const detailsId = `experience-details-${exp.id}`;
              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.1 }}
                  className={cn('card p-6 md:p-8 mb-8 md:mb-10 transition-shadow', isExpanded && 'ring-2 ring-primary')}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-2">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg border border-primary/20">
                        {exp.contractType}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {exp.businessDomains && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {exp.businessDomains.map((domain) => (
                        <span key={domain} className="px-2 py-0.5 bg-slate-200/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700">
                          {domain}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlights: always visible */}
                  <h4 className="text-slate-900 dark:text-slate-100 font-semibold mb-3">Highlights</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                    {exp.highlights.map((item) => (
                      <li key={item} className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/5 dark:bg-primary/10 text-primary text-xs font-mono rounded-md border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Full responsibilities */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={detailsId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 gap-5 pt-6">
                          {Object.entries(exp.responsibilities).map(([category, items]) => (
                            <div key={category}>
                              <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">{category}</h5>
                              <ul className="space-y-1.5">
                                {items.map((item) => (
                                  <li key={item} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2">
                                    <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary flex items-center gap-1 focus-ring rounded"
                    >
                      {isExpanded ? 'Hide details' : 'All responsibilities'}
                      <svg
                        className={cn('w-4 h-4 transition-transform', isExpanded && 'rotate-180')}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
