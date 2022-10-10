<template>
  <div
    :class="['mobile-nav-items', { 'mobile-nav-items--visible': isVisible }]"
    role="list"
  >
    <div class="nav-item" role="listitem">
      <a href="/" class="nav-item-link">Főoldal</a>
    </div>
    <div
      v-for="({ name, route }, index) in navItems"
      class="nav-item"
      role="listitem"
    >
      <a class="nav-item-link" :href="route">{{ name }}</a>
    </div>
  </div>
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
  top: 61px;
  inset: 0;
  height: 0;
  max-height: 100vh;
  opacity: 0;
  visibility: hidden;
  transition: opacity 350ms, visibility 350ms, height 350ms ease-in;

  &--visible {
    opacity: 0.95;
    height: 100vh;
    visibility: visible;

    .nav-item {
      animation: fadeUp 250ms ease-in forwards;

      &:nth-of-type(1) {
        animation-delay: 100ms;
      }

      &:nth-of-type(2) {
        animation-delay: 150ms;
      }

      &:nth-of-type(3) {
        animation-delay: 200ms;
      }

      &:nth-of-type(4) {
        animation-delay: 250ms;
      }
    }

    .nav-item-link {
      position: relative;
      display: block;
      font-size: clamp(1.2rem, 2rem, 2.4rem);
      padding: 0.2rem;
      overflow: hidden;
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
