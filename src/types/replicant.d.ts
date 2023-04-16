import type { Order } from './order'
import type { Runner } from './runner'

export type ReplicantMap = {
  count: number
  runners: Runner[]
  orders: Order[]
}
