<template>
  <a href="#hero" :class="['scroll-top', { 'scroll-top--visible': isVisible }]">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 40">
      <path
        d="M13.06.94a1.5 1.5 0 0 0-2.12 0l-9.547 9.545a1.5 1.5 0 1 0 2.122 2.122L12 4.12l8.485 8.486a1.5 1.5 0 1 0 2.122-2.122L13.06.94ZM13.5 40V2h-3v38h3Z"
      />
    </svg>
  </a>
</template>

<script>
const ScrollTop = {
  name: 'ScrollTop',

  data() {
    return {
      observer: null,
      isVisible: false,
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1,
      },
    };
  },

  mounted() {
    this.onObserver();
  },

  methods: {
    onObserver() {
      const scrollTopElement = document.querySelector('.scroll-top');
      const target = document.querySelector('.purchase');
      const elementClass = 'scroll-top--visible';

      this.observer = new IntersectionObserver((entries = [], observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          } else {
            this.isVisible = false;
          }
        });
      }, this.observerOptions);

      this.observer.observe(target);
    },
  },
};

export default ScrollTop;
</script>

<style lang="scss">
.scroll-top {
  display: grid;
  place-items: center;
  background-color: var(--color-cta-background);
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
  user-select: none;
  position: fixed;
  bottom: 200px;
  right: 0.5rem;
  opacity: 0;
  box-shadow: var(--shadow-elevation-medium);
  transform: translateY(4rem);
  transition: all 250ms ease-in;

  &--visible {
    opacity: 0.8;
    transform: translateY(0);
  }

  &:hover {
    background-color: var(--color-cta-hover-background);
  }

  svg {
    fill: var(--color-cta-font-color);
    height: 25px;
  }
}

@media screen and (min-width: 1000px) {
  .scroll-top {
    bottom: 100px;
    right: 1.25rem;
  }
}
</style>
