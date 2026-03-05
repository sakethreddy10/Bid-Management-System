import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './index.css'

const BidDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [bid, setBid] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBidDetails = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://edtech-exam-api.vercel.app/api/bids?id=${id}`)
        const data = await response.json()
        
        if (data.success) {
          setBid(data.data)
        }
      } catch (error) {
        console.error('Error fetching bid details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBidDetails()
  }, [id])

  const handleBack = () => {
    navigate('/')
  }

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!bid) {
    return <div className="error">Bid not found</div>
  }

  return (
    <div className="bid-details">
      <div className="bid-details-header">
        <button onClick={handleBack} className="back-btn">
          ← Back
        </button>
        <h2>Bid Details</h2>
        <div className="status-badge">LIVE</div>
      </div>

      <div className="bid-details-content">
        <div className="details-grid">
          <div className="detail-item">
            <label>Bid Number</label>
            <span>{bid.bidNumber}</span>
          </div>
          
          <div className="detail-item">
            <label>Created By</label>
            <span>{bid.createdBy}</span>
          </div>
          
          <div className="detail-item">
            <label>Start Date</label>
            <span>{bid.startDate}</span>
          </div>
          
          <div className="detail-item">
            <label>Start Time</label>
            <span>{bid.startTime}</span>
          </div>
          
          <div className="detail-item">
            <label>Time Remaining</label>
            <span>{bid.timeRemaining}</span>
          </div>
          
          <div className="detail-item">
            <label>From City</label>
            <span>{bid.fromCity}</span>
          </div>
          
          <div className="detail-item">
            <label>To City</label>
            <span>{bid.toCity}</span>
          </div>
          
          <div className="detail-item">
            <label>Vehicle Type</label>
            <span>{bid.vehicleType}</span>
          </div>
          
          <div className="detail-item">
            <label>Body Type</label>
            <span>{bid.bodyType}</span>
          </div>
          
          <div className="detail-item">
            <label>Number of Vehicles</label>
            <span>{bid.noOfVehicles}</span>
          </div>
          
          <div className="detail-item">
            <label>Material Weight</label>
            <span>{bid.materialWeight} kg</span>
          </div>
          
          <div className="detail-item">
            <label>Response Count</label>
            <span>{bid.response}</span>
          </div>
          
          <div className="detail-item">
            <label>Assigned Staff</label>
            <span>{bid.assignedStaff}</span>
          </div>
          
          <div className="detail-item">
            <label>Staff Id</label>
            <span>{bid.staffId}</span>
          </div>
          
          <div className="detail-item">
            <label>Status</label>
            <span>{bid.status}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BidDetails