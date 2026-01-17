import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const buttonVariants = {
  primary: 'bg-primary text-white hover:bg-primary/90 border-primary',
  secondary: 'bg-transparent text-slate-900 dark:text-slate-100 border-slate-900 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-800 dark:hover:border-slate-500',
};

const buttonSizes = {
  lg: 'px-6 py-3 text-lg',
};

function Button({
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  disabled = false,
  isLoading = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed border';
  const variantStyles = buttonVariants[variant];
  const sizeStyles = buttonSizes[size];

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={cn(baseStyles, variantStyles, sizeStyles, className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default Button;
