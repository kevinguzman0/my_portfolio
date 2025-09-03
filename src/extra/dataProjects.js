import { BiLogoFirebase } from "react-icons/bi";

import {
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaLocationArrow,
} from "react-icons/fa";
import { SiGoogleanalytics, SiPusher } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { GrSwift } from "react-icons/gr";
import { FaUikit } from "react-icons/fa";

import ripitVideo from "../videos/swift/ripitVideo.mp4";
import activeVideo from "../videos/swift/activeVideo.mp4";
import ieaVideo from "../videos/swift/ieaVideo.mp4";
import chatVideo from "../videos/swift/chatVideo.mp4";
import spotifyVideo from "../videos/swift/spotifyVideo.mp4";
import weatherVideo from "../videos/swift/weatherVideo.mp4";

const linkGithubChatApp = "https://github.com/KevinDev90/ChatAppSwift.git";
const linkGithubSpotify = "https://github.com/KevinDev90/SpotifyAppSwift.git";
const linkGithubWeatherApp =
  "https://github.com/KevinDev90/WeatherAppSwift.git";

export const videosSwiftProjects = [
  {
    title: "RIPIT",
    resource: ripitVideo,
    technologies: [
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
    technologies: [
      {
        name: "SwiftUI",
        icon: <GrSwift color="#000" size={22} />,
        background: "#05b0eb",
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
    technologies: [
      {
        name: "UIKit",
        icon: <FaUikit color="#000" size={22} />,
        background: "#05b0eb",
      },
      {
        name: "Google Analytics",
        icon: <SiGoogleanalytics color="#fbab04" size={25} />,
        background: "transparent",
      },
    ],
  },
  {
    title: "Chat App",
    resource: chatVideo,
    linkGithub: linkGithubChatApp,
    technologies: [
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
    technologies: [
      {
        name: "UIKit",
        icon: <FaUikit color="#000" size={22} />,
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
    technologies: [
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
