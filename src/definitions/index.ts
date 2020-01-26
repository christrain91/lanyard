export interface StaffMember {
  firstname: string
  surname: string
  job: Job
  nicknames?: string[]
  customAvatarUrl?: string
}

export interface Department {
  id: number
  title: string
  background: string
  textColour?: string
  startAtPosition: number
}

export interface Job {
  title: string
  description: string
  department: Department
  displayOrder: number
}
