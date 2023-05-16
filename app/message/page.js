"use client";
import Navbar from "../constants/Navbar";
import { faker } from "@faker-js/faker";

import { useState } from "react";

export default function page() {
  const randomName = faker.name.fullName();

  return (
    <main>
      <Navbar active="Message" top={false} />

      <div className="homepage">
        <div className="message-container">
          <section className="message-section">
            <div className="chat-list">
              <div className="switch-chat-acct-head">
                <div className="switch-chat-acct">
                  <p className="current-chat-acct">the_wylde</p>
                  <span className="down-switch-chevron">
                    <svg
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

                <span className="new-message-icon">
                  <svg
                    aria-label="New message"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24">
                    <path
                      d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"></path>
                    <path
                      d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
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
                      x1="16.848"
                      x2="20.076"
                      y1="3.924"
                      y2="7.153"></line>
                  </svg>
                </span>
              </div>

              <div className="active-chat">
                <ul className="active-chat-list">
                  <li className="active-list">
                    <span className="chat-img online">
                      <img
                        className="chat-profile"
                        src="https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=Bubba"
                        alt="avatar"
                      />
                    </span>
                    <a className="chat" href="#">
                      <div>
                        <h3 className="chat-name">Jacob Spinka</h3>
                        <p className="chat-message">Active now</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="general-chat-display">
              <span className="dm-icon">
                <svg
                  aria-label="Direct"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="96"
                  role="img"
                  viewBox="0 0 96 96"
                  width="96">
                  <circle
                    cx="48"
                    cy="48"
                    fill="none"
                    r="47"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"></circle>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="69.286"
                    x2="41.447"
                    y1="33.21"
                    y2="48.804"></line>
                  <polygon
                    fill="none"
                    points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"></polygon>
                </svg>
              </span>

              <h3 className="chat-display-header">Your Messages</h3>
              <p className="chat-display-p">
                Send private photos and messages to a friend or group.
              </p>

              <button className="chat-display-btn">Send Message</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
