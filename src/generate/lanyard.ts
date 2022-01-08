import gm from 'gm'
import { StaffMember } from '../definitions/index'
import { drawText, drawRectangle, placeImage } from '../util/draw'
import { JP_YELLOW, JP_RED, BLACK } from '../data/colours'
import { LANYARD } from '../data/dimensions'
import Color from 'color'
import _ from 'lodash'

const fontDirectory = '/Users/christrain/Library/Fonts'

export default function generate(staffMember: StaffMember): Promise<string> {
  return new Promise((resolve, reject) => {
    const path = `${process.cwd()}/output/lanyards/${staffMember.surname}_${
      staffMember.firstname
    }.png`.toLowerCase()

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
  process = drawRectangle({
    gm: process,
    colour: JP_YELLOW,
    dimensions: [0, 350, 400, 530],
  })

  process = placeImage({
    gm: process,
    filename: 'ingen.png',
    position: [10, 360],
    size: [137, 137],
  })

  process = placeImage({
    gm: process,
    filename: 'JPLogo.png',
    position: [-20, -20],
    size: [440, 330],
  })

  process = placeImage({
    gm: process,
    filename: 'barcode.png',
    position: [160, 430],
    size: [226, 82.5],
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
  const bgBright = bgColour.luminosity() > 0.3

  process = drawText({
    gm: process,
    text: staffMember.job.department.title.toUpperCase(),
    position: [staffMember.job.department.startAtPosition, 330],
    font: `${fontDirectory}/AdobeGothicStd-Bold.otf`,
    fontSize: 34,
    colour:
      staffMember.job.department.textColour || (bgIsRed ? JP_YELLOW : JP_RED),
  })

  process = drawText({
    gm: process,
    text: name,
    position: [160, 382],
    font: `${fontDirectory}/AdobeGothicStd-Bold.otf`,
    fontSize: nameSize,
    colour: BLACK,
  })

  process = drawText({
    gm: process,
    text: staffMember.job.title,
    position: [160, 413],
    font: `${fontDirectory}/AdobeGothicStd-Bold.otf`,
    fontSize: jobSize,
    colour: JP_RED,
  })

  process = drawText({
    gm: process,
    text: 'THIS PASS IS NOT TRANSFERABLE',
    position: [47, 556],
    font: `${fontDirectory}/FontsFree-Net-SFCompactDisplay-Regular.ttf`,
    fontSize: 20,
    colour: bgBright ? BLACK : JP_YELLOW,
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
      size: 20,
    },
    {
      from: 23,
      to: 26,
      size: 18,
    },
    {
      from: 27,
      to: Infinity,
      size: 16,
    },
  ]

  const matchingSize = _.find(sizeDefinitions, ({ from, to }) => {
    return length >= from && length <= to
  })

  return matchingSize ? matchingSize.size : 22
}
