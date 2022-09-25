<template>
  <div class="quote">
    <p class="text">{{ currentQuote.quote }}</p>
    <div class="author">
      <img
        v-if="currentQuote.src"
        :src="`/${currentQuote.src}.jpeg`"
        :alt="currentQuote.name"
        class="profile"
        :width="80"
        :height="80"
      />
      <span class="name">{{ currentQuote.name }}</span>
      <span class="position">{{ currentQuote.company }}</span>
    </div>
  </div>
</template>

<script>
const Quote = {
  name: 'Quote',

  props: {
    currentQuote: {
      type: Object,
      default: () => ({}),
    },
  },
};

export default Quote;
</script>

<style lang="scss">
.quote {
  position: absolute;
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
  font-family: var(--font-family-secondary);
}

.author {
  align-self: flex-end;
  margin-right: 1.5rem;
  font-family: var(--font-family-secondary);

  .profile {
    margin-bottom: 10px;
    border-radius: 50%;
    filter: grayscale(95%);
    background-color: var(--color-skeleton);
    user-select: none;
  }

  .name {
    font-family: var(--font-family-secondary);
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
