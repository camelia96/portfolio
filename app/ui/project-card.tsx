import Link from "next/link";
import { Card } from "../../components/ui/card";
import { SkillBadge } from "./skill-badge";
import { CategoryBadge } from "./category-badge";
import { FullProject } from "@/types/types";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


interface ProjectCardProps {
    project: FullProject,
    imgURL: string | null
}

export default async function ProjectCard({ project, imgURL }: ProjectCardProps) {


    return (
        <Card className=" flex flex-col gap-4">

            {/** IMAGE */}
            <div className="w-full min-h-70 h-100 border lg:h-70 bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${imgURL})` }}></div>

            {/** Categories Badges */}
            <div className="flex flex-wrap items-center gap-1">
                {project.categories && (
                    <>
                        {project.categories.map((c) => (<CategoryBadge key={c.category_id} category={c.category} />))}
                    </>
                )}
            </div>



            {/** Skills Badges - COLLAPSIBLE */}
            <Collapsible>
                <CollapsibleTrigger className="font-medium text-base rounded-xl px-2 py-1  w-fit border border-gray-300 mb-2">
                    <span className="font-bold ">click </span><span className="hover:text-gray  font-normal transition duration-200 ease-in-out">to see tech stack.</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-wrap items-center gap-2 " >
                    {project.skills && (
                        <>
                            {project.skills.map((s) => (<SkillBadge key={s.skill_id} skill={s.skill} />))}
                        </>
                    )}
                </CollapsibleContent>
            </Collapsible>


            {/** Project DATA */}
            <div className="flex flex-col items-start gap-2">
                {/** Project Name */}
                <h3 className="capitalize text-black font-medium ">{project.name}</h3>
                {/** Project description */}
                <p>{project.description}</p>

                {/** Project Year */}
                <p className="text-gray leading-tight">{project.year}</p>
            </div>


            {/** Project LINKS */}
            <div className="flex gap-2">

                {/** Project Site */}
                <Link className="text-sm  font-medium font-mono uppercase border-b border-black hover:text-gray hover:border-none transition duration-200" target="_blank" href={project.link ? project.link : "#"}>project</Link>

                {/** Project Repo */}
                {project.repository && <Link className="text-sm font-medium font-mono uppercase text-fallback-dark border-b border-transparent hover:border-current transition-colors duration-200 " target="_blank" href={project.repository}>repository</Link>}
            </div>
        </Card>
    )
}