import { services } from "../../utils/content";
import type { Service as IService } from "../../utils/contentTypes";
import Service from "./Service";

const customizedPackages: IService = services.at(0)!; // same as services[0] but morden -> '!' use this when u know that u sure about it present and not null
const culinaryTours: IService = services.at(1)!;
const destinationExpertise: IService = services.at(2)!;

export default function Services() {
  return (
    <section className="bg-primary-100 px-24 py-36">
      <ul className="border-grey-500/40 m-auto flex max-w-389 justify-between border-y-1 py-24">
        <Service service={customizedPackages} />
        <li
          className="bg-grey-500/40 block w-0.25 self-stretch"
          aria-label="a grey divider element"
        />
        {/* its inline make it block to applyr margin, padding, border, height, self-stretch to stretch to height of flex container so not to set height */}
        <Service service={culinaryTours} />
        <li
          className="bg-grey-500/40 block w-0.25 self-stretch"
          aria-label="a grey divider element"
        />
        <Service service={destinationExpertise} />
      </ul>
    </section>
  );
}
