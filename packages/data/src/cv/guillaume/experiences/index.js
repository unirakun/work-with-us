import cgi from './cgi'
import euriware from './euriware'
import siao from './siao'
import contentFlow from './contentFlow'
import santeclair from './santeclair'
import metroscopeArchi from './metroscopeArchi'
import metroscopeDev from './metroscopeDev'
import darvaFormation from './darvaFormation'
import sparklane from './sparklane'

export default [
  cgi,
  euriware,
  siao,
  contentFlow,
  santeclair,
  sparklane,
  metroscopeArchi,
  metroscopeDev,
  darvaFormation,
].sort((expA, expB) => {
  if (expA.dates.to === undefined) return 1
  return (expB.dates.to - expA.dates.to)
})
