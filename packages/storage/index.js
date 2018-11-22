import PouchDB from 'pouchdb'

const add = (database, resourceName) => async (resource) => {
  await database.put({
    date: Date.now(),
    ...resource,
    _id: resource.id || `${resourceName}-${Date.now()}`,
    id: undefined,
  })
}

const list = database => async () => {
  const result = await database.allDocs({
    include_docs: true,
  })

  return result.rows.map(document => ({
    ...document.doc,
    id: document.doc._id, // eslint-disable-line no-underscore-dangle
    _id: undefined,
  }))
}

let databases = []

export const create = (resourceName, options = {}) => () => {
  const { DB_PATH } = process.env
  if (!DB_PATH) throw new Error('Please set DB_PATH!')

  if (!resourceName) throw new Error('resourceName parameter must be set!')

  const database = new PouchDB(
    `${DB_PATH}/${resourceName}`,
    {
      auto_compaction: true,
      ...options,
    },
  )
  databases.push(database)

  return {
    add: add(database, resourceName),
    list: list(database, resourceName),
  }
}

export const closeAll = async () => {
  console.log(`closing all ${databases.length} databases...`)
  await Promise.all(databases.map(db => db.close()))
  databases = []
}