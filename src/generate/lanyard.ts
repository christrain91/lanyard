import gm from 'gm'
import { StaffMember } from '../definitions/index'
import { drawText, drawRectangle, placeImage } from '../util/draw'
import { JP_YELLOW, JP_RED, BLACK } from '../data/colours'
import { LANYARD } from '../data/dimensions'
import Color from 'color'
import _ from 'lodash'
import { LANYARD_DIR, FONTS_DIR } from '../constants/directories'

export default function generate(staffMember: StaffMember): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const path =
      `${LANYARD_DIR}/${staffMember.surname}_${staffMember.firstname}.png`.toLowerCase()

    const gm = drawLanyard(staffMember)

    gm.write(path, (error: Error) => {
      if (error) {
        reject(error)
      } else {
        resolve(path)
      }
    })
  })
}

function drawLanyard(staffMember: StaffMember): gm.State {
  const [x, y] = LANYARD
  let process = gm(x, y, staffMember.job.department.background)

  process = drawLanyardImages(process)
  process = drawLanyardText(process, staffMember)

  return process
}

function drawLanyardImages(process: gm.State): gm.State {
  // const [x, y] = LANYARD
  process = drawRectangle({
    gm: process,
    colour: JP_YELLOW,
    dimensions: [0, 350, 400, 530],
  })

  process = placeImage({
    gm: process,
    filename: 'ingen.png',
    position: [10, 360],
    size: [110, 110],
  })

  // // CENTER LINE
  // drawRectangle({
  //   gm: process,
  //   colour: '#fff',
  //   dimensions: [x / 2 - 1, 0, x / 2 + 1, y],
  // })

  // const INSET = 50

  // // LEFT LINE
  // drawRectangle({
  //   gm: process,
  //   colour: '#fff',
  //   dimensions: [INSET - 1, 0, INSET + 1, y],
  // })

  // // RIGHT LINE
  // drawRectangle({
  //   gm: process,
  //   colour: '#fff',
  //   dimensions: [x - INSET - 1, 0, x - INSET + 1, y],
  // })

  process = placeImage({
    gm: process,
    filename: 'JPLogo.png',
    position: [5, 34],
    size: [382.5 * 0.92, 294.3 * 0.92],
  })

  process = placeImage({
    gm: process,
    filename: 'barcode.png',
    position: [133, 422],
    size: [220 * 0.85, 79 * 0.85],
  })

  return process
}

function drawLanyardText(
  process: gm.State,
  staffMember: StaffMember
): gm.State {
  const bgColour = Color(staffMember.job.department.background)
  const name = `${staffMember.firstname} ${staffMember.surname}`
  const nameSize = getFontSize(name.length)
  const jobSize = getFontSize(staffMember.job.title.length)

  const bgIsRed = bgColour.contrast(Color(JP_RED)) < 1.48

  process = drawText({
    gm: process,
    text: staffMember.job.department.title.toUpperCase(),
    position: [staffMember.job.department.startAtPosition, 330],
    font: `${FONTS_DIR}/AdobeGothicStd-Bold.otf`,
    fontSize: 34,
    colour:
      staffMember.job.department.textColour || (bgIsRed ? JP_YELLOW : JP_RED),
  })

  process = drawText({
    gm: process,
    text: name,
    position: [133, 382],
    font: `${FONTS_DIR}/AdobeGothicStd-Bold.otf`,
    fontSize: nameSize,
    colour: BLACK,
  })

  process = drawText({
    gm: process,
    text: staffMember.job.title,
    position: [133, 413],
    font: `${FONTS_DIR}/AdobeGothicStd-Bold.otf`,
    fontSize: jobSize,
    colour: JP_RED,
  })

  return process
}

function getFontSize(length: number): number {
  const sizeDefinitions = [
    {
      from: -Infinity,
      to: 8,
      size: 25,
    },
    {
      from: 9,
      to: 15,
      size: 22,
    },
    {
      from: 16,
      to: 22,
      size: 18,
    },
    {
      from: 23,
      to: 26,
      size: 16,
    },
    {
      from: 27,
      to: Infinity,
      size: 15,
    },
  ]

  const matchingSize = _.find(sizeDefinitions, ({ from, to }) => {
    return length >= from && length <= to
  })

  return matchingSize ? matchingSize.size : 22
}
