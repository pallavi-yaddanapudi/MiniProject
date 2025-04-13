import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AgentDashboard.css";

const AgentDashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/agent/donations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="agent-dashboard">
      <h2 className="dashboard-title">Donation Records</h2>
      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <div className="card-grid">
          {donations.map((donation) => (
            <div className="donation-card" key={donation._id}>
              <div className="card-title">{donation.name}</div>
              <div className="card-detail"><span className="card-label">Email:</span> {donation.email}</div>
              <div className="card-detail"><span className="card-label">Phone:</span> {donation.phoneNo}</div>
              <div className="card-detail"><span className="card-label">Type:</span> {donation.typeOfFood}</div>
              <div className="card-detail"><span className="card-label">Quantity:</span> {donation.quantity}</div>
              <div className="card-detail"><span className="card-label">Address:</span> {donation.address}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default AgentDashboard;
