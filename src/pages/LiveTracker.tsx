
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Search, Clock, Users, MapPin, RefreshCw } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

const LiveTracker = () => {
  const [tokenNumber, setTokenNumber] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const { toast } = useToast();

  // Mock current queue status
  const [queueStatus] = useState({
    totalPatients: 45,
    currentlyServing: 'SC-023',
    averageWaitTime: '12 minutes',
    departments: [
      { name: 'General Medicine', queue: 8, avgWait: '10 min' },
      { name: 'Cardiology', queue: 5, avgWait: '15 min' },
      { name: 'Orthopedics', queue: 6, avgWait: '18 min' },
      { name: 'Pediatrics', queue: 3, avgWait: '8 min' }
    ]
  });

  const handleSearch = async () => {
    if (!tokenNumber.trim()) {
      toast({
        title: "Please enter a token number",
        description: "Token number is required to track your appointment.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      const mockData = {
        tokenNumber: tokenNumber,
        patientName: 'John Doe',
        department: 'Cardiology',
        doctor: 'Dr. Sarah Johnson',
        appointmentTime: '10:30 AM',
        currentPosition: Math.floor(Math.random() * 10) + 1,
        estimatedWaitTime: Math.floor(Math.random() * 30) + 5,
        status: 'In Queue',
        location: 'Room 201, 2nd Floor',
        checkedIn: true
      };
      
      setTrackingData(mockData);
      setLastUpdated(new Date());
      setIsLoading(false);
      
      toast({
        title: "Appointment Found!",
        description: `Token ${tokenNumber} is being tracked.`,
      });
    }, 1500);
  };

  const refreshData = () => {
    if (trackingData) {
      setIsLoading(true);
      setTimeout(() => {
        setTrackingData({
          ...trackingData,
          currentPosition: Math.max(1, trackingData.currentPosition - 1),
          estimatedWaitTime: Math.max(5, trackingData.estimatedWaitTime - 3)
        });
        setLastUpdated(new Date());
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    // Auto-refresh every 30 seconds if tracking
    let interval: NodeJS.Timeout;
    if (trackingData) {
      interval = setInterval(refreshData, 30000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [trackingData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Queue':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Next':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Called':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

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
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Live Appointment Tracker
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track your appointment status in real-time and know exactly when to arrive at the hospital.
          </p>
        </div>

        {/* Search Section */}
        <Card className="shadow-lg border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Enter Your Token Number
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="token" className="sr-only">Token Number</Label>
                <Input
                  id="token"
                  type="text"
                  placeholder="e.g., SC-045"
                  value={tokenNumber}
                  onChange={(e) => setTokenNumber(e.target.value.toUpperCase())}
                  className="text-center text-lg h-12"
                />
              </div>
              <Button
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 h-12 px-8"
              >
                {isLoading ? (
                  'Searching...'
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Track
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {trackingData && (
          <div className="space-y-6 mb-8">
            {/* Patient Info */}
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">
                      {trackingData.patientName}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300">
                      Token: {trackingData.tokenNumber}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(trackingData.status)}>
                      {trackingData.status}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={refreshData}
                      disabled={isLoading}
                    >
                      <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Queue Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Queue Position
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      #{trackingData.currentPosition}
                    </span>
                  </div>
                  <Progress 
                    value={Math.max(0, 100 - (trackingData.currentPosition * 10))} 
                    className="h-3"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {trackingData.currentPosition} patients ahead of you
                  </p>
                </div>

                {/* Appointment Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Appointment</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {trackingData.appointmentTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Doctor</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {trackingData.doctor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {trackingData.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Wait Time */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Estimated Wait Time
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">
                    {trackingData.estimatedWaitTime} minutes
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-200 mt-2">
                    You can arrive just-in-time to minimize waiting
                  </p>
                </div>

                {/* Last Updated */}
                {lastUpdated && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Last updated: {lastUpdated.toLocaleTimeString()}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Live Queue Status */}
        <Card className="shadow-lg border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Live Hospital Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Overall Status */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Overall Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Patients:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {queueStatus.totalPatients}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Currently Serving:</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {queueStatus.currentlyServing}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Avg Wait Time:</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {queueStatus.averageWaitTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Department Status */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Department Queues</h3>
                <div className="space-y-3">
                  {queueStatus.departments.map((dept, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-900 dark:text-white">{dept.name}</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{dept.avgWait}</p>
                      </div>
                      <Badge variant="outline">
                        {dept.queue} waiting
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700">
          <CardHeader>
            <CardTitle className="text-lg text-green-900 dark:text-green-100">
              📱 How to Use Live Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
              <li>• Enter your token number to see your current queue position</li>
              <li>• Check estimated wait time to plan your arrival</li>
              <li>• Refresh automatically every 30 seconds for live updates</li>
              <li>• Arrive 10-15 minutes before your estimated call time</li>
              <li>• No need to sit in crowded waiting areas!</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveTracker;
