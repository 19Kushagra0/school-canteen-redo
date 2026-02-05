"use client";
import Navbar from "../components/ui/Navbar/Navbar";

export default function AppWrapper({ children }) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-content">{children}</main>
    </div>
  );
}
