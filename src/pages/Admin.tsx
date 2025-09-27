import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  MapPin,
  Award
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const dashboardStats = [
  {
    title: 'Total Farmers',
    value: '12,450',
    change: '+12.3%',
    icon: Users,
    color: 'text-primary'
  },
  {
    title: 'Active Quests',
    value: '3,890',
    change: '+8.7%',
    icon: Target,
    color: 'text-accent'
  },
  {
    title: 'Completed Tasks',
    value: '45,670',
    change: '+15.2%',
    icon: CheckCircle,
    color: 'text-success'
  },
  {
    title: 'Pending Verifications',
    value: '234',
    change: '-5.4%',
    icon: Clock,
    color: 'text-warning'
  }
];

const recentActivities = [
  {
    id: '1',
    type: 'verification',
    message: 'Quest verification completed for Rajesh Kumar',
    timestamp: '2 minutes ago',
    status: 'success'
  },
  {
    id: '2',
    type: 'alert',
    message: 'Unusual activity detected in Greenville region',
    timestamp: '15 minutes ago',
    status: 'warning'
  },
  {
    id: '3',
    type: 'achievement',
    message: 'New milestone: 50,000 total quests completed',
    timestamp: '1 hour ago',
    status: 'success'
  },
  {
    id: '4',
    type: 'verification',
    message: 'Batch verification completed for 25 farmers',
    timestamp: '2 hours ago',
    status: 'success'
  }
];

const topRegions = [
  { name: 'Punjab', farmers: 2840, quests: 8950, completion: 87 },
  { name: 'Haryana', farmers: 2156, quests: 6780, completion: 82 },
  { name: 'Karnataka', farmers: 1923, quests: 5640, completion: 79 },
  { name: 'Maharashtra', farmers: 1687, quests: 4890, completion: 75 },
  { name: 'Uttar Pradesh', farmers: 1534, quests: 4230, completion: 73 }
];

const verificationQueue = [
  {
    id: '1',
    farmer: 'Priya Sharma',
    quest: 'Water Conservation Challenge',
    location: 'Sustainable Valley',
    submitted: '30 min ago',
    priority: 'high'
  },
  {
    id: '2',
    farmer: 'Amit Patel',
    quest: 'Organic Pest Control',
    location: 'Eco Farm',
    submitted: '1 hour ago',
    priority: 'medium'
  },
  {
    id: '3',
    farmer: 'Sunita Devi',
    quest: 'Solar Energy Adoption',
    location: 'Green Acres',
    submitted: '2 hours ago',
    priority: 'low'
  }
];

export default function Admin() {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Admin Console
                <span className="text-primary"> Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Monitor and manage the VisionX farming community platform
              </p>
            </div>
            <Badge variant="outline" className="text-warning border-warning">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Preview Mode
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className={`text-sm ${
                          stat.change.startsWith('+') ? 'text-success' : 'text-destructive'
                        }`}>
                          {stat.change} from last week
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-primary`}>
                        <stat.icon className={`h-6 w-6 text-primary-foreground`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Recent Activities
                  </CardTitle>
                  <CardDescription>
                    Latest system activities and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                        <div className={`p-1.5 rounded-full ${
                          activity.status === 'success' ? 'bg-success/20' : 'bg-warning/20'
                        }`}>
                          {activity.status === 'success' ? (
                            <CheckCircle className="h-4 w-4 text-success" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-warning" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{activity.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Verification Queue */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Verification Queue
                  </CardTitle>
                  <CardDescription>
                    Pending quest verifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {verificationQueue.map((item) => (
                      <div key={item.id} className="border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm text-foreground">{item.farmer}</h4>
                          <Badge variant={
                            item.priority === 'high' ? 'destructive' : 
                            item.priority === 'medium' ? 'default' : 'secondary'
                          } className="text-xs">
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{item.quest}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {item.location} • {item.submitted}
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" className="flex-1 text-xs">Approve</Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs">Review</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Performance */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Regional Performance
                </CardTitle>
                <CardDescription>
                  Top performing regions by farmer engagement and quest completion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {topRegions.map((region, index) => (
                    <div key={region.name} className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{region.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {region.completion}% completion rate
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span>{region.farmers.toLocaleString()} farmers</span>
                          <span>{region.quests.toLocaleString()} quests</span>
                        </div>
                        <Progress value={region.completion} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}