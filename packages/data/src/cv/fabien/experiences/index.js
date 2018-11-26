import chargeProjet from './chargeProjet'
import concepteur from './concepteur'
import darva from './darva'
import developpeur from './developpeur'
import ge from './ge'
import ices from './ices'
import maif from './maif'
import mcomm from './mcomm'
import metroscopeArchi from './metroscopeArchi'
import metroscopeDev from './metroscopeDev'
import santeclair from './santeclair'
import sparklane from './sparklane'

export default [
  chargeProjet,
  concepteur,
  darva,
  developpeur,
  ge,
  ices,
  maif,
  mcomm,
  metroscopeArchi,
  metroscopeDev,
  santeclair,
  sparklane,
].sort((expA, expB) => {
  if (expA.dates.to === undefined) return 1
  return (expB.dates.to - expA.dates.to)
})
