<template>
  <header class="header">
    <nav>
      <h1 class="brand-logo">
        <a href="/">Por és sár</a>
      </h1>
      <ul>
        <li>
          <a href="/">Főoldal</a>
        </li>
        <li v-for="(item, index) in navItems">
          <a
            :key="index"
            :class="currentRoute(item.route) ? 'active' : ''"
            :href="`/${item.route}`"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
const Navigation = {
  name: 'Navigation',

  data() {
    return {
      navItems: [
        {
          name: 'Séták',
          route: 'setak',
        },
        {
          name: 'Média',
          route: 'media',
        },
        {
          name: 'Rólam',
          route: 'rolam',
        },
        {
          name: 'Kapcsolat',
          route: 'kapcsolat',
        },
      ],
    };
  },

  methods: {
    currentRoute(route) {
      return route === 'szar';
    },
  },
};

export default Navigation;
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  display: flex;
  top: 0;
  background: transparent;
  isolation: isolate;
  opacity: 1;
  z-index: 1;
  height: 80px;
  overflow: hidden;
  padding: 1rem 7rem;
  transition: background-color 0.25s, opacity 0.25s ease-in;

  &--white {
    background-color: #fff;
    opacity: 0.9;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .brand-logo {
    a {
      font-family: var(--font-family-primary);
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--color-primary);
      text-decoration: none;
      transition: border linear 0.15s;
    }
  }

  ul {
    display: flex;
    gap: 2rem;

    li {
      a {
        position: relative;
        text-decoration: none;
        font-size: 1.2rem;
        padding: 0.2rem;
        color: var(--color-primary);
        font-family: var(--font-family-secondary);

        &:after {
          position: absolute;
          content: '';
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-primary);
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 250ms ease-in;
          z-index: -1;
        }

        &:hover:after {
          transform: scaleX(1);
        }
      }
    }
  }
  .active {
    position: relative;

    &:after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-primary);
      transform: scaleX(1);
      z-index: -1;
    }
  }
}
</style>
