import { motion } from "motion/react";
import Star from "../Icons/Star";

interface RatingProps {
  name: string;
  rating: number;
  img: string;
  className: string; // as to induidally set those on different position
}

export default function Rating(props: RatingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      // to happen only once the animation set once to true when in view and goes down and come again and agina to same view
      // amout = 1 tells that how much aount of veiw to be there that triggers animation 1 - tells when whole image comes to view, eg 0.9, 0.5 when half of image in view
      viewport={{
        once: true,
        // amount: 0, // llok for what ?? not understand correctly-if .9 -> when 90 % image/div/figure is in view - it triggers the animation
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={`absolute flex gap-x-2.5 rounded-xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-[0px_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl ${props.className} `}
    >
      <div className="bg-grey-300 flex items-end justify-center overflow-hidden rounded-full">
        {/* items end to make it baseline and then crop images correctly */}
        <img
          src={props.img}
          alt="Graphic of person rating photo"
          className="size-15"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="tracking-6 font-semibold">{props.name}</p>
        <div className="flex items-center">
          <Star className="fill-yellow mr-2 size-6" />
          <p className="text-grey-600 text-[1.0625rem] font-semibold">
            {props.rating}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
