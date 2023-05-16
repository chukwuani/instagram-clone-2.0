"use client";
import { useState } from "react";
import LoggedIn from "./Components/LoggedIn";

export default function Home() {
  const [isLogged, setisLogged] = useState(false);

  return <main>{isLogged ? <LoggedIn /> : <LoggedIn />}</main>;
}
