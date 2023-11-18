import Image from "next/image";
import merchHeading from "@/public/merch.png";
import mug from "@/public/mug-merch.png";
import whShirt from "@/public/white-shirt-merch.png";
import blShirt from "@/public/black-shirt-merch.png";

const Merch = () => {
  return (
    <div id="merch" className="text-center mt-8 md:px-12">
      <Image src={merchHeading} alt="merch heading" priority />
      <section className="bg-pink border-8 border-darkPink rounded-full flex flex-col items-center mx-10">
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <Image
            src={whShirt}
            alt="white shirt"
            className="w-2/4 lg:w-1/4 rotate-12"
          />
          <Image
            src={blShirt}
            alt="black shirt"
            className="w-2/4 lg:w-1/4 -rotate-12"
          />
        </div>
        <Image src={mug} alt="black mug" className="w-2/4 lg:w-1/4 rotate-12" />
      </section>
    </div>
  );
};

export default Merch;
