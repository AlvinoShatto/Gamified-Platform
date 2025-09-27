import { motion } from 'framer-motion';
import { Award, Zap, Leaf, Users, Target, Crown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  earned: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedDate?: string;
}

const badges: BadgeData[] = [
  {
    id: '1',
    name: 'First Harvest',
    description: 'Complete your first sustainable farming quest',
    icon: Leaf,
    earned: true,
    rarity: 'common',
    earnedDate: '2025-01-15'
  },
  {
    id: '2',
    name: 'Streak Master',
    description: 'Maintain a 7-day streak',
    icon: Zap,
    earned: true,
    rarity: 'rare',
    earnedDate: '2025-01-20'
  },
  {
    id: '3',
    name: 'Community Leader',
    description: 'Help 10 fellow farmers',
    icon: Users,
    earned: false,
    rarity: 'epic'
  },
  {
    id: '4',
    name: 'Perfect Score',
    description: 'Complete 5 quests with 100% accuracy',
    icon: Target,
    earned: true,
    rarity: 'rare',
    earnedDate: '2025-01-22'
  },
  {
    id: '5',
    name: 'Eco Champion',
    description: 'Save 1000kg of CO2 through sustainable practices',
    icon: Award,
    earned: false,
    rarity: 'legendary'
  },
  {
    id: '6',
    name: 'Village Hero',
    description: 'Rank #1 in your village leaderboard',
    icon: Crown,
    earned: false,
    rarity: 'legendary'
  }
];

const rarityStyles = {
  common: 'bg-muted text-muted-foreground',
  rare: 'bg-primary/10 text-primary border-primary/20',
  epic: 'bg-accent/10 text-accent-foreground border-accent/20',
  legendary: 'bg-gradient-accent text-accent-foreground border-accent animate-pulse-glow'
};

const rarityColors = {
  common: 'text-muted-foreground',
  rare: 'text-primary',
  epic: 'text-accent',
  legendary: 'text-accent'
};

export default function BadgeShowcase({ className }: { className?: string }) {
  return (
    <div className={`bg-card rounded-lg p-6 border border-border shadow-soft ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Achievement Badges</h3>
        <Badge variant="secondary">
          {badges.filter(b => b.earned).length} / {badges.length} Earned
        </Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
              badge.earned 
                ? rarityStyles[badge.rarity]
                : 'bg-muted/50 text-muted-foreground border-muted opacity-60'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <div className={`p-2 rounded-full ${badge.earned ? 'bg-background/20' : 'bg-muted'}`}>
                <badge.icon className={`h-6 w-6 ${badge.earned ? rarityColors[badge.rarity] : 'text-muted-foreground'}`} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{badge.name}</h4>
                <p className="text-xs opacity-80 mt-1">{badge.description}</p>
                {badge.earnedDate && (
                  <p className="text-xs opacity-60 mt-1">
                    Earned {new Date(badge.earnedDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>

            {badge.earned && (
              <div className="absolute -top-1 -right-1">
                <div className="w-3 h-3 bg-success rounded-full border-2 border-background"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}