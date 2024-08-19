<script lang="ts">
</script>

<div class="navbar">
    <div class="left">
        <div class="home"><a href="#/">Home</a></div>
        <div class="projects"><a href="#/projects">Projects</a></div>
        <div class="files"><a href="https://github.com/Percslol">GitHub</a></div>
    </div>
    <div class="center">
        <div class="logo">percs</div>
    </div>
    <div class="right">
        <div class="blank"><a href="#/404"></a></div>
        <div class="contact"><a href="#/404">Contact</a></div>
        <div class="about"><a href="#/404">About</a></div>
    </div>
</div>

<style>
.navbar {
  color: rgba(255, 255, 255, 0.87);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
}
.navbar > .left {
  margin-left: 20px;
}
.navbar > .right {
  margin-right: 20px;
}

.left, .right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 1;
  transition: 250ms ease-in-out;
}

@media (max-width: 880px) {
  .center {
    display: none;
  }
}


@media (max-width: 800px) {
  .left, .right {
    gap: 1.5rem;
  }
}
@media (max-width: 690px) {
  .left, .right {
    gap: 0.5rem;
  }
}
@media (max-width: 618px) {
  .files, .about {
    display: none;
  }
  .left, .right {
    gap: 0.25rem;
  }
}
@media (max-width: 430px) {
  .left, .right {
    gap: 0.15rem;
  }
  .left {
    margin-left: 0px !important;
  }
  .right {
    margin-right: 0px !important;
  }
}
@media (max-width: 400px) {
  .left > * > a, .right > * > a {
    padding: 5px;
  }
}

@media (max-width: 380px) {
  .navbar {
    font-size: 15px;
  }
}
@media (max-width: 360px) {
  .navbar {
    font-size: 13px;
  }
}
@media (max-width: 340px) {
  .navbar {
    font-size: 11px;
  }
}
@media (max-width: 300px) {
  .navbar {
    font-size: 10px;
  }
}

.left > * > a, .right > * > a {
  text-decoration: none;
  color: white;
  transition: 250ms ease-in-out;
  padding: 15px;
}

.logo {
  font-weight: 700;
}

.left > *, .right > * {
  transition: 250ms ease-in-out;
}

.left *:hover, .right > *:hover {
  color: #aaaaaa;
}
</style>