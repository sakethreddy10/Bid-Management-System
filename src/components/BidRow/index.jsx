import React from 'react'
import './index.css'

const BidRow = ({ bid, serialNumber, onClick }) => {
  return (
    <tr className="bid-row" onClick={onClick}>
      <td>{serialNumber}</td>
      <td>
        <div className="bid-number-cell">
          <div className="bid-number">{bid.bidNumber}</div>
          <div className="created-by">{bid.createdBy}</div>
        </div>
      </td>
      <td>
        <div className="date-time-cell">
          <div className="date">{bid.startDate}</div>
          <div className="time">{bid.startTime}</div>
        </div>
      </td>
      <td>{bid.timeRemaining}</td>
      <td>
        <div className="city-cell">
          <div className="from-city">{bid.fromCity}</div>
          <div className="to-city">{bid.toCity}</div>
        </div>
      </td>
      <td>
        <div className="vehicle-cell">
          <div className="vehicle-type">{bid.vehicleType}</div>
          <div className="body-type">{bid.bodyType}</div>
          <div className="vehicle-count">{bid.noOfVehicles}</div>
        </div>
      </td>
      <td>{bid.materialWeight}</td>
      <td>
        <div className="staff-cell">
          <div className="staff-name">{bid.assignedStaff}</div>
          <div className="staff-id">{bid.staffId}</div>
        </div>
      </td>
    </tr>
  )
}

export default BidRow