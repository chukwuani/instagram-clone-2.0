"use client";
import Navbar from "../constants/Navbar";
import Footer from "../constants/Footer";
import Discover from "./Discover";
import { useState } from "react";

export default function page() {
  return (
    <main>
      <Navbar active="Explore" top={false} />

      <div className="homepage">
        <section className="discover-page">
          <div className="search-sidebar-head discover-search">
            <div className="search-container">
              <span className="search-icon">
                <svg
                  aria-label="Search"
                  className="_ab6-"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="16"
                  role="img"
                  viewBox="0 0 24 24"
                  width="16">
                  <path
                    d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"></path>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="16.511"
                    x2="22"
                    y1="16.511"
                    y2="22"></line>
                </svg>
              </span>

              <input
                className="search"
                type="search"
                name="search"
                id="search"
                placeholder="search"
              />
            </div>
          </div>

          <Discover />
          <Discover />

          <Footer />
        </section>
      </div>
    </main>
  );
}
