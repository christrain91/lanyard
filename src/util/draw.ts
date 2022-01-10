import { State } from 'gm'
import Color from 'color'
import _ from 'lodash'
import { BLACK } from '../data/colours'

interface TextOptions {
  gm: State
  position: number[]
  text: string
  font: string
  fontSize: number
  colour: string
}

export function drawText({
  gm,
  text,
  position,
  font,
  fontSize,
  colour,
}: TextOptions): State {
  const [x, y] = position
  return gm.fill(colour).font(font, fontSize).drawText(x, y, text)
}

export function drawTextWithOutline(options: TextOptions): State {
  const { position } = options
  const positions = [
    //[position[0] - 1, position[1]],
    //[position[0] + 1, position[1]],
    //[position[0], position[1] - 1]
    //[position[0], position[1] + 1]
    [position[0] + 1, position[1] + 1],
  ]
  let oultlineColor = Color(options.colour)

  if (options.colour === BLACK) {
    oultlineColor = oultlineColor.lighten(2.5)
  } else {
    oultlineColor = oultlineColor.darken(0.5)
  }

  _.each(positions, (outlinePosition) => {
    drawText({
      ...options,
      colour: oultlineColor.hex(),
      position: outlinePosition,
    })
  })

  return drawText(options)
}

export function placeImage({
  gm,
  filename,
  position,
  size,
  path,
}: {
  gm: State
  filename?: string
  path?: string
  position: number[]
  size: number[]
}): State {
  const positionAsString = position.toString()
  const sizeAsString = size.toString()
  const imagePath = path ? path : `${process.cwd()}/assets/${filename}`

  return gm.draw(`image Over ${positionAsString} ${sizeAsString} ${imagePath}`)
}

export function drawRectangle({
  gm,
  colour,
  dimensions,
}: {
  gm: State
  colour: string
  dimensions: number[]
}): State {
  const [x, y, w, h] = dimensions
  return gm.fill(colour).drawRectangle(x, y, w, h)
}
