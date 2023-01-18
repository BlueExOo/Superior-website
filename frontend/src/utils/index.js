/* Importing all the images from the assets folder. */
import LogoV2 from "../assets/logo-v2.png";
import HeroImage from "../assets/hero-img.png";
import BGFeatures_1 from "../assets/features/feature1_bg.png";
import Features_1 from "../assets/features/feature1.png";
import BGFeatures_2 from "../assets/features/feature2_bg.png";
import Features_2 from "../assets/features/feature2.png";
import BGFeatures_3 from "../assets/features/feature3_bg.png";
import Features_3 from "../assets/features/feature3.png";
import screenShots_1 from "../assets/screenshots/Screenshot_1.jpg";
import screenShots_2 from "../assets/screenshots/Screenshot_2.jpg";
import screenShots_3 from "../assets/screenshots/Screenshot_3.jpg";
import screenShots_4 from "../assets/screenshots/Screenshot_4.jpg";
import screenShots_5 from "../assets/screenshots/Screenshot_5.jpg";
import screenShots_6 from "../assets/screenshots/Screenshot_6.jpg";
import screenShots_7 from "../assets/screenshots/Screenshot_7.jpg";
import screenShots_8 from "../assets/screenshots/Screenshot_8.jpg";
import screenShots_9 from "../assets/screenshots/Screenshot_9.jpg";
import screenShots_10 from "../assets/screenshots/Screenshot_10.jpg";
import screenShots_11 from "../assets/screenshots/Screenshot_11.jpg";
import screenShots_12 from "../assets/screenshots/Screenshot_12.jpg";
import screenShots_13 from "../assets/screenshots/Screenshot_13.jpg";
import screenShots_14 from "../assets/screenshots/Screenshot_14.jpg";
import screenShots_15 from "../assets/screenshots/Screenshot_15.jpg";

import team_1 from "../assets/team/team-1.jpg";
import team_2 from "../assets/team/team-2.jpg";
import team_3 from "../assets/team/team-3.jpg";
import team_4 from "../assets/team/team-4.png";
import team_5 from "../assets/team/team-5.jpg";

import { TbBrandGithub, TbBrandTelegram } from "react-icons/tb";

import { FaGithub, FaTelegram } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export const navigationData = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Screenshots",
    href: "#screenshots",
  },
  {
    name: "Core Team",
    href: "#core-team",
  },
];

export const heroData = {
  title: "SuperiorOS",
  subtitle:
    "Superior OS is a Custom ROM based on AOSP, with a bunch of special features. The main aim of this ROM is to deliver lightning fast experience with stability, security and good battery backup",
  btnText: "Donate",
  image: HeroImage,
};

export const featuresData = {
  title: "Features",
  subtitle: "Features are available",
  list: [
    {
      bgImage: BGFeatures_1,
      image: Features_1,
      title: "Stable",
      description:
        "With deep, empirically-proven optimizations throughout the system, SuperiorOS is faster and smoother than other Android distributions.",
      buttonText: "Learn More",
      delay: "400",
    },
    {
      bgImage: BGFeatures_2,
      image: Features_2,
      title: "Highly Customizable",
      description:
        "We have carefully hand-picked features which helps you in your daily chores. Customize your device as you like.",
      buttonText: "Learn More",
      delay: "700",
    },
    {
      bgImage: BGFeatures_3,
      image: Features_3,
      title: "Secure",
      description:
        "SuperiorOS helps keep your data private with camera and microphone indicators, internet & sensor permissions, and microG support.",
      buttonText: "Learn More",
      delay: "1000",
    },
  ],
};

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

export const teamData = [
  {
    image: team_1,
    name: "Sipun Ku Mahanta",
    title: "Founder & Developer",
    socialIcons: [
      { link: "https://github.com/Darkstar085", icon: <FaGithub /> },
      { link: "t.me/Darkstar085", icon: <FaTelegram /> },
    ],
  },
  {
    image: team_2,
    name: "Jayant Deshmukh",
    title: "Lead Developer",
    socialIcons: [
      { link: "https://github.com/Jayant-Deshmukh", icon: <FaGithub /> },
      { link: "https://t.me/JD1811", icon: <FaTelegram /> },
    ],
  },
  {
    image: team_3,
    name: "Nipin NA",
    title: "Developer",
    socialIcons: [
      { link: "https://github.com/Joker-V2", icon: <FaGithub /> },
      { link: "https://t.me/Joker_V2_0", icon: <FaTelegram /> },
    ],
  },
  {
    image: team_4,
    name: "Ahmed Hassan",
    title: "Web Developer",
    socialIcons: [
      { link: "https://github.com/BlueExOo", icon: <FaGithub /> },
      { link: "https://t.me/BlueExOo", icon: <FaTelegram /> },
    ],
  },
  {
    image: team_5,
    name: "Adnan Faysal",
    title: "Graphics Designer",
    socialIcons: [
      { link: "https://github.com/adnanfays", icon: <FaGithub /> },
      { link: "https://t.me/adnan_fays", icon: <FaTelegram /> },
    ],
  },
];

export const socialIcons = [
  { name: <TbBrandGithub />, link: "https://github.com/SuperiorOS" },
  { name: <TbBrandTelegram />, link: "https://t.me/superioros" },
];

export const footerData = {
  logo: LogoV2,
  address: "SuperiorOS, India",
  email: "superioros123@gmail.com",
  list1: [
    {
      name: "Maintainer",
      href: "#",
    },
    {
      name: "Gerrit",
      href: "#",
    },
    {
      name: "Crowdin",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
  ],
  list3: [
    {
      name: "GitHub",
      href: "#",
    },
    {
      name: "Telegram",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaTelegram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "© SuperiorOS Project, 2023. All rights reserved.",
  icon: <BsChatDotsFill />,
};

export const devicesData = {
  devices: [
    {
      image: "https://www.duchuymobile.com/images/detailed/11/xanh_o72r-z3.jpg",
      deviceName: "Redmi Note 5 Pro",
      deviceCodeName: "Whyred",
      maintainerName: "Sipun Ku Mahanta",
      downloadLink:
        "https://github.com/SuperiorOS-Devices/official_devices/releases/download/1672155405.2618482/SuperiorOS-Thirteen-whyred-RELEASE-20221227-1514.zip",
    },
    {
      image:
        "https://camo.githubusercontent.com/54c88e7d15bae0952face31e67c8aa737f02128090dccb017a964245352a880c/68747470733a2f2f6930312e6170706d6966696c652e636f6d2f76312f4d495f31383435354233453444413730363232364346373533354135384538373546303236372f706d735f313535313038373532302e33343535383033302e6a7067",
      deviceName: "Redmi Note 7 Pro",
      deviceCodeName: "violet",
      maintainerName: "Nipin NA (Joker-V2)",
      downloadLink:
        "https://github.com/SuperiorOS-Devices/official_devices/releases/download/1673115863.9190633/SuperiorOS-Thirteen-violet-RELEASE-20230107-1713.zip",
    },
    {
      image:
        "https://phoneslab.net/egypt/wp-content/uploads/sites/16/2022/01/Xiaomi-Redmi-Note-11.jpg",
      deviceName: "Redmi Note 11",
      deviceCodeName: "spes",
      maintainerName: "Enweazu Daniel",
      downloadLink:
        "https://github.com/SuperiorOS-Devices/official_devices/releases/download/1673140170.1088827/SuperiorOS-Thirteen-spes-RELEASE-20230108-0040.zip",
    },
  ],
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}