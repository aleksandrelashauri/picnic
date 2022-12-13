import React from "react";
import { FlexBox, Slide, Heading, Image } from "spectacle";
const Thanks = () => {
  return (
    <>
      <Slide>
        <FlexBox>
          <Heading>Thank you for your time </Heading>
        </FlexBox>
        <FlexBox justifyContent={"space-evenly"}>
          <Image
            width={"600px"}
            src="https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif"
          />
        </FlexBox>
      </Slide>
    </>
  );
};
export default Thanks;
