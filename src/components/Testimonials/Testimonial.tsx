import type { Testimonial } from "../../utils/contentTypes";

interface TestimonialProps {
  testimonial: Testimonial;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <li className="relative ml-24 flex rounded-3xl bg-white py-14 pt-14 pr-12 pl-42 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.05)]">
      {/* ml-24 since the image is out of li element so we are extending margin so it not overlapped on another */}
      <div className="after:bg-primary-700 absolute left-0 size-47.5 -translate-x-[50%] overflow-hidden after:absolute after:right-0 after:bottom-0 after:-z-1 after:block after:size-45 after:rounded-full">
        {/* translte-x 50% => shift 50% of div width itself -> -translate-x -> to left */}
        {/* after pesudo element, pesudo means -> not real-> we can add not real elements before and after a element, like here after for adding blue round circle  */}
        <img
          src={testimonial.img}
          alt={testimonial.alt}
          className="bg-grey-300 top-0 left-0 z-5 size-45 rounded-full"
        />
      </div>

      <div className="flex flex-col justify-between gap-y-14">
        <p className="text-base/9 font-light">{testimonial.description}</p>
        {/* always look for color contract if font is using weight less than 400(light or extra small) for accessibility */}
        <p className="font-medium">
          {testimonial.name} /{" "}
          <span className="font-light">{testimonial.vacation}</span>
        </p>
      </div>
    </li>
  );
}
