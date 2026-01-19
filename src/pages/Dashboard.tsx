
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, FileText, LogOut, History, Plus } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface UserData {
  id: string;
  name: string;
  mobile: string;
  email: string;
}

interface Appointment {
  id: string;
  date: string;
  time: string;
  doctor: string;
  department: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  tokenNumber: string;
  userId: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('serenityCareUser');
    if (!userData) {
      navigate('/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    
    // Get user-specific appointments
    const allAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const userAppointments = allAppointments.filter((apt: any) => apt.userId === parsedUser.id);
    
    // Show mock appointments if no real ones exist
    if (userAppointments.length === 0) {
      const mockAppointments: Appointment[] = [
        {
          id: '1',
          date: '2024-06-25',
          time: '10:30 AM',
          doctor: 'Dr. Sarah Wilson',
          department: 'Cardiology',
          status: 'upcoming',
          tokenNumber: 'C-15',
          userId: parsedUser.id
        },
        {
          id: '2',
          date: '2024-06-10',
          time: '2:00 PM',
          doctor: 'Dr. Mike Johnson',
          department: 'General Medicine',
          status: 'completed',
          tokenNumber: 'G-23',
          userId: parsedUser.id
        }
      ];
      setAppointments(mockAppointments);
    } else {
      setAppointments(userAppointments);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('serenityCareUser');
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">SerenityCare</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Patient Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Patient ID: {user.id} | Registered Mobile: {user.mobile}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link to="/book-appointment">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Book New Appointment</h3>
                    <p className="text-gray-600 dark:text-gray-300">Schedule your next visit</p>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link to="/appointment-history">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <History className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Appointment History</h3>
                    <p className="text-gray-600 dark:text-gray-300">View past appointments with QR codes</p>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Recent Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Recent Appointments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {appointments.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">No appointments found</p>
                <Link to="/book-appointment">
                  <Button className="mt-4">Book Your First Appointment</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {appointments.slice(0, 3).map((appointment) => (
                  <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </Badge>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            Token: {appointment.tokenNumber}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{appointment.doctor}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{appointment.department}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {appointments.length > 3 && (
                  <div className="text-center pt-4">
                    <Link to="/appointment-history">
                      <Button variant="outline">View All Appointments</Button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
