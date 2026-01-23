import { Copy } from "lucide-react";
import { SocialMedia } from "../social-media";

export function Footer({ email }: { email: string | null }) {
    return (
        <div className="bg-black text-white mt-20 py-6 px-12 rounded-[2rem] flex flex-col  gap-2">
            <p className="text-[60px] font-bold capitalize">Let's stay in touch.</p>
            <div className="flex justify-between items-center">
                <p className="font-mono tracking-sm underline flex gap-2 items-center">{email ? email : "camelia.96str@gmail.com"}<Copy size={20}/></p>

                <SocialMedia />

                <p className="text-sm">All rights reserved, Camelia Strango © 2026</p>
            </div>
        </div>
    )
}