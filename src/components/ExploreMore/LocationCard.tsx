import { motion } from "motion/react";
import type { Location } from "../../utils/contentTypes";
import { Location as LocationIcon } from "../Icons/Location";
import Star from "../Icons/Star";

interface LocarionCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocarionCardProps) {
  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="group cursor-pointer"
    >
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        {/* image */}
        <img
          src={location.img}
          alt={location.alt}
          className="transform transition-all duration-300 ease-in-out group-hover:scale-103"
        />
        {/* rating */}
        <div className="absolute top-5 right-6 flex items-center gap-x-2 rounded-[.625rem] bg-white/85 px-3 py-1.5 backdrop-blur-3xl">
          <Star className="fill-yellow size-6" />
          <p className="text-grey-600 tracking-6 text-[1.0625rem] font-semibold">
            {location.rating}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        {/* items-end for those $127/Pax so to be on baseline as its Pax is small attach to base line and 127 is bigger which not looks to baseline  */}
        <div>
          <p className="mb-3.5 text-[1.75rem] font-semibold">
            {location.title}
          </p>
          <div className="flex items-center">
            <LocationIcon className="mr-1.5 size-6" />
            <p className="text-grey-700 text-lg">{location.location}</p>
          </div>
        </div>
        <p className="font-rubik text-[1.75rem]">
          ${location.pricePerPerson}/<span className="text-[1.25rem]">Pax</span>
        </p>
      </div>
    </motion.li>
  );
}
