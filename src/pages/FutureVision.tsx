
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Lightbulb, 
  Smartphone, 
  Users, 
  Clock, 
  Heart, 
  Zap,
  Monitor,
  Coffee,
  BookOpen,
  Palette,
  Volume2,
  FileText,
  MapPin,
  Wifi,
  Music
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const FutureVision = () => {
  const visionStrategies = [
    {
      title: "SUBSTITUTE",
      icon: Monitor,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      items: [
        "Ergonomic chairs with built-in charging stations",
        "Digital check-in kiosks with multilingual support", 
        "Calming nature visuals and ambient soundscapes"
      ]
    },
    {
      title: "ADAPT",
      icon: Smartphone,
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      items: [
        "Train station-style digital token boards",
        "Mobile app for virtual queue tracking",
        "SMS notifications for appointment updates"
      ]
    },
    {
      title: "MODIFY",
      icon: Heart,
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      items: [
        "Semi-private consultation pods",
        "Real-time queue updates on wall displays",
        "Improved LED lighting with circadian rhythm support"
      ]
    },
    {
      title: "PUT TO ANOTHER USE",
      icon: BookOpen,
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      items: [
        "Patient health education interactive displays",
        "Multipurpose zones for different activities",
        "Community health awareness corner with local art"
      ]
    },
    {
      title: "ELIMINATE",
      icon: Zap,
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      items: [
        "Long physical queues through smart scheduling",
        "Excessive paperwork via digital forms",
        "Noise pollution with sound-absorbing materials"
      ]
    },
    {
      title: "COMBINE",
      icon: Coffee,
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      items: [
        "Entertainment zones with health monitoring kiosks",
        "Wellness corners with relaxation pods",
        "Café integration with nutritional guidance"
      ]
    }
  ];

  const futureFeatures = [
    {
      title: "AI-Powered Queue Optimization",
      description: "Machine learning algorithms predict and optimize patient flow",
      icon: Lightbulb,
      status: "In Development"
    },
    {
      title: "Virtual Reality Waiting Rooms",
      description: "Immersive calming experiences to reduce anxiety",
      icon: Monitor,
      status: "Research Phase"
    },
    {
      title: "Biometric Health Check-ins",
      description: "Automated vital signs monitoring during check-in",
      icon: Heart,
      status: "Pilot Testing"
    },
    {
      title: "Multi-Hospital Network",
      description: "Seamless appointment booking across hospital chains",
      icon: MapPin,
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Redesigning the Hospital Waiting Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The future of healthcare is patient-centered, technology-driven, and focused on 
            transforming every touchpoint of the hospital experience.
          </p>
        </div>

        {/* Vision Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Strategic Framework
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{strategy.title}</CardTitle>
                        <Badge className={strategy.color}>
                          {strategy.items.length} initiatives
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Future Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Future Innovations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {futureFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <Badge variant="outline">{feature.status}</Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Vision */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Vision Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">75%</div>
                <div className="text-blue-100">Reduction in wait anxiety</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">60%</div>
                <div className="text-blue-100">Decrease in lobby crowding</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-blue-100">Patient satisfaction improvement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Implementation Roadmap
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phase 1: Digital Foundation</h3>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Current</Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Implementing core digital appointment system, mobile tracking, and basic queue management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phase 2: Experience Enhancement</h3>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Q2 2024</Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Adding entertainment zones, health education kiosks, and improved physical waiting spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phase 3: AI Integration</h3>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Q4 2024</Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Deploying AI-powered optimization, predictive analytics, and personalized patient experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join our pilot program and help shape the future of healthcare experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Book Your Appointment
              </Button>
            </Link>
            <Link to="/live-tracker">
              <Button variant="outline">
                Try Live Tracker
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureVision;
