import { motion } from 'framer-motion';
import { Users, MapPin, Star, TrendingUp, Award, Heart, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Leaderboard from '@/components/Leaderboard';
import communityImage from '@/assets/community-success.jpg';

const farmerGroups = [
  {
    id: '1',
    name: 'Sustainable Harvesters',
    location: 'Punjab, India',
    members: 248,
    quests: 1420,
    avatar: '',
    description: 'Focused on organic farming and water conservation techniques',
    badges: ['Eco Warriors', 'Water Savers'],
    activeMembers: 89
  },
  {
    id: '2',
    name: 'Green Valley Collective',
    location: 'Haryana, India',
    members: 156,
    quests: 890,
    avatar: '',
    description: 'Promoting renewable energy adoption in agriculture',
    badges: ['Solar Champions', 'Tech Pioneers'],
    activeMembers: 67
  },
  {
    id: '3',
    name: 'Organic Innovators',
    location: 'Karnataka, India',
    members: 203,
    quests: 1150,
    avatar: '',
    description: 'Specializing in pesticide-free farming methods',
    badges: ['Organic Masters', 'Innovation Leaders'],
    activeMembers: 78
  }
];

const successStories = [
  {
    id: '1',
    farmerName: 'Rajesh Kumar',
    location: 'Greenville Farms',
    story: 'Increased crop yield by 35% using VisionX sustainable practices',
    impact: '₹2.5L additional income',
    xp: 15420,
    duration: '8 months',
    image: '',
    achievement: 'Water Conservation Champion'
  },
  {
    id: '2',
    farmerName: 'Priya Sharma',
    location: 'Eco Valley',
    story: 'Reduced water usage by 40% while maintaining crop quality',
    impact: '15,000L water saved monthly',
    xp: 14890,
    duration: '6 months',
    image: '',
    achievement: 'Efficiency Expert'
  },
  {
    id: '3',
    farmerName: 'Mohan Singh',
    location: 'Sustainable Acres',
    story: 'Eliminated chemical pesticides and achieved organic certification',
    impact: '₹1.8L premium pricing',
    xp: 11890,
    duration: '12 months',
    image: '',
    achievement: 'Organic Pioneer'
  }
];

const communityStats = [
  { label: 'Active Farmer Groups', value: '125+', icon: Users },
  { label: 'Success Stories', value: '500+', icon: Star },
  { label: 'Knowledge Shared', value: '2,000+', icon: MessageSquare },
  { label: 'Villages Connected', value: '50+', icon: MapPin }
];

export default function Community() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Thriving
              <span className="text-primary"> Farming Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with like-minded farmers, share knowledge, and celebrate 
              success stories from across the sustainable farming network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={communityImage} 
                alt="Farming community celebration" 
                className="w-full rounded-lg shadow-card"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {communityStats.map((stat, index) => (
                <Card key={stat.label} className="text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farmer Groups */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Active Farmer Groups
            </h2>
            <p className="text-xl text-muted-foreground">
              Join specialized groups based on your farming interests and location
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmerGroups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                          {group.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {group.location}
                        </div>
                      </div>
                    </div>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {group.badges.map((badge) => (
                          <Badge key={badge} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">{group.members}</div>
                          <div className="text-xs text-muted-foreground">Members</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">{group.quests}</div>
                          <div className="text-xs text-muted-foreground">Quests</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-success">{group.activeMembers}</div>
                          <div className="text-xs text-muted-foreground">Active</div>
                        </div>
                      </div>
                      
                      <Button className="w-full" variant="outline">
                        Join Group
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-primary/5 py-20 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real farmers, real results - discover how VisionX is transforming lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                          {story.farmerName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{story.farmerName}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {story.location}
                        </div>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="w-fit mb-3">
                      <Award className="h-3 w-3 mr-1" />
                      {story.achievement}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground italic">"{story.story}"</p>
                      
                      <div className="bg-success/10 rounded-lg p-3">
                        <div className="flex items-center text-success mb-1">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="font-semibold">Impact</span>
                        </div>
                        <p className="text-sm text-success-foreground">{story.impact}</p>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{story.xp.toLocaleString()} XP earned</span>
                        <span>{story.duration}</span>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        <Heart className="h-4 w-4 mr-2" />
                        Inspire Me
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Village Leaderboard
            </h2>
            <p className="text-xl text-muted-foreground">
              See how you rank among the top farmers in your community
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Leaderboard />
          </div>
        </div>
      </section>
    </div>
  );
}