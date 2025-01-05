import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { AnimatedButton } from ".";
import { ImGithub } from "react-icons/im";
import { FaEye } from "react-icons/fa6";

const ROTATION_RANGE = 18;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({ title, description, duration, poster, live, repo }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-80 w-full max-w-xl rounded-xl bg-gradient-to-br from-light-blue to-custom-violet"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 overflow-hidden rounded-xl bg-white shadow-lg"
      >
        <img className="h-full w-full object-cover" src={poster} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-white">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-300">{description}</p>

          <div
            style={{
              transform: "translateZ(50px)",
            }}
            className="flex items-center justify-between"
          >
            <p className="mt-1 truncate text-sm text-gray-400">{duration}</p>
            <div className="flex space-x-4">
              <AnimatedButton
                btnIcon={<FaEye />}
                btnText="Live"
                Link={live}
                size="w-12 h-8"
              />
              <AnimatedButton
                btnIcon={<ImGithub />}
                btnText="Repo"
                Link={repo}
                size="w-12 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
