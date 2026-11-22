import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import { SKILL_CATEGORIES, CAREER_START } from '../../lib/constants';

// Whole years since the first DevOps role started
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

const toolCount = new Set(
  SKILL_CATEGORIES.flatMap((category) => category.skills.map((skill) => skill.name))
).size;

// Every figure here is derived from the CV or from the skills list
const STATS = [
  { value: `${yearsOfExperience}+`, label: 'Years in DevOps' },
  { value: '6', label: 'Business domains served' },
  { value: '3', label: 'Cloud platforms' },
  { value: `${Math.floor(toolCount / 10) * 10}+`, label: 'Tools in daily use' },
];

function Stats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-label="Quick facts" className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="container-custom py-10 md:py-12">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-4xl md:text-5xl font-bold text-primary">{stat.value}</dd>
              <dd className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Stats;
