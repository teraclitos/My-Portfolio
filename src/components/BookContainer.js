import React from "react";
import { useEffect, useState } from "react";
import "../styles/all.css";

const BookContainer = () => {
  let contZindex = 2;
  let customZindex = 1;

  const [indexes, setIndexes] = useState([2, 1, 0]);

  const [translate, setTranslate] = useState(0);
  const [translate1, setTranslate1] = useState(0);
  const [translate2, setTranslate2] = useState(0);

  return (
    <div class="book-content">
      <div
        style={{ zIndex: indexes[0], transform: `rotateY( ${translate}deg` }}
        class="book"
      >
        <div
          onClick={(e) => {
            setIndexes([2, 1, 0]);

            setTimeout(() => {
              setTranslate(-180);
            }, 500);
          }}
          class="face-front portada"
        ></div>
        <div
          onClick={(e) => {
            setIndexes([2, 1, 0]);

            setTimeout(() => {
              setTranslate(0);
            }, 500);
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
      <div
        style={{ zIndex: indexes[1], transform: `rotateY( ${translate1}deg` }}
        class="book"
      >
        <div
          onClick={(e) => {
            setIndexes([1, 2, 0]);

            setTimeout(() => {
              setTranslate1(-180);
            }, 500);
          }}
          class="face-front"
        >
          <h1>Title 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            perferendis nemo blanditiis impedit aut soluta quia illum deserunt,
            vero quod ducimus placeat voluptate quidem error sequi, earum eos
            minima in!
          </p>
        </div>
        <div
          onClick={(e) => {
            setIndexes([1, 2, 0]);

            setTimeout(() => {
              setTranslate1(0);
            }, 500);
          }}
          class="face-back"
        >
          <h1>Title 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            laborum voluptatibus eaque repudiandae ullam necessitatibus, dolor
            ad expedita, eum praesentium vitae! Voluptate in itaque modi
            consequatur. Aliquid odit quisquam quibusdam!
          </p>
        </div>
      </div>
      <div
        style={{ zIndex: indexes[2], transform: `rotateY( ${translate2}deg` }}
        class="book"
      >
        <div
          onClick={(e) => {
            setIndexes([0, 1, 2]);

            setTimeout(() => {
              setTranslate2(-180);
            }, 500);
          }}
          class="face-front"
        >
          <h1>Title 4</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            perferendis nemo blanditiis impedit aut soluta quia illum deserunt,
            vero quod ducimus placeat voluptate quidem error sequi, earum eos
            minima in!
          </p>
        </div>
        <div
          onClick={(e) => {
            setIndexes([0, 1, 2]);

            setTimeout(() => {
              setTranslate2(0);
            }, 500);
          }}
          class="face-back portada-back"
        ></div>
      </div>
    </div>
  );
};

export default BookContainer;
