import { Skills } from "@/generated/prisma/client"

interface SkillBadgeProps {
    skill: Skills
}
export function SkillBadge({ skill }: SkillBadgeProps) {

    return (
        <>
            {skill &&
                (<div className="bg-gray text-white shadow-md rounded-xl px-2 py-1.5 w-fit flex items-center gap-1.5">
                    {skill.icon_link && (
                        <div className="rounded-[6px] bg-white flex items-center justify-center ">
                            <img src={skill.icon_link} className="p-0.5 " width={20} height={20} alt="Logo" />
                        </div>
                    )}
                    <p className="text-base font-medium whitespace-nowrap">{skill.name}</p>
                </div>)
            }
        </>
    )
}

