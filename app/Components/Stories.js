"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Stories() {
  const [stories, setStories] = useState([
    {
      id: crypto.randomUUID(),
      image: "/burna.jpg",
      username: "burnaboygram",
      link: "/",
    },
    {
      id: crypto.randomUUID(),
      image: "/272936185_5717041594985591_5214662175918471705_n.jpg",
      username: "teknomiles",
      link: "/",
    },
    {
      id: crypto.randomUUID(),
      image: "/omahlay.jpg",
      username: "omah_lay",
      link: "/",
    },
    {
      id: crypto.randomUUID(),
      image: "/rema.jpg",
      username: "heisrema",
      link: "/",
    },
    {
      id: crypto.randomUUID(),
      image: "/sydney.jpg",
      username: "sydneytalker",
      link: "/",
    },
    {
      id: crypto.randomUUID(),
      image: "/fireboy.jpg",
      username: "fireboydml",
      link: "/",
    },
    {
      id: crypto.randomUUID(),
      image: "/ayrastarr.jpg",
      username: "ayrastarr",
      link: "/",
    },
    {
      id: crypto.randomUUID(),
      image: "/jazzy.jpg",
      username: "donjazzy",
      link: "/",
    },
  ]);
  const allStories = useRef(null);
  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setWidth(allStories.current.offsetWidth + 10);
  }, []);

  const backward = () => {
    const scrollBackward = (allStories.current.scrollLeft -= width);
    setScroll(scrollBackward);
  };

  const forward = () => {
    const scrollForward = (allStories.current.scrollLeft += width);
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

      <ul className="story-slides" ref={allStories}>
        {stories.map((story) => (
          <li key={story.id}>
            <Link href={story.link} className="slide">
              <span className="story-ring" style={{ position: "relative" }}>
                <img src={story.image} alt="profile-pic" />
              </span>
              <p>{story.username}</p>
            </Link>
          </li>
        ))}
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
