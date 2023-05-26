import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Suggested() {
  const currentYear = new Date().getFullYear();
  const [suggestion, setSuggestion] = useState([
    {
      id: crypto.randomUUID(),
      image: "/saro.jpg",
      username: "sarodeele",
      followedBy: "Followed by de_real_teddy",
    },
    {
      id: crypto.randomUUID(),
      image: "/jinah.jpg",
      username: "__j.i.n.a.h",
      followedBy: "New to Instagram",
    },
    {
      id: crypto.randomUUID(),
      image: "/xoxo.jpg",
      username: "x.o.x.o__divine",
      followedBy: "Followed by de_real_teddy",
    },
    {
      id: crypto.randomUUID(),
      image: "/msvyne.jpg",
      username: "ms.vyne",
      followedBy: "New to Instagram",
    },
  ]);
  // const [Data, setData] = useState(data);
  // axios
  //   .get(data.json)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  return (
    <aside className="right-side-homepage">
      <div className="my-account">
        <span>
          <img src="https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=Muffin" alt="avatar" />
        </span>

        <div className="account-info">
          <Link href="/profile" style={{ color: "black" }}>
            <p className="account-info-name">the_wylde</p>
          </Link>
          <p className="account-cto">Allen Brown</p>
        </div>

        <p className="switch">
          <a href="/profile">Switch</a>
        </p>
      </div>

      <div className="suggestion">
        <p className="suggest">Suggestions For You</p>

        <p className="suggest-cto">
          <a href="/profile">see all</a>
        </p>
      </div>

      {suggestion.map((list) => (
        <div key={list.id} className="other-account">
          <span>
            <img src={list.image} alt="avatar" />
          </span>

          <div className="other-info">
            <p>{list.username}</p>
            <p className="other-cto">{list.followedBy}</p>
          </div>

          <p className="follow">
            <a href="#">Follow</a>
          </p>
        </div>
      ))}

      <div className="aside-footer">
        {/* <ul className="aside-footer-list">
          <li className="aside-footer-list-item">
            <a href="#">About •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">Help •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">Press •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">API •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">Jobs •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">Privacy •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">Terms •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">Locations •</a>
          </li>
          <li className="aside-footer-list-item">
            <a href="#">Language</a>
          </li>
        </ul> */}

        <div className="aside-footer-title">
          <p>© {currentYear} INSTAGRAM FROM META</p>
        </div>
      </div>
    </aside>
  );
}
