
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ArrowLeft, User, Phone, Mail, Stethoscope, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

const departments = [
  { id: 'general', name: 'General Medicine', doctors: ['Dr. Sarah Wilson', 'Dr. Mike Johnson'] },
  { id: 'cardiology', name: 'Cardiology', doctors: ['Dr. Robert Chen', 'Dr. Lisa Anderson'] },
  { id: 'orthopedics', name: 'Orthopedics', doctors: ['Dr. James Miller', 'Dr. Emily Davis'] },
  { id: 'pediatrics', name: 'Pediatrics', doctors: ['Dr. Anna Smith', 'Dr. David Wilson'] },
  { id: 'dermatology', name: 'Dermatology', doctors: ['Dr. Maria Garcia', 'Dr. Tom Brown'] }
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

const BookAppointment = () => {
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    symptoms: ''
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem('serenityCareUser');
    if (!userData) {
      toast({
        title: "Authentication Required",
        description: "Please login or register to book an appointment.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    
    // Pre-fill form with user data
    setFormData(prev => ({
      ...prev,
      fullName: parsedUser.name || '',
      phone: parsedUser.mobile || '',
      email: parsedUser.email || '',
      age: parsedUser.age || ''
    }));
  }, [navigate, toast]);

  const selectedDepartment = departments.find(dept => dept.id === formData.department);
  const availableDoctors = selectedDepartment?.doctors || [];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Reset doctor selection if department changes
    if (field === 'department') {
      setFormData(prev => ({ ...prev, doctor: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select both date and time for your appointment.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const appointmentData = {
        ...formData,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime,
        tokenNumber: `${formData.department.charAt(0).toUpperCase()}-${Math.floor(Math.random() * 100) + 1}`,
        id: Date.now().toString(),
        userId: user.id,
        status: 'upcoming',
        qrCode: `SC-${Date.now()}-${user.id}`
      };

      // Store appointment data
      const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      existingAppointments.push(appointmentData);
      localStorage.setItem('appointments', JSON.stringify(existingAppointments));

      navigate('/appointment-confirmation', { state: appointmentData });
    }, 2000);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <ThemeToggle />
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
              Book Your Appointment
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome back, {user.name}! Please fill in the details to schedule your visit
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="age" className="text-sm font-medium">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="mt-2 h-12"
                      min="1"
                      max="120"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="gender" className="text-sm font-medium">Gender *</Label>
                    <Select onValueChange={(value) => handleInputChange('gender', value)} required>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-6 border-t pt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Medical Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="department" className="text-sm font-medium">Department *</Label>
                    <Select onValueChange={(value) => handleInputChange('department', value)} required>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="doctor" className="text-sm font-medium">Preferred Doctor *</Label>
                    <Select 
                      onValueChange={(value) => handleInputChange('doctor', value)} 
                      disabled={!formData.department}
                      required
                    >
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDoctors.map((doctor) => (
                          <SelectItem key={doctor} value={doctor}>
                            {doctor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="symptoms" className="text-sm font-medium">Symptoms / Reason for Visit *</Label>
                  <Textarea
                    id="symptoms"
                    placeholder="Please describe your symptoms or reason for this visit..."
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange('symptoms', e.target.value)}
                    className="mt-2 min-h-[100px]"
                    required
                  />
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-6 border-t pt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Schedule Appointment</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium">Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal mt-2 h-12"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Preferred Time *</Label>
                    <Select onValueChange={setSelectedTime} required>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Booking Appointment...' : 'Book Appointment'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookAppointment;
