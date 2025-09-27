import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Target, 
  Users, 
  Shield, 
  TrendingUp,
  Gift,
  Star,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import XPProgressBar from '@/components/XPProgressBar';
import BadgeShowcase from '@/components/BadgeShowcase';
import questsImage from '@/assets/farming-quests.jpg';

const features = [
  {
    icon: Gamepad2,
    title: 'Daily Quests',
    description: 'Complete sustainable farming challenges every day',
    details: [
      'Water efficiency challenges',
      'Organic pest control tasks',
      'Soil health improvement missions',
      'Renewable energy adoption'
    ]
  },
  {
    icon: Zap,
    title: 'XP & Streaks',
    description: 'Build momentum with consecutive daily activities',
    details: [
      'Earn XP for every completed task',
      'Maintain streaks for bonus rewards',
      'Level up your farming expertise',
      'Track your progress over time'
    ]
  },
  {
    icon: Trophy,
    title: 'Achievement Badges',
    description: 'Unlock unique badges for special accomplishments',
    details: [
      'Milestone achievement badges',
      'Rare seasonal challenges',
      'Community leadership badges',
      'Environmental impact awards'
    ]
  },
  {
    icon: Users,
    title: 'Leaderboards',
    description: 'Compete with farmers in your region',
    details: [
      'Village-level competitions',
      'Regional farming challenges',
      'Seasonal tournaments',
      'Collaborative group quests'
    ]
  },
  {
    icon: Gift,
    title: 'Rewards System',
    description: 'Earn real-world benefits for your achievements',
    details: [
      'Agricultural tool discounts',
      'Premium seed varieties',
      'Expert consultation sessions',
      'Sustainable technology access'
    ]
  },
  {
    icon: Shield,
    title: 'Multi-tier Verification',
    description: 'Ensure authenticity with smart verification',
    details: [
      'GPS-based location tracking',
      'Photo verification system',
      'Peer validation network',
      'Expert review process'
    ]
  }
];

const rewardTiers = [
  {
    tier: 'Bronze',
    xpRequired: 1000,
    rewards: ['Basic farming tools discount', 'Community forum access', 'Monthly newsletter'],
    color: 'text-warning'
  },
  {
    tier: 'Silver',
    xpRequired: 5000,
    rewards: ['Premium seed varieties', 'Expert webinar access', 'Regional meetup invites'],
    color: 'text-muted-foreground'
  },
  {
    tier: 'Gold',
    xpRequired: 15000,
    rewards: ['Personal farming consultant', 'Advanced equipment loans', 'Market premium pricing'],
    color: 'text-accent'
  },
  {
    tier: 'Platinum',
    xpRequired: 50000,
    rewards: ['Sustainable tech partnerships', 'International conference tickets', 'Research collaboration'],
    color: 'text-primary'
  }
];

export default function Features() {
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
              Powerful Features for
              <span className="text-primary"> Smart Farming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how VisionX transforms traditional farming into an engaging, 
              rewarding experience with cutting-edge gamification features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={questsImage} 
                alt="Farming quests and activities" 
                className="w-full rounded-lg shadow-card"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <XPProgressBar currentXP={8450} targetXP={15000} level={11} />
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Target className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">47</div>
                    <div className="text-sm text-muted-foreground">Quests Completed</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">15</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Complete Feature Suite
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to gamify and improve your farming practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="p-2 bg-gradient-primary rounded-lg w-fit mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <BadgeShowcase />
        </div>
      </section>

      {/* Rewards System */}
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
              Reward Tiers
            </h2>
            <p className="text-xl text-muted-foreground">
              Progress through tiers and unlock increasingly valuable rewards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <Badge variant="outline" className={`${tier.color} border-current text-lg px-4 py-2`}>
                        {tier.tier}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{tier.xpRequired.toLocaleString()} XP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tier.rewards.map((reward, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className={`h-4 w-4 ${tier.color} mr-2 mt-0.5 flex-shrink-0`} />
                          {reward}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
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
              Smart Verification Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Our multi-tier verification ensures authentic and fair gameplay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'GPS Tracking', desc: 'Location verification for field activities' },
              { step: '2', title: 'Photo Evidence', desc: 'Visual proof of completed tasks' },
              { step: '3', title: 'Peer Review', desc: 'Community validation system' },
              { step: '4', title: 'Expert Verification', desc: 'Final approval by agricultural experts' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-6 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}