import React from "react";
import './scrollingHello.css';

function ScrollingHello() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      ></link>

      <div id="scrollingHello" className="content justify-center inline-block">
        <div className="content__container">

          <ul className="content__container__list">
            <li className="content__container__list__item">Hello world !</li>
            <li className="content__container__list__item">Hello visitor !</li>
            <li className="content__container__list__item">Hello Abdullah !</li>
            <li className="content__container__list__item">Hi Mom !</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ScrollingHello;
