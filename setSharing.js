const parentFolderId = '0BwM2C6-nnhvlU3FrRXlkLWlTRm8'

const access = DriveApp.Access.PRIVATE
const permission = DriveApp.Permission.EDIT

const startTime = new Date()

const cacheArray = []

const worker = (folderId) => {
  if (isTimeout()) {
    cacheArray.push(folderId)
    return 0
  }
  const parentFolder = DriveApp.getFolderById(folderId)
  const childFiles = parentFolder.getFiles()
  const childFolders = parentFolder.getFolders()
  while (childFiles.hasNext()) {
    const file = childFiles.next()
    file.setSharing(access, permission)
  }
  while (childFolders.hasNext()) {
    const folder = childFolders.next()
    folder.setSharing(access, permission)
    const childFolderId = folder.getId()
    worker(childFolderId)
  }
  Logger.log(folderId)
}

const main = () => {
  worker(parentFolderId)
  setCache()
}

const isTimeout = () => {
  const currentTime = new Date()
  const executionTime = (currentTime.getTime() - startTime.getTime())/1000
  return executionTime >= 300 // 60 * 5 = 300
}

const setCache = () => {
  console.log(cacheArray)
}
