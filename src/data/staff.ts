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
  ANIMAL_SPECIALIST,
  SYSTEMS_SECURITY_ADMIN,
  HEAD_OF_SECURITY,
  HEAD_OF_NETWORK_SUPPORT,
  DIRECTOR_OF_LOGISTICS,
  DIRECTOR_OF_SECURITY,
  DIRECTOR_OF_FINANCE,
  DIRECTOR_OF_ENGINEERING,
  DIRECTOR_OF_PUBLIC_RELATIONS,
  DIRECTOR_OF_OPERATIONS,
  HEAD_OF_ACCOMODATION,
  PILOT,
  SYSTEMS_DATABASE_ENGINEER,
  RC_TECHNICIAN,
  HEAD_SOFTWARE_DEVELOPMENT
} from './jobs'

const guests: StaffMember[] = [
  {
    uuid: '0844d669-02cd-4bf7-807a-780db2442692',
    firstname: 'Christopher',
    surname: 'Train',
    job: OWNER
  },
  {
    uuid: 'bee5337f-7a19-4264-ab10-1592552c5436',
    firstname: 'Jessica',
    surname: 'Train',
    job: OWNER
  },
  {
    uuid: 'be96f56a-11e3-4437-9816-afd73659fbc7',
    firstname: 'Lara',
    surname: 'Train',
    job: OWNER
  },
  {
    uuid: '0c513e2a-c764-4d5c-9001-5165890e2387',
    firstname: 'James',
    surname: 'Allcock',
    job: MECHANIC
  },
  {
    uuid: '9f36d388-75c7-4a65-91cd-65bb15c190f6',
    firstname: 'George',
    surname: 'Bridges',
    job: HERB_HELPER
  },
  {
    uuid: 'b0f8d0a7-56ef-4729-b430-47df51fb0cbe',
    firstname: 'Harry',
    surname: 'Bridges',
    job: HERB_HELPER
  },
  {
    uuid: '6cd24226-345d-495c-9376-bc6ce5407e7f',
    firstname: 'Jay',
    surname: 'Bridges',
    job: HEAD_OF_SECURITY
  },
  {
    uuid: '4e135176-7f50-4402-8ab3-1eb59d96a206',
    firstname: 'Louise',
    surname: 'Bridges',
    job: BIOCHEMIST
  },
  {
    uuid: '4023094d-37d4-496b-9116-72f88a5d312f',
    firstname: 'Toni',
    surname: 'Priest',
    job: ETHOLOGIST
  },
  {
    uuid: '11d53b9d-c4c7-4275-8f49-ce75300363d0',
    firstname: 'Jon',
    surname: 'Chadwick',
    job: ZOO_KEEPER,
    customAvatarUrl: '/staff/jon_chadwick.gif'
  },
  {
    uuid: '8395401b-e204-4710-9521-48fa55033449',
    firstname: 'Pauline',
    surname: 'Chadwick',
    job: ETHOLOGIST
  },
  {
    uuid: 'feca5e40-0de8-427c-ac4c-76682bfe77e3',
    firstname: 'Jamie',
    surname: 'Channings',
    job: EXTERMINATOR
  },
  {
    uuid: '4d6027d2-f521-45e8-8bff-b2c43b03864c',
    firstname: 'Kerry',
    surname: 'Clewes',
    job: CLINICAL_GENETICIST
  },
  {
    uuid: '88bb87ae-1ff3-4656-9642-7ebc185b53e8',
    firstname: 'Dominic',
    surname: 'Clifford',
    job: SOFTWARE_ENGINEER
  },
  {
    uuid: 'f01b212c-4930-467f-8a54-e32539b6d398',
    firstname: 'Jennie',
    surname: 'Maguire',
    job: CLINICAL_GENETICIST
  },
  {
    uuid: '818fef1a-8708-451e-ae1b-783d93cc3ee1',
    firstname: 'Kayley',
    surname: 'Cotterill',
    job: PALEONTOLOGIST
  },
  {
    uuid: '8d8d62ee-c3e2-4918-9303-e561ac635362',
    firstname: 'Maria',
    surname: 'Dagleri',
    job: EMBRYOLOGIST
  },
  {
    uuid: '9cdf5d63-60a8-4649-ba5e-0efd244580bc',
    firstname: 'Seamus',
    surname: 'Delaney',
    job: HERB_HELPER
  },
  {
    uuid: 'e57e817e-255b-4729-98fb-b0bd5b9ec679',
    firstname: 'Charlie',
    surname: 'Evans',
    job: RAPTOR_WRANGLER
  },
  {
    uuid: 'b11631fd-c60e-49fd-87e2-29efe5a5920b',
    firstname: 'Freddie',
    surname: 'Fenwick',
    job: HERB_HELPER
  },
  {
    uuid: '810bb4c7-69ee-487f-9cb7-aeb72537eab7',
    firstname: 'Glen',
    surname: 'Fenwick',
    job: DIRECTOR_OF_SECURITY
  },
  {
    uuid: '97b0ff85-5321-4c4a-8865-dcc2d0113b91',
    firstname: 'Jackie',
    surname: 'Fenwick',
    job: ZOO_KEEPER
  },
  {
    uuid: 'd9bf3524-aac4-4acf-976f-30a8d11977c8',
    firstname: 'Karen',
    surname: 'Fenwick',
    job: DIRECTOR_OF_FINANCE
  },
  {
    uuid: '3caa101b-dd8c-4c83-b0b3-25c68929763d',
    firstname: 'Lee',
    surname: 'Fenwick',
    job: DIRECTOR_OF_PUBLIC_RELATIONS
  },
  {
    uuid: '0385d780-e6a4-448c-93bf-8892f3722e7b',
    firstname: 'Stavros',
    surname: 'Fountoulakis',
    nicknames: ['Stavvy'],
    job: DIRECTOR_OF_ENGINEERING
  },
  {
    uuid: 'df81b9ce-ab47-4de7-887f-042fc87c576b',
    firstname: 'Hannah',
    surname: 'Francis',
    job: PALEONTOLOGIST
  },
  {
    uuid: '16d30ed4-e27d-4864-be41-ca22ed6c437e',
    firstname: 'Josie',
    surname: 'Gotch',
    job: ETHOLOGIST
  },
  {
    uuid: '7071d85e-7af6-4560-b143-94747d9fc100',
    firstname: 'Belinda',
    surname: 'Harris',
    job: EMBRYOLOGIST
  },
  {
    uuid: 'acdf08d6-51d4-4d24-be54-ae985a4cdd16',
    firstname: 'Caroline',
    surname: 'Harris',
    nicknames: ['Cas', 'Caz'],
    job: TOUR_GUIDE
  },
  {
    uuid: '543a41b9-0253-4cc7-b23c-a3132ad13a27',
    firstname: 'Jayden',
    surname: 'Harris',
    job: WORK_EXPERIENCE
  },
  {
    uuid: '0ca31dd2-48dd-4952-b05e-a8de6261cdb8',
    firstname: 'Laila',
    surname: 'Harris',
    job: WORK_EXPERIENCE
  },
  {
    uuid: '75eb7a56-24d6-425a-bd25-454303ab7a60',
    firstname: 'Lisa',
    surname: 'Harris',
    job: BIOCHEMIST
  },
  {
    uuid: '0e25ebae-0773-4779-864d-3d87cc734efc',
    firstname: 'Paul',
    surname: 'Harris',
    job: MECHANIC
  },
  {
    uuid: '5abfbf5d-6cd4-4110-9569-00b169caf36b',
    firstname: 'Ian',
    surname: 'Hubbard-Harris',
    job: VET_SUR
  },
  {
    uuid: '6de1d0bf-47c6-4982-9bf6-b3f2dd37e671',
    firstname: 'Richard',
    surname: 'Hubbard-Harris',
    job: CLINICAL_GENETICIST
  },
  {
    uuid: '84853665-9290-4590-a1ee-94d89d86dc48',
    firstname: 'Adam',
    surname: 'Jones',
    job: MECHANIC
  },
  {
    uuid: '487ad999-66f4-4d2a-ba77-934a54d1ea4f',
    firstname: 'Dave',
    surname: 'Jones',
    job: HEAD_OF_ACCOMODATION
  },
  {
    uuid: '8983e23f-baf7-4409-b4c8-fef10f534e31',
    firstname: 'Gareth',
    surname: 'Jones',
    nicknames: ['Gaz'],
    job: PILOT
  },
  {
    uuid: '57314794-23b2-4362-8d14-178fb0123d1a',
    firstname: 'Hayden',
    surname: 'Jones',
    job: TOUR_GUIDE
  },
  {
    uuid: 'f3ce067a-e75d-4816-ab08-18653948bd5e',
    firstname: 'Jaxon',
    surname: 'Jones',
    job: HERB_HELPER
  },
  {
    uuid: 'fadb4e52-35bc-4df6-be95-e2b1a8e72787',
    firstname: 'Suraiya',
    surname: 'Jones',
    job: HERB_HELPER
  },
  {
    uuid: '54e6433c-139f-42bc-9642-5c0f542bdcde',
    firstname: 'Marc',
    surname: 'Jones',
    job: WEAPONS_SPECIALIST
  },
  {
    uuid: '6171a46b-e2f7-4451-beba-09fcf920f9b7',
    firstname: 'Robert',
    surname: 'Jones',
    job: ETHOLOGIST
  },
  {
    uuid: '158479ca-1a71-4a76-b730-66acdf8e0ac4',
    firstname: 'Sue',
    surname: 'Jones',
    job: TOUR_GUIDE
  },
  {
    uuid: '35d13c10-c584-4491-86d9-35ac5c110a64',
    firstname: 'Josh',
    surname: 'Maguire',
    job: EXTERMINATOR
  },
  {
    uuid: '156d7247-b282-4b9e-abfd-2f3720f7f91e',
    firstname: 'Lauren',
    nicknames: ['Loz'],
    surname: 'Mansell',
    job: VET_SUR
  },
  {
    uuid: '073c6e85-a368-4f3f-b3c8-c6213d6be0dc',
    firstname: 'Matt',
    surname: 'Mansell',
    job: RAPTOR_WRANGLER
  },
  {
    uuid: 'd1c274d9-320b-4eb7-90ab-a56355ec317e',
    firstname: 'Wal',
    surname: 'Mansell',
    job: HEAD_OF_NETWORK_SUPPORT
  },
  {
    uuid: '4f2d33d9-04c0-4d77-990b-a2fbf3f4cbf3',
    firstname: 'Chris',
    surname: 'Oryan',
    job: SECURITY_OFFICER
  },
  {
    uuid: 'acc11893-2f15-42ad-aef7-7947cc8e625a',
    firstname: 'Marvin',
    surname: 'Palmer',
    job: RAPTOR_WRANGLER
  },
  {
    uuid: 'a18ef4b5-343b-4990-afc0-6ac71c9f5676',
    firstname: 'Aiden',
    surname: 'Priest',
    job: WORK_EXPERIENCE
  },
  {
    uuid: '2f0a21f9-5c4b-4c63-945c-c3efdd380cf2',
    firstname: 'Ashley',
    surname: 'Priest',
    job: MARKSMAN
  },
  {
    uuid: '23df6ad4-2383-487f-8af7-dddac88398cc',
    firstname: 'Diane',
    surname: 'Priest',
    job: TOUR_GUIDE
  },
  {
    uuid: '63d70f9d-772f-4764-8178-09e587d1209e',
    firstname: 'Finley',
    surname: 'Oryan',
    job: HERB_HELPER
  },
  {
    uuid: '6e545921-d950-4086-aaea-0a3c0c7f61ec',
    firstname: 'Gary',
    surname: 'Priest',
    job: ZOO_KEEPER
  },
  {
    uuid: 'bcd86666-bd91-4112-9e86-d8fb4ffaa4b8',
    firstname: 'Nichola',
    surname: 'Priest',
    job: TOUR_GUIDE
  },
  {
    uuid: '373007a3-acca-4bda-9df8-bb0b4d1695ed',
    firstname: 'Calvin',
    surname: 'Randle',
    job: HERB_SPECIALIST
  },
  {
    uuid: '28f80b51-df11-4f13-a5bb-5fe0e44fac12',
    firstname: 'Nikki',
    surname: 'Randle',
    job: ZOO_KEEPER
  },
  {
    uuid: '3cd31fa9-a96f-4cd6-964b-044148421d31',
    firstname: 'Danni',
    surname: 'Richards',
    job: VET_SUR
  },
  {
    uuid: 'cf711c77-f77a-4ba3-a179-ae277917b898',
    firstname: 'Joshua',
    surname: 'Richardson',
    job: SECURITY_OFFICER
  },
  {
    uuid: 'c74a7b97-00a5-4064-a2a4-7a6dc5041d8f',
    firstname: 'Ping',
    surname: 'Sam',
    job: SOFTWARE_ENGINEER
  },
  {
    uuid: '34c28b4c-e196-499b-b9a9-73b780271e9e',
    firstname: 'Alison',
    surname: 'Seawright',
    nicknames: ['Yoda', 'Hummus'],
    job: HEAD_OF_MICROBIOLOGY
  },
  {
    uuid: '3b1c3271-298c-4207-9fda-e58fdcc087bb',
    firstname: 'Chris',
    surname: 'Shone',
    job: CLINICAL_GENETICIST
  },
  {
    uuid: 'a2580408-d465-4eab-9233-ee3428360d43',
    firstname: 'Andy',
    surname: 'Sutherland',
    nicknames: ['Suthy', 'Baby'],
    job: SYSTEMS_DATABASE_ENGINEER
  },
  {
    uuid: '7654bb08-9c7f-4a60-b93a-01584c9f9ae4',
    firstname: 'Lia',
    surname: 'Sutherland',
    job: HERB_HELPER
  },
  {
    uuid: 'ddd675a1-8d29-4e61-b2fe-92f620609a76',
    firstname: 'Jordan',
    surname: 'Taylor',
    job: SECURITY_OFFICER
  },
  {
    uuid: 'da766a52-c545-48ef-babd-a9516b77d380',
    firstname: 'Derek',
    surname: 'Train',
    job: DIRECTOR_OF_LOGISTICS
  },
  {
    uuid: '91291af8-b9f3-4549-8421-a5da1ee15439',
    firstname: 'Hilary',
    surname: 'Hargreaves',
    job: ZOO_KEEPER
  },
  {
    uuid: '31dfb6b6-6922-4577-af22-d78273d12693',
    firstname: 'Martin',
    surname: 'Train',
    job: HERB_SPECIALIST
  },
  {
    uuid: '81ef3e87-b17b-4ad9-80dc-b4d967e0b90a',
    firstname: 'Simon',
    surname: 'Train',
    job: ZOO_KEEPER
  },
  {
    uuid: 'b81946ec-b401-4c1c-ad58-0ea2f104f153',
    firstname: 'Amy',
    surname: 'Turner',
    job: VET_ASS
  },
  {
    uuid: 'fccb2930-6026-4083-a0a0-c85f84a5b2ea',
    firstname: 'Becki',
    surname: 'Turner',
    job: TOUR_GUIDE
  },
  {
    uuid: '65973485-cfcb-4b34-826e-3885be4a965a',
    firstname: 'Dave',
    surname: 'Turner',
    job: SECURITY_OFFICER
  },
  {
    uuid: '86b4cc6c-79e8-4172-a059-01e027403aa3',
    firstname: 'Jenny',
    surname: 'Turner',
    job: TOUR_GUIDE
  },
  {
    uuid: '2b154570-fed5-44d5-b61c-f846b04129d0',
    firstname: 'Joshua',
    surname: 'Turner',
    nicknames: ['Joshy'],
    job: HERB_HELPER
  },
  {
    uuid: 'd9a6d099-c196-4b9d-ae30-1d9c38464c18',
    firstname: 'Tommy',
    surname: 'Turner',
    job: HERB_HELPER
  },
  {
    uuid: '063b671c-0263-4272-bc90-e3da5c6e00d5',
    firstname: 'Alex',
    surname: 'Warner',
    job: BIOCHEMIST
  },
  {
    uuid: '4cc8d66d-c719-4147-a5db-32793cdaa02e',
    firstname: 'Gemma',
    surname: 'Warner',
    job: EMBRYOLOGIST
  },
  {
    uuid: '2d573488-f30e-4efc-9301-baf6e2dd2bf0',
    firstname: 'Amy',
    surname: 'Wirtz',
    job: VET_SUR
  },
  {
    uuid: '91a88a44-2b07-4d25-b99d-eff79728ab09',
    firstname: 'Katie',
    surname: 'Wood',
    job: DIRECTOR_OF_OPERATIONS
  },
  {
    uuid: 'bfb6098d-e175-409c-9cf8-a68a58ed95c1',
    firstname: 'Tasnim',
    surname: 'Zaman',
    job: EMBRYOLOGIST
  },
  {
    uuid: '2cfea64d-817f-44ce-8b1c-9d9c77d84d58',
    firstname: 'Saisha',
    surname: 'Parker',
    job: EMBRYOLOGIST
  },
  {
    uuid: 'a0dc06e6-b074-481d-b028-3aaf29a6d139',
    firstname: 'Lucy',
    surname: 'Cooper',
    job: ANIMAL_SPECIALIST
  },
  {
    uuid: '69ff8229-d958-44c6-b0ad-70d338ea149a',
    firstname: 'Elsie',
    surname: 'Robinson',
    job: HERB_HELPER
  },
  {
    uuid: '5b04568b-5d11-4261-bfed-46ef7c5aaec3',
    firstname: 'Luke',
    surname: 'Savin',
    nicknames: ['Connor', 'McGregor'],
    job: RC_TECHNICIAN
  },
  {
    uuid: 'a0553211-5e5f-4731-80bc-00488977b688',
    firstname: 'Mike',
    surname: 'Rogers',
    job: SYSTEMS_SECURITY_ADMIN
  }
]

export default guests
