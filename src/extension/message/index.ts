import type { NodeCG } from '../nodecg'
import { listenForAddRunner } from './add-runner'

export default function message(nodecg: NodeCG) {
  listenForAddRunner(nodecg)

  const countRep = nodecg.Replicant('count', { defaultValue: 0 })

  nodecg.listenFor('countUp', (_, cb) => {
    if (!cb || cb.handled) {
      return
    }

    countRep.value = countRep.value + 1

    cb && cb(null, true)
  })
}
