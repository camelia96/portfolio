import { CV } from "@/generated/prisma/client";

interface CvProps {
    record: CV
}
export function CvRecord({ record }: CvProps) {
    const bulletDescription = record.description?.split("<br>");

    return (
        <div className="w-full flex flex-col  border-b-2 pb-4 border-gray-300 gap-4">
            <div className="flex gap-2 items-center">
                {record.icon_company && (<img src={record.icon_company} className="p-0.5 " width={50} height={50} alt="Logo" />)}
                <div>
                    <h4>{record.role}</h4>
                    <p className="">{record.company}</p>
                </div>

            </div>

            <div>
                <p className="text-gray font-semibold">{record.timeline}</p>
                <p className="text-gray">{record.location}</p>
            </div>

            {bulletDescription ? (<ul className="list-disc">{bulletDescription.map((d, i) => (<li key={i}>{d}</li>))}</ul>) : ""}


        </div>
    )
}