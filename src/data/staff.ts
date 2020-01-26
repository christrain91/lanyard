import { StaffMember } from '../definitions'
import {
  OWNER,
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
  DIRECTOR_OF_OPERATIONS,
  HEAD_SOFTWARE_DEVELOPMENT
} from './jobs'

const guests: StaffMember[] = [
  {
    firstname: 'Christopher',
    surname: 'Train',
    job: OWNER
  },
  {
    firstname: 'Jessica',
    surname: 'Train',
    job: OWNER
  },
  {
    firstname: 'Lara',
    surname: 'Train',
    job: OWNER
  },
  {
    firstname: 'James',
    surname: 'Allcock',
    job: MECHANIC
  },
  {
    firstname: 'Emily',
    surname: 'Blakemore',
    job: ANIMAL_SPECIALIST
  },
  {
    firstname: 'Paul',
    surname: 'Blakemore',
    job: SYSTEMS_SECURITY_ADMIN
  },
  {
    firstname: 'Riley',
    surname: 'Blakemore',
    job: HERB_HELPER
  },
  {
    firstname: 'George',
    surname: 'Bridges',
    job: HERB_HELPER
  },
  {
    firstname: 'Harry',
    surname: 'Bridges',
    job: HERB_HELPER
  },
  {
    firstname: 'Jay',
    surname: 'Bridges',
    job: HEAD_OF_SECURITY
  },
  {
    firstname: 'Louise',
    surname: 'Bridges',
    job: BIOCHEMIST
  },
  {
    firstname: 'Toni',
    surname: 'Cave',
    job: ETHOLOGIST
  },
  {
    firstname: 'Jon',
    surname: 'Chadwick',
    job: ZOO_KEEPER,
    customAvatarUrl: '/staff/jon_chadwick.gif'
  },
  {
    firstname: 'Pauline',
    surname: 'Chadwick',
    job: ETHOLOGIST
  },
  {
    firstname: 'Jamie',
    surname: 'Channings',
    job: EXTERMINATOR
  },
  {
    firstname: 'Dominic',
    surname: 'Clifford',
    job: SOFTWARE_ENGINEER
  },
  {
    firstname: 'Jennie',
    surname: 'Collins',
    job: CLINICAL_GENETICIST
  },
  {
    firstname: 'Kayley',
    surname: 'Cotterill',
    job: PALEONTOLOGIST
  },
  {
    firstname: 'Maria',
    surname: 'Dagleri',
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Seamus',
    surname: 'Delaney',
    job: HERB_HELPER
  },
  {
    firstname: 'Jayde',
    surname: 'Edmunds',
    job: VET_SUR
  },
  {
    firstname: 'Kayleigh',
    surname: 'Edmunds',
    job: BIOCHEMIST
  },
  {
    firstname: 'Charlie',
    surname: 'Evans',
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Freddie',
    surname: 'Fenwick',
    job: HERB_HELPER
  },
  {
    firstname: 'Glen',
    surname: 'Fenwick',
    job: DIRECTOR_OF_SECURITY
  },
  {
    firstname: 'Jackie',
    surname: 'Fenwick',
    job: ZOO_KEEPER
  },
  {
    firstname: 'Karen',
    surname: 'Fenwick',
    job: DIRECTOR_OF_FINANCE
  },
  {
    firstname: 'Lee',
    surname: 'Fenwick',
    job: HEAD_OF_NETWORK_SUPPORT
  },
  {
    firstname: 'Stavros',
    surname: 'Fountoulakis',
    nicknames: ['Stavvy'],
    job: DIRECTOR_OF_ENGINEERING
  },
  {
    firstname: 'Hannah',
    surname: 'Francis',
    job: PALEONTOLOGIST
  },
  {
    firstname: 'Megan',
    surname: 'Goodwin',
    job: ETHOLOGIST
  },
  {
    firstname: 'Josie',
    surname: 'Gotch',
    job: ETHOLOGIST
  },
  {
    firstname: 'Carole',
    surname: 'Hale',
    job: DIRECTOR_OF_PUBLIC_RELATIONS
  },
  {
    firstname: 'Belinda',
    surname: 'Harris',
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Caroline',
    surname: 'Harris',
    nicknames: ['Cas', 'Caz'],
    job: TOUR_GUIDE
  },
  {
    firstname: 'Jayden',
    surname: 'Harris',
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Laila',
    surname: 'Harris',
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Lisa',
    surname: 'Harris',
    job: BIOCHEMIST
  },
  {
    firstname: 'Luke',
    surname: 'Harris',
    job: PALEONTOLOGIST
  },
  {
    firstname: 'Paul',
    surname: 'Harris',
    job: MECHANIC
  },
  {
    firstname: 'Ian',
    surname: 'Hubbard-Harris',
    job: VET_SUR
  },
  {
    firstname: 'Richard',
    surname: 'Hubbard-Harris',
    job: CLINICAL_GENETICIST
  },
  {
    firstname: 'Adam',
    surname: 'Jones',
    job: MECHANIC
  },
  {
    firstname: 'Dave',
    surname: 'Jones',
    job: HEAD_OF_ACCOMODATION
  },
  {
    firstname: 'Gareth',
    surname: 'Jones',
    nicknames: ['Gaz'],
    job: PILOT
  },
  {
    firstname: 'Hayden',
    surname: 'Jones',
    job: TOUR_GUIDE
  },
  {
    firstname: 'Jaxon',
    surname: 'Jones',
    job: HERB_HELPER
  },
  {
    firstname: 'Suraiya',
    surname: 'Jones',
    job: HERB_HELPER
  },
  {
    firstname: 'Jeni',
    surname: 'Jones',
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Marc',
    surname: 'Jones',
    job: WEAPONS_SPECIALIST
  },
  {
    firstname: 'Robert',
    surname: 'Jones',
    job: ETHOLOGIST
  },
  {
    firstname: 'Sue',
    surname: 'Jones',
    job: TOUR_GUIDE
  },
  {
    firstname: 'Tim',
    surname: 'Jones',
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Thomas',
    nicknames: ['Tom', 'Willy', 'Willie', 'William'],
    surname: 'Kilgallon',
    job: HEAD_SOFTWARE_DEVELOPMENT
  },
  {
    firstname: 'Josh',
    surname: 'Maguire',
    job: EXTERMINATOR
  },
  {
    firstname: 'Lauren',
    nicknames: ['Loz'],
    surname: 'Mansell',
    job: VET_SUR
  },
  {
    firstname: 'Matt',
    surname: 'Mansell',
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Wal',
    surname: 'Mansell',
    job: MECHANIC
  },
  {
    firstname: 'Chris',
    surname: 'Oryan',
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Marvin',
    surname: 'Palmer',
    job: RAPTOR_WRANGLER
  },
  {
    firstname: 'Aiden',
    surname: 'Priest',
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Ashley',
    surname: 'Priest',
    job: MARKSMAN
  },
  {
    firstname: 'Diane',
    surname: 'Priest',
    job: TOUR_GUIDE
  },
  {
    firstname: 'Finley',
    surname: 'Priest',
    job: HERB_HELPER
  },
  {
    firstname: 'Gary',
    surname: 'Priest',
    job: ZOO_KEEPER
  },
  {
    firstname: 'Nichola',
    surname: 'Priest',
    job: TOUR_GUIDE
  },
  {
    firstname: 'Calvin',
    surname: 'Randle',
    job: HERB_SPECIALIST
  },
  {
    firstname: 'Nikki',
    surname: 'Randle',
    job: ZOO_KEEPER
  },
  {
    firstname: 'Danni',
    surname: 'Richards',
    job: VET_SUR
  },
  {
    firstname: 'Joshua',
    surname: 'Richardson',
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Ping',
    surname: 'Sam',
    job: SOFTWARE_ENGINEER
  },
  {
    firstname: 'Alison',
    surname: 'Seawright',
    nicknames: ['Yoda', 'Hummus'],
    job: HEAD_OF_MICROBIOLOGY
  },
  {
    firstname: 'Chris',
    surname: 'Shone',
    job: CLINICAL_GENETICIST
  },
  {
    firstname: 'Andy',
    surname: 'Sutherland',
    nicknames: ['Suthy', 'Baby'],
    job: SYSTEMS_DATABASE_ENGINEER
  },
  {
    firstname: 'Lia',
    surname: 'Sutherland',
    job: WORK_EXPERIENCE
  },
  {
    firstname: 'Sarah',
    surname: 'Sutherland',
    job: ZOO_KEEPER
  },
  {
    firstname: 'Chris',
    surname: 'Taylor',
    job: MECHANIC
  },
  {
    firstname: 'Jordan',
    surname: 'Taylor',
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Derek',
    surname: 'Train',
    job: DIRECTOR_OF_LOGISTICS
  },
  {
    firstname: 'Martin',
    surname: 'Train',
    job: HERB_SPECIALIST
  },
  {
    firstname: 'Simon',
    surname: 'Train',
    job: ZOO_KEEPER
  },
  {
    firstname: 'Amy',
    surname: 'Turner',
    job: VET_ASS
  },
  {
    firstname: 'Becki',
    surname: 'Turner',
    job: TOUR_GUIDE
  },
  {
    firstname: 'Dave',
    surname: 'Turner',
    job: SECURITY_OFFICER
  },
  {
    firstname: 'Jenny',
    surname: 'Turner',
    job: TOUR_GUIDE
  },
  {
    firstname: 'Joshua',
    surname: 'Turner',
    nicknames: ['Joshy'],
    job: HERB_HELPER
  },
  {
    firstname: 'Tommy',
    surname: 'Turner',
    job: HERB_HELPER
  },
  {
    firstname: 'Ben',
    surname: 'Ward',
    job: RC_TECHNICIAN
  },
  {
    firstname: 'Alex',
    surname: 'Warner',
    job: BIOCHEMIST
  },
  {
    firstname: 'Gemma',
    surname: 'Warner',
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Amy',
    surname: 'Wirtz',
    job: VET_SUR
  },
  {
    firstname: 'Katie',
    surname: 'Wood',
    job: DIRECTOR_OF_OPERATIONS
  },
  {
    firstname: 'Tasnim',
    surname: 'Zaman',
    job: EMBRYOLOGIST
  },
  {
    firstname: 'Saisha',
    surname: 'Parker',
    job: EMBRYOLOGIST
  }
]

export default guests
