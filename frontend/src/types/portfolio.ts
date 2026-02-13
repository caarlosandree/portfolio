export interface PersonalInfo {
  name: string
  role: string
  description: string
  email: string
  phone: string
  city: string
  birthDate: string
  maritalStatus: string
  github: string
  linkedin: string
  instagram: string
  whatsapp: string
  resumeUrl: string
  image: string
}

export interface Experience {
  id: number
  role: string
  company: string
  location: string
  period: string
  description: string
}

export interface Education {
  id: number
  degree: string
  institution: string
  location: string
  period: string
}

export interface Course {
  id: number
  name: string
  institution: string
  period?: string
  year?: string
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  github: string
}
