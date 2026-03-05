# React Bid Management System

A comprehensive bid management application built with React and React Router for managing logistics bids with real-time data fetching, search, and sorting capabilities.

## 🚀 Features

- **Bid Listing**: View all bids in a responsive table format
- **Search Functionality**: Search bids by creator name
- **Sorting Options**: Sort bids by date (oldest first, newest first)
- **Bid Details**: View detailed information for individual bids
- **Responsive Design**: Works seamlessly across different screen sizes
- **Navigation**: Sidebar navigation with multiple modules
- **Real-time Data**: Fetches data from external API

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling and responsive design
- **Fetch API** - HTTP requests

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar/
│   │   ├── index.jsx
│   │   └── index.css
│   ├── BidList/
│   │   ├── index.jsx
│   │   └── index.css
│   ├── BidRow/
│   │   ├── index.jsx
│   │   └── index.css
│   ├── BidDetails/
│   │   ├── index.jsx
│   │   └── index.css
│   ├── PodPage/
│   ├── VendorPage/
│   ├── UserPage/
│   ├── SettingsPage/
│   ├── ProfilePage/
│   ├── ContactPage/
│   ├── LogoutPage/
│   └── NotFound/
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sakethreddy10/Bid-Management-System.git
   cd Bid-Management-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔗 API Integration

The application integrates with the following API endpoints:

- **Base URL**: `https://edtech-exam-api.vercel.app/api/bids`
- **Get All Bids**: `GET /api/bids`
- **Search Bids**: `GET /api/bids?createdBy={searchTerm}`
- **Sort Bids**: `GET /api/bids?sortBy=asc|desc`
- **Get Bid Details**: `GET /api/bids?id={bidId}`

## 🎯 Key Components

### BidList Component
- Displays all bids in a table format
- Implements search and sort functionality
- Handles API calls and loading states

### BidDetails Component
- Shows detailed information for a specific bid
- Includes back navigation
- Displays status badges

### Sidebar Component
- Fixed navigation sidebar
- Links to all application modules
- Responsive design

## 🎨 Features Overview

### Search Functionality
- Search by bid creator name
- Triggered by Enter key or Search button
- Case-insensitive partial matching

### Sorting Options
- **Sort by Date** (default)
- **Oldest First** (ascending order)
- **Newest First** (descending order)

### Responsive Design
- Mobile-friendly interface
- Horizontal scrolling for large tables
- Adaptive layout for different screen sizes

## 🔄 Routing

The application uses React Router v6 with the following routes:

- `/` - Bid List (Home)
- `/bid/:id` - Bid Details
- `/pod` - POD Module
- `/vendor` - Vendor Module
- `/user` - User Module
- `/settings` - Settings
- `/profile` - Profile
- `/contact` - Contact Us
- `/logout` - Logout
- `*` - 404 Not Found

## 🎨 Styling

- Custom CSS with modern design principles
- Consistent color scheme and typography
- Hover effects and smooth transitions
- Professional table styling with alternating rows

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saketh Reddy**
- GitHub: [@sakethreddy10](https://github.com/sakethreddy10)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- API provider for the bid data endpoints

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Happy Coding!** 🚀