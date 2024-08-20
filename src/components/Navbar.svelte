<script lang="ts">
</script>

<div class="navbar">
    <div class="left">
        <div class="logo">
          <img src="/avatar.png" />
        </div>
    </div>
    <div class="right">
      <div class="home"><a href="#/">Home</a></div>
      <div class="projects"><a href="#/projects">Projects</a></div>
      <div class="files"><a href="https://github.com/Percslol">GitHub</a></div>
    </div>
</div>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: white;
}

.navbar .left .logo img {
    margin-right: 10px;
    height: 40px;
}

.navbar .right {
    display: flex;
    gap: 20px;
}

.navbar .right a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.navbar .right a:hover {
    color: #12f39d;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar .right {
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
    }
}
</style>