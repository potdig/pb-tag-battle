<script lang="ts">
  import type { Game } from '~/types/game'
  import type { Team } from '~/types/team'
  import { orders } from '../store/orders'

  let currentGame

  $: runnerOf = (team: Team, game: Game) =>
    $orders.find((order) => order.team === team && order.game === game)?.name

  function updateCurrentGame() {
    window.nodecg.sendMessage('updateCurrentGame', currentGame)
  }
</script>

<div id="orders">
  <p class="header bub">チーム バブルン</p>
  <p class="header vs">vs</p>
  <p class="header bob">チーム ボブルン</p>
  <p class="header bob">表示対象</p>

  <p class="bub">{runnerOf('Bub', '3DX')}</p>
  <p class="vs">先鋒戦(3DX)</p>
  <p class="bob">{runnerOf('Bob', '3DX')}</p>
  <input
    type="radio"
    name="currentGame"
    value="3DX"
    bind:group={currentGame}
    on:change={updateCurrentGame}
  />

  <p class="bub">{runnerOf('Bub', '2')}</p>
  <p class="vs">中堅戦(2)</p>
  <p class="bob">{runnerOf('Bob', '2')}</p>
  <input
    type="radio"
    name="currentGame"
    value="2"
    bind:group={currentGame}
    on:change={updateCurrentGame}
  />

  <p class="bub">{runnerOf('Bub', '1')}</p>
  <p class="vs">大将戦(初代)</p>
  <p class="bob">{runnerOf('Bob', '1')}</p>
  <input
    type="radio"
    name="currentGame"
    value="1"
    bind:group={currentGame}
    on:change={updateCurrentGame}
  />
</div>

<style lang="scss">
  #orders {
    display: grid;
    grid-template-columns: 1fr max-content 1fr max-content;
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
