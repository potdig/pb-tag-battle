<script lang="ts">
  import type { Team } from '~/types/team'
  import { runners } from '../store/runners'
  import type { Game } from '~/types/game'

  let newName: string
  let newSubName: string
  let newIcon: string
  let newTeam: Team
  let newGame: Game
  let error: string

  function addRunner() {
    window.nodecg
      .sendMessage('addRunner', {
        name: newName,
        subName: newSubName,
        icon: newIcon + '.png',
        team: newTeam,
        game: newGame,
      })
      .catch(e => {
        error = e
      })
  }
</script>

<div id="form">
  <label for="name">名前</label>
  <input bind:value={newName} />
  <label for="sub-name">二つ名</label>
  <input bind:value={newSubName} />
  <label for="icon">アイコン名</label>
  <span><input bind:value={newIcon} />.png</span>
  <label for="team">チーム</label>
  <select bind:value={newTeam}>
    <option value="Bub">バブルン</option>
    <option value="Bob">ボブルン</option>
  </select>
  <label for="game">担当ゲーム</label>
  <select bind:value={newGame}>
    <option>3DX</option>
    <option>2</option>
    <option>1</option>
  </select>
  <button on:click={addRunner}>追加</button>
</div>
<p id="error">{error || ''}</p>
<ul>
  {#each $runners as runner}
    <li>
      <img
        src="/assets/pb-tag-battle/materials/{runner.icon}"
        alt="icon of {runner.name}"
      />
      {runner.subName} / {runner.name}
    </li>
  {/each}
</ul>

<style lang="scss">
  #form {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 0.5em;
  }

  #error {
    color: red;
  }

  li {
    display: flex;
    align-items: center;

    img {
      width: 50px;
    }
  }
</style>
