/* eslint-disable no-underscore-dangle */
const PouchDB = require('pouchdb')
const logger = require('@work-with-us/logger')

const add = (database, resourceName) => async (resource) => {
  await database.put({
    date: Date.now(),
    ...resource,
    _id: resource.id || `${resourceName}-${Date.now()}`,
    id: undefined,
  })
}

const addOrUpdate = (database, resourceName) => async (resource) => {
  // get older revision
  let _rev
  try {
    const id = (resource.id || resource._id)
    if (id) {
      const older = await database.get(id)
      _rev = older._rev // eslint-disable-line prefer-destructuring
    }
  } catch (ex) {
    if (ex.status !== 404) throw ex
  }

  // add (or update)
  await add(database, resourceName)({
    ...resource,
    _rev,
  })
}

const list = database => async () => {
  const result = await database.allDocs({
    include_docs: true,
  })

  return result.rows.map(document => ({
    ...document.doc,
    id: document.doc._id,
    _id: undefined,
  }))
}

const databases = new Map()

const create = (resourceName, options = {}) => () => {
  const { DB_PATH } = process.env
  if (!DB_PATH) throw new Error('Please set DB_PATH!')

  if (!resourceName) throw new Error('resourceName parameter must be set!')
  let database = databases.get(resourceName)

  if (database) {
    logger.debug('using existing database', resourceName)
  } else {
    database = new PouchDB(
      `${DB_PATH}/${resourceName}`,
      {
        auto_compaction: true,
        ...options,
      },
    )
    databases.set(resourceName, database)
  }

  return {
    add: add(database, resourceName),
    addOrUpdate: addOrUpdate(database, resourceName),
    list: list(database, resourceName),
  }
}

const closeAll = async (cb) => {
  logger.info('closing all databases...', databases.length)

  const databasesToClose = Array.from(databases.values())

  databases.clear()
  await Promise.all(databasesToClose.map(db => db.close()))

  if (cb) cb()
}

module.exports = {
  create,
  closeAll,
}
