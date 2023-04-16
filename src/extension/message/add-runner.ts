import type { NodeCG } from '../nodecg'

export function listenForAddRunner(nodecg: NodeCG) {
  const runnersRep = nodecg.Replicant('runners', {
    defaultValue: [],
  })
  const ordersRep = nodecg.Replicant('orders', {
    defaultValue: [],
  })

  nodecg.listenFor('addRunner', ({ name, subName, icon, team, game }, cb) => {
    if (!cb || cb.handled) {
      return
    }

    if (runnersRep.value.some(runner => runner.name === name)) {
      cb && cb(`${name} already exists`)
      return
    }

    if (
      ordersRep.value.some(order => order.team === team && order.game === game)
    ) {
      cb && cb(`Order already exists: Team: ${team}, Game: ${game}`)
      return
    }

    runnersRep.value = runnersRep.value.concat({ name, subName, icon })
    ordersRep.value = ordersRep.value.concat({ name, team, game })

    cb && cb(null, true)
  })
}
