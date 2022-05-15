import generateLanyard from './generate/lanyard'
import staff from './data/staff'
import generateCode from './generate/code'
import generateBack from './generate/back'
import { LANYARD_DIR, CODE_DIR, BACK_DIR } from './constants/directories'
import { prepareDirectory } from './util/directory'
import _ from 'lodash'

async function start() {
  console.log('STAFF COUNT: ', staff.length)

  await prepareDirectories()

  await Promise.all(staff.map(generateLanyard))
  await Promise.all(staff.map(generateCode))
  await Promise.all(staff.map(generateBack))
}

async function prepareDirectories() {
  const directories = [LANYARD_DIR, CODE_DIR, BACK_DIR]
  await Promise.all(directories.map((dir) => prepareDirectory(dir)))
}

start().catch(console.error)
