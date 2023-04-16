import { readable, type Readable } from 'svelte/store'
import type { Runner } from '~/types/runner'

const runners: Readable<Runner[]> = readable([], set => {
  window.nodecg.Replicant('runners').on('change', value => {
    set(value)
  })
})

export { runners }
