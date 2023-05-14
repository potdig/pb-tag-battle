<script lang="ts">
  import headerImg from '../graphics/assets/result.png'
</script>

<div id="content">
  <header>
    <img src={headerImg} alt="header" />
  </header>
  <main>
    <div class="cell">
      <p class="jp">チーム バブルン</p>
      <p class="en">TEAM BUBBLUN</p>
    </div>
    <div class="cell">
      <p id="vs">VS</p>
    </div>
    <div class="cell">
      <p class="jp">チーム ボブルン</p>
      <p class="en">TEAM BOBBLUN</p>
    </div>

    <div class="cell">
      <span class="star">★</span>
    </div>
    <div class="cell mid">先鋒戦</div>
    <div class="cell">
      <span class="star">★</span>
    </div>

    <div class="cell">
      <span class="star">★</span>
    </div>
    <div class="cell mid">中堅戦</div>
    <div class="cell">
      <span class="star">★</span>
    </div>

    <div class="cell">
      <span class="star">★</span>
    </div>
    <div class="cell mid">大将戦</div>
    <div class="cell">
      <span class="star">★</span>
    </div>
  </main>
</div>

<style lang="scss">
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  header {
    margin-bottom: 3em;
    img {
      height: 120px;
    }
  }

  main {
    font-family: 'M PLUS 1', sans-serif;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: max-content repeat(3, 12em);
    align-items: center;
    width: 70%;

    & > * {
      height: 100%;
      border-bottom: 2px solid white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  #vs {
    font-family: 'Big Shoulders Text', cursive;
    font-size: 4em;
  }

  .star {
    font-size: 8em;
    color: gold;
  }
  .mid {
    font-size: 3em;
  }

  p {
    &.jp {
      font-size: 4em;
    }

    &.en {
      font-family: 'Big Shoulders Text', cursive;
      font-size: 2.4em;
    }
  }
</style>
