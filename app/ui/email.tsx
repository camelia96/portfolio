"use client"
import { Copy } from "lucide-react";
import { toast } from "sonner";

export function Email({ email }: { email: string }) {
    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(email);

        // Toast
        toast.success("Email copied to clipboard!", {position: "top-center"})

    }
    return (
        <>
            <p className="font-mono tracking-sm flex gap-2 items-center">{email}<Copy className="hover:text-[#BE4BC4] hover:cursor-pointer transition duration-200 " size={24} onClick={handleCopyClipboard} /></p>
        </>)
}