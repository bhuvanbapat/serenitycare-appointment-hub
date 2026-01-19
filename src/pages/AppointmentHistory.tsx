
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Stethoscope, QrCode } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('serenityCareUser');
    if (!userData) {
      navigate('/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    
    // Get appointments for this user from localStorage
    const allAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const userAppointments = allAppointments.filter((apt: any) => apt.userId === parsedUser.id);
    
    // If no user-specific appointments, show some mock data for demonstration
    if (userAppointments.length === 0) {
      const mockHistory = [
        {
          id: 1,
          date: '2024-06-15',
          time: '10:30 AM',
          doctor: 'Dr. Sarah Johnson',
          department: 'Cardiology',
          status: 'Completed',
          tokenNumber: 'C-001',
          symptoms: 'Chest pain, shortness of breath',
          qrCode: `SC-${Date.now()-86400000}-${parsedUser.id}`,
          userId: parsedUser.id
        },
        {
          id: 2,
          date: '2024-06-20',
          time: '2:15 PM',
          doctor: 'Dr. Mike Chen',
          department: 'General Medicine',
          status: 'Upcoming',
          tokenNumber: 'G-045',
          symptoms: 'Regular checkup',
          qrCode: `SC-${Date.now()}-${parsedUser.id}`,
          userId: parsedUser.id
        }
      ];
      setAppointments(mockHistory);
    } else {
      setAppointments(userAppointments);
    }
  }, [navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Upcoming':
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Cancelled':
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const generateQRCodeSVG = (qrCode: string) => {
    // Simple QR code representation using SVG
    const size = 80;
    const modules = 8; // 8x8 grid for simplicity
    const moduleSize = size / modules;
    
    // Create a simple pattern based on the QR code string
    const pattern = qrCode.split('').map((char, index) => {
      return char.charCodeAt(0) + index;
    });

    return (
      <svg width={size} height={size} className="border border-gray-300 rounded">
        {Array.from({ length: modules }).map((_, row) =>
          Array.from({ length: modules }).map((_, col) => {
            const index = row * modules + col;
            const shouldFill = pattern[index % pattern.length] % 2 === 0;
            return (
              <rect
                key={`${row}-${col}`}
                x={col * moduleSize}
                y={row * moduleSize}
                width={moduleSize}
                height={moduleSize}
                fill={shouldFill ? '#000' : '#fff'}
              />
            );
          })
        )}
      </svg>
    );
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Appointment History
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            View all your past and upcoming appointments with QR codes
          </p>
        </div>

        {/* Appointments List */}
        <div className="space-y-6">
          {appointments.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No Appointments Found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You haven't booked any appointments yet.
                </p>
                <Link to="/book-appointment">
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Book Your First Appointment
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            appointments.map((appointment) => (
              <Card key={appointment.id} className="shadow-lg border-0">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          {appointment.doctor}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {appointment.department}
                        </p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {appointment.date}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {appointment.time}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Token: {appointment.tokenNumber}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <QrCode className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        QR Code
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 pt-2 border-t">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Reason: </span>
                        {appointment.symptoms}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        {generateQRCodeSVG(appointment.qrCode || `SC-${appointment.id}-${user.id}`)}
                      </div>
                      <p className="text-xs text-gray-500 text-center">
                        Scan for quick check-in
                      </p>
                    </div>
                  </div>
                  
                  {(appointment.status === 'Upcoming' || appointment.status === 'upcoming') && (
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Bottom Actions */}
        <div className="text-center mt-8">
          <Link to="/book-appointment">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Book New Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
