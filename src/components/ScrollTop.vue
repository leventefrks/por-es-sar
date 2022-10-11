<template>
  <a
    href="#hero"
    :class="['scroll-top', { 'scroll-top--visible': isVisible }]"
    aria-label="Ugrás a lap tetejére"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="m18 15-6-6-6 6" />
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

  beforeDestroy() {
    this.observer.unobserve(document.querySelector('.purchase'));
  },

  methods: {
    onObserver() {
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

      this.observer.observe(document.querySelector('.purchase'));
    },
  },
};

export default ScrollTop;
</script>

<style lang="scss" scoped>
.scroll-top {
  display: grid;
  place-items: center;
  position: fixed;
  background-color: var(--color-cta-background);
  color: var(--color-cta-font-color);
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
  user-select: none;
  bottom: 12.5rem;
  right: 1rem;
  opacity: 0;
  visibility: hidden;
  box-shadow: var(--shadow-elevation-medium);
  transform: translateY(4rem);
  transition: all 250ms ease-in;

  &--visible {
    opacity: 0.8;
    visibility: visible;
    transform: translateY(0);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  &:hover {
    transform: scale(1.1);
    background-color: var(--color-cta-hover-background);
  }

  svg {
    width: 30px;
  }
}

@media screen and (min-width: 1000px) {
  .scroll-top {
    bottom: 6.25rem;
    right: 1.25rem;
  }
}
</style>
