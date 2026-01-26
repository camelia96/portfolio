import { CV } from "@/generated/prisma/client";

interface CvProps {
    record: CV
}
export function CvRecord({ record }: CvProps) {
    const bulletDescription = record.description?.split("<br>");

    return (
        <div className="w-full flex flex-col  border-b-2 pb-4 border-gray-300 gap-4">
            <div>
                <h4>{record.role}</h4>
                <p className="text-gray font-medium">{record.timeline}</p>
            </div>

            {bulletDescription ? (<ul className="list-disc">{bulletDescription.map((d, i) => (<li  key={i}>{d}</li>))}</ul>) : ""}

            <div>
                <p className="">{record.company}</p>
                <p className="text-gray">{record.location}</p>
            </div>
        </div>
    )
}