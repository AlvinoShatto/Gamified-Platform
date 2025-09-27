import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const teamMembers = [
  {
    name: 'Arjun Patel',
    role: 'Team Lead & Full-Stack Developer',
    bio: 'Passionate about sustainable technology and agricultural innovation',
    skills: ['React', 'Node.js', 'AWS', 'Agricultural Tech']
  },
  {
    name: 'Sneha Sharma',
    role: 'UI/UX Designer',
    bio: 'Specializes in creating intuitive interfaces for rural communities',
    skills: ['Figma', 'User Research', 'Prototyping', 'Accessibility']
  },
  {
    name: 'Rajesh Kumar',
    role: 'Backend Developer',
    bio: 'Expert in scalable systems and database architecture',
    skills: ['Python', 'PostgreSQL', 'API Design', 'DevOps']
  },
  {
    name: 'Priya Reddy',
    role: 'Mobile Developer',
    bio: 'Focused on creating mobile-first solutions for farmers',
    skills: ['React Native', 'Android', 'iOS', 'Offline-First']
  },
  {
    name: 'Vikash Singh',
    role: 'Data Scientist',
    bio: 'Leveraging data to optimize farming practices and rewards',
    skills: ['Python', 'Machine Learning', 'Analytics', 'IoT']
  },
  {
    name: 'Ananya Gupta',
    role: 'Agricultural Consultant',
    bio: 'Bringing real-world farming expertise to digital solutions',
    skills: ['Sustainable Farming', 'Crop Science', 'Training', 'Community Outreach']
  }
];

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To gamify sustainable farming practices and create a thriving community of eco-conscious farmers who contribute to a greener future.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in the power of community-driven learning and peer-to-peer knowledge sharing among farmers.'
  },
  {
    icon: Award,
    title: 'Recognition Matters',
    description: 'Every sustainable practice deserves recognition. We reward farmers for their environmental contributions.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Combining traditional farming wisdom with modern technology to create innovative solutions for agriculture.'
  }
];

const milestones = [
  { year: '2024', event: 'Project Conception', description: 'Identified the need for gamified sustainable farming' },
  { year: '2024', event: 'Team Formation', description: 'Assembled a diverse team of developers and agricultural experts' },
  { year: '2025', event: 'SIH 2025 Submission', description: 'Submitted VisionX for Smart India Hackathon 2025' },
  { year: '2025', event: 'Beta Launch', description: 'Planning beta launch with select farming communities' }
];

export default function About() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 text-primary border-primary">
              Smart India Hackathon 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About
              <span className="text-primary"> VisionX</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              VisionX is our innovative solution for the Smart India Hackathon 2025, designed to 
              transform sustainable farming through gamification, community building, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-primary/5 py-20 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Problem We're Solving
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Traditional farming practices often lack engagement and incentivization for sustainable methods. 
                Farmers struggle with adoption of eco-friendly practices due to limited community support, 
                unclear benefits, and absence of recognition systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Globe className="h-12 w-12 text-destructive mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Environmental Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Lack of sustainable practices contributing to environmental degradation
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Users className="h-12 w-12 text-warning mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Limited Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Farmers working in isolation without peer support and knowledge sharing
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Motivation Gap</h3>
                    <p className="text-sm text-muted-foreground">
                      Absence of recognition and rewards for sustainable farming efforts
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine gamification, community building, and technology to create an engaging 
              platform that promotes sustainable farming practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-gradient-primary rounded-full w-fit mb-4">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              A diverse group of technologists and agricultural experts working together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 bg-primary/5 py-20 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in the development of VisionX
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year + milestone.event}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {milestone.year}
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}