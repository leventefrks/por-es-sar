<template>
  <section class="testimonials">
    <h2 class="main-title">A füzetről írták</h2>
    <transition mode="out-in" name="fade" tag="div">
      <Quote :key="currentItem.id" :current-item="currentItem" />
    </transition>
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
            'Érdekes szembesülni azzal, hogy a Budapestet a világ egyik legszebb fővárosává tévő épületek mennyi vitát és mennyi vitriolos megjegyzést váltottak ki nem csak a szakértőkből, újságírókból, de nagy íróinkból is',
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
          id: 2,
          quote:
            'A Budapesti por és sár kiadvány már első ránézésre elárulta, hogy komoly kutatómunka rejlik mögötte, egyszerre szolgál tanulságos és megmosolyogtató részletekkel Budapest fénykorát illetően.',
          src: 'mayer-kitti',
          name: 'Mayer Kitti',
          company: 'Hype And Hyper',
        },
      ],
      interval: null,
      currentIndex: 0,
    };
  },

  mounted() {
    this.startSlide();
  },

  beforeDestroy() {
    if (this.interval) clearInterval(this.interval);
  },

  methods: {
    startSlide() {
      this.interval = setInterval(this.next, 4000);
    },

    next() {
      if (this.items.length - 1 <= this.currentIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
  },

  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
};

export default Testimonials;
</script>

<style lang="scss">
.testimonials {
  max-width: 70rem;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 500ms ease-in-out;
}

.fade-enter {
  opacity: 1;
  transform: translateX(-100px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
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
