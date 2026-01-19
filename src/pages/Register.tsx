
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff, ArrowLeft, Check } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const patientId = `SC${Date.now().toString().slice(-6)}`;
      const userData = {
        id: patientId,
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        mobile: formData.mobile,
        email: formData.email,
        registrationDate: new Date().toISOString()
      };

      localStorage.setItem('serenityCareUser', JSON.stringify(userData));
      setIsSuccess(true);
      setIsLoading(false);

      toast({
        title: "Registration Successful!",
        description: `Welcome to SerenityCare, ${formData.name}! Your Patient ID is ${patientId}.`,
      });

      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardContent className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to SerenityCare!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your account has been created successfully. You'll be redirected to your dashboard shortly.
            </p>
            <div className="animate-pulse">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-md mx-auto">
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

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Account
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Join SerenityCare for better healthcare
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age" className="text-sm font-medium">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="mt-1 h-12"
                    min="1"
                    max="120"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="gender" className="text-sm font-medium">Gender *</Label>
                  <Select onValueChange={(value) => handleInputChange('gender', value)} required>
                    <SelectTrigger className="mt-1 h-12">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="mobile" className="text-sm font-medium">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 h-12"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium">Password *</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="h-12 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password *</Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="h-12 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium mt-6"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <div className="text-center pt-6 border-t mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
