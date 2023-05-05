<script lang="ts">
  // import { currentGame } from '../store/current-game'
  import Player from './lib/Player.svelte'
  import title3dx from './assets/3DX.png'
  import title2 from './assets/2.png'
  import title1 from './assets/1.png'

  const title = {
    '3DX': '先鋒戦',
    '2': '中堅戦',
    '1': '大将戦',
  }

  // $: currentTitle = $currentGame ? title[$currentGame] : ''
</script>

<div id="content">
  <header>
    <img src={title3dx} alt="title" />
  </header>
  <main>
    <Player team="bub" />
    <p>VS</p>
    <Player team="bob" />
  </main>
</div>

<style>
  #content {
    padding: 2rem;
  }

  header img {
    height: 120px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main p {
    font-family: 'Big Shoulders Text', cursive;
    font-size: 4em;
  }
</style>
