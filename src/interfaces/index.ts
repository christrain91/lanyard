export interface IGuest {
  firstname: string,
  surname: string,
  department: IDepartment, 
  job: string
}

export interface IDepartment {
  title: string,
  background: string,
  startAtPostition: number
  fontColour?: string
}