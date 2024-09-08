"use client";
import Image from "next/image";
import { useState } from "react";

const sponsors = [
  { id: 1, name: "Sponsor 1", image: "/sponsors/hashnode-logo.png" },
  { id: 2, name: "Sponsor 2", image: "/sponsors/Experian_logo.png" },
  { id: 3, name: "Sponsor 3", image: "/sponsors/eclipse-logo.png" },
  { id: 4, name: "Sponsor 4", image: "/sponsors/tailwind-logo.png" },
];

const SponsorsSection = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState<number | null>(null);

  return (
    <section className="justify-center w-9/12  mx-auto md:w-full md:flex  gap-20 py-20 md:justify-evenly">
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.id}
          className={`relative transition-transform duration-300 transform ${
            hoveredSponsor === sponsor.id ? "scale-105" : "scale-100"
          } shadow-md hover:shadow-xl rounded-md overflow-hidden`}
          onMouseEnter={() => setHoveredSponsor(sponsor.id)}
          onMouseLeave={() => setHoveredSponsor(null)}
        >
          <Image
            src={sponsor.image}
            alt={sponsor.name}
            width={200}
            height={100}
            className="object-contain w-[200px] h-[100px]"
          />
        </div>
      ))}
    </section>
  );
};

export default SponsorsSection;
