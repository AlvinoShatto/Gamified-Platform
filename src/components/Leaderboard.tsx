import { motion } from 'framer-motion';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar?: string;
  xp: number;
  level: number;
  streak: number;
  village: string;
  change: 'up' | 'down' | 'same';
}

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Rajesh Kumar',
    xp: 15420,
    level: 12,
    streak: 28,
    village: 'Greenville',
    change: 'up'
  },
  {
    rank: 2,
    name: 'Priya Sharma',
    xp: 14890,
    level: 11,
    streak: 22,
    village: 'Sustainable Valley',
    change: 'same'
  },
  {
    rank: 3,
    name: 'Amit Patel',
    xp: 13650,
    level: 10,
    streak: 15,
    village: 'Eco Farm',
    change: 'up'
  },
  {
    rank: 4,
    name: 'Sunita Devi',
    xp: 12340,
    level: 9,
    streak: 31,
    village: 'Green Acres',
    change: 'down'
  },
  {
    rank: 5,
    name: 'Mohan Singh',
    xp: 11890,
    level: 9,
    streak: 18,
    village: 'Harvest Hills',
    change: 'up'
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-accent" />;
    case 2:
      return <Medal className="h-5 w-5 text-muted-foreground" />;
    case 3:
      return <Award className="h-5 w-5 text-warning" />;
    default:
      return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getChangeIcon = (change: string) => {
  switch (change) {
    case 'up':
      return <TrendingUp className="h-4 w-4 text-success" />;
    case 'down':
      return <TrendingUp className="h-4 w-4 text-destructive rotate-180" />;
    default:
      return <div className="w-4 h-4 bg-muted-foreground/30 rounded-full" />;
  }
};

export default function Leaderboard({ className }: { className?: string }) {
  return (
    <div className={`bg-card rounded-lg p-6 border border-border shadow-soft ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Village Leaderboard</h3>
        <Badge variant="outline">This Week</Badge>
      </div>

      <div className="space-y-3">
        {leaderboardData.map((entry, index) => (
          <motion.div
            key={entry.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:shadow-soft ${
              entry.rank <= 3 
                ? 'bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20' 
                : 'bg-muted/30 border-border'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-8">
                {getRankIcon(entry.rank)}
              </div>

              <Avatar className="h-10 w-10">
                <AvatarImage src={entry.avatar} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {entry.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-foreground">{entry.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    Lv. {entry.level}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{entry.village}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-right">
              <div>
                <p className="font-semibold text-foreground">{entry.xp.toLocaleString()} XP</p>
                <p className="text-sm text-muted-foreground">{entry.streak} day streak</p>
              </div>
              <div className="w-6 flex justify-center">
                {getChangeIcon(entry.change)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          You are currently ranked <span className="font-semibold text-primary">#12</span> in your village
        </p>
      </div>
    </div>
  );
}