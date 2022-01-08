import generateLanyard from './generate/lanyard'
import guests from './data/staff'
import generatePages from './generate/pages'
import generateCode from './generate/code'
import generateBack from './generate/back'

async function start() {
  console.log('GUEST COUNT: ', guests.length)
  await Promise.all(guests.map(generateLanyard))
  await Promise.all(guests.map(generateCode))
  await Promise.all(guests.map(generateBack))
  await generatePages()
}

start().catch(console.error)
