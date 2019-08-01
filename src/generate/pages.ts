import fs from  'fs'
import path from 'path'
import gm from 'gm'
import { WHITE } from '../data/colours';
import { PAGE } from '../data/dimensions';

export default function generate (directory: string) {
  const files = getFilePaths(directory)

  return generateSinglePage('test_page', files.slice(0, 4))
}

function generateSinglePage(name: string, files: string[]) : Promise<string> {
  return new Promise((resolve, reject) => {

    console.log('Files for page :: ', files)

    const [x, y] = PAGE
    const process = gm(x, y, WHITE)
    const path = `./output/pages/${name}.png`

    process.write(path, (error : Error) => {
      if (error) {
        reject(error)
      } else {
        resolve(path)
      }
    })
  })  
}

function getFilePaths (directory: string) : string[] {
  const directoryPath = path.join(process.cwd(), directory)
  return fs.readdirSync(directoryPath).map(file => path.join(directoryPath, file))
} 