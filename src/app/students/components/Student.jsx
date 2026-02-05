"use client";

import "./Student.css";
import Link from "next/link";
import { useState } from "react";

export default function Student() {
  return (
    <section className="students-page">
      <header className="students-header">
        <div>
          <h1 className="students-title">Students</h1>
          <p className="students-subtitle">
            View students and track their spending
          </p>
        </div>

        <button className="add-student-btn">+ Add Student</button>
      </header>

      {/* STUDENT LIST */}
      <div className="students-list">
        <Link href={"/"} className="student-card">
          <div className="student-info">
            <h2 className="student-name">name</h2>
            <span className="student-code">Referral Code: referralCode</span>
          </div>

          <div className="student-meta">
            <span className="student-spent">₹totalSpent</span>
            <span className="spent-label">Total Spent</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
