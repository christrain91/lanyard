import gm from 'gm'
import { StaffMember } from '../definitions/index'
import { placeImage, drawText, drawRectangle } from '../util/draw'
import { LANYARD } from '../data/dimensions'
import { JP_YELLOW, BLACK } from '../data/colours'
import { BACK_DIR } from '../constants/directories'

export default function generate(guest: StaffMember): Promise<string> {
  return new Promise((resolve, reject) => {
    const path =
      `${BACK_DIR}/${guest.surname}_${guest.firstname}.png`.toLowerCase()

    const process = drawBack(guest)

    process.write(path, (error: Error) => {
      if (error) {
        reject(error)
      } else {
        resolve(path)
      }
    })
  })
}

function drawBack(staffMember: StaffMember): gm.State {
  const [x, y] = LANYARD
  let back = gm(x, y, staffMember.job.department.background)

  drawRectangle({
    gm: back,
    colour: JP_YELLOW,
    dimensions: [0, 130, 400, 520],
  })

  placeImage({
    gm: back,
    path: `${process.cwd()}/output/codes/${staffMember.surname}_${
      staffMember.firstname
    }.png`,
    position: [100, 140],
    size: [200, 200],
  })

  placeImage({
    gm: back,
    filename: 'JPLogo.png',
    position: [115, 0],
    size: [440 / 2.5, 330 / 2.5],
  })

  drawText({
    gm: back,
    text: 'Scan QR code to view your online profile',
    position: [45, 365],
    font: '/System/Library/Fonts/SFCompactDisplay-Regular.otf',
    fontSize: 18,
    colour: BLACK,
  })

  return back
}
