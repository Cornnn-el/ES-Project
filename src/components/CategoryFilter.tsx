import { AnnouncementCategory } from '@/types';
import { categories } from '@/data/announcements';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory?: AnnouncementCategory | 'all';
  onCategoryChange: (category: AnnouncementCategory | 'all') => void;
  className?: string;
}

const categoryConfig = {
  all: { name: 'All', color: 'bg-accent text-accent-foreground' },
  organization: { name: 'Organization', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
  contest: { name: 'Contest', color: 'bg-warning-light text-warning dark:bg-warning/20 dark:text-warning' },
  event: { name: 'Event', color: 'bg-success-light text-success dark:bg-success/20 dark:text-success' },
  academic: { name: 'Academic', color: 'bg-primary-light text-primary dark:bg-primary/20 dark:text-primary-light' },
  scholarship: { name: 'Scholarship', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' },
  career: { name: 'Career', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
  admin: { name: 'Admin', color: 'bg-muted text-muted-foreground' },
};

export function CategoryFilter({ selectedCategory = 'all', onCategoryChange, className }: CategoryFilterProps) {
  const allCategories = [
    { slug: 'all' as const, ...categoryConfig.all },
    ...Object.entries(categoryConfig).slice(1).map(([slug, config]) => ({
      slug: slug as AnnouncementCategory,
      ...config
    }))
  ];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {allCategories.map((category) => {
        const isSelected = selectedCategory === category.slug;
        
        return (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={cn(
              "category-chip transition-all duration-200 hover:scale-105",
              isSelected 
                ? "category-chip-active ring-2 ring-accent ring-offset-2 ring-offset-background" 
                : "category-chip-inactive",
              category.color
            )}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

export function getCategoryConfig(category: AnnouncementCategory) {
  return categoryConfig[category] || categoryConfig.academic;
}