import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AgentDashboard.css";

const AgentDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [pendingDonations, setPendingDonations] = useState([]);
  const [completedDonations, setCompletedDonations] = useState([]);
  const [activeTab, setActiveTab] = useState("current");

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

  const moveToSection = (donation, from, toSetter) => {
    from((prev) => prev.filter((d) => d._id !== donation._id));
    toSetter((prev) => [...prev, donation]);
  };

  const renderDonationCards = (list, status) =>
    list.map((donation) => (
      <div className="donation-card" key={donation._id}>
        <div className="card-title">{donation.name}</div>
        <div className="card-detail"><span className="card-label">Email:</span> {donation.email}</div>
        <div className="card-detail"><span className="card-label">Phone:</span> {donation.phoneNo}</div>
        <div className="card-detail"><span className="card-label">Type:</span> {donation.typeOfFood}</div>
        <div className="card-detail"><span className="card-label">Quantity:</span> {donation.quantity}</div>
        <div className="card-detail"><span className="card-label">Address:</span> {donation.address}</div>

        <div className="card-buttons">
          {status === "current" && (
            <>
              <button onClick={() => moveToSection(donation, setDonations, setPendingDonations)} className="pending-btn">Pending</button>
              <button onClick={() => moveToSection(donation, setDonations, setCompletedDonations)} className="completed-btn">Completed</button>
            </>
          )}
          {status === "pending" && (
            <button onClick={() => moveToSection(donation, setPendingDonations, setDonations)} className="revert-btn">Remove</button>
          )}
          {status === "completed" && (
            <button onClick={() => moveToSection(donation, setCompletedDonations, setDonations)} className="revert-btn">Remove</button>
          )}
        </div>
      </div>
    ));

  const getTabContent = () => {
    if (activeTab === "current") {
      return donations.length === 0 ? <p>No current donations.</p> : renderDonationCards(donations, "current");
    } else if (activeTab === "pending") {
      return pendingDonations.length === 0 ? <p>No pending donations.</p> : renderDonationCards(pendingDonations, "pending");
    } else if (activeTab === "completed") {
      return completedDonations.length === 0 ? <p>No completed donations.</p> : renderDonationCards(completedDonations, "completed");
    }
  };

  return (
    <div className="agent-dashboard-container">
      <div className="sidebar">
        <h3>Agent Panel</h3>
        <button onClick={() => setActiveTab("current")} className={activeTab === "current" ? "active" : ""}>Current Donations</button>
        <button onClick={() => setActiveTab("pending")} className={activeTab === "pending" ? "active" : ""}>Pending Donations</button>
        <button onClick={() => setActiveTab("completed")} className={activeTab === "completed" ? "active" : ""}>Completed Donations</button>
      </div>

      <div className="dashboard-content">
        <h2 className="dashboard-title">
          {activeTab === "current" && "Current Donations"}
          {activeTab === "pending" && "Pending Donations"}
          {activeTab === "completed" && "Completed Donations"}
        </h2>
        <div className="card-grid">
          {getTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
