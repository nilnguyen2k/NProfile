import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import SectionHeading from '../ui/SectionHeading';
import { CERTIFICATIONS } from '../../lib/constants';

// Education data
const EDUCATION = [
  {
    id: 1,
    period: '2024 - 2026',
    university: 'Can Tho University',
    major: "Master's Degree in Information Technology",
    thesis: ['Indoor scene recognition based on multi-feature fusion of CNN, ViT and GNN (in progress)'],
  },
  {
    id: 2,
    period: '2018 - 2023',
    university: 'Can Tho University',
    major: "Bachelor's Degree in Information Technology",
    thesis: [
      'Developing a tourism service booking software',
    ],
    research: [
      'Smart security camera system for automatic facial recognition-based attendance and mobile notification',
    ],
  },
];

function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className="section bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <SectionHeading index="04" label="education" title="Education & Certifications" subtitle="Academic background in Information Technology at Can Tho University." />

          {/* Timeline: stacked with a left rail on mobile, date column on md+ */}
          <div className="max-w-4xl mx-auto relative">
            {/* Continuous vertical line */}
            <div
              aria-hidden="true"
              className="absolute top-3 bottom-3 left-[5px] md:left-[198px] w-px bg-slate-300 dark:bg-slate-700"
            />

            {EDUCATION.map((edu, index) => (
              <div key={edu.id} className="relative mb-10 md:mb-12 pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                  {/* Date */}
                  <div className="md:w-40 flex-shrink-0">
                    <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-lg border border-primary/20 md:w-full text-center">
                      {edu.period}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2.5 md:static md:top-auto flex-shrink-0 z-10">
                    <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-slate-50 dark:ring-slate-950" />
                  </div>

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.1 }}
                    className="flex-1 min-w-0"
                  >
                    <div className="card p-5 md:p-6 md:min-h-[160px] flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                        {edu.university}
                      </h3>

                      <p className="text-slate-900 dark:text-slate-100 font-semibold md:text-lg mb-4">
                        {edu.major}
                      </p>

                      {edu.thesis && edu.thesis.length > 0 && (
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-semibold">
                            Thesis:
                          </p>
                          <ul className="space-y-1">
                            {edu.thesis.map((item, i) => (
                              <li key={i} className="text-sm text-slate-700 dark:text-slate-300 italic flex items-start gap-2">
                                <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.research && edu.research.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-semibold">
                            Scientific Research:
                          </p>
                          <ul className="space-y-1">
                            {edu.research.map((item, i) => (
                              <li key={i} className="text-sm text-slate-700 dark:text-slate-300 italic flex items-start gap-2">
                                <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6 text-center text-slate-900 dark:text-slate-100">
              Certifications
            </h3>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="card p-5 md:p-6 flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">{cert.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
