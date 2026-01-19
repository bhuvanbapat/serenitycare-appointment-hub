
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Shield, ArrowLeft, AlertTriangle } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate admin authentication
    setTimeout(() => {
      // Mock admin credentials check
      if (credentials.username === 'admin' && credentials.password === 'serenity2024') {
        const adminData = {
          id: 'admin-001',
          username: credentials.username,
          role: 'Hospital Administrator',
          permissions: ['view_appointments', 'manage_patients', 'view_analytics'],
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('serenityCareAdmin', JSON.stringify(adminData));
        
        toast({
          title: "Admin Login Successful!",
          description: "Welcome to the admin dashboard.",
        });
        
        // Navigate to admin dashboard (would be created in real implementation)
        navigate('/admin-dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid admin credentials. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Access
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              SerenityCare Hospital Administration
            </p>
            <Badge className="mt-2 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
              Restricted Access
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Security Warning */}
            <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                  Authorized Personnel Only
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-xs">
                  This area is restricted to hospital administrators and authorized staff only.
                </p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-sm font-medium">
                  Admin Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter admin username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium">
                  Admin Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter admin password"
                    value={credentials.password}
                    onChange={handleInputChange}
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

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? 'Authenticating...' : 'Access Admin Panel'}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-2">
                🔧 Demo Credentials (Testing Only)
              </h4>
              <div className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                <p><strong>Username:</strong> admin</p>
                <p><strong>Password:</strong> serenity2024</p>
                <p className="text-blue-600 dark:text-blue-300 italic">
                  This is a prototype dashboard for testing purposes only.
                </p>
              </div>
            </div>

            {/* Features Preview */}
            <div className="pt-4 border-t">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                Admin Dashboard Features:
              </h4>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>• View daily appointments list</li>
                <li>• Access patient details and history</li>
                <li>• Monitor doctor-wise appointment counts</li>
                <li>• Export appointment data (CSV)</li>
                <li>• Real-time queue management</li>
                <li>• System analytics and reports</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-300">
            🔒 All admin activities are logged and monitored for security
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
