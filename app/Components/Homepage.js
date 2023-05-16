"use client";
import React, { useState } from "react";
import Feed from "./Feed";
import Navbar from "../constants/Navbar";
import Stories from "./Stories";
import Suggested from "./Suggested";

export default function Homepage() {
  return (
    <>
      <Navbar active="Home" top={true} />
      <div className="homepage">
        <div className="left-side-homepage">
          <Stories />
          <Feed />
        </div>

        <Suggested />
      </div>
    </>
  );
}
