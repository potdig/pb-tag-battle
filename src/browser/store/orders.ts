import { derived, readable, type Readable } from 'svelte/store'
import type { Game } from '~/types/game'
import type { Order } from '~/types/order'
import type { Team } from '~/types/team'

const orders: Readable<Order[]> = readable([], set => {
  window.nodecg.Replicant('orders').on('change', value => {
    set(value)
  })
})

const orderOf = (team: Team, game: Game) =>
  derived(orders, $orders =>
    $orders.find(order => order.team === team && order.game === game)
  )

export { orders, orderOf }
