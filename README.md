# SerenityCare - Hospital Appointment Booking System

A modern, user-friendly hospital appointment booking system that eliminates long waiting queues with real-time tracking, easy scheduling, and an intuitive interface.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)

## ✨ Features

- **Easy Appointment Booking** - Book appointments in under 2 minutes
- **Real-Time Queue Tracking** - Know exactly when it's your turn
- **Patient Dashboard** - View appointment history and manage bookings
- **Admin Panel** - Hospital staff management interface
- **Dark Mode Support** - Comfortable viewing in any lighting
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Secure Authentication** - Patient login with mobile number or Patient ID

## 🏥 About

SerenityCare is designed to modernize the healthcare appointment experience. Instead of waiting in long queues, patients can:

1. Register online with their details
2. Book appointments with preferred doctors
3. Track their queue position in real-time
4. Receive confirmation with token numbers

> 📋 *This system is currently in pilot phase and limited to SerenityCare Hospital*

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **ShadCN UI** | Component Library |
| **React Router** | Navigation |
| **React Query** | Data Fetching |
| **Lucide Icons** | Icons |

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/serenitycare-appointment-hub.git

# Navigate to project directory
cd serenitycare-appointment-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
serenitycare-appointment-hub/
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/         # ShadCN UI components
│   ├── pages/          # Page components
│   │   ├── Index.tsx           # Home page
│   │   ├── Login.tsx           # Patient login
│   │   ├── Register.tsx        # Patient registration
│   │   ├── Dashboard.tsx       # Patient dashboard
│   │   ├── BookAppointment.tsx # Booking interface
│   │   ├── LiveTracker.tsx     # Queue tracking
│   │   └── AdminLogin.tsx      # Admin access
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions
├── public/             # Static assets
└── index.html          # Entry HTML file
```

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📸 Screenshots

<!-- Add screenshots of your application here -->
*Screenshots coming soon*

## 🔒 Security

- Patient data is handled with care
- Password fields use secure input types
- Session management via localStorage

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any queries regarding SerenityCare Hospital services:
- **Emergency**: +91 911-EMERGENCY
- **Available**: 24/7

---

<p align="center">
  Made with ❤️ for better healthcare
</p>
