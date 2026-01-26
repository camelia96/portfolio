import { ProjectsGetPayload } from "@/generated/prisma/models";

export interface SocialLinks {
  linkedin: string;
  github: string;
  behance: string;
}

export interface Contact {
  email: string;
  social: SocialLinks;
}

export const projectInclude = {
  categories: { include: { category: true } },
  skills: { include: { skill: true } },
  files: { include: { file: true } },
};

export type FullProject = ProjectsGetPayload<{
  include: typeof projectInclude;
}>;

export interface About {
  role: string;
  description: string | null;
}
