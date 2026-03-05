import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import BidList from './components/BidList'
import BidDetails from './components/BidDetails'
import PodPage from './components/PodPage'
import VendorPage from './components/VendorPage'
import UserPage from './components/UserPage'
import SettingsPage from './components/SettingsPage'
import ProfilePage from './components/ProfilePage'
import ContactPage from './components/ContactPage'
import LogoutPage from './components/LogoutPage'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<BidList />} />
            <Route path="/bid/:id" element={<BidDetails />} />
            <Route path="/pod" element={<PodPage />} />
            <Route path="/vendor" element={<VendorPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App