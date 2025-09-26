export type AnnouncementCategory = 
  | 'organization' 
  | 'contest' 
  | 'event' 
  | 'academic' 
  | 'scholarship' 
  | 'career' 
  | 'admin';

export interface Announcement {
  id: string;
  title: string;
  slug: string;
  category: AnnouncementCategory;
  summary: string;
  body: string;
  organizer: {
    name: string;
    email: string;
    phone?: string;
    orgUnit: string;
  };
  tags: string[];
  bannerImage?: {
    url: string;
    alt: string;
  };
  startDateTime?: string; // ISO date string for events
  endDateTime?: string;
  location?: {
    type: 'physical' | 'online' | 'hybrid';
    address?: string;
    link?: string;
  };
  deadline?: string; // ISO date string for contests/scholarships
  attachments: Array<{
    name: string;
    url: string;
    type: string;
    size: number;
  }>;
  externalLinks: Array<{
    label: string;
    url: string;
  }>;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: AnnouncementCategory;
  description: string;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  orgUnit: string;
  verified: boolean;
}

export interface FilterOptions {
  category?: AnnouncementCategory;
  tags?: string[];
  dateRange?: {
    from: string;
    to: string;
  };
  deadlineSoon?: boolean;
  thisWeek?: boolean;
  search?: string;
}

export type SortOption = 'newest' | 'upcoming' | 'deadline' | 'featured';