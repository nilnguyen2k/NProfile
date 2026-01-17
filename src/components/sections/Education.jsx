import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import { cn } from '../../lib/utils';

// Education data
const EDUCATION = [
  {
    id: 1,
    period: '2024 - Present',
    university: 'Can Tho University',
    major: "Master's Degree in Information Technology",
    thesis: ['Currently in progress'],
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">
            <span className="text-slate-600 dark:text-slate-400">My </span>
            <span className="text-primary">Education</span>
          </h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Single Continuous Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-full pointer-events-none">
              <div className="absolute top-3 bottom-3 w-px bg-slate-300 dark:bg-slate-700" style={{ left: '198px' }} />
            </div>

            {EDUCATION.map((edu, index) => (
              <div key={edu.id} className="relative mb-12">
                <div className="flex items-center gap-8">
                  {/* Left Side - Date */}
                  <div className="w-40 flex-shrink-0 text-right">
                    <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-lg border border-primary/20 w-full text-center">
                      {edu.period}
                    </span>
                  </div>

                  {/* Center - Timeline Dot */}
                  <div className="relative flex-shrink-0 z-10">
                    {/* Timeline Dot */}
                    <div className="w-3 h-3 bg-primary rounded-full border-4 border-slate-50 dark:border-slate-950" />
                  </div>

                  {/* Right Side - Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.1 }}
                    className="flex-1 min-w-0"
                  >
                    <div className="card p-6 min-h-[160px] flex flex-col">
                      {/* University */}
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {edu.university}
                      </h3>

                      {/* Major */}
                      <p className="text-slate-900 dark:text-slate-100 font-semibold text-lg mb-4">
                        {edu.major}
                      </p>

                      {/* Thesis - only show if exists */}
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

                      {/* Scientific Research - only show if exists */}
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
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
