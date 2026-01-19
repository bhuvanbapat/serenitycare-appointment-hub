
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, HelpCircle, Phone, Mail, Clock, Shield } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Help = () => {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by logging into your account and clicking 'Book Appointment'. Fill in your details, select your preferred doctor and time slot, and submit the form. You'll receive a confirmation with your token number."
    },
    {
      question: "What if I miss my appointment slot?",
      answer: "If you miss your appointment, please contact our reception immediately. Depending on the doctor's availability, we may be able to reschedule you for later the same day or provide you with the next available slot."
    },
    {
      question: "How do I cancel or reschedule my appointment?",
      answer: "You can cancel or reschedule your appointment up to 2 hours before your scheduled time through your appointment history page, or by calling our helpline at +91-XXX-XXXX-XXX."
    },
    {
      question: "Is my personal data secure?",
      answer: "Yes, absolutely. We use enterprise-grade encryption to protect all your personal and medical information. Your data is stored securely and is only accessible to authorized medical personnel involved in your care."
    },
    {
      question: "How does the token system work?",
      answer: "Each appointment gets a unique token number (e.g., SC-001). This helps manage queues efficiently. You can track your position in the queue using our live tracker feature."
    },
    {
      question: "Can I book appointments for my family members?",
      answer: "Currently, each patient needs their own account for appointment booking. This ensures proper medical record management and privacy compliance."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring a valid government ID, any previous medical records, current medications list, and your insurance card if applicable. Arrive 15 minutes early for check-in."
    },
    {
      question: "How far in advance can I book an appointment?",
      answer: "You can book appointments up to 30 days in advance. Emergency consultations can be booked on the same day based on availability."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
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

        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help & FAQ
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to commonly asked questions about SerenityCare's appointment booking system.
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center shadow-lg border-0">
            <CardHeader>
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">24/7 Helpline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Need immediate assistance? Call our support team.
              </p>
              <Button variant="outline" size="sm">
                +91-XXX-XXXX-XXX
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0">
            <CardHeader>
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send us your queries and we'll respond within 24 hours.
              </p>
              <Button variant="outline" size="sm">
                help@serenitycare.com
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0">
            <CardHeader>
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chat with our support team during business hours.
              </p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="shadow-2xl border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900 dark:text-white">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 mb-8">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                Your Privacy & Security
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 dark:text-blue-200">
              At SerenityCare, we take your privacy seriously. All your personal and medical information 
              is encrypted and stored securely. We never share your data with third parties without your 
              explicit consent. Our system complies with healthcare data protection standards.
            </p>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700">
          <CardHeader>
            <CardTitle className="text-lg text-green-900 dark:text-green-100">
              System Status: All Systems Operational ✅
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-green-800 dark:text-green-200">Appointment Booking:</span>
                <span className="ml-2 text-green-600 dark:text-green-300">Online</span>
              </div>
              <div>
                <span className="font-medium text-green-800 dark:text-green-200">Live Tracker:</span>
                <span className="ml-2 text-green-600 dark:text-green-300">Online</span>
              </div>
              <div>
                <span className="font-medium text-green-800 dark:text-green-200">User Accounts:</span>
                <span className="ml-2 text-green-600 dark:text-green-300">Online</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Still Need Help */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Still need help?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our support team is here to assist you with any questions or concerns.
          </p>
          <div className="space-x-4">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Contact Us
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button variant="outline">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
