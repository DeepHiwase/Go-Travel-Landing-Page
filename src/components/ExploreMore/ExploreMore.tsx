import { useState } from "react";
import { locations } from "../../utils/content";
import CaretUp from "../Icons/CaretUp";
import LocationCard from "./LocationCard";
import { LOCATION_CARD_SHOWN } from "../../utils/constants";

export default function ExploreMore() {
  const [currIndex, setCurrIndex] = useState<number>(0);

  const totalLocations = locations.length;
  const renderedLocations = locations.slice(
    currIndex,
    currIndex + LOCATION_CARD_SHOWN,
  ); // 0 -> 6 so slicing array to get 0,1,2,3,4,5

  const handleRightClick = () => setCurrIndex((prevIndex) => prevIndex + 1);
  const handleLeftClick = () => setCurrIndex((prevIndex) => prevIndex - 1);
  return (
    <section className="px-24 py-26">
      <div className="m-auto max-w-389">
        {/* upper heading and buttons */}
        <div className="flex items-end justify-between">
          {/* items end so buttons vertically end of line */}
          <div>
            <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">
              Explore more
            </h2>
            <p className="tracking-6 text-grey-700 text-[1.75rem] font-light">
              Let's go on an adventure
            </p>
          </div>
          <div className="mb-2 flex gap-x-6">
            <button
              className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="arrow right"
              onClick={handleLeftClick}
              disabled={currIndex === 0} // if currIndex zero - reach starting of card list
            >
              <CaretUp className="w-6 -rotate-90 fill-white" />
            </button>
            <button
              className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="arrow left"
              onClick={handleRightClick}
              disabled={currIndex >= totalLocations - LOCATION_CARD_SHOWN} // if curr Index reach last to see when 9 - 6 to show that is index 3
            >
              <CaretUp className="w-6 rotate-90 fill-white" />
            </button>
          </div>
        </div>

        {/* locations card grid */}
        <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24">
          {renderedLocations.map((location) => (
            <LocationCard location={location} key={location.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
