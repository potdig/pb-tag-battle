import type { Game } from './game'
import type { Team } from './team'

export type Order = {
  name: string
  team: Team
  game: Game
}
