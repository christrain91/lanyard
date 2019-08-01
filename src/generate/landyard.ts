import gm from 'gm'
import { IGuest } from '../interfaces/index';
import { drawText, drawRectangle, placeImage } from '../util/draw'
import { ORANGE, RED, BLACK } from '../data/colours'
import { LANYARD } from '../data/dimensions';

export default function generate (guest: IGuest) : Promise<string> {
  return new Promise((resolve, reject) => {
    const path = `./output/lanyards/${guest.firstname}_${guest.surname}.png`.toLowerCase()

    const process = drawLanyard(guest)
  
    process.write(path, (error : Error) => {
      if (error) {
        reject(error)
      } else {
        resolve(path)
      }
    })
  })

}

function drawLanyard (guest: IGuest) : gm.State {
  const [x, y] = LANYARD
  let process = gm(x, y, guest.department.background)

  process = drawLanyardImages(process)
  process = drawLanyardText(process, guest)

  return process
}

function drawLanyardImages (process: gm.State) : gm.State {
  process = drawRectangle({ 
    gm: process, 
    colour: ORANGE, 
    dimensions: [0, 350, 400, 520] 
  })

  process = placeImage({
    gm: process,
    filename: 'ingen.png',
    position: [10, 360],
    size: [137, 137]
  })

  process = placeImage({
    gm: process,
    filename: 'JPLogo.png',
    position: [-20, -20],
    size: [440, 330]
  })

  process = placeImage({
    gm: process,
    filename: 'barcode.png',
    position: [160, 430],
    size: [226, 82.5]
  })

 

  return process
}

function drawLanyardText (process: gm.State, guest: IGuest) : gm.State {
  const name = `${guest.firstname} ${guest.surname}`
  const nameSize = name.length > 18 ? 23 : 25

  process = drawText({ 
    gm: process, 
    text: guest.department.title.toUpperCase(), 
    position: [guest.department.startAtPostition, 330], 
    font: '/Library/Fonts/AdobeGothicStd-Bold.otf', 
    fontSize: 34, 
    colour: guest.department.fontColour || RED 
  })

  process = drawText({ 
    gm: process, 
    text: name, 
    position: [160, 380], 
    font: '/Library/Fonts/AdobeGothicStd-Bold.otf', 
    fontSize: nameSize, 
    colour: BLACK 
  })
  
  process = drawText({ 
    gm: process, 
    text: guest.job, 
    position: [160, 410], 
    font: '/Library/Fonts/AdobeGothicStd-Bold.otf', 
    fontSize: 14, 
    colour: RED 
  })

  process = drawText({
    gm: process,
    text: 'THIS PASS IS NOT TRANSFERABLE',
    position: [44, 546],
    font: '/System/Library/Fonts/SFCompactDisplay-Regular.otf',
    fontSize: 22,
    colour: ORANGE
  })

  return process
}
  