import QRCode from 'qrcode'
import { IGuest } from '../interfaces/index';
import { BLACK, ORANGE } from '../data/colours'

export default function generate (guest: IGuest) : Promise<any> {
    const path = `${process.cwd()}/output/codes/${guest.surname}_${guest.firstname}.png`
    return QRCode.toFile(path, `http://localhost/${guest.firstname}_${guest.surname}`.toLowerCase(), {
      margin: 1,
      width: 500,
      color: {
        dark: BLACK,
        light: ORANGE
      }
    })
}
  