import { loadBrdnote } from './miscellaneous'

export default function getContents(path) {
  return new Promise((resolve, reject) => {
    loadBrdnote(path, (file) => {
      try {
        var data = JSON.parse(file)
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  })
}
