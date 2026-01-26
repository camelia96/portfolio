import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-between w-full">
            <Link className="float-left" href={"#home"}>home.</Link>
            <div className="flex gap-6 ">
                <Link href={"#projects"}>projects.</Link>
                <Link href={"#cv"}>cv.</Link>
                <Link href={"#contact"}>contact.</Link>
            </div>
        </nav>
    )
}