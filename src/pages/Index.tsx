import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/Header';
import { CategoryFilter } from '@/components/CategoryFilter';
import { AnnouncementCard } from '@/components/AnnouncementCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { announcements } from '@/data/announcements';
import { AnnouncementCategory, SortOption } from '@/types';
import { Filter, SortAsc, Plus, Rss, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<AnnouncementCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [activeTab, setActiveTab] = useState('latest');

  // Filter and sort announcements
  const filteredAnnouncements = useMemo(() => {
    let filtered = announcements.filter(announcement => {
      // Category filter
      if (selectedCategory !== 'all' && announcement.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          announcement.title.toLowerCase().includes(query) ||
          announcement.summary.toLowerCase().includes(query) ||
          announcement.organizer.name.toLowerCase().includes(query) ||
          announcement.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      return true;
    });

    // Tab-based filtering
    const now = new Date();
    
    if (activeTab === 'upcoming') {
      filtered = filtered.filter(announcement => {
        if (announcement.startDateTime) {
          return new Date(announcement.startDateTime) > now;
        }
        return false;
      });
    } else if (activeTab === 'deadline') {
      filtered = filtered.filter(announcement => {
        if (announcement.deadline) {
          const deadline = new Date(announcement.deadline);
          const daysDiff = (deadline.getTime() - now.getTime()) / (1000 * 3600 * 24);
          return daysDiff <= 30 && daysDiff > 0;
        }
        return false;
      });
    }

    // Sort announcements
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'upcoming':
          if (a.startDateTime && b.startDateTime) {
            return new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime();
          }
          return 0;
        case 'deadline':
          if (a.deadline && b.deadline) {
            return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
          }
          return 0;
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, activeTab]);

  const getTabCount = (tab: string) => {
    const now = new Date();
    
    if (tab === 'latest') return announcements.length;
    if (tab === 'upcoming') {
      return announcements.filter(a => 
        a.startDateTime && new Date(a.startDateTime) > now
      ).length;
    }
    if (tab === 'deadline') {
      return announcements.filter(a => {
        if (a.deadline) {
          const deadline = new Date(a.deadline);
          const daysDiff = (deadline.getTime() - now.getTime()) / (1000 * 3600 * 24);
          return daysDiff <= 30 && daysDiff > 0;
        }
        return false;
      }).length;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold gradient-hero bg-clip-text text-transparent mb-4">
              Stay Connected with Campus Life
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your central hub for all President University announcements, events, and opportunities.
              Never miss an important update again.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-hover">
                <Plus className="w-4 h-4 mr-2" />
                Submit Announcement
              </Button>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
              <Button variant="outline">
                <Rss className="w-4 h-4 mr-2" />
                RSS Feed
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            <div className="flex-1">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
              <Button variant="outline" size="sm">
                <SortAsc className="w-4 h-4 mr-2" />
                Sort: {sortBy}
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="latest" className="flex items-center gap-2">
                Latest
                <Badge variant="secondary" className="text-xs">
                  {getTabCount('latest')}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="flex items-center gap-2">
                Upcoming
                <Badge variant="secondary" className="text-xs">
                  {getTabCount('upcoming')}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="deadline" className="flex items-center gap-2">
                Closing Soon
                <Badge variant="secondary" className="text-xs">
                  {getTabCount('deadline')}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              {/* Results summary */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredAnnouncements.length} announcement{filteredAnnouncements.length !== 1 ? 's' : ''} found
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Announcements Grid */}
              {filteredAnnouncements.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {filteredAnnouncements.map((announcement) => (
                    <AnnouncementCard
                      key={announcement.id}
                      announcement={announcement}
                      onClick={() => {
                        // Navigate to announcement detail page
                        console.log('Navigate to:', announcement.slug);
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      No announcements found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {searchQuery 
                        ? `No results found for "${searchQuery}". Try adjusting your search terms.`
                        : 'There are no announcements in this category at the moment.'
                      }
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
                  <span className="text-sm font-bold text-white">PU</span>
                </div>
                <span className="font-semibold">President University</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your central hub for campus announcements and updates.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Submit Announcement</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Calendar View</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">RSS Feeds</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>announcements@president.ac.id</li>
                <li>+62-21-2789-4000</li>
                <li>Jababeka Education Park</li>
                <li>Cikarang, West Java</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Subscribe</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Get notified about new announcements
              </p>
              <Button size="sm" className="w-full">
                Subscribe to Updates
              </Button>
            </div>
          </div>
          
          <div className="border-t pt-6 mt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 President University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
