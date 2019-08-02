import gm from 'gm'
import { IGuest } from '../interfaces/index'
import { placeImage, drawText, drawRectangle } from '../util/draw'
import { LANYARD } from '../data/dimensions'
import { ORANGE, BLACK } from '../data/colours';

export default function generate (guest: IGuest) : Promise<string> {
  return new Promise((resolve, reject) => {
    const path = `./output/backs/${guest.surname}_${guest.firstname}.png`.toLowerCase()

    const process = drawBack(guest)
  
    process.write(path, (error : Error) => {
      if (error) {
        reject(error)
      } else {
        resolve(path)
      }
    })
  })

}

function drawBack (guest: IGuest) : gm.State {
  const [x, y] = LANYARD
  let back = gm(x, y, guest.department.background)

  drawRectangle({ 
    gm: back, 
    colour: ORANGE, 
    dimensions: [0, 100, 400, 520] 
  })

  placeImage({
    gm: back,
    path: `${process.cwd()}/output/codes/${guest.surname}_${guest.firstname}.png`,
    position: [50, 140],
    size: [300, 300]
  })

  placeImage({
    gm: back,
    filename: 'JPLogo.png',
    position: [135, 0],
    size: [440 / 3.5, 330 / 3.5]
  })

  drawText({
    gm: back,
    text: 'Scan QR code to view your online profile',
    position: [30, 476],
    font: '/System/Library/Fonts/SFCompactDisplay-Regular.otf',
    fontSize: 20,
    colour: BLACK
  })

  return back
}
