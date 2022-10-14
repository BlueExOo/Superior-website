/* Importing all the images from the assets folder. */
import Features_1 from "../assets/Features_1.svg";
import Features_2 from "../assets/Features_2.svg";
import Features_3 from "../assets/Features_3.svg";

import screenShots_1 from "../assets/Screenshot_1.jpg";
import screenShots_2 from "../assets/Screenshot_2.jpg";
import screenShots_3 from "../assets/Screenshot_3.jpg";
import screenShots_4 from "../assets/Screenshot_4.jpg";
import screenShots_5 from "../assets/Screenshot_5.jpg";
import screenShots_6 from "../assets/Screenshot_6.jpg";
import screenShots_7 from "../assets/Screenshot_7.jpg";
import screenShots_8 from "../assets/Screenshot_8.jpg";
import screenShots_9 from "../assets/Screenshot_9.jpg";
import screenShots_10 from "../assets/Screenshot_10.jpg";
import screenShots_11 from "../assets/Screenshot_11.jpg";
import screenShots_12 from "../assets/Screenshot_12.jpg";
import screenShots_13 from "../assets/Screenshot_13.jpg";
import screenShots_14 from "../assets/Screenshot_14.jpg";
import screenShots_15 from "../assets/Screenshot_15.jpg";

import team_1 from "../assets/team-1.jpg";
import team_3 from "../assets/team-3.jpg";
import team_4 from "../assets/team-4.jpg";

import { FiGithub, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

export const featuresData = [
  {
    image: Features_1,
    title: "Stable",
    description:
      "With deep, empirically-proven optimizations throughout the system, SuperiorOS is faster and smoother than other Android distributions.",
    buttonText: "Learn More",
  },
  {
    image: Features_2,
    title: "Highly Customizable",
    description:
      "We have carefully hand-picked features which helps you in your daily chores. Customize your device as you like.",
    buttonText: "Learn More",
  },
  {
    image: Features_3,
    title: "Secure",
    description:
      "SuperiorOS helps keep your data private with camera and microphone indicators, internet & sensor permissions, and microG support.",
    buttonText: "Learn More",
  },
];

export const sliderData = [
  { image: screenShots_1 },
  { image: screenShots_2 },
  { image: screenShots_3 },
  { image: screenShots_4 },
  { image: screenShots_5 },
  { image: screenShots_6 },
  { image: screenShots_7 },
  { image: screenShots_8 },
  { image: screenShots_9 },
  { image: screenShots_10 },
  { image: screenShots_11 },
  { image: screenShots_12 },
  { image: screenShots_13 },
  { image: screenShots_14 },
  { image: screenShots_15 },
];

export const teamImg = {
  team_1,
  team_3,
  team_4,
};

export const socialIcons = [
  { name: <FiGithub />, link: "https://github.com/SuperiorOS" },
  { name: <TbBrandTelegram />, link: "https://t.me/superioros" },
  { name: <FiTwitter />, link: "#" },
];
