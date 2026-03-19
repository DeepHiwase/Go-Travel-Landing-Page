import { useState } from "react";
// import { locations } from "../../utils/content";// now no need for local import as we are using remote data from db supabase
import CaretUp from "../Icons/CaretUp";
import LocationCard from "./LocationCard";
import { LOCATION_CARD_SHOWN } from "../../utils/constants";
import useQueryLocations from "../../hooks/useQueryLocations";
import Loader from "../Loader";
import Error from "../Error";

export default function ExploreMore() {
  // after using react-query
  const { locations, error, isLoading } = useQueryLocations();

  const [currIndex, setCurrIndex] = useState<number>(0);

  const totalLocations = locations?.length || 0; // when using remote data -> this gives error - 'locations' is possibly 'undefined'. -> so use '?' to tell until locations is defined don't access length, // same for down totalLocations var also for slice // but locations doesn't exist then use 0 by putting || 0
  const renderedLocations = locations?.slice(
    currIndex,
    currIndex + LOCATION_CARD_SHOWN,
  ); // 0 -> 6 so slicing array to get 0,1,2,3,4,5

  const handleRightClick = () => setCurrIndex((prevIndex) => prevIndex + 1);
  const handleLeftClick = () => setCurrIndex((prevIndex) => prevIndex - 1);
  return (
    <section className="px-24 py-26" id="ExploreMore">
      {/* add id then add class to index html page html element 'scroll-smooth' for smooth scrolling on whole page */}
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

        {/* Loading state */}
        {isLoading && !error && <Loader />}

        {/* locations card grid */}
        {/* Success state */}
        {!isLoading && !error && (
          <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24">
            {renderedLocations?.map((location) => (
              <LocationCard location={location} key={location.id} />
            ))}
          </ul>
        )}

        {/* Error state */}
        {!isLoading && error && (
          <Error>
            Its looks like something went wrong while loading our travel
            locations.
          </Error>
        )}
      </div>
    </section>
  );
}
