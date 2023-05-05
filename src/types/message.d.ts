import type { Game } from './game'
import type { Runner } from './runner'
import type { Team } from './team'

type AddRunnerArgs = {
  name: string
  subName: string
  icon: string
  team: Team
  game: Game
}

export type MessageMap = {
  countUp: {
    result: boolean
  }
  addRunner: {
    data: AddRunnerArgs
    result: boolean
  }
  updateCurrentGame: {
    data: Game
    result: boolean
  }
}
