import { CategoryBadge } from "@/components/category-badge";
import { WorkRecord } from "@/components/work-record";
import Nav from "@/components/layout/Nav";
import ProjectCard from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { prisma } from "@/lib/prisma";
import { Copy } from "lucide-react";
import Link from "next/link";
import { AcademicRecord } from "@/components/academic-record";
import { Footer } from "@/components/layout/Footer";
import { SocialMedia } from "@/components/social-media";

export default async function Home() {



  // Data
  const data = await prisma.data.findFirst();
  if (!data) return;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col max-w-10/12 m-10 font-sans text-black">
        <Nav />
        <div className="w-full flex flex-col justify-center gap-6 my-15">
          {/** NAME */}

          <h1 className="text-start mb-15 uppercase">{data.name}</h1>

          <div className="flex flex-col justify-between w-full gap-6" >
            {/** ROLE */}
            <div className="w-fit bg-[#FADFFF] px-5 py-2.5 rounded-full">
              <p className="w-fit text-[28px] font-medium text-[#BE4BC4] tracking-[-0.3]">{data.role}</p>
            </div>

            {/** DESCRIPTION */}
            <p className="w-3/4">
              {data.description}
            </p>

            {/** CONTACT DATA */}

            <div className="flex gap-6 items-center">

              <Link href={"#"} className="font-semibold text-[30px] tracking-sm underline capitalize">Lets get in touch.</Link>


              <div className="flex gap-2 items-center">
                <p className="font-mono tracking-sm ">{data.email}</p>
                <Copy />
              </div>


              <SocialMedia />



            </div>
          </div>
        </div>

        {/** PROJECTS */}
        <h2 className="">projects.</h2>
        <div className="grid grid-cols-3 gap-12">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>


        {/** CV */}
        <h2>cv.</h2>
        <Link href={"#"} className="font-semibold text-[30px] tracking-sm underline">Download CV.</Link>

        <div>
          {/** SKILLS */}
          <h3>Skills</h3>
          <div className="flex items-center gap-6">
            <SkillBadge />
          </div>
          {/** TECH STACK */}
          <h3>Tech stack</h3>
          <div className="flex items-center gap-6">
            <CategoryBadge />
          </div>

          {/** PROFESSIONAL EXP */}
          <h3>Professional Experience</h3>
          <div className="flex items-center gap-6">
            <WorkRecord />
          </div>


          {/** ACADEMIC EXP */}
          <h3>Academic experience</h3>
          <div className="flex items-center gap-6">
            <AcademicRecord />
          </div>
        </div>

        <Footer email={data?.email}/>
      </div>

    </div>
  );
}
