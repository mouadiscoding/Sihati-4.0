import "./App.css";
import "./animation.css";
import Landing from "./Landing";
import React, { useState, useEffect } from "react";
import axios from "axios";
import mehdi from "./mehdi.jpeg";
import healthy from "./Healthy.png";
import sick from "./Sick.png";
import notification from "./Notification.png";
import logo from "./sihati.png";

export default function ResultsPage() {
  const [results, setResults] = useState("");
  const [source, setSource] = useState(healthy);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getprediction", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => setResults(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  // useEffect(() => {
  //   // Your condition and setSource logic
  //   setSource(`${results.prediction == 1 ? healthy : sick}`);
  // }, [results.prediction]);

  // console.log(results.temperature);
  return (
    <>
      <div
        style={{
          width: 1512,
          height: 982,
          position: "relative",
          background: "white",
        }}
      >
        <div
          className="sideBar"
          style={{
            width: 502.79,
            height: 755.18,
            left: 51.55,
            top: 171.49,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 502.79,
              height: 755.18,
              left: 0,
              top: 0,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 16.799999237060547px rgba(0, 0, 0, 0.15)",
              borderRadius: 26,
            }}
          />
          <div
            style={{
              width: 357.2,
              height: 357.2,
              left: 72.8,
              top: 99.15,
              position: "absolute",
            }}
          >
            <div
              className=".picture-container"
              style={{
                width: 357.2,
                height: 357.2,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <img
                className=".picture-container"
                style={{
                  width: 357.2,
                  height: 357.2,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
                // src={sick}
                // src={source}
                src={`${results.prediction == 1 ? healthy : sick}`}
              />
            </div>
            {/* hhhhhhhhhhhhhhhhhhh */}
          </div>
          <div
            style={{
              left: 89.62,
              top: 472.63,
              position: "absolute",
              color: "black",
              fontSize: 26,
              textAlign : "center",

              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            {`${
              results.prediction == 1
                ? "Everything is stable"
                : "You need to schedule an appointement with your doctor"
            }`}
          </div>
          <div
            className="run-a-checkeup"
            style={{
              width: 226.28,
              height: 45.98,
              left: 138.26,
              top: 562.69,
              position: "absolute",
              background: "#5040B0",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                left: 35,
                top: 10,
                position: "absolute",
                color: "white",
                fontSize: 20,

                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Run a checkup
            </div>
          </div>
        </div>
        <div
          className="profileInNav"
          style={{
            width: 274.01,
            height: 70.79,
            left: 1194.29,
            top: 52.94,
            position: "absolute",
          }}
        >
          <div
            style={{
              left: 54.04,
              top: 22.41,
              position: "absolute",
              color: "black",
              fontSize: 20,

              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Hello, Mehdi
          </div>
          <img
            style={{
              width: 30.63,
              height: 30.63,
              left: 0,
              top: 18.6,
              position: "absolute",
            }}
            src={notification}
          />
          <div
            style={{
              width: 70.79,
              height: 70.79,
              left: 203.23,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 70.79,
                height: 70.79,
                left: 0,
                top: 0,
                position: "absolute",
                // background: "#D9D9D9",
                borderRadius: 10,
              }}
            />
            <img
              style={{
                width: 88.29,
                height: 88.05,
                left: -8.75,
                top: -6.54,
                position: "absolute",
                borderRadius: 20,
              }}
              src={mehdi}
            />
          </div>
        </div>
        <div
          className="logo"
          style={{
            width: 192.61,
            height: 63.06,
            left: 50.26,
            top: 48.07,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 189.94,
              height: 53.42,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <img
              src={logo}
              style={{
                width: 189.94,
                height: 53.42,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              width: 191.33,
              height: 2.07,
              left: 1.29,
              top: 60.99,
              position: "absolute",
              background: "rgba(40.13, 35.82, 87.54, 0.74)",
              boxShadow:
                "15.800000190734863px 15.800000190734863px 15.800000190734863px ",
              borderRadius: 9999,
              filter: "blur(15.80px)",
            }}
          />
        </div>
        <div
          style={{
            width: 39.13,
            height: 32.47,
            left: 214.31,
            top: 78.67,
            position: "absolute",
            color: "#FF5C5C",
            fontSize: 24,

            fontWeight: "800",
            wordWrap: "break-word",
          }}
        >
          4.0
        </div>
        <div
          style={{
            width: 865.29,
            height: 755.18,
            left: 610.91,
            top: 171.49,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 865.29,
              height: 755.18,
              left: 0,
              top: 0,
              position: "absolute",
              background: "white",
              boxShadow: "0px 4px 16.799999237060547px rgba(0, 0, 0, 0.15)",
              borderRadius: 26,
            }}
          />
          <div
            style={{
              width: 211.56,
              height: 246.41,
              left: 132.46,
              top: 98.24,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 211.31,
                height: 179.38,
                left: 0.16,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 22.08,
                  height: 170.13,
                  left: 0,
                  top: 9.25,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 132.03,
                  left: 31.54,
                  top: 47.35,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 148.01,
                  left: 63.08,
                  top: 31.37,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 94.62,
                  top: 0,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 153.86,
                  left: 126.16,
                  top: 25.52,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 166.33,
                  left: 157.7,
                  top: 13.05,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 189.24,
                  top: 0,
                  position: "absolute",
                  background: "#FF5C5C",
                  borderRadius: 11,
                }}
              />
            </div>
            <div
              style={{
                width: 104.46,
                height: 21.11,
                left: -0,
                top: 225.3,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 16,

                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Temperature
            </div>
            <div
              style={{
                width: 37.78,
                height: 21.11,
                left: 173.78,
                top: 225.3,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 16,

                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              {results.temperature}°C
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 6.2,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,

                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
            <div
              style={{
                width: 13.34,
                height: 17.78,
                left: 35.52,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,

                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              M
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 69.28,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,

                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 15.56,
                height: 17.78,
                left: 97.49,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,

                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              W
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 132.36,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,

                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 163.9,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,

                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              F
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 195.44,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,

                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
          </div>
          <div
            style={{
              width: 211.81,
              height: 246.41,
              left: 526.98,
              top: 98.24,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 211.31,
                height: 179.38,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 22.08,
                  height: 170.13,
                  left: -0,
                  top: 9.25,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 132.03,
                  left: 31.54,
                  top: 47.35,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 148.01,
                  left: 63.08,
                  top: 31.37,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 94.62,
                  top: 0,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 153.86,
                  left: 126.16,
                  top: 25.52,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 166.33,
                  left: 157.7,
                  top: 13.05,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 189.24,
                  top: 0,
                  position: "absolute",
                  background: "#FF5C5C",
                  borderRadius: 11,
                }}
              />
            </div>
            <div
              style={{
                width: 111.13,
                height: 21.11,
                left: -0,
                top: 225.3,
                position: "absolute",
                color: "black",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Cardiac Freq.
            </div>
            <div
              style={{
                width: 52.23,
                height: 21.11,
                left: 159.58,
                top: 225.3,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              81BPM
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 6.04,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
            <div
              style={{
                width: 13.34,
                height: 17.78,
                left: 35.35,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              M
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 69.12,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 15.56,
                height: 17.78,
                left: 97.32,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              W
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 132.2,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 163.73,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              F
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 195.27,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
          </div>
          <div
            style={{
              width: 217.03,
              height: 246.41,
              left: 515.22,
              top: 410.53,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 211.31,
                height: 179.38,
                left: 5.72,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 22.08,
                  height: 170.13,
                  left: 0,
                  top: 9.25,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 132.03,
                  left: 31.54,
                  top: 47.35,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 148.01,
                  left: 63.08,
                  top: 31.37,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 94.62,
                  top: 0,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 153.86,
                  left: 126.16,
                  top: 25.52,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 166.33,
                  left: 157.7,
                  top: 13.05,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 189.24,
                  top: 0,
                  position: "absolute",
                  background: "#FF5C5C",
                  borderRadius: 11,
                }}
              />
            </div>
            <div
              style={{
                width: 120.02,
                height: 21.11,
                left: -0,
                top: 225.3,
                position: "absolute",
                color: "black",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Blood Pressure
            </div>
            <div
              style={{
                width: 80.01,
                height: 21.11,
                left: 133.69,
                top: 225.3,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              85 mmHG
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 11.76,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
            <div
              style={{
                width: 13.34,
                height: 17.78,
                left: 41.08,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              M
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 74.84,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 15.56,
                height: 17.78,
                left: 103.04,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              W
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 137.92,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 169.46,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              F
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 201,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
          </div>
          <div
            style={{
              width: 211.31,
              height: 246.41,
              left: 126.5,
              top: 410.53,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 211.31,
                height: 179.38,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 22.08,
                  height: 170.13,
                  left: -0,
                  top: 9.25,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 132.03,
                  left: 31.54,
                  top: 47.35,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 148.01,
                  left: 63.08,
                  top: 31.37,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 94.62,
                  top: 0,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 153.86,
                  left: 126.16,
                  top: 25.52,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 166.33,
                  left: 157.7,
                  top: 13.05,
                  position: "absolute",
                  background: "#5040B0",
                  borderRadius: 11,
                }}
              />
              <div
                style={{
                  width: 22.08,
                  height: 179.38,
                  left: 189.24,
                  top: 0,
                  position: "absolute",
                  background: "#FF5C5C",
                  borderRadius: 11,
                }}
              />
            </div>
            <div
              style={{
                width: 86.68,
                height: 21.11,
                left: -0,
                top: 225.3,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Time Slept
            </div>
            <div
              style={{
                width: 57.79,
                height: 21.11,
                left: 153.53,
                top: 225.3,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              50mins
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 6.04,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
            <div
              style={{
                width: 13.34,
                height: 17.78,
                left: 35.35,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              M
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 69.12,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 15.56,
                height: 17.78,
                left: 97.32,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              W
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 132.2,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              T
            </div>
            <div
              style={{
                width: 8.89,
                height: 17.78,
                left: 163.73,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              F
            </div>
            <div
              style={{
                width: 10,
                height: 17.78,
                left: 195.27,
                top: 189.58,
                position: "absolute",
                textAlign: "center",
                color: "#9F9F9F",
                fontSize: 14,
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
          </div>
        </div>
        <div
          className="navBar"
          style={{
            width: 498.42,
            height: 29,
            left: 458.94,
            top: 69.36,
            position: "absolute",
          }}
        >
          <div
            style={{
              left: 0,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 24,
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Appointements
          </div>
          <div
            style={{
              left: 241.82,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 24,
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Doctors
          </div>
          <div
            style={{
              left: 407.42,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 24,
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Settings
          </div>
        </div>
      </div>
    </>
  );
}
