<script lang="ts">
  import { results } from '../store/results'

  let selectedResult3dx
  let selectedResult2
  let selectedResult1

  $: result3dx = $results?.find(result => result.game === '3DX')?.won
  $: result2 = $results?.find(result => result.game === '2')?.won
  $: result1 = $results?.find(result => result.game === '1')?.won

  function updateResults() {
    window.nodecg.sendMessage('updateResults', [
      {
        game: '3DX',
        won: selectedResult3dx,
      },
      {
        game: '2',
        won: selectedResult2,
      },
      {
        game: '1',
        won: selectedResult1,
      },
    ])
  }
</script>

<div id="form">
  <label for="result3dx">先鋒戦</label>
  <select bind:value={selectedResult3dx} on:change={updateResults}>
    <option value="" />
    <option value="Bub">バブルン</option>
    <option value="Bob">ボブルン</option>
  </select>
  <label for="result2">中堅戦</label>
  <select bind:value={selectedResult2} on:change={updateResults}>
    <option value="" />
    <option value="Bub">バブルン</option>
    <option value="Bob">ボブルン</option>
  </select>
  <label for="result1">大将戦</label>
  <select bind:value={selectedResult1} on:change={updateResults}>
    <option value="" />
    <option value="Bub">バブルン</option>
    <option value="Bob">ボブルン</option>
  </select>
</div>
<ul>
  <li>先鋒戦: {result3dx}</li>
  <li>中堅戦: {result2}</li>
  <li>大将戦: {result1}</li>
</ul>

<style>
  #form {
    display: grid;
    grid-template-columns: repeat(2, max-content);
  }
</style>
