import { Job } from '../definitions'
import {
  OWNERS,
  DIRECTOR,
  PARK_RANGER,
  CUSTOMER_SUPPORT,
  SECURITY,
  ENGINEERING,
  LABORATORY,
  TECHNOLOGY,
} from './departments'

// Owners
export const OWNER: Job = {
  title: 'Owner',
  department: OWNERS,
  description: 'Yessss',
  displayOrder: 1,
}

// Directors
export const DIRECTOR_OF_SECURITY: Job = {
  title: 'Director of Security',
  department: DIRECTOR,
  description:
    'I try to make things secure, or at the very least I give it a go',
  displayOrder: 1,
}
export const DIRECTOR_OF_FINANCE: Job = {
  title: 'Director of Finance',
  department: DIRECTOR,
  description:
    "I manage the money, we spared no expense, which probably means I didn't do my job.",
  displayOrder: 2,
}
export const DIRECTOR_OF_LOGISTICS: Job = {
  title: 'Director of Logistics',
  department: DIRECTOR,
  description: 'I move things from A to B and sometimes C',
  displayOrder: 3,
}
export const DIRECTOR_OF_PUBLIC_RELATIONS: Job = {
  title: 'Director of Public Relations',
  department: DIRECTOR,
  description: 'Makes us look good, even when the dinosaurs eat the tourists',
  displayOrder: 4,
}
export const DIRECTOR_OF_ENGINEERING: Job = {
  title: 'Director of Engineering',
  department: DIRECTOR,
  description: 'Directs the engineering process',
  displayOrder: 5,
}
export const DIRECTOR_OF_OPERATIONS: Job = {
  title: 'Director of Operations',
  department: DIRECTOR,
  description: 'I do everything but nothing',
  displayOrder: 6,
}

// Lab Jobs
export const HEAD_OF_MICROBIOLOGY: Job = {
  title: 'Head of Microbiology',
  department: LABORATORY,
  displayOrder: 1,
  description: 'I oversee the Microbiology department.',
}
export const VET_SUR: Job = {
  title: 'Veterinary Surgeon',
  department: LABORATORY,
  displayOrder: 2,
  description:
    'I safeguard the health and welfare of the dinosaurs. In addition to this, I use my practical skills and knowledge of animal physiology, nutrition and medicine to diagnose illnesses, prescribe medicines and perform surgery.',
}
export const VET_ASS: Job = {
  title: 'Veterinary Assistant',
  department: LABORATORY,
  displayOrder: 3,
  description:
    'I perform all aspects of routine dinosaur care. Feed dinosaurs and monitor whether their eating habits. I assist veterinarians and vet technicians with lab work as well as clean, sterilise, maintain operating rooms, examining rooms, cages, and surgical equipment.',
}
export const PALEONTOLOGIST: Job = {
  title: 'Paleontologist',
  department: LABORATORY,
  displayOrder: 4,
  description:
    'We are scientists who study fossils, the remains of ancient organisms. As well as locating and excavating fossils (which is the most visible aspect of our work), the identification, research and sharing of findings are all equally important components of the job.',
}
export const EMBRYOLOGIST: Job = {
  title: 'Embryologist',
  department: LABORATORY,
  displayOrder: 5,
  description:
    'We are responsible for retrieving eggs, assisting with in vitro fertilisation, maintaining clinical records and running tests on eggs. ',
}
export const CLINICAL_GENETICIST: Job = {
  title: 'Clinical Geneticist',
  department: LABORATORY,
  displayOrder: 6,
  description:
    'I’m a physician who diagnoses and prescribes treatment for dinosaurs with conditions that result from genetic anomalies. I also gather data and evaluates the medical histories of dinosaurs and their relatives. I also collect and analyse DNA samples. ',
}
export const BIOCHEMIST: Job = {
  title: 'Biochemist',
  department: LABORATORY,
  displayOrder: 7,
  description:
    'As a biochemist, we research the chemical properties of living organisms such as cells, plants, animals and humans. This includes studying biological processes, genetics, organism growth and disease. Regular work consists of conducting experiments and assessing the outcomes.',
}
export const ETHOLOGIST: Job = {
  title: 'Ethologist',
  department: LABORATORY,
  displayOrder: 8,
  description:
    'We apply principles of animal behaviour science while studying how animals interact with each other and their environments. In addition to this, we research an animal’s methods of communication, instinctual responses, learning methods, psychology, and group interaction skills.',
}

// ENGINEERING
export const PILOT: Job = {
  title: 'Park Pilot',
  department: ENGINEERING,
  displayOrder: 1,
  description:
    "Where you headed? I'll get you there in one piece (most of the time)",
}
export const MECHANIC: Job = {
  title: 'Mechanic',
  department: ENGINEERING,
  displayOrder: 2,
  description:
    'I’m responsible for inspecting and repairing vehicles, machinery, and light trucks. Also known as Service Technicians, us professionals oversee maintenance inspections, monitor inventory, assemble mechanical components, and perform repairs.',
}
export const RC_TECHNICIAN: Job = {
  title: 'RC Unit Technician',
  department: ENGINEERING,
  displayOrder: 3,
  description: 'I like playing with remote control cars',
}

