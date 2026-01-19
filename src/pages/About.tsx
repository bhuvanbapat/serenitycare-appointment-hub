
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  Clock, 
  Shield, 
  Award,
  CheckCircle,
  Target,
  Lightbulb,
  Globe
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make prioritizes patient comfort and well-being"
    },
    {
      icon: Clock,
      title: "Time Respect",
      description: "We value your time and work to eliminate unnecessary waiting"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your health data is protected with enterprise-grade security"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously improving healthcare experiences through technology"
    }
  ];

  const achievements = [
    { metric: "75%", label: "Reduction in wait times" },
    { metric: "90%", label: "Patient satisfaction rate" },
    { metric: "60%", label: "Decrease in lobby crowding" },
    { metric: "24/7", label: "System availability" }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      experience: "15+ years in healthcare administration"
    },
    {
      name: "Alex Chen",
      role: "Head of Technology",
      experience: "Healthcare IT specialist with 12+ years"
    },
    {
      name: "Maria Rodriguez",
      role: "Patient Experience Director",
      experience: "Hospital operations expert with 10+ years"
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
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About SerenityCare
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionizing healthcare experiences through innovative appointment management 
            and patient-centered technology solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 shadow-xl">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  To transform the hospital waiting experience by eliminating unnecessary delays, 
                  reducing anxiety, and creating a more humane healthcare environment for all patients.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Reducing wait times by 75%</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Improving patient satisfaction</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Streamlining hospital operations</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 p-8 rounded-2xl">
                <Target className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Vision 2025
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To become the leading digital health platform, serving 100+ hospitals 
                  and transforming millions of patient experiences globally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <Card className="mb-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{achievement.metric}</div>
                  <div className="text-blue-100">{achievement.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-lg">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <Badge className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hospital Partnership */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              <Globe className="w-8 h-8 inline mr-2" />
              Hospital Partnership Program
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Currently in pilot phase at SerenityCare Hospital. 
              Expanding to partner hospitals across the region in 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="text-lg px-4 py-2">
                Pilot Phase: SerenityCare Hospital
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                Q2 2024: Regional Expansion
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                2025: National Network
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Experience the Difference
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join thousands of patients who have already experienced better healthcare with SerenityCare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Book Your Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
