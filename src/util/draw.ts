import { State } from 'gm'

export function drawText ({ gm, text, position, font, fontSize, colour }: { gm: State; text: string; position: number[]; font: string; fontSize: number; colour: string; }) : State {
  const [x, y] = position
  return gm.fill(colour)
  .font(font, fontSize)
  .drawText(x, y, text)
}

export function placeImage ({ gm, filename, position, size, path }: { gm: State; filename?: string; path?: string; position: number[]; size: number[]; }) : State {
  const positionAsString = position.toString()
  const sizeAsString = size.toString()
  const imagePath = path ? path : `${process.cwd()}/assets/${filename}`

  return gm.draw(`image Over ${positionAsString} ${sizeAsString} ${imagePath}`)
}

export function drawRectangle ({ gm, colour, dimensions }: { gm: State; colour: string; dimensions: number[]; }) : State {
  const [x, y, w, h] = dimensions
  return gm.fill(colour).drawRectangle(x, y, w, h)
}