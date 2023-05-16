"use client";
import { useEffect, useState } from "react";

export default function Moremenu({ menu }) {
  const [close, setClose] = useState(true);

  useEffect(() => {
    menu(close);
  }, [close]);

  return (
    <section className="more-option-section">
      <div className="more-option-modal">
        <ul className="more-option-list">
          <li className="more-list-items important-option report">
            <a href="#">Report</a>
          </li>
          <li className="more-list-items important-option unfollow-btn">
            <a href="#">Unfollow</a>
          </li>
          <li className="more-list-items">
            <a href="#">Add to favourites</a>
          </li>
          <li className="more-list-items">
            <a href="#">Go to post</a>
          </li>
          <li className="more-list-items">
            <a href="#">Share to...</a>
          </li>
          <li className="more-list-items">
            <a href="#">Copy link</a>
          </li>
          <li className="more-list-items">
            <a href="#">Embed</a>
          </li>
          <li onClick={() => setClose(false)} className="more-list-items cancel-more-option">
            <a href="#">Cancel</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
