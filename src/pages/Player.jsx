import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted />
      </div>
    </Container>
  );
}
const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      top: 5px;
      z-index: 1;
      svg {
        font-size: 2.5em;
        cursor: pointer;
      }
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
