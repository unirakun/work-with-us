import PouchDB from 'pouchdb'

const { DB_PATH } = process.env

if (!DB_PATH) {
  throw new Error('Please set DB_PATH!')
}

const add = database => async (proposal) => {
  await database.put({
    ...proposal,
    _id: `proposal-${Date.now()}`,
    date: Date.now(),
  })
}

const list = database => async () => {
  const result = await database.allDocs({
    include_docs: true,
  })

  return result.rows.map(document => document.doc)
}

export default () => {
  const database = new PouchDB(`${DB_PATH}/proposals`)

  return {
    add: add(database),
    list: list(database),
  }
}
