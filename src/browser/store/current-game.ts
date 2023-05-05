import { readable, type Readable } from 'svelte/store'
import type { Game } from '~/types/game'

const currentGame: Readable<Game> = readable(null, (set) => {
  window.nodecg.Replicant('currentGame').on('change', (value) => {
    set(value)
  })
})

export { currentGame }
