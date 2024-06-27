import { SectionHeading, SectionSubHeading } from "../components";
import profilePic00 from "../assets/ProfilePic00.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="About" />
      <SectionSubHeading subHeadingText="Meet Kiran" />
      <div className="flex h-full w-full flex-col items-center justify-between gap-6 px-3 pt-10 sm:flex-row sm:items-start sm:justify-evenly sm:gap-0 sm:pt-16">
        <div className="flex items-center justify-end sm:w-2/5">
          <img
            className="h-52 w-52 overflow-hidden rounded-xl object-cover object-center shadow-md md:h-64 md:w-64"
            src={profilePic00}
            alt="Kiran Mahajan's Profile Picture"
          />
        </div>
        <p className="w-full pb-2 text-center text-gray-900 sm:w-2/5 sm:text-left dark:text-gray-200">
          Konnichiwa🌸, <br /> Kiran here (
          <a href="https://en.wikipedia.org/wiki/Kirron_Kher" target="_blank">
            !Kher
          </a>
          ) a 23 Y/O CSE Undergrad based in Maharashtra, India. With over 3
          years of learning and project experience, I am passionate about
          Software Development, particularly UI/UX Design and Frontend
          Development. I specialize in the JavaScript ecosystem, where I bring
          complex projects to life, ensuring they are both functional and
          aesthetically pleasing.
        </p>
      </div>
    </section>
  );
};

export default About;
