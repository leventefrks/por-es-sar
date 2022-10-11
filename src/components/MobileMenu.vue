<template>
  <ul
    :class="['mobile-nav-items', { 'mobile-nav-items--visible': isVisible }]"
    role="list"
  >
    <li
      v-for="({ name, route }, index) in navItems"
      class="nav-item"
      role="listitem"
    >
      <a class="nav-item-link" :href="route">{{ name }}</a>
    </li>
  </ul>
</template>

<script>
import { NAV_ITEMS } from '../constants/index.js';

const MobileMenu = {
  name: 'MobileMenu',

  data() {
    return {
      navItems: NAV_ITEMS,
    };
  },

  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};

export default MobileMenu;
</script>

<style lang="scss" scoped>
.mobile-nav-items {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background-color: var(--color-background);
  top: 60px;
  inset: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s ease-in;
  will-change: auto;

  .nav-item {
    opacity: 0;
  }

  &--visible {
    opacity: 0.97;
    min-height: 100vh;
    visibility: visible;

    .nav-item {
      position: relative;
      animation: fadeUp 250ms ease-in forwards;
      animation-delay: 100ms;

      &:nth-of-type(1) {
        animation-delay: 200ms;
      }

      &:nth-of-type(2) {
        animation-delay: 300ms;
      }

      &:nth-of-type(3) {
        animation-delay: 400ms;
      }

      &:nth-of-type(4) {
        animation-delay: 500ms;
      }
    }

    .nav-item-link {
      position: relative;
      display: block;
      text-decoration: none;
      font-size: clamp(1.2rem, 2rem, 2.4rem);
      padding: 0.2rem;
      overflow: hidden;
      color: var(--color-primary);
      font-family: var(--font-family-secondary);
      transition: var(--base-transform-transition);

      &:hover {
        transform: scale(1.15);
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
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(4rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
