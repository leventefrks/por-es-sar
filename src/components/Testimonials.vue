<template>
  <section class="testimonials">
    <h2 class="main-title">A füzetről írták</h2>
    <div class="quote-container">
      <transition mode="out-in" name="fade">
        <Quote :key="currentQuote.id" :current-quote="currentQuote" />
      </transition>
    </div>
  </section>
</template>

<script>
import Quote from './Quote.vue';

const Testimonials = {
  name: 'Testimonials',

  components: {
    Quote,
  },

  data() {
    return {
      items: [
        {
          id: 0,
          quote:
            'Érdekes szembesülni azzal, hogy a Budapestet a világ egyik legszebb fővárosává tévő épületek mennyi vitát és mennyi vitriolos megjegyzést váltottak ki nem csak a szakértőkből, újságírókból, de nagy íróinkból is.',
          src: 'karafiath-orsolya',
          name: 'Karafiáth Orsolya',
          company: 'Magyar Narancs',
        },
        {
          id: 1,
          quote:
            'Mintha már akkor kiderült volna, hogy rosszat, gúnyosat írni valamiről könnyebb, mint higgadtat, elemzőt. Ez volt a korai kattintásvadászat.',
          src: 'torok-andras',
          name: 'Török András',
          company: 'Vademecum Hírlevél',
        },
        {
          id: 3,
          quote:
            'A Budapesti por és sár kiadvány már első ránézésre elárulta, hogy komoly kutatómunka rejlik mögötte, egyszerre szolgál tanulságos és megmosolyogtató részletekkel Budapest fénykorát illetően.',
          src: 'mayer-kitti',
          name: 'Mayer Kitti',
          company: 'Hype And Hyper',
        },
        {
          id: 4,
          quote:
            'Csodás projekt indult: a Por és sár az elmúlt százötven év legerősebb, az ország átalakulásának lépéseit ellenző, vagy épp az állapota felett kesergő cikkrészleteit mutatja be.',
          src: 'vincze-miklos',
          name: 'Vincze Miklós',
          company: '24.hu',
        },
      ],
      interval: null,
      currentIndex: 0,
    };
  },

  created() {
    this.onStartQuoteSlide();
  },

  beforeDestroy() {
    if (this.interval) clearInterval(this.interval);
  },

  methods: {
    onStartQuoteSlide() {
      this.interval = setInterval(() => {
        if (this.items.length - 1 <= this.currentIndex) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      }, 7000);
    },
  },

  computed: {
    currentQuote() {
      return this.items[this.currentIndex];
    },
  },
};

export default Testimonials;
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 6rem 0;
  margin: 0 auto;
  height: 700px;
  background-color: var(--color-background);

  .quote-container {
    padding: 0 1.25rem;
    position: absolute;
    max-width: 70rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 800ms ease-in;
}

.fade-enter-to,
.fade-leave-to {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-10%);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 1000px) {
  .testimonials {
    padding: 8rem 7rem;

    .quote-container {
      padding: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .quote {
      &:before {
        left: -3rem;
      }
    }
  }
}
</style>
