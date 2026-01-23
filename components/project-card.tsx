import Link from "next/link";
import { Card } from "./ui/card";
import { SkillBadge } from "./skill-badge";
import { CategoryBadge } from "./category-badge";

export default function ProjectCard() {
    return (
        <Card className=" flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
                <CategoryBadge />
            </div>

            <div className="flex flex-wrap items-center gap-2 ">
                <SkillBadge />
            </div>

            <div className="w-full h-70 bg-[url('/imagen-5.png')] bg-no-repeat bg-cover"></div>

            <div className="flex flex-col gap-0 items-start">
                <p className="text-[20px] font-medium tracking-xs">project name</p>
                <p className="text-[20px] font-mono text-gray uppercase tracking-lg">2021</p>
            </div>
            <Link className="underline text-[20px] font-semibold" href={"#"}>View Project</Link>
        </Card>
    )
}