import gm from 'gm'
import { IGuest } from '../interfaces/index';
import { drawText, drawRectangle, placeImage } from '../util/draw'
import { ORANGE, RED, BLACK } from '../data/colours'

export default function generate (guest: IGuest) {
  let process = gm(400, 560, guest.role.background)
  const path = `./output/${guest.firstname}_${guest.surname}.png`.toLowerCase()

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

  process = drawText({ 
    gm: process, 
    text: guest.role.title, 
    position: [guest.role.startAtPostition, 330], 
    font: '/Library/Fonts/AdobeGothicStd-Bold.otf', 
    fontSize: 34, 
    colour: guest.role.fontColour || RED 
  })

  process = drawText({ 
    gm: process, 
    text: `${guest.firstname} ${guest.surname}`, 
    position: [160, 380], 
    font: '/Library/Fonts/AdobeGothicStd-Bold.otf', 
    fontSize: 25, 
    colour: BLACK 
  })
  
  process = drawText({ 
    gm: process, 
    text: guest.role.access, 
    position: [160, 410], 
    font: '/Library/Fonts/AdobeGothicStd-Bold.otf', 
    fontSize: 25, 
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

  console.log('Processing: ', path)
  return process.write(path, (err : Error) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Generated: ', path)
    }
  })
}
  