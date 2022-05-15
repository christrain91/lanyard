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
    dimensions: [0, 210, 400, 520],
  })

  // QR Code
  placeImage({
    gm: back,
    path: `${process.cwd()}/output/codes/${staffMember.surname}_${
      staffMember.firstname
    }.png`,
    position: [95, 220],
    size: [160, 160],
  })

  placeImage({
    gm: back,
    filename: 'JPLogo.png',
    position: [73, 56],
    size: [176 * 1.2, 132 * 1.2],
  })

  // // CENTER LINE
  // drawRectangle({
  //   gm: back,
  //   colour: '#fff',
  //   dimensions: [x / 2 - 1, 0, x / 2 + 1, y],
  // })

  // const INSET = 50

  // // LEFT LINE
  // drawRectangle({
  //   gm: back,
  //   colour: '#fff',
  //   dimensions: [INSET - 1, 0, INSET + 1, y],
  // })

  // // RIGHT LINE
  // drawRectangle({
  //   gm: back,
  //   colour: '#fff',
  //   dimensions: [x - INSET - 1, 0, x - INSET + 1, y],
  // })

  drawText({
    gm: back,
    text: 'Scan QR code to log in to your online profile',
    position: [39, 405],
    font: '/System/Library/Fonts/SFCompactDisplay-Regular.otf',
    fontSize: 14,
    colour: BLACK,
  })

  drawText({
    gm: back,
    text: `${staffMember.firstname.substring(
      0,
      3
    )}_${staffMember.surname.substring(0, 1)}`,
    position: [162, 450],
    font: '/System/Library/Fonts/SFCompactDisplay-Regular.otf',
    fontSize: 10,
    colour: BLACK,
  })

  return back
}