// CUSTOMER SUPPORT
export const HEAD_OF_ACCOMODATION: Job = {
  title: 'Head of Accomodation',
  department: CUSTOMER_SUPPORT,
  displayOrder: 1,
  description: "You're okay with sleeping on the floor right?",
}
export const TOUR_GUIDE: Job = {
  title: 'Tour Guide',
  displayOrder: 2,
  department: CUSTOMER_SUPPORT,
  description:
    'We accompany groups of visitors to tourist attractions, whether on day trips or longer visits, and give them information and insights that help them make the most of the experience.',
}

// PARK_RANGER
export const ANIMAL_SPECIALIST: Job = {
  title: 'Animal Specialist',
  department: PARK_RANGER,
  displayOrder: 1,
  description:
    'Our core duties involve assisting veterinarian’s in a variety of tasks, including but not limited to taking X-rays, giving injections or performing routine laboratory tests. Animal specialists are also needed in basic care, therefore we feed, clean the animals and additionally clean out their enclosures.',
}
export const HERB_SPECIALIST: Job = {
  title: 'Herbivore Specialist',
  department: PARK_RANGER,
  displayOrder: 2,
  description:
    'We specialise in looking after and maintain the welfare of Herbivore dinosaurs. We are also responsible for looking after the Herbivore Helpers. ',
}
export const ZOO_KEEPER: Job = {
  title: 'Zoo Keeper',
  department: PARK_RANGER,
  displayOrder: 3,
  description:
    'My duties are feeding, maintaining and cleaning the animals, diet preparation, record keeping, exhibit maintenance and providing environmental enrichment for the animals in their care. We also talk about experiences with the animal, and answer questions.',
}
export const RAPTOR_WRANGLER: Job = {
  title: 'Raptor Wrangler',
  department: PARK_RANGER,
  displayOrder: 4,
  description:
    'My job is to create training regimes for the raptors as well as providing general care for them, such as cleaning habitats or sleeping areas, and familiarising them with human voices and contact. ',
}
export const HERB_HELPER: Job = {
  title: 'Herbivore Helper',
  department: PARK_RANGER,
  displayOrder: 5,
  description:
    'I help feed and look after the herbivore dinosaurs. They have a special diet which consists of only eating plants and grass. ',
}
export const WORK_EXPERIENCE: Job = {
  title: 'Work Experience',
  department: PARK_RANGER,
  displayOrder: 6,
  description:
    'By being on work experience, I can gain valuable knowledge by experiencing different scenarios and analysing outcomes. ',
}

// SECURITY
export const HEAD_OF_SECURITY: Job = {
  title: 'Head of Security',
  department: SECURITY,
  displayOrder: 1,
  description:
    'I am reponsilble for the security throughout the park, I report to the Director of Security',
}
export const WEAPONS_SPECIALIST: Job = {
  title: 'Weapons Specialist',
  department: SECURITY,
  displayOrder: 2,
  description:
    'I am  someone who evaluates, installs, tests, and maintains the wide variety of systems used in weapons. Specialised knowledge is required to operate technical equipment, resolve complex problems, and provide and interpret information. This is vital as I protect the visitors who come to see the dinosaurs at our park.',
}
export const EXTERMINATOR: Job = {
  title: 'Exterminator',
  department: SECURITY,
  displayOrder: 3,
  description: 'I kill things',
}
export const MARKSMAN: Job = {
  title: 'Marksman 1st Class',
  department: SECURITY,
  displayOrder: 4,
  description: 'I shoot things',
}
export const SECURITY_OFFICER: Job = {
  title: 'Security Officer',
  department: SECURITY,
  displayOrder: 5,
  description:
    'We secure premises and personnel by patrolling property; monitoring surveillance equipment; inspecting buildings, equipment, and access points; permitting entry. We Maintain environment by monitoring and setting building and equipment controls.',
}

// Technology
export const HEAD_SOFTWARE_DEVELOPMENT: Job = {
  title: 'Head of Software Development',
  department: TECHNOLOGY,
  description: '"Sounds like a 5 minute job"',
  displayOrder: 1,
}
export const SYSTEMS_SECURITY_ADMIN: Job = {
  title: 'Systems Security Admin',
  department: TECHNOLOGY,
  description: 'I administer the system security',
  displayOrder: 5,
}
export const HEAD_OF_NETWORK_SUPPORT: Job = {
  title: 'Head of Network Support',
  department: TECHNOLOGY,
  description: 'Have you tried turning it off an on again?',
  displayOrder: 2,
}
export const SOFTWARE_ENGINEER: Job = {
  title: 'Software Engineer',
  department: TECHNOLOGY,
  description: 'I add bugs',
  displayOrder: 4,
}
export const SYSTEMS_DATABASE_ENGINEER: Job = {
  title: 'Systems Database Engineer',
  department: TECHNOLOGY,
  description:
    "UPDATE payroll SET monthly_base_pay = 99999999 WHERE role = 'Systems Database Engineer'",
  displayOrder: 3,
}
