import { FULL_ACCESS, LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, PARK_ACCESS } from './clearance'
import { BLUE, LIGHT_BLUE, BLACK, DARK_RED, GREEN, PURPLE, GREY, ORANGE } from './colours';
import { IRole } from '../interfaces/index';


export const DIRECTOR : IRole = {
  title: 'Director',
  startAtPostition: 120,
  access: FULL_ACCESS,
  background: BLUE
}
export const PARK_RANGER : IRole = {
  title: 'Park Ranger',
  startAtPostition: 95,
  access: LEVEL_2,
  background: BLACK
}
export const DINOSAUR_EXPERT : IRole = {
  title: 'Dinosaur Expert',
  startAtPostition: 60,
  access: LEVEL_4,
  background: GREEN
}
export const HEAD_OF_DEVELOPMENT : IRole = {
  title: 'Head of Development',
  startAtPostition: 10,
  access: LEVEL_5,
  background: PURPLE
}
export const CUSTOMER_SUPPORT : IRole = {
  title: 'Customer Support',
  startAtPostition: 40,
  access: LEVEL_1,
  background: GREY
}
export const PARK_VISITOR : IRole = {
  title: 'Park Visitor',
  startAtPostition: 95,
  access: PARK_ACCESS,
  background: DARK_RED,
  fontColour: ORANGE
}
export const LAB_TECHNICIAN : IRole = {
  title: 'Lab Technician',
  startAtPostition: 70,
  access: LEVEL_3,
  background: LIGHT_BLUE
}