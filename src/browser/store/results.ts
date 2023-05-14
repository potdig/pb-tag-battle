import { readable, type Readable } from 'svelte/store'
import type { Result } from '~/types/result'

const results: Readable<Result[]> = readable([], set => {
  console.log('?')
  window.nodecg.Replicant('results').on('change', value => {
    set(value)
  })
})

export { results }
