import type { Game } from './game'
import type { Team } from './team'

export type Result = {
  game: Game
  won: Team | null
}
