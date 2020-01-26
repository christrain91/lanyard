import QRCode from 'qrcode'
import { StaffMember } from '../definitions/index'
import { BLACK, JP_YELLOW } from '../data/colours'

export default function generate(staffMember: StaffMember): Promise<any> {
  const path = `${process.cwd()}/output/codes/${staffMember.surname}_${
    staffMember.firstname
  }.png`
  return QRCode.toFile(
    path,
    `http://all-aboard-2020/staff/${staffMember.firstname}_${staffMember.surname}`.toLowerCase(),
    {
      margin: 1,
      width: 300,
      color: {
        dark: BLACK,
        light: JP_YELLOW
      }
    }
  )
}
