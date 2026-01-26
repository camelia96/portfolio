import { prisma } from "@/lib/prisma";

const profile = {
  name: "Camelia Strango",
  role: "FullStack Developer Junior | Front-End | Back-End | Web Designer",
  email: "camelia.96str@gmail.com",
  linkedin: "https://www.linkedin.com/in/camelia-str/",
  github: "https://github.com/camelia96/",
  behance: "https://www.behance.net/cameliastrango",
  cv: "#",
};

// Custom hook for Fallback Profile Data
export async function useProfileData() {
  // Data
  const data = await prisma.data.findFirst();

  return {
    name: data?.name ?? profile.name,
    role: data?.role ?? profile.role,
    email: data?.email ?? profile.email,
    description: data?.description ?? null,
    linkedin: data?.linkedin ?? profile.linkedin,
    github: data?.github ?? profile.github,
    behance: data?.behance ?? profile.behance,
    cv: data?.cv?.toString() ?? profile.cv,
  };
}
