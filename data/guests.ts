import { DIRECTOR, DINOSAUR_EXPERT, PARK_RANGER, PARK_VISITOR, CUSTOMER_SUPPORT, HEAD_OF_DEVELOPMENT} from './roles'
import { IGuest } from '../interfaces/index';


const guests : IGuest[] = [
  {
    firstname: 'James',
    surname: 'Allcock',
    role: PARK_RANGER
  },
  {
    firstname: 'Emily',
    surname: 'Blakemore',
    role: PARK_RANGER
  },
  {
    firstname: 'Paul',
    surname: 'Blakemore',
    role: PARK_RANGER
  },
  {
    firstname: 'Riley',
    surname: 'Blakemore',
    role: PARK_RANGER
  },
  {
    firstname: 'George',
    surname: 'Bridges',
    role: PARK_VISITOR
  },
  {
    firstname: 'Harry',
    surname: 'Bridges',
    role: PARK_VISITOR
  },
  {
    firstname: 'Jay',
    surname: 'Bridges',
    role: PARK_RANGER
  },
  {
    firstname: 'Louise',
    surname: 'Bridges',
    role: PARK_RANGER
  },
  {
    firstname: 'Toni',
    surname: 'Cave',
    role: PARK_RANGER
  },
  {
    firstname: 'Jon',
    surname: 'Chadwick',
    role: PARK_RANGER
  },
  {
    firstname: 'Pauline',
    surname: 'Chadwick',
    role: PARK_RANGER
  },
  {
    firstname: 'Jamie',
    surname: 'Channings',
    role: PARK_RANGER
  },
  {
    firstname: 'Dominic',
    surname: 'Clifford',
    role: PARK_RANGER
  },
  {
    firstname: 'Jennie',
    surname: 'Collins',
    role: PARK_RANGER
  },
  {
    firstname: 'Kayley',
    surname: 'Cotterill',
    role: PARK_RANGER
  },
  {
    firstname: 'Maria',
    surname: 'Dagleri',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Seamus',
    surname: 'Delaney',
    role: PARK_VISITOR
  },
  {
    firstname: 'Jayde',
    surname: 'Edmunds',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Kayleigh',
    surname: 'Edmunds',
    role: PARK_RANGER
  },
  {
    firstname: 'Charlie',
    surname: 'Evans',
    role: PARK_RANGER
  },
  {
    firstname: 'Freddie',
    surname: 'Fenwick',
    role: PARK_VISITOR
  },
  {
    firstname: 'Glen',
    surname: 'Fenwick',
    role: DIRECTOR
  },
  {
    firstname: 'Jacqueline',
    surname: 'Fenwick',
    role: PARK_RANGER
  },
  {
    firstname: 'Karen',
    surname: 'Fenwick',
    role: DIRECTOR
  },
  {
    firstname: 'Lee',
    surname: 'Fenwick',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Stavros',
    surname: 'Fountoulakis',
    role: DIRECTOR
  },
  {
    firstname: 'Hannah',
    surname: 'Francis',
    role: PARK_RANGER
  },
  {
    firstname: 'Megan',
    surname: 'Goodwin',
    role: PARK_RANGER
  },
  {
    firstname: 'Josie',
    surname: 'Gotch',
    role: PARK_RANGER
  },
  {
    firstname: 'Carole',
    surname: 'Hale',
    role: DIRECTOR
  },
  {
    firstname: 'Belinda',
    surname: 'Harris',
    role: PARK_RANGER
  },
  {
    firstname: 'Caroline',
    surname: 'Harris',
    role: PARK_RANGER
  },
  {
    firstname: 'Jayden',
    surname: 'Harris',
    role: PARK_VISITOR
  },
  {
    firstname: 'Layla',
    surname: 'Harris',
    role: PARK_VISITOR
  },
  {
    firstname: 'Lisa',
    surname: 'Harris',
    role: PARK_RANGER
  },
  {
    firstname: 'Luke',
    surname: 'Harris',
    role: PARK_RANGER
  },
  {
    firstname: 'Paul',
    surname: 'Harris',
    role: PARK_RANGER
  },
  {
    firstname: 'Ian',
    surname: 'Hubbard-Harris',
    role: PARK_RANGER
  },
  {
    firstname: 'Richard',
    surname: 'Hubbard-Harris',
    role: PARK_RANGER
  },
  {
    firstname: 'Adam',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Dave',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Gareth',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Hayden',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Jaxon',
    surname: 'Jones',
    role: PARK_VISITOR
  },
  {
    firstname: 'Jeni',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Marc',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Robert',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Simon',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Sue',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Tim',
    surname: 'Jones',
    role: PARK_RANGER
  },
  {
    firstname: 'Thomas',
    surname: 'Kilgallon',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Josh',
    surname: 'Maguire',
    role: PARK_RANGER
  },
  {
    firstname: 'Natasha',
    surname: 'Maiklem',
    role: PARK_RANGER
  },
  {
    firstname: 'Lauren',
    surname: 'Mansell',
    role: PARK_RANGER
  },
  {
    firstname: 'Matt',
    surname: 'Mansell',
    role: PARK_RANGER
  },
  {
    firstname: 'Wal',
    surname: 'Mansell',
    role: PARK_RANGER
  },
  {
    firstname: 'Chris',
    surname: 'Oryan',
    role: PARK_RANGER
  },
  {
    firstname: 'Marvin',
    surname: 'Palmer',
    role: PARK_RANGER
  },
  {
    firstname: 'Aiden',
    surname: 'Priest',
    role: PARK_VISITOR
  },
  {
    firstname: 'Ashley',
    surname: 'Priest',
    role: PARK_RANGER
  },
  {
    firstname: 'Diane',
    surname: 'Priest',
    role: PARK_RANGER
  },
  {
    firstname: 'Finley',
    surname: 'Priest',
    role: PARK_VISITOR
  },
  {
    firstname: 'Gary',
    surname: 'Priest',
    role: PARK_RANGER
  },
  {
    firstname: 'Nichola',
    surname: 'Priest',
    role: PARK_RANGER
  },
  {
    firstname: 'Calvin',
    surname: 'Randle',
    role: CUSTOMER_SUPPORT
  },
  {
    firstname: 'Nikki',
    surname: 'Randle',
    role: PARK_RANGER
  },
  {
    firstname: 'Danni',
    surname: 'Richards',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Joshua',
    surname: 'Richardson',
    role: PARK_RANGER
  },
  {
    firstname: 'Ping',
    surname: 'Sam',
    role: PARK_RANGER
  },
  {
    firstname: 'Alison',
    surname: 'Seawright',
    role: CUSTOMER_SUPPORT
  },
  {
    firstname: 'Chris',
    surname: 'Shone',
    role: PARK_RANGER
  },
  {
    firstname: 'Andy',
    surname: 'Sutherland',
    role: PARK_RANGER
  },
  {
    firstname: 'Lia',
    surname: 'Sutherland',
    role: PARK_VISITOR
  },
  {
    firstname: 'Sarah',
    surname: 'Sutherland',
    role: PARK_RANGER
  },
  {
    firstname: 'Chris',
    surname: 'Taylor',
    role: PARK_RANGER
  },
  {
    firstname: 'Jordan',
    surname: 'Taylor',
    role: PARK_RANGER
  },
  {
    firstname: 'Derek',
    surname: 'Train',
    role: DIRECTOR
  },
  {
    firstname: 'Martin',
    surname: 'Train',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Simon',
    surname: 'Train',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Amy',
    surname: 'Turner',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Becki',
    surname: 'Turner',
    role: PARK_RANGER
  },
  {
    firstname: 'Dave',
    surname: 'Turner',
    role: PARK_RANGER
  },
  {
    firstname: 'Jen',
    surname: 'Turner',
    role: PARK_RANGER
  },
  {
    firstname: 'Joshua',
    surname: 'Turner',
    role: PARK_VISITOR
  },
  {
    firstname: 'Tommy',
    surname: 'Turner',
    role: PARK_VISITOR
  },
  {
    firstname: 'Tamás',
    surname: 'Tóth',
    role: PARK_RANGER
  },
  {
    firstname: 'Ben',
    surname: 'Ward',
    role: PARK_RANGER
  },
  {
    firstname: 'Alex',
    surname: 'Warner',
    role: PARK_RANGER
  },
  {
    firstname: 'Gemma',
    surname: 'Warner',
    role: PARK_RANGER
  },
  {
    firstname: 'Diane',
    surname: 'Weare',
    role: PARK_RANGER
  },
  {
    firstname: 'Finn',
    surname: 'Weare',
    role: PARK_VISITOR
  },
  {
    firstname: 'Simon',
    surname: 'Weare',
    role: HEAD_OF_DEVELOPMENT
  },
  {
    firstname: 'Amy',
    surname: 'Wirtz',
    role: DINOSAUR_EXPERT
  },
  {
    firstname: 'Katie',
    surname: 'Wood',
    role: DIRECTOR
  },
  {
    firstname: 'Tasnim',
    surname: 'Zaman',
    role: DINOSAUR_EXPERT
  }
]

export default guests