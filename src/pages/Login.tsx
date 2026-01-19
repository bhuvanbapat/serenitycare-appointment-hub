
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Phone, User, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [loginType, setLoginType] = useState<'mobile' | 'patientId'>('mobile');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock login logic
      if (identifier && password) {
        const userData = {
          id: '12345',
          name: 'John Doe',
          mobile: identifier,
          email: 'john@example.com',
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('serenityCareUser', JSON.stringify(userData));
        
        toast({
          title: "Login Successful!",
          description: `Welcome back, ${userData.name}!`,
        });
        
        navigate('/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
              Welcome Back
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Sign in to your SerenityCare account
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Login Type Selector */}
            <div className="flex rounded-lg border p-1 bg-gray-100 dark:bg-gray-800">
              <button
                type="button"
                onClick={() => setLoginType('mobile')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'mobile'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Mobile</span>
              </button>
              <button
                type="button"
                onClick={() => setLoginType('patientId')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'patientId'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Patient ID</span>
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="identifier" className="text-sm font-medium">
                  {loginType === 'mobile' ? 'Mobile Number' : 'Patient ID'}
                </Label>
                <Input
                  id="identifier"
                  type={loginType === 'mobile' ? 'tel' : 'text'}
                  placeholder={loginType === 'mobile' ? '+91 9876543210' : 'SC123456'}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex items-center justify-between">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                  Register Here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            🔒 Your data is protected with enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
