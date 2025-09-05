import { useState, type MouseEvent } from "react";
import Checkmark from "./Icons/Checkmark";

export default function FrequentTraveler() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    // mouse event on button element
    e.preventDefault();
    if (isChecked) {
      // we can submit form
    }
  };

  return (
    <section className="bg-primary-100 px-24 py-36">
      <div className="border-y-grey-500/40 m-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 py-26">
        <div className="basis-150 text-center">
          {/* basis-150 - setting default width on flex child so stays in same width */}
          <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">
            Learn About Our Frequent Traveler Program
          </h3>
          <p className="text-grey-800 text-base/13.5">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>

        <div className="bg-grey-500/40 block w-0.25 self-stretch" />
        {/* block so to make hidden on smaller screen and self-stretch so to gerow height with other flext child */}

        <form className="flex basis-150 flex-col">
          {/* setting basis 150 to give default width so to make consistent width */}
          {/* this nesting of lebel with p will help to style seperately and also therr is no need of id if you nest input inside label itself */}
          <label className="mb-8">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">
              Full Name
            </p>
            <input
              required
              type="text"
              name="fullname"
              minLength={2}
              maxLength={50}
              placeholder="Jane Doe"
              className="placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50"
            />
          </label>
          <label className="mb-12">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Email</p>
            <input
              required
              type="email"
              name="emailAddress"
              minLength={3}
              maxLength={50}
              placeholder="janedoe@gmail.com"
              className="placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50"
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-8">
            {/* in mobile the label and btn comes under one another -> use flex wrap which do the same, and gap-y-8 will apply then  */}
            {/* understand the leveling of this label to use custom checkbox, using button to make check styling */}
            <label className="text-grey-800 flex cursor-pointer items-center gap-x-1.5">
              <button
                className="flex size-5 cursor-pointer items-center justify-center rounded-xs bg-white p-1 disabled:opacity-50"
                type="button" // adding type button so to override the default styles of button and make it a generic button for form
                onClick={() => setIsChecked(!isChecked)}
              >
                <Checkmark
                  className={`size-2 transition-all duration-200 ${isChecked ? "visible size-3 opacity-100" : "invisible size-2 opacity-0"}`}
                  // setting size makes to look cool in animation, this is a great way to create a checkbox
                />
              </button>
              <p className="text-sm tracking-[.03rem]">
                Agree to receive promotional email updates
              </p>
            </label>

            <button
              className="hover:bg-primary-800 bg-primary-700 cursor-pointer rounded-[0.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed"
              onClick={handleSubmit}
            >
              Learn More
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
