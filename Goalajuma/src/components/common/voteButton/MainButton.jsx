import { useEffect, useState } from "react";
import { MainButtonSt, BtnContents } from "../../../styles/VotingBtnStyle";
import PercentNnumber from "./PercentNumber";
import styled from "styled-components";
import Modal from "react-modal";
import Img from "../Img";

const MainButton = ({
  value,
  number,
  clickButton,
  participant,
  choice,
  name,
  id,
  src,
  isOwner,
  active,
}) => {
  //choice 할 때

  return (
    <ButtonContainer>
      {src ? <Img src={src} /> : <></>}
      <MainButtonSt onClick={clickButton} choice={choice} id={id}>
        <BtnContents choice={choice} id={id}>
          {name}
        </BtnContents>
        <progress
          id={id}
          max="100"
          value={participant || isOwner || active === "finish" ? value : 0}
        >
          {" "}
        </progress>
      </MainButtonSt>
      {participant || isOwner || active === "finish" ? (
        <PercentNnumber value={value} number={number} choice={choice} id={id} />
      ) : (
        <></>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainButton;
