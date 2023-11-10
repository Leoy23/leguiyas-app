import Image from "next/image";
import contactHeading from "@/public/contact-us.png";

const Contact = () => {
    return (
        <div id="contact">
            <Image src={contactHeading} alt="contact heading" width={375} height={375} priority />
            <h1>This is where the contact form will be!</h1>
        </div>
    )
}

export default Contact;
