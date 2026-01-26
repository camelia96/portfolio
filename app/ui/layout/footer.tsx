import { SocialMedia } from "../social-media";
import { Contact } from "@/types/types";
import { Email } from "../email";

interface FooterProps {
    contact: Contact;
    id: string
}

export function Footer({ contact,id }: FooterProps) {
    const { email, social } = contact;

    return (
        <div className="bg-black text-white py-12 px-6 md:px-12 rounded-[2rem] flex flex-col gap-10" id={id}>
            <p className="text-3xl sm:text-4xl text-center lg:text-start md:text-6xl font-bold capitalize">Let's stay in touch.</p>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 ">
                <Email email={email} />

                <SocialMedia social={social} />

                <p className="text-xs md:text-sm">All rights reserved, Camelia Strango © 2026</p>
            </div>
        </div>
    )
}