import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BidRow from '../BidRow'
import './index.css'

const BidList = () => {
  const [bids, setBids] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('Sort by Date')
  const navigate = useNavigate()

  const fetchBids = async (search = '', sort = '') => {
    setLoading(true)
    try {
      let url = 'https://edtech-exam-api.vercel.app/api/bids'
      const params = new URLSearchParams()

      if (search) {
        params.append('createdBy', search)
      }
      if (sort) {
        params.append('sortBy', sort)
      }

      if (params.toString()) {
        url += `?${params.toString()}`
      }

      const response = await fetch(url)
      const data = await response.json()

      if (data.success) {
        setBids(data.data)
      }
    } catch (error) {
      console.error('Error fetching bids:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBids()
  }, [])

  const getSortParam = (sortValue) => {
    if (sortValue === 'Oldest First') {
      return 'asc'
    } else if (sortValue === 'Newest First') {
      return 'desc'
    }
    return ''
  }

  const handleSearch = () => {
    const sortParam = getSortParam(sortBy)
    fetchBids(searchTerm, sortParam)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSortChange = (e) => {
    const newSort = e.target.value
    setSortBy(newSort)
    const sortParam = getSortParam(newSort)
    fetchBids(searchTerm, sortParam)
  }

  const handleRowClick = (bidId) => {
    navigate(`/bid/${bidId}`)
  }

  return (
    <div className="bid-list">
      <div className="bid-list-header">
        <div className="header-section">
          <h2 className="page-title">Bid Created</h2>
          <div className="filter-buttons">
            <button className="filter-btn active">Today</button>
            <button className="filter-btn">Yesterday</button>
            <button className="filter-btn">Calendar</button>
          </div>
        </div>

        <div className="controls-section">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>

          <div className="sort-section">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="sort-dropdown"
            >
              <option value="Sort by Date">Sort by Date</option>
              <option value="Oldest First">Oldest First</option>
              <option value="Newest First">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="bid-table-container">
          <table className="bid-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Bid Number / Created By</th>
                <th>Start Date & Time</th>
                <th>Bid Time Remaining</th>
                <th>From City / To City</th>
                <th>Vehicle Type, Size / Body / No. of Vehicle</th>
                <th>Material Weight (in kg)</th>
                <th>Assigned Staff / Staff Id</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <BidRow
                  key={bid.id}
                  bid={bid}
                  serialNumber={index + 1}
                  onClick={() => handleRowClick(bid.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default BidList