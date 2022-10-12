<template>
  <button
    :class="['mobile-toggle', { 'mobile-toggle--is-active': isToggleActive }]"
    aria-label="Mobil Menü"
    @click="onMobileMenuToggle"
  >
    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
  </button>
</template>

<script>
const MobileToggle = {
  name: 'MobileToggle',

  props: {
    isToggleActive: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onMobileMenuToggle() {
      console.log('click');
      this.$emit('click');
    },
  },
};

export default MobileToggle;
</script>

<style lang="scss" scoped>
.mobile-toggle {
  position: absolute;
  left: 1.125rem;
  height: 24px;
  width: 35px;
  border: none;
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

@media screen and (min-width: 1000px) {
  .mobile-toggle {
    display: none;
  }
}
</style>
