export type Project = {
  title: string
  href: string
  img: string
  width: number
  height: number
  desc: string
  intro: ReactNode
  items?: ProjectItem
}

type ProjectItem = {
  techStack: string[]
  links: ProjectItemLink[]
  details: string[]
}

type ProjectItemLink = {
  title: string
  url: string
}
