<script lang="ts">
  import { currentGame } from '../store/current-game'
  import Player from './lib/Player.svelte'
  import title3dx from './assets/3DX.png'
  import title2 from './assets/2.png'
  import title1 from './assets/1.png'

  const title = {
    '3DX': title3dx,
    '2': title2,
    '1': title1,
  }

  $: currentTitle = $currentGame ? title[$currentGame] : ''
</script>

<div id="content">
  <header>
    <img src={currentTitle} alt="title" />
  </header>
  <main>
    <Player team="Bub" />
    <p>VS</p>
    <Player team="Bob" />
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
