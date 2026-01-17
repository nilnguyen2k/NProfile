/**
 * Utility function to merge class names
 * Simple implementation - can be replaced with clsx or classnames if needed
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
