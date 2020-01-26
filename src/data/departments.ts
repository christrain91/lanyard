import {
  GOLD,
  GREEN,
  LIGHT_GREEN,
  DARK_RED,
  LIGHT_BLUE,
  DARK_BLUE,
  PURPLE,
  ORANGE,
  BLACK
} from './colours'
import { Department } from '../definitions'

export const OWNERS: Department = {
  id: 1,
  title: 'Owner',
  background: GOLD,
  startAtPosition: 139
}
export const DIRECTOR: Department = {
  id: 2,
  title: 'Director',
  background: DARK_RED,
  startAtPosition: 120
}
export const ENGINEERING: Department = {
  id: 3,
  title: 'Engineering',
  background: DARK_BLUE,
  startAtPosition: 100
}
export const TECHNOLOGY: Department = {
  id: 4,
  title: 'Technology',
  background: PURPLE,
  startAtPosition: 100
}
export const CUSTOMER_SUPPORT: Department = {
  id: 5,
  title: 'Customer Support',
  background: LIGHT_GREEN,
  startAtPosition: 40
}
export const LABORATORY: Department = {
  id: 6,
  title: 'Laboratory',
  background: LIGHT_BLUE,
  startAtPosition: 100
}
export const SECURITY: Department = {
  id: 7,
  title: 'Security',
  background: ORANGE,
  textColour: BLACK,
  startAtPosition: 125
}
export const PARK_RANGER: Department = {
  id: 8,
  title: 'Park Ranger',
  background: GREEN,
  startAtPosition: 91
}
