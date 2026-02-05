"use client";

import "./StudentDetail.css";
import Link from "next/link";

export default function StudentDetail() {
  return (
    <section className="student-detail-page">
      <Link href="/students" className="back-link">
        ← Back to Students
      </Link>

      {/* STUDENT SUMMARY */}
      <div className="student-summary-card">
        {/* ✅ CHANGED: dynamic student data */}
        <h1 className="student-name">name</h1>
        <p className="student-code">Referral Code: referralCode</p>

        <div className="student-total">
          <span>Total Spent</span>
          <strong>₹totalSpent</strong>
        </div>
      </div>

      {/* ORDERS */}
      <div className="orders-section">
        <h2 className="section-title">Order History</h2>

        <div className="orders-list">
          <div className="order-row">
            <div>
              <p className="order-snack">order.snack</p>
              <span className="order-qty">Qty: order.quantity</span>
            </div>
            <span className="order-amount">₹order.amount</span>
          </div>
        </div>
      </div>

      <button className="place-order-btn">Place New Order</button>
    </section>
  );
}
