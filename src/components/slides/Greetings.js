import React from "react";
import {
  FlexBox,
  Slide,
  Text,
  Appear,
  Heading,
  Image,
} from "spectacle";
const Greetings = () => {
  return (
    <>
      <Slide>
        <FlexBox>
          {" "}
          <Image
            width={"200px"}
            src="data:image/png;base64,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"
          />
          <Heading>Hello</Heading>
        </FlexBox>

        <Appear>
          <Text>I am Aleksandre</Text>
        </Appear>
        <Appear>
          <FlexBox>
            {" "}
            <Text>
            and I want to show you some analysis of data that is based on the response to a question 
            </Text>
            <Image
              src="http://cdn.onlinewebfonts.com/svg/img_569476.png"
              width={"200px"}
            />
          </FlexBox>
        </Appear>
        <Appear>
          <Text>
            {" "}
            You open ur phone and have a notif badge on instagram, facebook,
            snapchat, and linkedin...which do you click first?{" "}
          </Text>
          <FlexBox alignItems={"stretch"} justifyContent={"space-evenly"}>
            <Image
              width={"60px"}
              borderRadius={"10px"}
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/facebook-256.png"
            />
            <Image
              width={"60px"}
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/instagram-256.png"
            />
            <Image
              width={"60px"}
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/snapchat-2-512.png"
            />
            <Image
              width={"60px"}
              src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-15-256.png"
            />
          </FlexBox>
        </Appear>
      </Slide>
    </>
  );
};
export default Greetings;
