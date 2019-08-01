import {
  DIRECTOR,
  DINOSAUR_EXPERT,
  PARK_RANGER,
  PARK_VISITOR,
  CUSTOMER_SUPPORT,
  EMBRYONICS
} from './departments';
import { IGuest } from '../interfaces/index';
import { 
  VET_SUR, 
  VET_ASS, 
  MECHANIC, 
  ZOO_KEEPER, 
  HERB_HELPER, 
  HERB_SPECIALIST,
  TOUR_GUIDE, 
  SECURITY_OFFICER,
  PALEONTOLOGIST, 
  EMBRYOLOGIST,
  WEAPONS_SPECIALIST,
  ETHOLOGIST,
  CLINICAL_GENETICIST,
  WORK_EXPERIENCE,
  RAPTOR_WRANGLER,
  BIOCHEMIST,
  EXTERMINATOR,
  SOFTWARE_ENGINEER,
  HEAD_OF_MICROBIOLOGY,
  MARKSMAN,
  DIRECTOR_OF_LOGISTICS,
  ANIMAL_SPECIALIST,
  SYSTEMS_SECURITY_ADMIN,
  HEAD_OF_SECURITY,
  DIRECTOR_OF_SECURITY,
  DIRECTOR_OF_FINANCE,
  HEAD_OF_NETWORK_SUPPORT,
  DIRECTOR_OF_ENGINEERING,
  DIRECTOR_OF_PUBLIC_RELATIONS,
  HEAD_OF_ACCOMODATION,
  PILOT,
  SYSTEMS_DATABASE_ENGINEER,
  RC_TECHNICIAN,
  EMBRYONICS_ADMIN,
  DIRECTOR_OF_OPERATIONS
} from './jobs';

