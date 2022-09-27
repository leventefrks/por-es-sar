<template>
  <blockquote class="quote">
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
  </blockquote>
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

<style lang="scss" scoped>
.quote {
  margin: 0 auto;
  max-width: 50rem;
  will-change: transform;
}

.text {
  position: relative;
  font-size: clamp(1.1rem, 1.4rem, 1.6rem);
  line-height: 1.5;
  color: var(--color-primary);
  font-family: var(--font-family-secondary);
  margin-bottom: 0.5rem;
  max-width: 80ch;

  &:before,
  &:after {
    position: absolute;
    color: var(--color-secondary);
    font-size: clamp(3rem, 8rem, 13rem);
    font-family: var(--font-family-primary);
    font-weight: 900;
  }

  &:before {
    content: open-quote;
    top: -11rem;
    left: 0;
  }

  &:after {
    content: close-quote;
    bottom: -8.5rem;
    right: 0;
  }
}

.author {
  width: fit-content;
  margin: 4rem 0 0 auto;
  font-family: var(--font-family-secondary);
  color: var(--color-primary);

  .profile {
    border-radius: 50%;
    filter: grayscale(95%);
    background-color: var(--color-skeleton);
    user-select: none;
  }

  .name {
    font-family: var(--font-family-secondary);
    font-size: clamp(1.1rem, 1.3rem, 1.7rem);
    line-height: 32px;
    font-weight: 900;
  }

  .position {
    position: relative;
    display: flex;
    align-items: center;
    font-size: clamp(0.8rem, 1rem, 1.3rem);
    padding-left: 2.25rem;

    &:before {
      position: absolute;
      content: '';
      width: 1.25rem;
      height: 0.1rem;
      left: 0;
      background-color: var(--color-primary);
    }
  }
}
</style>
