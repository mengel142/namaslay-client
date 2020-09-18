import React, { useState, useEffect } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import river from "../images/river.jpg";

const generateDataset = (userList) =>
  Array(userList.length)
    .fill(0)
    .map((e, i) => {
      const randUserIndex = Math.floor(Math.random() * userList.length);
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        username: userList[i].username,
        location: userList[i].location,
        current_activity: userList[i].current_activity,
      };
    });

const AsanaChart = ({ allUsersInAsana, user}) => {
  const [dataset, setDataset] = useState(generateDataset(allUsersInAsana));
  useEffect(() => {
    setDataset(generateDataset(allUsersInAsana));
  }, [allUsersInAsana]);


  const [hoveredObj, updateHovered] = useState({
    isHovered: false,
    username: "No one",
    location: "No where",
    current_activity: "Not existing",
    id: "",
  });

  return (
    <div className="river-view-container">
      <div className="river-container">
        <svg width="90%" height="90%" viewBox="0 0 100 100">
          {hoveredObj.isHovered ? (
            <p>
              {hoveredObj.username} , {hoveredObj.location}
            </p>
          ) : (
            <p></p>
          )}
          <defs>
            <clipPath id="rectView">
              <rect width="100%" height="100%" fill="black" />
            </clipPath>
          </defs>
          <image
            width="100%"
            height="100%"
            href={river}
            clip-path="url(#rectView)"
            preserveAspectRatio="none"
          ></image>
          {dataset.map(({ x, y, username, location, current_activity }, i) => (
            <>
              <defs>

                  <radialGradient
                    id="grad1"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(255,255,153)"
                      stopOpacity="1"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(0,0,153)"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <radialGradient
                    id="grad2"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(0,255,255)"
                      stopOpacity="1"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(0,0,255)"
                      stopOpacity="0"
                    />
                  </radialGradient>

              </defs>

              <circle
                onMouseEnter={(e) => {
                  updateHovered({
                    isHovered: true,
                    username,
                    location,
                    current_activity,
                    id: e.target,
                  });
                }}
                onMouseLeave={() => {
                  updateHovered({
                    isHovered: false,
                    username,
                    location,
                    current_activity,
                  });
                }}
                cx={x}
                cy={y}
                r="2.5"
                fill= {username === user.username ?"url(#grad1)":"url(#grad2)"}
              >
                <animate
                  attributeName="r"
                  values="2;2.5"
                  begin="0s"
                  dur="4s"
                  calcMode="discrete"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          ))}
        </svg>
      </div>
      <Overlay
        show={hoveredObj.isHovered}
        target={hoveredObj.id}
        placement="top"
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">
            {hoveredObj.username} {""} {hoveredObj.current_activity} {""}
            {" in "}
            {hoveredObj.location}
          </Popover.Title>
        </Popover>
      </Overlay>
    </div>
  );
};

export default AsanaChart;

const dummyUsers = [
  {
    username: "Liam",
    location: "NYC",
    current_activity: "Chilllllllllin",
  },
  {
    username: "Bobbito",
    location: "Cali",
    current_activity: "Shredding gnar",
  },
  {
    username: "Nuri",
    location: "NYC",
    current_activity: "Just vibingggg",
  },
  {
    username: "Trent",
    location: "NYC",
    current_activity: "Beep booping",
  },
];
