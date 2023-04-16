<script lang="ts">
  import type { Game } from '~/types/game'
  import type { Team } from '~/types/team'
  import { orders } from '../store/orders'

  $: runnerOf = (team: Team, game: Game) =>
    $orders.find(order => order.team === team && order.game === game)?.name
</script>

<div id="orders">
  <p class="header bub">チーム バブルン</p>
  <p class="header vs">vs</p>
  <p class="header bob">チーム ボブルン</p>

  <p class="bub">{runnerOf('Bub', '3DX')}</p>
  <p class="vs">先鋒戦(3DX)</p>
  <p class="bob">{runnerOf('Bob', '3DX')}</p>

  <p class="bub">{runnerOf('Bub', '2')}</p>
  <p class="vs">中堅戦(2)</p>
  <p class="bob">{runnerOf('Bob', '2')}</p>

  <p class="bub">{runnerOf('Bub', '1')}</p>
  <p class="vs">大将戦(初代)</p>
  <p class="bob">{runnerOf('Bob', '1')}</p>
</div>

<style lang="scss">
  #orders {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 0.5em;
  }

  .header {
    font-weight: bold;
  }

  .bub {
    text-align: end;
  }

  .vs {
    text-align: center;
  }

  .bob {
    text-align: start;
  }
</style>
