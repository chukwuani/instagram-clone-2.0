"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "../constants/Navbar";

export default function page() {
  const [likes, setLikes] = useState(5787888);
  const likeCount = likes.toLocaleString();

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isVerified, setisVerified] = useState(true);

  function like() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  }

  return (
    <>
      <Navbar active="Reels" top={true} />
      <div className="homepage">
        <div className="left-side-homepage">
          <div className="feed-post reel-post" style={{ marginTop: 28 }}>
            <div className="post-head">
              <div className="post-info">
                <span className="timeline-story" style={{ position: "relative" }}>
                  <img loading="lazy" className="profile-pic" src="/Instagram-logo.png" />
                </span>

                <div className="info-text">
                  <p className="account-name">Instagram</p>
                  {isVerified && <span className="verified-badge"></span>}
                </div>
              </div>

              <span className="more-option">
                <svg
                  aria-label="More options"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24">
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </span>
            </div>

            <div className="post-body">
              <video
                src="/rick-astley-never-gonna-give-you-up_362329.mp4"
                onDoubleClick={() => like()}
                width={500}
                height={"auto"}
                autoPlay={true}
                loop={true}
                controls></video>
            </div>

            <div className="reaction">
              <div className="left">
                <span className="like-btn" onClick={() => like()}>
                  <AnimatePresence mode="popLayout">
                    {liked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}>
                        <svg
                          aria-label="Unlike"
                          className="_ab6-"
                          color="rgb(255, 48, 64)"
                          fill="rgb(255, 48, 64)"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24">
                          <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="popLayout">
                    {!liked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}>
                        <svg
                          aria-label="Like"
                          className="_ab6-"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24">
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>

                <span className="comment-btn">
                  <svg
                    aria-label="Comment"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24">
                    <path
                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"></path>
                  </svg>
                </span>

                <span className="share-btn">
                  <svg
                    aria-label="Share Post"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24">
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"></polygon>
                  </svg>
                </span>
              </div>

              <span className="save-btn" onClick={() => setSaved(!saved)}>
                <svg
                  aria-label="Save"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24">
                  <polygon
                    fill={saved ? "000" : "none"}
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"></polygon>
                </svg>
              </span>
            </div>

            <div className="post-stats">
              <p className="like-count">{likeCount} likes</p>
              <p className="caption">
                <a href="#">Instagram </a>
                You have just been Rickrolled.💪🏼 Thank you Al Nassr fans for your support, we know
                we can count on you!🙌🏼💛💙
              </p>

              <a className="comment-count" href="#">
                View all 42,958 comments
              </a>

              <p className="post-time">3 DAYS AGO</p>
            </div>

            <div className="comment">
              <span className="emoji">
                <svg
                  aria-label="Emoji"
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24">
                  <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                </svg>
              </span>

              <form className="comment-input" action="#" method="get">
                <textarea
                  className="input-comment"
                  name="comment"
                  id="comment"
                  placeholder="Add a comment..."></textarea>
                <button className="post-btn" type="submit">
                  post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
