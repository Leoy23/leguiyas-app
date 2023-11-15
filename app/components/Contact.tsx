import Image from "next/image";
import contactHeading from "@/public/contact-us.png";

const Contact = () => {
  return (
    <div id="contact" className="text-center mt-8">
      <Image src={contactHeading} alt="contact heading" priority />
      <h1>This is where the contact form will be!</h1>
    </div>
  );
};

export default Contact;
