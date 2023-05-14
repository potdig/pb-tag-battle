import type { NodeCG } from '../nodecg'

export default function listenForUpdateResults(nodecg: NodeCG) {
  const replicant = nodecg.Replicant('results', {
    defaultValue: [
      {
        game: '3DX',
        won: null,
      },
      {
        game: '2',
        won: null,
      },
      {
        game: '1',
        won: null,
      },
    ],
  })

  nodecg.listenFor('updateResults', (results, cb) => {
    if (!cb || cb.handled) {
      return
    }

    replicant.value = results

    cb && cb(null, true)
  })
}
