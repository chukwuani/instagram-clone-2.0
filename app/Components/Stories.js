"use client";
import { useEffect, useRef, useState } from "react";

export default function Stories() {
  const story = useRef(null);
  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setWidth(story.current.offsetWidth + 10);
  }, []);

  const backward = () => {
    const scrollBackward = (story.current.scrollLeft -= width);
    setScroll(scrollBackward);
  };

  const forward = () => {
    const scrollForward = (story.current.scrollLeft += width);
    setScroll(scrollForward);
  };

  return (
    <div className="story-section">
      {scroll > 0 && (
        <button
          onClick={() => backward()}
          className="story-go-back-btn"
          aria-label="Go back"></button>
      )}

      <ul className="story-slides" ref={story}>
        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/burna.jpg" />
          </span>
          <p>burnaboygram</p>
        </li>

        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/272936185_5717041594985591_5214662175918471705_n.jpg" />
          </span>
          <p>teknomiles</p>
        </li>

        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/omahlay.jpg" />
          </span>
          <p>omah_lay</p>
        </li>

        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/rema.jpg" />
          </span>
          <p>heisrema</p>
        </li>

        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/sydney.jpg" />
          </span>
          <p>sydneytalker</p>
        </li>

        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/fireboy.jpg" />
          </span>
          <p>fireboydml</p>
        </li>

        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/ayrastarr.jpg" />
          </span>
          <p>ayrastarr</p>
        </li>

        <li className="slide">
          <span className="story-ring" style={{ position: "relative" }}>
            <img src="/jazzy.jpg" />
          </span>
          <p>donjazzy</p>
        </li>
      </ul>

      {scroll < width && (
        <button
          onClick={() => forward()}
          className="story-next-btn"
          id="next"
          aria-label="next"></button>
      )}
    </div>
  );
}
