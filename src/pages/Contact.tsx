
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

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

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact SerenityCare Hospital
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for any questions, feedback, or support regarding our appointment booking system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Hospital Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  Hospital Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Healthcare Avenue<br />
                      Medical District, City - 560001<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone Numbers</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Main Line: +91-80-XXXX-XXXX<br />
                      Appointments: +91-80-YYYY-YYYY<br />
                      Emergency: +91-80-ZZZZ-ZZZZ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      General: info@serenitycare.com<br />
                      Support: help@serenitycare.com<br />
                      Appointments: appointments@serenitycare.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Working Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 6:00 AM - 10:00 PM<br />
                      Saturday: 6:00 AM - 8:00 PM<br />
                      Sunday: 8:00 AM - 6:00 PM<br />
                      <span className="text-red-600 font-medium">Emergency: 24/7</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <CardTitle className="text-lg text-red-900 dark:text-red-100">
                    Emergency Contact
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-red-800 dark:text-red-200 mb-4">
                  For medical emergencies, please call our 24/7 emergency hotline or visit our emergency department immediately.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  📞 Emergency: +91-80-ZZZZ-ZZZZ
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  Location Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="e.g., Appointment booking issue"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Please describe your query or feedback in detail..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Note:</strong> For urgent medical matters, please contact our emergency hotline 
                    directly rather than using this form.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
