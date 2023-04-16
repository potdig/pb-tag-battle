import { derived, readable, type Readable } from 'svelte/store'
import type { Order } from '~/types/order'

const orders: Readable<Order[]> = readable([], set => {
  window.nodecg.Replicant('orders').on('change', value => {
    set(value)
  })
})

export { orders }
