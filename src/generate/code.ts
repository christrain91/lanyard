import QRCode from 'qrcode'
import { StaffMember } from '../definitions'
import { BLACK, JP_YELLOW } from '../data/colours'
import { CODE_DIR } from '../constants/directories'

export default function generate(staffMember: StaffMember): Promise<any> {
  const path = `${CODE_DIR}/${staffMember.surname}_${staffMember.firstname}.png`
  return QRCode.toFile(
    path,
    `http://www.train-wedding.uk/staff/${staffMember.firstname}_${staffMember.surname}`.toLowerCase(),
    {
      margin: 1,
      width: 300,
      color: {
        dark: BLACK,
        light: JP_YELLOW,
      },
    }
  )
}