const guests: IGuest[] = [
  {
    firstname: 'James',
    surname: 'Allcock',
    department: PARK_RANGER,
    job: MECHANIC
  },
  {
    firstname: 'Emily',
    surname: 'Blakemore',
    department: PARK_RANGER,
    job: ANIMAL_SPECIALIST
  },
  {
    firstname: 'Paul',
    surname: 'Blakemore',
    department: PARK_RANGER,
    job: SYSTEMS_SECURITY_ADMIN
  },
  {
    firstname: 'Riley',
    surname: 'Blakemore',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'George',
    surname: 'Bridges',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Harry',
    surname: 'Bridges',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Jay',
    surname: 'Bridges',
    department: PARK_RANGER,
    job: HEAD_OF_SECURITY
  },
  {
    firstname: 'Louise',
    surname: 'Bridges',
    department: PARK_RANGER,
    job: BIOCHEMIST
  },
  {
    firstname: 'Toni',
    surname: 'Cave',
    department: PARK_RANGER,
    job: ETHOLOGIST
  },
  {
    firstname: 'Jon',
    surname: 'Chadwick',
    department: PARK_RANGER,
    job: ZOO_KEEPER
  },
  {
    firstname: 'Pauline',
    surname: 'Chadwick',
    department: PARK_RANGER,
    job: ETHOLOGIST
  },
  {
    firstname: 'Jamie',
    surname: 'Channings',
    department: PARK_RANGER,
    job: EXTERMINATOR 
  },
  {
    firstname: 'Dominic',
    surname: 'Clifford',
    department: PARK_RANGER,
    job: SOFTWARE_ENGINEER 
  },
  {
    firstname: 'Jennie',
    surname: 'Collins',
    department: PARK_RANGER,
    job: CLINICAL_GENETICIST
  },
  {
    firstname: 'Kayley',
    surname: 'Cotterill',
    department: PARK_RANGER,
    job: PALEONTOLOGIST
  },
  {
    firstname: 'Maria',
    surname: 'Dagleri',
    department: DINOSAUR_EXPERT,
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Seamus',
    surname: 'Delaney',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Jayde',
    surname: 'Edmunds',
    department: DINOSAUR_EXPERT,
    job: VET_SUR
  },
  {
    firstname: 'Kayleigh',
    surname: 'Edmunds',
    department: PARK_RANGER,
    job: BIOCHEMIST
  },
  {
    firstname: 'Charlie',
    surname: 'Evans',
    department: PARK_RANGER,
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Freddie',
    surname: 'Fenwick',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Glen',
    surname: 'Fenwick',
    department: DIRECTOR,
    job: DIRECTOR_OF_SECURITY
  },
  {
    firstname: 'Jacqueline',
    surname: 'Fenwick',
    department: PARK_RANGER,
    job: ZOO_KEEPER
  },
  {
    firstname: 'Karen',
    surname: 'Fenwick',
    department: DIRECTOR,
    job: DIRECTOR_OF_FINANCE
  },
  {
    firstname: 'Lee',
    surname: 'Fenwick',
    department: DINOSAUR_EXPERT,
    job: HEAD_OF_NETWORK_SUPPORT
  },
  {
    firstname: 'Stavros',
    surname: 'Fountoulakis',
    department: DIRECTOR,
    job: DIRECTOR_OF_ENGINEERING 
  },
  {
    firstname: 'Hannah',
    surname: 'Francis',
    department: PARK_RANGER,
    job: PALEONTOLOGIST
  },
  {
    firstname: 'Megan',
    surname: 'Goodwin',
    department: PARK_RANGER,
    job: ETHOLOGIST
  },
  {
    firstname: 'Josie',
    surname: 'Gotch',
    department: PARK_RANGER,
    job: ETHOLOGIST
  },
  {
    firstname: 'Carole',
    surname: 'Hale',
    department: DIRECTOR,
    job: DIRECTOR_OF_PUBLIC_RELATIONS
  },
  {
    firstname: 'Belinda',
    surname: 'Harris',
    department: PARK_RANGER,
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Caroline',
    surname: 'Harris',
    department: PARK_RANGER,
    job: TOUR_GUIDE
  },
  {
    firstname: 'Jayden',
    surname: 'Harris',
    department: PARK_VISITOR,
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Layla',
    surname: 'Harris',
    department: PARK_VISITOR,
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Lisa',
    surname: 'Harris',
    department: PARK_RANGER,
    job: BIOCHEMIST
  },
  {
    firstname: 'Luke',
    surname: 'Harris',
    department: PARK_RANGER,
    job: PALEONTOLOGIST
  },
  {
    firstname: 'Paul',
    surname: 'Harris',
    department: PARK_RANGER,
    job: MECHANIC
  },
  {
    firstname: 'Ian',
    surname: 'Hubbard-Harris',
    department: PARK_RANGER,
    job: VET_SUR
  },
  {
    firstname: 'Richard',
    surname: 'Hubbard-Harris',
    department: PARK_RANGER,
    job: CLINICAL_GENETICIST
  },
  {
    firstname: 'Adam',
    surname: 'Jones',
    department: PARK_RANGER,
    job: MECHANIC
  },
  {
    firstname: 'Dave',
    surname: 'Jones',
    department: PARK_RANGER,
    job: HEAD_OF_ACCOMODATION 
  },
  {
    firstname: 'Gareth',
    surname: 'Jones',
    department: PARK_RANGER,
    job: PILOT
  },
  {
    firstname: 'Hayden',
    surname: 'Jones',
    department: PARK_RANGER,
    job: TOUR_GUIDE
  },
  {
    firstname: 'Jaxon',
    surname: 'Jones',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Jeni',
    surname: 'Jones',
    department: PARK_RANGER,
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Marc',
    surname: 'Jones',
    department: PARK_RANGER,
    job: WEAPONS_SPECIALIST
  },
  {
    firstname: 'Robert',
    surname: 'Jones',
    department: PARK_RANGER,
    job: ETHOLOGIST
  },
  {
    firstname: 'Simon',
    surname: 'Jones',
    department: PARK_RANGER,
    job: SYSTEMS_DATABASE_ENGINEER
  },
  {
    firstname: 'Sue',
    surname: 'Jones',
    department: PARK_RANGER,
    job: TOUR_GUIDE
  },
  {
    firstname: 'Tim',
    surname: 'Jones',
    department: PARK_RANGER,
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Thomas',
    surname: 'Kilgallon',
    department: DINOSAUR_EXPERT,
    job: SOFTWARE_ENGINEER 
  },
  {
    firstname: 'Josh',
    surname: 'Maguire',
    department: PARK_RANGER,
    job: EXTERMINATOR 
  },
  {
    firstname: 'Natasha',
    surname: 'Maiklem',
    department: PARK_RANGER,
    job: HERB_SPECIALIST
  },
  {
    firstname: 'Lauren',
    surname: 'Mansell',
    department: PARK_RANGER,
    job: VET_SUR
  },
  {
    firstname: 'Matt',
    surname: 'Mansell',
    department: PARK_RANGER,
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Wal',
    surname: 'Mansell',
    department: PARK_RANGER,
    job: MECHANIC
  },
  {
    firstname: 'Chris',
    surname: 'Oryan',
    department: PARK_RANGER,
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Marvin',
    surname: 'Palmer',
    department: PARK_RANGER,
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Aiden',
    surname: 'Priest',
    department: PARK_VISITOR,
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Ashley',
    surname: 'Priest',
    department: PARK_RANGER,
    job: MARKSMAN
  },
  {
    firstname: 'Diane',
    surname: 'Priest',
    department: PARK_RANGER,
    job: TOUR_GUIDE
  },
  {
    firstname: 'Finley',
    surname: 'Priest',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Gary',
    surname: 'Priest',
    department: PARK_RANGER,
    job: ZOO_KEEPER
  },
  {
    firstname: 'Nichola',
    surname: 'Priest',
    department: PARK_RANGER,
    job: TOUR_GUIDE
  },
  {
    firstname: 'Calvin',
    surname: 'Randle',
    department: CUSTOMER_SUPPORT,
    job: HERB_SPECIALIST
  },
  {
    firstname: 'Nikki',
    surname: 'Randle',
    department: PARK_RANGER,
    job: ZOO_KEEPER
  },
  {
    firstname: 'Danni',
    surname: 'Richards',
    department: DINOSAUR_EXPERT,
    job: VET_SUR
  },
  {
    firstname: 'Joshua',
    surname: 'Richardson',
    department: PARK_RANGER,
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Ping',
    surname: 'Sam',
    department: PARK_RANGER,
    job: SOFTWARE_ENGINEER 
  },
  {
    firstname: 'Alison',
    surname: 'Seawright',
    department: CUSTOMER_SUPPORT,
    job: HEAD_OF_MICROBIOLOGY
  },
  {
    firstname: 'Chris',
    surname: 'Shone',
    department: PARK_RANGER,
    job: CLINICAL_GENETICIST
  },
  {
    firstname: 'Andy',
    surname: 'Sutherland',
    department: PARK_RANGER,
    job: EXTERMINATOR 
  },
  {
    firstname: 'Lia',
    surname: 'Sutherland',
    department: PARK_VISITOR,
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Sarah',
    surname: 'Sutherland',
    department: PARK_RANGER,
    job: ZOO_KEEPER
  },
  {
    firstname: 'Chris',
    surname: 'Taylor',
    department: PARK_RANGER,
    job: MECHANIC
  },
  {
    firstname: 'Jordan',
    surname: 'Taylor',
    department: PARK_RANGER,
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Derek',
    surname: 'Train',
    department: DIRECTOR,
    job: DIRECTOR_OF_LOGISTICS
  },
  {
    firstname: 'Martin',
    surname: 'Train',
    department: DINOSAUR_EXPERT,
    job: HERB_SPECIALIST
  },
  {
    firstname: 'Simon',
    surname: 'Train',
    department: DINOSAUR_EXPERT,
    job: ZOO_KEEPER
  },
  {
    firstname: 'Amy',
    surname: 'Turner',
    department: DINOSAUR_EXPERT,
    job: VET_ASS
  },
  {
    firstname: 'Becki',
    surname: 'Turner',
    department: PARK_RANGER,
    job: TOUR_GUIDE
  },
  {
    firstname: 'Dave',
    surname: 'Turner',
    department: PARK_RANGER,
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Jenny',
    surname: 'Turner',
    department: PARK_RANGER,
    job: TOUR_GUIDE
  },
  {
    firstname: 'Joshua',
    surname: 'Turner',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Tommy',
    surname: 'Turner',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Tamás',
    surname: 'Tóth',
    department: PARK_RANGER,
    job: WEAPONS_SPECIALIST
  },
  {
    firstname: 'Ben',
    surname: 'Ward',
    department: PARK_RANGER,
    job: RC_TECHNICIAN
  },
  {
    firstname: 'Alex',
    surname: 'Warner',
    department: PARK_RANGER,
    job: BIOCHEMIST
  },
  {
    firstname: 'Gemma',
    surname: 'Warner',
    department: PARK_RANGER,
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Diane',
    surname: 'Weare',
    department: PARK_RANGER,
    job: PALEONTOLOGIST
  },
  {
    firstname: 'Finn',
    surname: 'Weare',
    department: PARK_VISITOR,
    job: HERB_HELPER
  },
  {
    firstname: 'Simon',
    surname: 'Weare',
    department: EMBRYONICS,
    job: EMBRYONICS_ADMIN
  },
  {
    firstname: 'Amy',
    surname: 'Wirtz',
    department: DINOSAUR_EXPERT,
    job: VET_SUR
  },
  {
    firstname: 'Katie',
    surname: 'Wood',
    department: DIRECTOR,
    job: DIRECTOR_OF_OPERATIONS
  },
  {
    firstname: 'Tasnim',
    surname: 'Zaman',
    department: DINOSAUR_EXPERT,
    job: EMBRYOLOGIST
  }
];

export default guests;
