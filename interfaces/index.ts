export interface IGuest {
  firstname: string,
  surname: string,
  role: IRole
}

export interface IRole {
  title: string,
  access: string,
  background: string,
  startAtPostition: number
  fontColour?: string
}