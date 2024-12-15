import TimelineCard from "./TimelineCard";
import { EXPERIENCE } from "../utils/constants";

const Timeline = ({ type }) => {
  return (
    <div className="relative mx-auto flex flex-col space-y-8 px-6">
      <div className="line absolute inset-0 left-8 h-full w-2 rounded-xl bg-custom-violet shadow-md md:left-0 md:right-0 md:mx-auto" />
      {type == "work"
        ? EXPERIENCE.work.map(
            (
              { logo, link, position, duration, organization, location },
              index,
            ) => (
              <TimelineCard
                logo={logo}
                link={link}
                duration={duration}
                degree={position}
                institution={organization}
                location={location}
                key={index}
                index={index}
              />
            ),
          )
        : EXPERIENCE.education.map(
            (
              { logo, link, institution, duration, degree, score, location },
              index,
            ) => (
              <TimelineCard
                logo={logo}
                link={link}
                institution={institution}
                duration={duration}
                degree={degree}
                score={score}
                location={location}
                key={index}
                index={index}
              />
            ),
          )}
    </div>
  );
};

export default Timeline;
