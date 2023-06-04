import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { isMobile } from "react-device-detect";
import "../styles/all.css";

const BookContainer = ({
  language,
  dataBook,
  translateBook,
  setTranslateBook,
  widthScreen,
  allProyects,
  indexes,
  pointerEvent,
  setPointerEvent,
  translate,
  functionTranslateFrontPage,
  functionTranslateBackPage,
  functionPageIndex,
  backToIndex,
  indexPage,
  positionPage,
  setPositionPage,
  index,
  openNav,
  setOpenNav,
}) => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event, i) => {
    setTouchEndX(event.changedTouches[0].clientX);

    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 0) {
      onePageLeft(i);
    } else if (swipeDistance < 0) {
      onePageRight(i);
    }
  };
  const onePageRight = (i) => {
    indexPage(i);

    setPositionPage(i + 1);

    if (widthScreen > 575) {
      if (i === 0) {
        setTranslateBook(`50%`);
        setOpenNav(true);
      }

      if (i === dataBook.length - 1) {
        setTranslateBook(`100%`);
      }
    } else {
      if (i === 0) {
        setTranslateBook(`calc(47vw - 50%)`);
        setOpenNav(true);
      }
      if (i === dataBook.length - 1) {
        setTranslateBook(`calc(72.5vw - 50%)`);
      }
    }

    setPointerEvent("none");
    setTimeout(() => {
      functionTranslateFrontPage(i);
    }, 200);

    setTimeout(() => {
      setPointerEvent("all");
    }, 700);
  };
  const onePageLeft = (i) => {
    indexPage(i);
    setPositionPage(i);

    if (widthScreen > 575) {
      if (i === 0) {
        setTranslateBook(`0%`);
      }
      if (i === dataBook.length - 1) {
        setTranslateBook(`50%`);
      }
    } else {
      if (i === 0) {
        setTranslateBook(`0px`);
        setOpenNav(false);
      }
      if (i === dataBook.length - 1) {
        setTranslateBook(`calc(47vw - 50%)`);
      }
    }
    setPointerEvent("none");
    setTimeout(() => {
      functionTranslateBackPage(i);
    }, 200);
    setTimeout(() => {
      setPointerEvent("all");
    }, 700);
  };
  const arrayInclude = [2, 4];
  const proyectDisplay = (i) => {
    if (i > 3 && i < dataBook.length - 1) {
      return true;
    } else {
      return false;
    }
  };
  const paddingTopDisplay = (i) => {
    if (i === 3 || i > 4) {
      return true;
    } else {
      return false;
    }
  };

  const indexProyects = (i, min) => {
    if (i > min && i < dataBook.length - 1) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div
      style={{
        transform: `translateX( ${translateBook}`,
      }}
      className="book-content "
    >
      {dataBook.map((element, i) => (
        <div
          style={{
            zIndex: indexes[i],
            transform: `rotateY( ${translate[i]}deg`,
          }}
          className="book"
        >
          <div
            onTouchStart={(e) => {
              handleTouchStart(e);
            }}
            onTouchEnd={(e) => {
              handleTouchEnd(e, i);
            }}
            onClick={(e) => {
              if (!isMobile) {
                onePageRight(i);
              }
            }}
            className={i === 0 ? "face-front portada" : "face-front"}
            style={{ pointerEvents: pointerEvent }}
          >
            <div className={paddingTopDisplay(i) ? "pt-0" : "pt-3"}>
              {i === 1 && (
                <div className="book-title-container ">
                  <h5 className="text-center mt-3 sub-title-size letter-book-title">
                    <i>{element.subtitleFront}</i>
                  </h5>
                  <h2 className="text-center old-letter red mt-3 title-size">
                    {element.titleFront}
                  </h2>
                </div>
              )}

              {arrayInclude.includes(i) && (
                <div>
                  <b>
                    <h2 className="letter-title-book title-size text-center mb-3">
                      {element.titleFront}
                    </h2>
                  </b>
                  <ul className="list-style-none p-0 d-flex flex-column align-items-center ">
                    {i === 2 &&
                      index.map((element, index) => (
                        <li
                          onTouchEnd={(e) => {
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            if (index === 0) {
                              functionPageIndex(4, 2);
                              setPositionPage(4);
                            } else if (index === 1) {
                              functionPageIndex(2, 2);
                              setPositionPage(3);
                            }
                          }}
                          className="mb-2 proyects letter-title-book"
                        >
                          {index == 2 ? (
                            <a
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              onTouchEnd={(e) => {
                                e.stopPropagation();
                              }}
                              className="contact-link "
                              href="mailto:tefans12@gmail.com"
                            >
                              {element}
                            </a>
                          ) : (
                            element
                          )}
                        </li>
                      ))}
                    {i === 4 &&
                      allProyects.map((element, index) => (
                        <li
                          onTouchEnd={(e) => {
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            functionPageIndex((index + 1) * 2, 4);

                            setPositionPage(index + 5);
                          }}
                          className="mb-2 proyects  letter-title-book "
                        >
                          {element.proyect}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              <div>
                <p className="letter-body-size text-description">
                  {element.descriptionProyectFrontPage}
                </p>
              </div>
              <div className="number-page">{element.pageFrontNumber}</div>
            </div>
          </div>
          <div
            onTouchStart={(e) => {
              handleTouchStart(e);
            }}
            onTouchEnd={(e) => {
              handleTouchEnd(e, i);
            }}
            onClick={(e) => {
              if (!isMobile) {
                onePageLeft(i);
              }
            }}
            className={
              i === dataBook.length - 1
                ? "face-back portada-back "
                : "face-back "
            }
            style={{ pointerEvents: pointerEvent }}
          >
            <div className="pt-3">
              {i === 2 && (
                <div className="d-flex flex-column align-items-center ">
                  <b>
                    <h2 className="title-size letter-title-book">
                      {element.titleBack}
                    </h2>
                  </b>
                  <img className="img-me mt-3" src={element.url} alt="me" />
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                    }}
                    className="wooden-button wooden-button-cv  mt-3 letter-title-book"
                  >
                    CV
                  </div>
                </div>
              )}

              {proyectDisplay(i) && (
                <div className="d-flex flex-column align-items-center ">
                  <b>
                    <h2 className="letter-title-book title-size  text-center">
                      {element.titleBack}
                    </h2>
                  </b>
                  <div onClick={(e) => {}} className="img-proyects-container">
                    <a
                      className="links-book letter-title-book"
                      target="blank"
                      href={element.link}
                    >
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        onTouchEnd={(e) => {
                          e.stopPropagation();
                        }}
                        className=" img-proyects"
                        src={element.url}
                        alt={element.titleBack}
                      />
                    </a>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                    }}
                    className="d-flex  mt-3"
                  >
                    <div className="wooden-button wooden-button-cv me-2">
                      <a
                        className="links-book"
                        target="blank"
                        href={element.github}
                      >
                        <FontAwesomeIcon
                          className="icon-footer icon-git-book  "
                          icon={faGithub}
                        />
                      </a>
                    </div>

                    <div className="wooden-button wooden-button-link ">
                      <a
                        className="links-book letter-title-book"
                        target="blank"
                        href={element.link}
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className=" d-flex  container-bottom">
                {indexProyects(i, 1) && (
                  <div
                    style={{ pointerEvents: pointerEvent }}
                    className="back-to-index letter-title-book"
                    onClick={(e) => {
                      backToIndex(i * 2, -1);
                      setPositionPage(2);
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {language === "spanish" ? "Índice" : "Index"}
                  </div>
                )}
                {indexProyects(i, 3) && (
                  <div
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      backToIndex(i * 2, -3);
                      setPositionPage(4);
                    }}
                    className="back-to-proyects  letter-title-book"
                  >
                    {language === "spanish" ? "Proyectos" : "Proyects"}
                  </div>
                )}
              </div>
              <div className="number-page ">{element.pageBackNumber}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookContainer;
