import { useRef, useState } from "react";

import InformationBasic from "./InformationBasic";

import { FaGithub, FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { videosSwiftProjects } from "../../extra/dataProjects";
import IconInfoProject from "./iconInfoProject";

const Video = ({ index, video }) => {
  const [iconoActivo, setIconoActivo] = useState(null);
  const videoRef = useRef(null);

  const handleMouseEnter = (nombreIcono) => setIconoActivo(nombreIcono);

  const handleMouseLeave = () => setIconoActivo(null);

  const openLink = (link) => window.open(link, "_blank");

  const iconsPublic = [
    {
      icon: video.linkGithub ? (
        <FaGithub size={30} onClick={() => openLink(video.linkGithub)} />
      ) : null,
      background: "transparent",
    },
    {
      icon: video.linkAndroid ? (
        <FcAndroidOs size={36} onClick={() => openLink(video.linkAndroid)} />
      ) : null,
      background: "transparent",
    },
    {
      icon: video.linkIOS ? (
        <FaApple size={28} onClick={() => openLink(video.linkIOS)} />
      ) : null,
      background: "transparent",
    },
  ];

  return (
    <div key={index} className="col-md-4 mb-4 video-container">
      <span className="title-about">{video.title}</span>
      <video
        ref={videoRef}
        src={video.resource}
        autoplay={true}
        loop={true}
        width="100%"
        height="400"
        className={`video`}
        controls
      />

      <div className="iconos-container">
        {video.technologies.map((e) => (
          <IconInfoProject
            item={{
              icon: e.icon,
              name: e.name,
              color: e.background,
            }}
            visible={!iconoActivo || iconoActivo === e.name}
            onMouseEnter={() => handleMouseEnter(e.name)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      <hr style={{ width: "190px" }} />
      <div className="iconos-container">
        {iconsPublic.map(
          (e) =>
            e.icon && (
              <IconInfoProject
                item={{
                  icon: e.icon,
                  name: e.name,
                  color: e.background,
                }}
                visible={true}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              />
            )
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <InformationBasic span="my work" h2="my projects" />

      <div className="row wow animate__animated animate__fadeInUp animate__slow">
        <div className="row">
          {videosSwiftProjects.map((video, index) => (
            <Video key={index} index={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
