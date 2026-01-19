
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Shield, Users, Phone, MapPin } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">SerenityCare</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hospital</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Effortless Appointments,<br />
            <span className="text-blue-600">Less Waiting, More Caring</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of healthcare appointments. Book instantly, skip the queues, 
            and focus on what matters most - your health and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/book-appointment">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg">
                Book Appointment
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Patient Login
              </Button>
            </Link>
          </div>
          
          {/* Pilot Notice */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-amber-800 dark:text-amber-200">
              📋 This system is currently in pilot phase and limited to SerenityCare Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose SerenityCare?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Easy Booking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Book appointments in under 2 minutes with our intuitive interface
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">No More Waiting</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get real-time updates and arrive just when it's your turn
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Secure & Private</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your health data is protected with enterprise-grade security
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">New Patient?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Register now to access our appointment booking system and manage your healthcare journey
                </p>
                <Link to="/register">
                  <Button className="w-full" size="lg">Register Now</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Existing Patient?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Login to view your appointment history and book new appointments
                </p>
                <Link to="/login">
                  <Button variant="outline" className="w-full" size="lg">Login</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">SerenityCare</span>
              </div>
              <p className="text-gray-400">
                Your health, our priority. Modern healthcare made simple.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
                <Link to="/help" className="block text-gray-400 hover:text-white">Help & FAQ</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-400">General Medicine</p>
                <p className="text-gray-400">Cardiology</p>
                <p className="text-gray-400">Orthopedics</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Emergency</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-red-400 font-bold">+91 911-EMERGENCY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SerenityCare Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
