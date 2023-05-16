"use client";
import { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Loader from "../constants/Loader";

export default function LoggedIn() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!loading);
  }, []);

  return <main>{loading ? <Loader /> : <Homepage />}</main>;
}
