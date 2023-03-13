"use client"
import { useEffect, useRef, useState } from "react";

export default function Stories() {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(0);
  const slides = document.querySelector(".story-slides"); 

  useEffect(() => {
    setWidth(ref.current.offsetWidth + 10);
  }, []);

    const backward = () => {
      const scrollBackward = slides.scrollLeft -= width;
      setScroll(scrollBackward)
    }

    const forward = () => {
      const scrollForward = slides.scrollLeft += width;
      setScroll(scrollForward)
    }

  return (
    <div className="story-section">
    {scroll > 0 && <button onClick={() => backward()} className="story-go-back-btn" aria-label="Go back"></button>}
    
   <ul className="story-slides" ref={ref}>
     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/burna.jpg" />
       </span>  
      <p>burnaboygram</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/saro.jpg" />
       </span>  
      <p>sarodeele</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/272936185_5717041594985591_5214662175918471705_n.jpg" />
       </span>  
      <p>teknomiles</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/jinah.jpg" />
       </span>  
      <p>__j.i.n.a.h</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/xoxo.jpg" />
       </span>  
      <p>x.o.x.o__divine</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/omahlay.jpg" />
       </span>  
      <p>omah_lay</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/rema.jpg" />
       </span>  
      <p>heisrema</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/msvyne.jpg" />
       </span>  
      <p>ms.vyne</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/sydney.jpg" />
       </span>  
      <p>sydneytalker</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/fireboy.jpg" />
       </span>  
      <p>fireboydml</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/ayrastarr.jpg" />
       </span>  
      <p>ayrastarr</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/jazzy.jpg" />
       </span>  
      <p>donjazzy</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/victony.jpg" />
       </span>  
      <p>vict0ny</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/sevenebube.jpg" />
       </span>  
      <p>sevenebube</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/davido.jpg" />
       </span>  
      <p>davido</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/nasty.jpg" />
       </span>  
      <p>nastyblaq</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/ifedioku.jpg" />
       </span>  
      <p>ifedioku</p>
     </li>

     <li className="slide">
      <span className="story-ring" style={{position:"relative"}}>
          <img src="/justrejoice.jpg" />
       </span>  
      <p>_justrejoice</p>
     </li>
   </ul>

   {scroll < 956 && <button onClick={() => forward()} className="story-next-btn" id="next" aria-label="next"></button>}
  </div> 
  )
}
