import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import SectionHeading from '../ui/SectionHeading';
import { SKILL_CATEGORIES } from '../../lib/constants';

function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="section bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <SectionHeading index="01" label="skills" title="Technical Skills" subtitle="Tools I use to build, ship and run production systems." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (categoryIndex % 4) * 0.06, duration: prefersReducedMotion ? 0 : 0.4 }}
                className="card h-full p-5 rounded-xl transition-colors duration-200 hover:border-primary/40"
              >
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {category.name}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="px-2 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
