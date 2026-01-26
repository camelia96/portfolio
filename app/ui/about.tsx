import Link from "next/link";
import { SocialMedia } from "./social-media";
import { Contact, About } from "@/types/types";
import { Email } from "./email";

interface AboutProps {
    about: About,
    contact: Contact
}

export function AboutData({ about, contact }: AboutProps) {
    const { role, description } = about;
    const { email, social } = contact;

    return (
        <div className="flex flex-col justify-between w-full gap-8" >
            {/** ROLE */}
            <div className="w-fit bg-[#FADFFF] px-6 py-3 rounded-xl">
                <p className="w-fit text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-center md:text-start font-mono tracking-xl font-medium text-[#BE4BC4]">{role}</p>
            </div>

            {/** DESCRIPTION */}
            {description && (<p className="w-full md:w-3/4">{description}</p>)}

            {/** CONTACT DATA */}

            <div className="flex flex-col items-start gap-6 md:gap-8">

                <div className="flex items-center">
                    <Email email={email} />
                </div>

                <SocialMedia social={social} />

                <Link href={"#contact"} className="text-3xl font-bold tracking-sm border-b capitalize border-black hover:text-gray hover:border-none transition duration-200">Let's get in touch.</Link>
            </div>
        </div>
    )
}