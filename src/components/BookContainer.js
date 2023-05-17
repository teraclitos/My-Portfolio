import React from "react";
import { useEffect, useState } from "react";
import "../styles/all.css";

const BookContainer = () => {
  let contZindex = 2;
  let customZindex = 1;

  const [indexes, setIndexes] = useState([2, 1, 0]);
  const [translateBook, setTranslateBook] = useState(0);
  const [pointerEvent, setPointerEvent] = useState("all");
  const [translate, setTranslate] = useState(0);
  const [translate1, setTranslate1] = useState(0);
  const [translate2, setTranslate2] = useState(0);

  return (
    <div
      style={{ transform: `translateX( ${translateBook}px` }}
      class="book-content "
    >
      <div
        style={{ zIndex: indexes[0], transform: `rotateY( ${translate}deg` }}
        class="book"
      >
        <div
          onClick={(e) => {
            setIndexes([2, 1, 0]);
            setTranslateBook(90);
            setPointerEvent("none");
            setTimeout(() => {
              setTranslate(-180);
            }, 200);

            setTimeout(() => {
              setPointerEvent("all");
            }, 700);
          }}
          class="face-front portada"
          style={{ pointerEvents: pointerEvent }}
        ></div>
        <div
          onClick={(e) => {
            setIndexes([2, 1, 0]);
            setTranslateBook(0);
            setPointerEvent("none");

            setTimeout(() => {
              setTranslate(0);
            }, 200);
            setTimeout(() => {
              setPointerEvent("all");
            }, 700);
          }}
          class="face-back"
          style={{ pointerEvents: pointerEvent }}
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

            setPointerEvent("none");

            setTimeout(() => {
              setTranslate1(-180);
            }, 200);
            setTimeout(() => {
              setPointerEvent("all");
            }, 700);
          }}
          class="face-front"
          style={{ pointerEvents: pointerEvent }}
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

            setPointerEvent("none");

            setTimeout(() => {
              setTranslate1(0);
            }, 200);
            setTimeout(() => {
              setPointerEvent("all");
            }, 700);
          }}
          class="face-back"
          style={{ pointerEvents: pointerEvent }}
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
            setPointerEvent("none");

            setTimeout(() => {
              setTranslate2(-180);
            }, 200);
            setTimeout(() => {
              setPointerEvent("all");
            }, 700);
          }}
          class="face-front"
          style={{ pointerEvents: pointerEvent }}
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
            setPointerEvent("none");

            setTimeout(() => {
              setTranslate2(0);
            }, 200);
            setTimeout(() => {
              setPointerEvent("all");
            }, 700);
          }}
          class="face-back portada-back"
          style={{ pointerEvents: pointerEvent }}
        ></div>
      </div>
    </div>
  );
};

export default BookContainer;
