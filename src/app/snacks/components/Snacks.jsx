"use client";

import "./Snacks.css";

export default function Snacks() {
  return (
    <section className="snacks-page">
      <header className="snacks-header">
        <h1 className="snacks-title">Snacks You’ll Love</h1>
        <p className="snacks-subtitle">
          Pick a snack and order it in just a few clicks
        </p>
      </header>

      <div className="snacks-list">
        <div className="snack-card">
          <div className="snack-info">
            <h2 className="snack-name">name</h2>
            <span className="snack-orders"> </span>
          </div>

          <div className="snack-footer">
            <span className="snack-price">₹price</span>
            {/* Button removed as requested */}
          </div>
        </div>

        <div className="snack-card ghost" />
        <div className="snack-card ghost" />
        <div className="snack-card ghost" />
      </div>
    </section>
  );
}
