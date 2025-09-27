import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Trophy, Users, Target, Zap, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-farming.jpg';

const features = [
  {
    icon: Gamepad2,
    title: 'Interactive Quests',
    description: 'Complete daily farming challenges and earn XP points for sustainable practices.',
    color: 'text-primary'
  },
  {
    icon: Trophy,
    title: 'Rewards System',
    description: 'Unlock badges, achievements, and real-world rewards for your farming excellence.',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Community Power',
    description: 'Connect with fellow farmers, share knowledge, and learn from success stories.',
    color: 'text-success'
  }
];

const stats = [
  { number: '10,000+', label: 'Active Farmers' },
  { number: '50,000+', label: 'Quests Completed' },
  { number: '25%', label: 'Yield Improvement' },
  { number: '500+', label: 'Villages Connected' }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sustainable farming practices" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6"
            >
              Gamify Your
              <span className="text-accent"> Farming Journey</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-primary-foreground/90 mb-8 leading-relaxed"
            >
              Transform sustainable farming into an exciting adventure. Complete quests, 
              earn rewards, and join a community of eco-conscious farmers making a real difference.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 hidden lg:block"
        >
          <div className="p-4 bg-success/20 backdrop-blur-sm rounded-full">
            <Leaf className="h-8 w-8 text-success" />
          </div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 hidden lg:block"
        >
          <div className="p-4 bg-accent/20 backdrop-blur-sm rounded-full">
            <Target className="h-8 w-8 text-accent" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose VisionX?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience farming like never before with our gamified platform designed 
              to promote sustainable practices and community growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`mx-auto p-3 rounded-full bg-gradient-primary mb-4 w-fit`}>
                      <feature.icon className={`h-8 w-8 text-primary-foreground`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Making Real Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of farmers already transforming agriculture
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the sustainable farming revolution and start earning rewards for your eco-friendly practices today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/features">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/community">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Join Community
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}