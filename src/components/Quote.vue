<template>
  <div class="quote">
    <p class="text">{{ currentItem.quote }}</p>
    <div class="author">
      <img
        :src="`/${currentItem.src}.jpeg`"
        :alt="currentItem.name"
        class="profile"
        :width="80"
        :height="80"
      />
      <span class="name">{{ currentItem.name }}</span>
      <span class="position">{{ currentItem.company }}</span>
    </div>
  </div>
</template>

<script>
const Quote = {
  name: 'Quote',

  props: {
    currentItem: {
      type: Object,
      default: () => ({}),
    },
  },
};

export default Quote;
</script>

<style lang="scss">
.quote {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  &:before {
    position: absolute;
    content: '”';
    font-family: var(--font-family-primary);
    font-size: 10rem;
    font-weight: 700;
    line-height: 1;
    left: 50%;
    top: -15%;
    transform: translateX(-50%);
    color: var(--color-secondary);
  }
}

.text {
  margin-bottom: 1rem;
  font-size: 24px;
  font-weight: 300;
  font-family: var(--font-family-secondary);
}

.author {
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1fr;
  font-family: var(--font-family-secondary);

  .image-wrapper {
    margin-bottom: 5px;
    width: 80px;
    height: 80px;
  }

  .profile {
    margin-bottom: 10px;
    border-radius: 50%;
    filter: grayscale(0.95);
    background-color: var(--color-skeleton);
    user-select: none;
  }

  .name {
    font-size: 28px;
    line-height: 32px;
    font-weight: 900;
  }

  .position {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 16px;
    padding-left: 35px;

    &:before {
      position: absolute;
      content: '';
      width: 20px;
      height: 2px;
      left: 0;
      background-color: var(--color-primary);
    }
  }
}
</style>
