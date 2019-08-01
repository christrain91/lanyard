import { BLUE, LIGHT_BLUE, BLACK, DARK_RED, GREEN, PURPLE, GREY, ORANGE } from './colours';
import { IDepartment } from '../interfaces/index';


export const DIRECTOR : IDepartment = {
  title: 'Director',
  startAtPostition: 120,
  background: BLUE
}
export const PARK_RANGER : IDepartment = {
  title: 'Park Ranger',
  startAtPostition: 95,
  background: BLACK
}
export const DINOSAUR_EXPERT : IDepartment = {
  title: 'Dinosaur Expert',
  startAtPostition: 60,
  background: GREEN
}
export const EMBRYONICS: IDepartment = {
  title: 'Embryonics',
  startAtPostition: 96,
  background: PURPLE
}
export const CUSTOMER_SUPPORT : IDepartment = {
  title: 'Customer Support',
  startAtPostition: 40,
  background: GREY
}
export const PARK_VISITOR : IDepartment = {
  title: 'Park Visitor',
  startAtPostition: 95,
  background: DARK_RED,
  fontColour: ORANGE
}
export const LAB_TECHNICIAN : IDepartment = {
  title: 'Lab Technician',
  startAtPostition: 70,
  background: LIGHT_BLUE
}