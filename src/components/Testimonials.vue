<template>
  <section class="testimonials">
    <h2 class="main-title">A füzetről írták</h2>
    <transition-group tag="ul" name="slide">
      <li
        v-for="(item, index) in items"
        v-bind:key="item.src"
        class="quote-slider"
      >
        <div v-show="active === index" class="quote">
          <p class="text">{{ item.quote }}</p>
          <div class="author">
            <img
              :src="`/${item.src}.jpeg`"
              :alt="item.name"
              class="profile"
              width="80"
              height="80"
              loading="lazy"
            />
            <span class="name">{{ item.name }}</span>
            <span class="position">{{ item.company }}</span>
          </div>
        </div>
      </li>
    </transition-group>
  </section>
</template>

<script>
const Testimonials = {
  name: 'Testimonials',

  data() {
    return {
      active: 0,
      items: [
        {
          quote:
            'Érdekes szembesülni azzal, hogy a Budapestet a világ egyik legszebb fővárosává tévő épületek mennyi vitát és mennyi vitriolos megjegyzést váltottak ki nem csak a szakértőkből, újságírókból, de nagy íróinkból is',
          src: 'karafiath-orsolya',
          name: 'Karafiáth Orsolya',
          company: 'Magyar Narancs',
        },
        {
          quote:
            'Mintha már akkor kiderült volna, hogy rosszat, gúnyosat írni valamiről könnyebb, mint higgadtat, elemzőt. Ez volt a korai kattintásvadászat.',
          src: 'torok-andras',
          name: 'Török András',
          company: 'Vademecum Hírlevél',
        },
        {
          quote:
            'A Budapesti por és sár kiadvány már első ránézésre elárulta, hogy komoly kutatómunka rejlik mögötte, egyszerre szolgál tanulságos és megmosolyogtató részletekkel Budapest fénykorát illetően.',
          src: 'mayer-kitti',
          name: 'Mayer Kitti',
          company: 'Hype And Hyper',
        },
      ],
      interval: null,
    };
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.active >= this.totalItems) {
        this.active = 0;
      } else {
        this.active++;
      }
    }, 4000);
  },

  destroy() {
    clearInterval(this.interval);
  },

  computed: {
    totalItems() {
      return this.items.length - 1;
    },
  },
};

export default Testimonials;
</script>

<style lang="scss">
.testimonials {
  max-width: 70rem;
  padding: 2rem;
  margin: 0 auto;

  .quote-slider {
    position: relative;
  }

  .quote {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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
}

.slide-enter-active,
.slide-leave-active {
  transition: left 0.5s;
}

.slide-enter {
  left: 100%;
}

.slide-leave-to {
  left: -100%;
}

@media screen and (min-width: 700px) {
  .testimonials {
    padding: 8rem 7rem;

    .quote {
      &:before {
        left: -3rem;
      }
    }
  }
}
</style>
