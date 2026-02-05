import React from "react";
import "./PatientHomePage.css";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ServiceCard from "../components/cards/ServiceCard";

const PatientHomePage = () => {
  return (
    <div className="patient-home-container">
      <Sidebar />

      <main className="main-content">
        <Header />

        <section className="welcome-section">
          <h1>Üdvözlő szöveg</h1>
          <p>Rövid általános információ</p>
        </section>

        <section className="services-section">
          <h2>Szolgáltatásaink:</h2>

          <div className="card-container">
            <ServiceCard title="Időpont foglalás" />
            <ServiceCard title="GYIK" />
            <ServiceCard title="Dokumentumok" />
          </div>
        </section>

        <footer className="footer-info">
          elérhetőségek, social felületek, helyszín
        </footer>
      </main>
    </div>
  );
};

export default PatientHomePage;