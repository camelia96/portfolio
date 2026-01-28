import { Skills } from "@/generated/prisma/client"

interface SkillBadgeProps {
    skill: Skills
}
export function SkillBadge({ skill }: SkillBadgeProps) {

    return (
        <>
            {skill &&
                (<div className="bg-fallback-light text-black  rounded-2xl px-3 pb-1.5 pt-1 w-fit flex items-center gap-1.5">
                    {skill.icon_link && (
                        <div className="rounded-2xl flex items-center justify-center ">
                            <img src={skill.icon_link} className="p-0.5 " width={20} height={20} alt="Logo" />
                        </div>
                    )}
                    <p className="text-base font-normal whitespace-nowrap">{skill.name}</p>
                </div>)
            }
        </>
    )
}

