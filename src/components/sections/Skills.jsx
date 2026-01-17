import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks';
import { SKILL_CATEGORIES } from '../../lib/constants';
import { useTheme } from '../../contexts/ThemeContext';

function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();

  return (
    <section id="skills" className="section bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            <span className="text-slate-600 dark:text-slate-400">Technical </span>
            <span className="text-primary">Skills</span>
          </h2>

          {/* Categories Grid - Square blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50, scale: prefersReducedMotion ? 1 : 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: categoryIndex * 0.1,
                  duration: prefersReducedMotion ? 0 : 0.5,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={!prefersReducedMotion ? {
                  scale: 1.05,
                  transition: { duration: 0.2 }
                } : {}}
              >
                <motion.div
                  className={`card aspect-square p-5 flex flex-col rounded-2xl transition-all duration-300 ${
                    !prefersReducedMotion ? 'hover:shadow-xl' : ''
                  } ${theme === 'dark' ? 'hover:border-primary/30' : 'hover:border-primary/20'}`}
                >
                  {/* Category Name */}
                  <h3 className="text-sm font-bold text-primary mb-3 text-left whitespace-nowrap">
                    {category.name}
                  </h3>

                  {/* Tools List */}
                  <div className="flex-1 flex flex-row flex-wrap items-start content-start gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={`${skill.name}-${theme}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: prefersReducedMotion ? 0 : 0.3
                        }}
                        whileHover={!prefersReducedMotion ? {
                          scale: 1.1,
                          backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
                          borderColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(16, 185, 129, 0.3)',
                          transition: { duration: 0.2 }
                        } : {}}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
