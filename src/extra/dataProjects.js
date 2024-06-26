import { BiLogoFirebase } from "react-icons/bi";
import expoIcon from "../img/expo-icon.png";

import {
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaLocationArrow,
} from "react-icons/fa";
import { SiGoogleanalytics, SiPusher, SiSentry } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { GrAppleAppStore, GrSwift } from "react-icons/gr";

import ripitVideo from "../videos/reactNative/ripitVideo.mp4";
import activeVideo from "../videos/reactNative/activeVideo.mp4";
import ieaVideo from "../videos/reactNative/ieaVideo.mp4";

import chatVideo from "../videos/swift/chatVideo.mp4";
import spotifyVideo from "../videos/swift/spotifyVideo.mp4";
import weatherVideo from "../videos/swift/weatherVideo.mp4";

const linkGithubRipit = "https://github.com/KevinDev90/ripit";
const linkAndroidRipit = "";

const linkAndroidActive =
  "https://play.google.com/store/apps/details?id=com.denspalm.activemarket&pcampaignid=web_share";
const linkIOSActive = "";

const linkAndroidIEA =
  "https://play.google.com/store/apps/details?id=com.itoeste.iea&pcampaignid=web_share";
const linkIOSIEA = "";

const linkGithubChatApp = "https://github.com/KevinDev90/ChatAppSwift.git";
const linkGithubSpotify = "https://github.com/KevinDev90/SpotifyAppSwift.git";
const linkGithubWeatherApp =
  "https://github.com/KevinDev90/WeatherAppSwift.git";

export const videosReactNativeProjects = [
  {
    title: "RIPIT",
    resource: ripitVideo,
    linkGithub: linkGithubRipit,
    linkAndroid: linkAndroidRipit,
    linkIOS: "",
    techologies: [
      {
        name: "Expo",
        icon: (
          <img
            src={expoIcon}
            alt="Expo Icon"
            width="100%"
            height="100%"
            style={{ padding: "4px 1px" }}
          />
        ),
        background: "transparent",
      },
      {
        name: "Firebase",
        icon: <BiLogoFirebase color="#f8ba28" size={25} />,
        background: "#34bcf8",
      },
      {
        name: "OpenAI API",
        icon: <RiOpenaiFill color="#fff" size={24} />,
        background: "#0cab83",
      },
    ],
  },
  {
    title: "Active Market",
    resource: activeVideo,
    linkGithub: "",
    linkAndroid: linkAndroidActive,
    linkIOS: linkIOSActive,
    techologies: [
      {
        name: "Expo",
        icon: (
          <img
            src={expoIcon}
            alt="Expo Icon"
            width="100%"
            height="100%"
            style={{ padding: "4px 1px" }}
          />
        ),
        background: "transparent",
      },
      {
        name: "Pusher",
        icon: <SiPusher color="#000" size={25} />,
        background: "transparent",
      },
      {
        name: "Instagram API",
        icon: <FaInstagram color="#fff" size={20} />,
        background: "#fb0c5c",
      },
      {
        name: "TikTok API",
        icon: <FaTiktok color="#fff" size={18} />,
        background: "#000",
      },
    ],
  },
  {
    title: "IEA AutoGestión",
    resource: ieaVideo,
    linkGithub: "",
    linkAndroid: linkAndroidIEA,
    linkIOS: linkIOSIEA,
    techologies: [
      {
        name: "Expo",
        icon: (
          <img
            src={expoIcon}
            alt="Expo Icon"
            width="100%"
            height="100%"
            style={{ padding: "4px 1px" }}
          />
        ),
        background: "transparent",
      },
      {
        name: "Sentry",
        icon: <SiSentry color="#fa2c25" size={25} />,
        background: "transparent",
      },
      {
        name: "Google Analitycs",
        icon: <SiGoogleanalytics color="#fbab04" size={25} />,
        background: "transparent",
      },
    ],
  },
];

export const videosSwiftProjects = [
  {
    title: "Chat App",
    resource: chatVideo,
    linkGithub: linkGithubChatApp,
    linkAndroid: "",
    linkIOS: "",
    techologies: [
      {
        name: "SwiftUI",
        icon: <GrSwift color="#000" size={22} />,
        background: "#05b0eb",
      },
      {
        name: "Firebase",
        icon: <BiLogoFirebase color="#f8ba28" size={25} />,
        background: "#34bcf8",
      },
    ],
  },
  {
    title: "Spotify",
    resource: spotifyVideo,
    linkGithub: linkGithubSpotify,
    linkAndroid: "",
    linkIOS: "",
    techologies: [
      {
        name: "UIKit",
        icon: <GrAppleAppStore color="#fff" size={22} />,
        background: "#05b0eb",
      },
      {
        name: "Spotify API",
        icon: <FaSpotify color="#1fd262" size={25} />,
        background: "#000",
      },
    ],
  },
  {
    title: "Weather App",
    resource: weatherVideo,
    linkGithub: linkGithubWeatherApp,
    linkAndroid: "",
    linkIOS: "",
    techologies: [
      {
        name: "SwiftUI",
        icon: <GrSwift color="#000" size={22} />,
        background: "#05b0eb",
      },
      {
        name: "CoreLocation",
        icon: <FaLocationArrow color="#fff" size={18} />,
        background: "#0a83f8",
      },
    ],
  },
];
