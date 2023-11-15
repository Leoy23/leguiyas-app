import Image from "next/image";
import merchHeading from "@/public/merch.png";

const Merch = () => {
  return (
    <div id="merch" className="text-center mt-8">
      <Image src={merchHeading} alt="merch heading" priority />
      <h1>This is the merch section.</h1>
    </div>
  );
};

export default Merch;
