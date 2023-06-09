"use client";
import React, { useState } from "react";

import Footer from "../constants/Footer";
import Navbar from "../constants/Navbar";
import Saved from "./Saved";
import Share from "./Share";
import Tagged from "./Tagged";

export default function page() {
  const [activeCta, setActivecta] = useState("Share");
  return (
    <>
      <Navbar active="Profile" top={false} />

      <div className="profile-navbar">
        <span className="profile-setting" style={{ display: "flex" }}>
          <svg
            aria-label="Options"
            className="profile-setting-btn"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <circle
              cx="12"
              cy="12"
              fill="none"
              r="8.635"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"></circle>
            <path
              d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"></path>
          </svg>
        </span>

        <div className="switch-chat-acct" style={{ width: "auto" }}>
          <p className="current-chat-acct" style={{ fontWeight: 600 }}>
            the_wylde
          </p>

          <span className="down-switch-chevron">
            <svg
              style={{ width: 16 }}
              aria-label="Down chevron icon"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="20"
              role="img"
              viewBox="0 0 24 24"
              width="20">
              <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>
          </span>
        </div>

        <span className="show-suggest" style={{ padding: 8 }}>
          <svg
            aria-label="Discover People"
            className="_ab6-"
            color="rgb(38, 38, 38)"
            fill="rgb(38, 38, 38)"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24">
            <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
          </svg>
        </span>
      </div>

      <div className="homepage profile-color">
        <section className="user-profile">
          <div className="user-profile-head-container">
            <span className="user-profile-picture">
              <img
                src="https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=Muffin"
                alt="user-profile-picture"
              />
            </span>

            <div className="user-profile-stats">
              <div className="profile-stats-1">
                <h1>the_wylde</h1>
                <a className="edit-profile" href="https://Instagram.com/accounts/edit">
                  Edit profile
                </a>

                <span className="profile-setting">
                  <svg
                    aria-label="Options"
                    className="profile-setting-btn"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24">
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="8.635"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"></circle>
                    <path
                      d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"></path>
                  </svg>
                </span>
              </div>

              <div className="profile-stats-2">
                <p>
                  <a className="number-post" href="#">
                    0
                  </a>{" "}
                  posts
                </p>
                <p>
                  <a href="#">321</a> followers
                </p>
                <p>
                  <a href="#">538</a> following
                </p>
              </div>

              <div className="profile-stats-3">
                <p className="name">Allen Brown</p>
                <span className="bio">
                  <p>Yup, I'm just another Instagram influencer</p>
                  <p>Welcome to my 👑dom</p>
                  <p>
                    🐦:{" "}
                    <a className="bio-link" href="https://twitter.com/_stevecodes">
                      https://twitter.com/_stevecodes
                    </a>
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="mobile-stats-one">
            <p className="name">Allen Brown</p>
            <span className="bio">
              <p>Yup, I'm just another Instagram influencer</p>
              <p>Welcome to my 👑dom</p>
              <p>
                🐦:{" "}
                <a className="bio-link" href="https://twitter.com/_stevecodes">
                  https://twitter.com/_stevecodes
                </a>
              </p>
            </span>
          </div>

          <div className="mobile-stats-two">
            <p>
              <a className="number-post" href="#">
                0
              </a>
              posts
            </p>
            <p>
              <a href="#">321</a> followers
            </p>
            <p>
              <a href="#">538</a> following
            </p>
          </div>

          <div className="user-profile-bottom-section-container">
            <div className="user-profile-bottom-cta">
              <ul className="user-profile-bottom-cta-list-item">
                <li
                  className={activeCta === "Share" ? "active-bottom-cta user-cta" : "user-cta"}
                  onClick={() => setActivecta("Share")}>
                  <span>
                    <svg
                      aria-label=""
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="12"
                      role="img"
                      viewBox="0 0 24 24"
                      width="12">
                      <rect
                        fill="none"
                        height="18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        width="18"
                        x="3"
                        y="3"></rect>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="9.015"
                        x2="9.015"
                        y1="3"
                        y2="21"></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="14.985"
                        x2="14.985"
                        y1="3"
                        y2="21"></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="21"
                        x2="3"
                        y1="9.015"
                        y2="9.015"></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="21"
                        x2="3"
                        y1="14.985"
                        y2="14.985"></line>
                    </svg>
                  </span>
                  <p>POSTS</p>
                </li>
                <li
                  className={activeCta === "Saved" ? "active-bottom-cta user-cta" : "user-cta"}
                  onClick={() => setActivecta("Saved")}>
                  <span>
                    <svg
                      aria-label=""
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="12"
                      role="img"
                      viewBox="0 0 24 24"
                      width="12">
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></polygon>
                    </svg>
                  </span>
                  <p>SAVED</p>
                </li>
                <li
                  className={activeCta === "Tagged" ? "active-bottom-cta user-cta" : "user-cta"}
                  onClick={() => setActivecta("Tagged")}>
                  <span>
                    <svg
                      aria-label=""
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="12"
                      role="img"
                      viewBox="0 0 24 24"
                      width="12">
                      <path
                        d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                      <path
                        d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                      <circle
                        cx="12.072"
                        cy="11.075"
                        fill="none"
                        r="3.556"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></circle>
                    </svg>
                  </span>
                  <p>TAGGED</p>
                </li>
              </ul>
            </div>

            {activeCta === "Share" && <Share />}
            {activeCta === "Saved" && <Saved />}
            {activeCta === "Tagged" && <Tagged />}

            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}
