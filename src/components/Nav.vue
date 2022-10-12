<template>
  <header :class="['header', { 'header--inverse': isIntersecting }]">
    <a class="skip-to-content-link" href="#main">
      Ugrás a <strong>por és sár</strong> tartalmához
    </a>

    <h1 class="brand-logo">
      <a href="/" rel="home">por és sár</a>
    </h1>

    <nav role="navigation">
      <button
        :class="[
          'mobile-menu',
          { 'mobile-menu--is-active': isMobileMenuVisible },
        ]"
        aria-label="Mobil Menü"
        @click="onMobileMenuToggle"
      >
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </button>

      <ul class="nav-items" role="list">
        <li
          v-for="({ name, route }, index) in navItems"
          class="nav-item"
          role="listitem"
        >
          <a :href="route">
            {{ name }}
          </a>
        </li>
      </ul>

      <DarkModeSwitcher />
    </nav>

    <MobileMenu :is-visible="isMobileMenuVisible" />
  </header>
</template>

<script>
import { isMobileMenuVisible } from '../store/index.js';
import MobileMenu from './MobileMenu.vue';
import DarkModeSwitcher from './DarkModeSwitcher.vue';
import { NAV_ITEMS } from '../constants/index.js';

const Nav = {
  name: 'Nav',

  components: {
    MobileMenu,
    DarkModeSwitcher,
  },

  props: {
    pathname: {
      type: String,
      default: '',
    },

    currentPath: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      navItems: NAV_ITEMS,
      isMobileMenuVisible: false,
      observer: null,
      isIntersecting: false,
      observerOptions: {
        rootMargin: '-100px',
        threshold: 1,
      },
    };
  },

  mounted() {
    this.headerEffect();

    if (this.isMobile || !this.hasInterSectionObserver) {
      this.isIntersecting = true;
    } else {
      this.headerEffect();
    }
  },

  beforeDestroy() {
    this.observer.unobserve(document.querySelector('.page-title'));
  },

  computed: {
    isMobile() {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },

    hasIntersectionObserver() {
      return 'IntersectionObserver' in window;
    },
  },

  methods: {
    headerEffect() {
      this.observer = new IntersectionObserver((entries = [], observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isIntersecting = false;
          } else {
            this.isIntersecting = true;
          }
        });
      }, this.observerOptions);

      this.observer.observe(document.querySelector('.page-title'));
    },

    onMobileMenuToggle() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
      isMobileMenuVisible.set(this.isMobileMenuVisible);

      if (this.isMobileMenuVisible) {
        document.querySelector('body').classList.add('fixed');
      } else {
        document.querySelector('body').classList.remove('fixed');
      }
    },
  },
};

export default Nav;
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  min-height: 60px;
  padding: 0 1.25rem;
  isolation: isolate;
  z-index: 2;
  transition: all 250ms ease-in-out;
  .mobile-menu {
    position: absolute;
    left: 1.125rem;
    display: block;
    height: 24px;
    width: 35px;
    border: none;
    visibility: visible;
    background: transparent;
    transition: opacity 0.25s ease;

    &:focus {
      outline: 1px dashed var(--color-primary);
    }

    &--is-active {
      .top {
        transform: translateY(10px) translateX(0) rotate(45deg);
        background: var(--color-primary);
      }
      .middle {
        opacity: 0;
        background: var(--color-primary);
      }

      .bottom {
        transform: translateY(-10px) translateX(0) rotate(-45deg);
        background: var(--color-primary);
      }
    }

    span {
      position: absolute;
      top: 0;
      right: 0;
      background: var(--color-primary);
      height: 2px;
      width: 100%;
      transition: all 350ms ease;

      &:nth-of-type(2) {
        top: 10px;
        width: 70%;
      }

      &:nth-of-type(3) {
        top: 20px;
      }
    }
  }

  .brand-logo {
    position: absolute;
    align-self: center;
    width: auto;
    left: 50%;
    transform: translateX(-50%);

    a {
      font-family: var(--font-family-primary);
      font-size: clamp(1.1rem, 2rem, 2.5rem);
      font-weight: 900;
      color: var(--color-primary);
      text-decoration: none;
    }
  }

  nav {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .nav-items {
    display: none;

    .nav-item {
      a {
        position: relative;
        text-decoration: none;
        font-size: clamp(1rem, 1.1rem, 1.3rem);
        padding: 0.2rem;
        color: var(--color-primary);
        font-family: var(--font-family-secondary);
        transition: var(--base-transform-transition);

        &:hover {
          text-shadow: 0 0 0.65px var(--color-primary),
            0 0 0.65px var(--color-primary);
        }

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
          transition: var(--base-transform-transition);
          z-index: -1;
        }

        &:hover:after {
          transform: scaleX(1);
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
        }
      }
    }
  }

  &--inverse {
    background-color: var(--color-navigation);
    backdrop-filter: blur(8px);

    .brand-logo {
      a {
        font-size: clamp(0.95rem, 1.8rem, 2.25rem);
        transition: font-size 250ms ease-in;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .header {
    padding: 0 2rem;

    .mobile-menu {
      display: none;
      visibility: none;
    }

    .nav {
      margin: unset;
    }

    .brand-logo {
      position: relative;
      left: unset;
      transform: unset;
    }

    .nav-items {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>
