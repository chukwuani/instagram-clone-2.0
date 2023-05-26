"use client";
import { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Loader from "../constants/Loader";

export default function LoggedIn() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", setLoading(false));
  }, []);

  return <>{loading ? <Loader /> : <Homepage />}</>;
}
