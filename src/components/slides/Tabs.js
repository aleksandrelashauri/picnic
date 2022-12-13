import * as React from "react";
import { Bar } from "react-chartjs-2";
import { FlexBox, Slide, Text, Appear, Heading, Image } from "spectacle";

export default function Analys(props) {
  const { options, tech, gender, collegeData, mobWebSum, maleFemaleSum } =
    props;
  return (
    <>
      <Slide>
        <Text padding={-2}> Mobile and Web devices</Text>
        <Bar options={options} data={tech} />
      </Slide>
      <Slide>
        <Text padding={-2}>
          {" "}
          <FlexBox>
            {" "}
            <Heading>
              we can clearly see that leader is Snapchat
              <Image
                width={"60px"}
                src="https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Trophy-256.png"
              />
            </Heading>
          </FlexBox>
          <Appear>
            <ul>
              <li>
                second place Instagram{" "}
                <Image
                  width={"50px"}
                  src="https://cdn0.iconfinder.com/data/icons/sport-balls/512/silver_medal.png"
                />
              </li>

              <li>
                Third place Facebook
                <Image
                  width={"50px"}
                  src="https://cdn0.iconfinder.com/data/icons/sport-balls/512/bronze_medal.png"
                />
              </li>
              <li>
                Fourth place Linkedin{" "}
                <Image
                  width={"50px"}
                  src="https://cdn2.iconfinder.com/data/icons/christmas-new-year-vol-2-1/512/49-bouquet-flowers-love-holiday-256.png"
                />
              </li>
            </ul>
            <Text> Research is based on {mobWebSum} answers</Text>
          </Appear>
        </Text>
      </Slide>
      <Slide>
        <Text padding={-2}>Gender</Text>
        <Bar options={options} data={gender} />
      </Slide>
      <Slide>
        <Text padding={-2}>College Data</Text>
        <Bar options={options} data={collegeData} />
      </Slide>
      <Slide>
        <Text padding={-2}>
          {" "}
          <Heading>Practically we see the same</Heading>
          <Appear>
            <ul>
              <li>
                First place Snapchat{" "}
                <Image
                  width={"60px"}
                  src="https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Trophy-256.png"
                />
              </li>
              <li>
                second place Instagram{" "}
                <Image
                  width={"50px"}
                  src="https://cdn0.iconfinder.com/data/icons/sport-balls/512/silver_medal.png"
                />
              </li>
              <li>
                Third place Facebook{" "}
                <Image
                  width={"50px"}
                  src="https://cdn0.iconfinder.com/data/icons/sport-balls/512/bronze_medal.png"
                />
              </li>
              <li>
                Fourth place Linkedin
                <Image
                  width={"50px"}
                  src="https://cdn2.iconfinder.com/data/icons/christmas-new-year-vol-2-1/512/49-bouquet-flowers-love-holiday-256.png"
                />
              </li>
            </ul>
            <Text> Research is based on {maleFemaleSum} answers</Text>
          </Appear>
        </Text>
      </Slide>
      <Slide>
        <Heading padding={-3}>Result</Heading>
        <Text>
          We can say that, people who are using Web and Mobile devices, also
          female and male, and College students, first interest in what should
          be opened first is Snapchat
        </Text>
        <Appear>
          <Text>
            <ul>
              <li>
                second place Instagram
                <Image
                  width={"50px"}
                  src="https://cdn0.iconfinder.com/data/icons/sport-balls/512/silver_medal.png"
                />
              </li>

              <li>
                Third place Facebook
                <Image
                  width={"50px"}
                  src="https://cdn0.iconfinder.com/data/icons/sport-balls/512/bronze_medal.png"
                />
              </li>
              <li>
                Fourth place Linkedin
                <Image
                  width={"50px"}
                  src="https://cdn2.iconfinder.com/data/icons/christmas-new-year-vol-2-1/512/49-bouquet-flowers-love-holiday-256.png"
                />
              </li>
            </ul>
            <Text>
              {" "}
              Research is based on {mobWebSum + maleFemaleSum} answers
            </Text>
          </Text>
        </Appear>
      </Slide>
    </>
  );
}
