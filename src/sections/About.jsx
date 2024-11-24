import { ArrowButton, SectionHeading, SectionSubHeading } from "../components";
import avatar from "../assets/avatar.webp";
import { GrCloudDownload } from "react-icons/gr";
import resumePDF from "../assets/Kiran_Mahajan_Software_Development_Engineer.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="About" />
      <SectionSubHeading subHeadingText="Meet Kiran" />

      <div className="flex h-full w-full flex-col items-center justify-between gap-6 px-3 pt-10 sm:w-11/12 sm:flex-row sm:items-start sm:justify-evenly sm:gap-10 sm:pb-10 sm:pt-16 md:w-5/6 md:gap-16 lg:pt-20">
        <div className="flex items-center justify-end sm:w-1/2">
          <img
            className="h-52 w-52 overflow-hidden rounded-xl object-cover object-center shadow-md md:h-64 md:w-64 lg:h-72 lg:w-72"
            src={avatar}
            alt="Kiran Mahajan's Profile Picture"
          />
        </div>

        <div className="w-full pb-2 text-center text-gray-900 sm:w-1/2 sm:text-left dark:text-gray-200">
          <p>
            Konnichiwa🌸, <br /> Kiran here (
            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Kirron_Kher"
              target="_blank"
            >
              !Kher
            </a>
            ) a 23 Y/O CSE Grad based in Maharashtra, India. With over 3 years
            of learning and project experience, I am passionate about Software
            Development, particularly UI/UX Design and Frontend Development. I
            specialize in the JavaScript ecosystem, where I bring complex
            projects to life, ensuring they are both functional and
            aesthetically pleasing.
          </p>
          <div className="mt-6 flex items-center justify-center sm:justify-start xl:mt-12">
            <ArrowButton
              btnText="Resume"
              btnIcon={<GrCloudDownload />}
              Link={resumePDF}
   
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
