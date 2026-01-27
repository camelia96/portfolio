import { CategoryBadge } from "@/app/ui/category-badge";
import ProjectCard from "@/app/ui/project-card";
import { SkillBadge } from "@/app/ui/skill-badge";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { useProfileData } from "./hooks/useProfileData";
import { projectInclude } from "@/types/types";
import { AboutData } from "./ui/about";
import { CvRecord } from "./ui/cv-record";
import Nav from "./ui/layout/nav";
import { Footer } from "./ui/layout/footer";
import { supabase } from "@/lib/supabase";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  // Projects
  const projects = await prisma.projects.findMany({ include: projectInclude });

  // SKills
  const skills = await prisma.skills.findMany();

  // Tech stack (Categories)
  const categories = await prisma.categories.findMany();

  // Curriculum
  const curriculum = await prisma.cV.findMany();
  if (!curriculum) return;

  const academic = curriculum.filter((c) => c.academic)

  const professional = curriculum.filter((c) => c.professional)

  const { name, role, email, description, linkedin, github, behance, cv } = await useProfileData();

  const social = { linkedin, github, behance }

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <div className="flex flex-col max-w-10/12 m-10 font-sans text-black gap-20 lg:gap-26">
        <div id="home" className="w-full flex flex-col justify-start gap-12">
          <Nav />

          {/** NAME */}
          <h1 className="text-center md:text-start uppercase">{name}</h1>

          {/** ABOUT */}
          <AboutData about={{ role, description }} contact={{ email, social }} />
        </div>

        <div className="flex flex-col gap-20">
          <Separator />

          {/** PROJECTS */}
          <div id="projects">
            <h2 className="leading-normal mb-6">projects.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects &&
                (<>
                  {projects.map((p) => {

                    const projectImg = p.files[0] ? supabase.storage.from("Files").getPublicUrl(p.files[0].file.path + p.files[0].file.name).data.publicUrl.toString() : null;

                    return (<ProjectCard imgURL={projectImg} key={p.id} project={p} />)
                  })}
                </>)}
            </div>
          </div>


          <Separator />

          {/** CV */}
          <div id="cv">
            <div className="flex flex-col mb-12 ">
              <h2>cv.</h2>
              {/** DOWNLOAD CV */}
              <Link href={cv} target="_blank" className="w-fit border-b border-black hover:text-gray hover:border-none transition duration-200">download <span className="font-bold">cv</span></Link>
            </div>

            <div className="flex flex-col gap-12">

              {/** Tech stack */}
              {skills &&
                (<div>
                  <h3 className="mb-2">Skills</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {skills.map((s) => (<SkillBadge key={s.id} skill={s} />))}
                  </div>
                </div>
                )
              }
              {/** TECH STACK */}
              {categories && (
                <div>
                  <h3 className="mb-2">Competencies</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {categories.map((c) => (<CategoryBadge key={c.id} category={c} />))}
                  </div>
                </div>
              )}

              {/** PROFESSIONAL EXP */}
              <div>
                <h3 className="mb-2">Professional Experience</h3>
                <div className="flex flex-wrap flex-col items-start gap-6">
                  {professional.sort((a, b) => b.sort - a.sort).map((p) => (<CvRecord key={p.id} record={p} />))}
                </div>
              </div>


              {/** ACADEMIC EXP */}
              <div>
                <h3 className="mb-2">Academic experience</h3>
                <div className="flex flex-col items-start gap-6">
                  {academic.sort((a, b) => b.sort - a.sort).map((a) => (<CvRecord key={a.id} record={a} />))}
                </div>
              </div>
            </div>

          </div>
        </div>

        <Footer id="contact" contact={{ email, social }} />
      </div>
    </div>
  );
}
