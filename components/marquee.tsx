import { imageData } from "@/lib/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Marquees() {
  return (
    <>
      <Marquee gradient={true} className="h-20 mt-4 mb-12 flex flex-row">
        {imageData.map((item, i) => (
          <Image
            key={i}
            src={item.img}
            alt={item.name}
            width={200}
            className="mx-24"
          />
        ))}
      </Marquee>
    </>
  );
}

export default Marquees;
