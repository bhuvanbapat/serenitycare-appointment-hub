
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, Clock, User, Stethoscope, MapPin } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const AppointmentConfirmation = () => {
  const [appointmentData, setAppointmentData] = useState<any>(null);

  useEffect(() => {
    // Get appointment data from localStorage or URL params
    const savedAppointment = localStorage.getItem('latestAppointment');
    if (savedAppointment) {
      setAppointmentData(JSON.parse(savedAppointment));
    } else {
      // Mock data if no saved appointment
      setAppointmentData({
        tokenNumber: 'SC-' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
        patientName: 'John Doe',
        date: '2024-06-25',
        time: '10:30 AM',
        doctor: 'Dr. Sarah Johnson',
        department: 'Cardiology',
        estimatedWaitTime: '15-20 minutes',
        location: 'Room 201, 2nd Floor'
      });
    }
  }, []);

  if (!appointmentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Appointment Confirmed!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Thank you, {appointmentData.patientName}! Your appointment has been successfully booked.
          </p>
        </div>

        {/* Appointment Details Card */}
        <Card className="shadow-2xl border-0 mb-8">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <CardTitle className="text-xl text-gray-900 dark:text-white">
              SerenityCare Hospital
            </CardTitle>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-lg px-4 py-2">
              Token: {appointmentData.tokenNumber}
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Doctor & Department */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {appointmentData.doctor}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {appointmentData.department}
                </p>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {appointmentData.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {appointmentData.time}
                  </p>
                </div>
              </div>
            </div>

            {/* Location & Wait Time */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {appointmentData.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                <User className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Wait Time</p>
                  <p className="font-semibold text-green-700 dark:text-green-300">
                    {appointmentData.estimatedWaitTime}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/live-tracker" className="w-full">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Track Live Status
              </Button>
            </Link>
            
            <Link to="/book-appointment" className="w-full">
              <Button variant="outline" className="w-full">
                Book Another Appointment
              </Button>
            </Link>
          </div>

          <Link to="/dashboard" className="block w-full">
            <Button variant="ghost" className="w-full">
              Return to Dashboard
            </Button>
          </Link>
        </div>

        {/* Important Note */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            📱 Important Instructions:
          </h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Please arrive 15 minutes before your appointment time</li>
            <li>• Bring a valid ID and any relevant medical records</li>
            <li>• You can track your queue status live using the tracker</li>
            <li>• For emergencies, call our 24/7 helpline</li>
          </ul>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8">
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            See you soon at SerenityCare Hospital! 🏥
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            We're committed to providing you with the best care possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
