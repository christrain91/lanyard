import fs from 'fs'
import path from 'path'
import gm from 'gm'
import { chunk, times } from 'lodash'
import { WHITE, BLACK } from '../data/colours'
import { PAGE, LANYARD } from '../data/dimensions'
import { placeImage, drawText } from '../util/draw'
import { LANYARD_DIR, BACK_DIR } from '../constants/directories'

export default async function generate(): Promise<string[]> {
  const lanyards = getLanyardFiles()

  const positions = getPositionsForLanyards()

  const pageFileSets = chunk(lanyards, positions.length)
  return Promise.all(
    pageFileSets.map((pageFileSet, index) => {
      return generateSinglePage(
        `Page ${index + 1} of ${pageFileSets.length}`,
        pageFileSet,
        positions
      )
    })
  )
}

function getLanyardFiles() {
  const fronts = getFilePaths(LANYARD_DIR)
  const backs = getFilePaths(BACK_DIR)

  return fronts.map((front, index) => ({ front, back: backs[index] }))
}

function generateSinglePage(
  name: string,
  lanyards: { front: string; back: string }[],
  positions: [number, number][]
): Promise<string> {
  return new Promise((resolve, reject) => {
    const [h, w] = PAGE
    const process = gm(w, h, WHITE)
    const path = `./output/pages/${name}.pdf`

    lanyards.forEach((lanyard, index) => {
      const position = positions[index]
      if (!position) {
        return
      }

      const backPosition = [position[0] + LANYARD[0], position[1]]

      placeImage({ gm: process, path: lanyard.front, position, size: LANYARD })
      placeImage({
        gm: process,
        path: lanyard.back,
        position: backPosition,
        size: LANYARD,
      })
    })

    process.rotate(WHITE, 90)

    drawText({
      gm: process,
      text: name,
      position: [h - 40, w - 40],
      font: '/System/Library/Fonts/SFCompactDisplay-Regular.otf',
      fontSize: 12,
      colour: BLACK,
    })

    process.write(path, (error: Error) => {
      if (error) {
        reject(error)
      } else {
        resolve(path)
      }
    })
  })
}

function getFilePaths(directory: string): string[] {
  return fs.readdirSync(directory).map((file) => path.join(directory, file))
}

function getPositionsForLanyards(
  lanyardDimensions: [number, number] = LANYARD
): [number, number][] {
  const [pageH, pageW] = PAGE
  const [lanyardW, lanyardH] = lanyardDimensions
  const positions: [number, number][] = []
  const padding = 40

  const fitsInX = Math.floor(pageW / (lanyardW * 2 + padding))
  const fitsInY = Math.floor(pageH / (lanyardH + padding))

  times(fitsInY, (y) => {
    times(fitsInX, (x) => {
      const posX = x * (lanyardW * 2) + padding * (x + 1)
      const posY = y * lanyardH + padding * (y + 1)
      positions.push([posX, posY])
    })
  })

  return positions
}
