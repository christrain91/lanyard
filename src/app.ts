
import generate from './generate/landyard';
import guests from './data/guests';
import generatePages from './generate/pages'

async function start () {
  await Promise.all(guests.map(generate))
  await generatePages('/output/lanyards')
}

start().catch(console.error)

