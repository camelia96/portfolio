import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex justify-between w-full">
            <Link href={"#"}>home.</Link>
            <div className="flex gap-4">
                <Link href={"#"}>projects.</Link>
                <Link href={"#"}>cv.</Link>
                <Link href={"#"}>contact.</Link>
            </div>
        </div>
    )
}