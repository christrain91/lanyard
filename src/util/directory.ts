import fs from 'fs'
import path from 'path'

export async function prepareDirectory(dir: string) {
  const exists = await directoryExists(dir)
  if (!exists) {
    fs.mkdirSync(dir)
  }
  removeFilesFromFolder(dir)
}

function directoryExists(dir: string): Promise<boolean> {
  return new Promise((resolve) => {
    fs.access(dir, (err: unknown) => {
      resolve(!err)
    })
  })
}

function removeFilesFromFolder(dir: string) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(dir, file), (err) => {
        if (err) throw err
      })
    }
  })
}
