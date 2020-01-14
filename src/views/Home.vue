<template>
  <div id="home">
    <search  class="search"/>

    <div class="result" v-if="weather">
      <p class="result__location">{{ location }}</p>
      <p class="result__date">{{ getDate }} </p>
      <p class="result__temprature">{{temp}}<sup>o</sup>c  <br>
      {{condition}}
      </p>
      <!-- <p class="result__condition"></p> -->
    </div>

    <div class="home__placeholder" v-else>
      Enter a city name in the search input and hit`enter` to display weather for that city.
    </div>

    <Loader v-if="loading" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Search from '@/components/search'
  import Loader from '@/components/loader'
  import { Bus } from '../event bus/bus'
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'home',
    data() {
      return {
        loading: false,
        date: ''
      }
    },
    components: {
      Search, Loader
    },
    methods: {
      getWeather() {
        this.loading = true;
        this.$store.dispatch('requestWeather')
        .then(() => {
          this.loading = false
        })
        this.loading = false;
      },
    },
    computed: {
      ...mapState ([
        'weather', 'condition', 'temp', 'location'
      ]),
      ...mapGetters(['getDate']),

      getDate() {
        var monthNames = [
          "January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"
        ];
       const dateTime = new Date();
    
        let day = dateTime.getDate();
        let monthIndex = dateTime.getMonth();
        let year = dateTime.getFullYear();
    
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
    },

    created() {
      Bus.$on('checkWeather', this.getWeather)
    },
  }
</script>

<style lang="scss" scoped>
#home {
  background: white;
  background-image: url('../assets/home_landscape.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}

.home__placeholder {
  font-size: 1.5rem;
  width: 50%;
  margin: 0 auto;
}

.search {
  padding: 4rem 20%;
}

.result__location {
  font-size: 3rem;
  font-weight: 500;
  line-height: 2;
}

.result__temprature {
  padding: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  width: 15%;
  background: #ffffff8f;
  margin: 1rem auto;
  border-radius: 4px;
}

@media only screen and (max-width: 450px) {

  .home__placeholder {
    font-size: 1.2rem;
    width: 80%;
    margin: 0 auto;
  }
  .result__temprature {
    width: 100%;
    padding: 1rem;
  }

}
</style>