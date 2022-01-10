import generateLanyard from './generate/lanyard'
import guests from './data/staff'
import generatePages from './generate/pages'
import generateCode from './generate/code'
import generateBack from './generate/back'
import { LANYARD_DIR, CODE_DIR, BACK_DIR, PAGE_DIR } from './constants/directories'
import { prepareDirectory } from './util/directory'
import _ from 'lodash'

async function start() {
  const uniqueQuests = _.uniqBy(
    guests,
    (guest) => `${guest.firstname}_${guest.surname}`
  )
  console.log('GUEST COUNT: ', uniqueQuests.length)

  await prepareDirectories()

  await Promise.all(uniqueQuests.map(generateLanyard))
  await Promise.all(uniqueQuests.map(generateCode))
  await Promise.all(uniqueQuests.map(generateBack))
  await generatePages()
}

async function prepareDirectories() {
  const directories = [LANYARD_DIR, CODE_DIR, BACK_DIR, PAGE_DIR]
  await Promise.all(directories.map(dir => prepareDirectory(dir)))
}



start().catch(console.error)
