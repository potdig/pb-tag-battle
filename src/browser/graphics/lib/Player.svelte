<script lang="ts">
  import { currentGame } from '~/browser/store/current-game'
  import { orderOf } from '~/browser/store/orders'
  import type { Team } from '~/types/team'

  export let team: Team

  $: teamName = team === 'Bub' ? 'BUBBLUN' : 'BOBBLUN'
  $: order = orderOf(team, $currentGame)
  $: teamClass = team.toLowerCase()
</script>

<div class="player {teamClass}">
  <div class="head">
    <p class="team">TEAM {teamName}</p>
    <p class="name">{$order?.name}</p>
  </div>
  <div class="video-area" />
  <div class="timer-area" />
  <p class="label">TIMER</p>
</div>

<style lang="scss">
  .player {
    width: 45%;
    display: flex;
    flex-direction: column;
  }

  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .team {
    font-family: 'Big Shoulders Text', cursive;
    font-size: 3.2em;
  }

  .name {
    font-family: 'M PLUS 1', sans-serif;
    font-size: 2.4em;
  }

  .video-area {
    width: 2px;
    height: calc(1440px * 0.45);
    background-color: white;
  }

  .timer-area {
    width: 300px;
    height: 80px;
    border-bottom: 2px solid white;
  }

  .label {
    font-family: 'Big Shoulders Text', cursive;
    font-size: 2em;
    opacity: 0.5;
  }

  .bub {
    &.player {
      align-items: flex-start;
    }

    .head {
      flex-direction: row;
    }
  }

  .bob {
    &.player {
      align-items: flex-end;
    }

    .head {
      flex-direction: row-reverse;
    }
  }
</style>
