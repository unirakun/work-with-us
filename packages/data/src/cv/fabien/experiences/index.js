import chargeProjet from './chargeProjet'
import concepteur from './concepteur'
import developpeur from './developpeur'
import ge from './ge'
import ices from './ices'
import maif from './maif'
import mcomm from './mcomm'
import santeclair from './santeclair'
import sparklane from './sparklane'

export default [
  chargeProjet,
  // concepteur,
  // developpeur,
  // ge,
  // ices,
  // maif,
  // mcomm,
  // santeclair,
  // sparklane,
].sort((expA, expB) => expA.dates.to === undefined ? 1 : (expB.dates.to - expA.dates.to))
