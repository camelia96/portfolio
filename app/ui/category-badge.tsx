import { Categories } from "@/generated/prisma/client"

interface CategoryBadgeProps {
    category: Categories
}
export function CategoryBadge({ category }: CategoryBadgeProps) {

    return (
        <>
            {category &&
                (<div className=" shadow-md rounded-xl px-2 py-1  w-fit text-fallback-dark bg-fallback-light" style={{ backgroundColor: category.background_color?.toString(), color: category.font_color?.toString() }}>
                    <p className=" text-base sm:text-sm lg:text-base whitespace-nowrap font-medium">{category.name}</p>
                </div>)
            }
        </>
    )
}