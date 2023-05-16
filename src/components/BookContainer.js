import React from "react";
import { useEffect, useState } from "react";
import "../styles/all.css";

const BookContainer = () => {
  let contZindex = 2;
  let customZindex = 1;

  const [index, setIndex] = useState(1);
  const [translate, setTranslate] = useState(0);

  return (
    <div class="book-content">
      <div
        style={{ zIndex: index, transform: `rotateY( ${translate}deg` }}
        class="book"
      >
        <div
          onClick={(e) => {
            // setIndex(index + 20);
            setTranslate(180);
          }}
          class="face-front portada"
        ></div>
        <div
          onClick={(e) => {
            // setIndex(index + 20);
            setTranslate(0);
          }}
          class="face-back"
          id="trsf"
        >
          <h1>Title 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            laborum voluptatibus eaque repudiandae ullam necessitatibus, dolor
            ad expedita, eum praesentium vitae! Voluptate in itaque modi
            consequatur. Aliquid odit quisquam quibusdam!
          </p>
        </div>
      </div>
      <div style={{ zIndex: 0 }} class="book">
        <div class="book">
          <div class="face-front">
            <h1>Title 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              perferendis nemo blanditiis impedit aut soluta quia illum
              deserunt, vero quod ducimus placeat voluptate quidem error sequi,
              earum eos minima in!
            </p>
          </div>
          <div class="face-back">
            <h1>Title 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              laborum voluptatibus eaque repudiandae ullam necessitatibus, dolor
              ad expedita, eum praesentium vitae! Voluptate in itaque modi
              consequatur. Aliquid odit quisquam quibusdam!
            </p>
          </div>
        </div>
        <div style={{ zIndex: -1 }} class="book">
          <div class="face-front">
            <h1>Title 6</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              perferendis nemo blanditiis impedit aut soluta quia illum
              deserunt, vero quod ducimus placeat voluptate quidem error sequi,
              earum eos minima in!
            </p>
          </div>
          <div onClick={(e) => {}} class="face-back portada-back"></div>
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
