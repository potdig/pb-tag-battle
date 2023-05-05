import type { NodeCG } from '../nodecg'

export default function listenForUpdateCurrentGame(nodecg: NodeCG) {
  const replicant = nodecg.Replicant('currentGame', {
    defaultValue: '1',
  })

  nodecg.listenFor('updateCurrentGame', (game, cb) => {
    if (!cb || cb.handled) {
      return
    }

    replicant.value = game

    cb && cb(null, true)
  })
}
