import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface XPProgressBarProps {
  currentXP: number;
  targetXP: number;
  level: number;
  className?: string;
}

export default function XPProgressBar({ currentXP, targetXP, level, className }: XPProgressBarProps) {
  const progressPercentage = (currentXP / targetXP) * 100;

  return (
    <div className={`bg-card rounded-lg p-4 border border-border shadow-soft ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-gradient-accent rounded-full">
            <Trophy className="h-4 w-4 text-accent-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">Level {level}</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4" />
          <span>{currentXP.toLocaleString()} / {targetXP.toLocaleString()} XP</span>
        </div>
      </div>

      <div className="relative">
        <Progress value={progressPercentage} className="h-3" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 h-3 bg-gradient-accent rounded-full origin-left opacity-80"
          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
        />
      </div>

      <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
        <span>Current Progress</span>
        <span>{Math.round(progressPercentage)}% complete</span>
      </div>
    </div>
  );
}