<template>
    <div id="wrapper">
        <input type="text" class="search" @keyup.enter='setQuery' 
            placeholder="enter city name" v-model="searchInput"
        >
    </div>
</template>

<script>
import { Bus } from '../event bus/bus'

export default {
    name: 'Search',
    data() {
        return {
            searchInput: ''
        }
    },
    methods: {
        setQuery() {
            this.$store.dispatch('patchQuery', this.searchInput);
            Bus.$emit('checkWeather')
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    padding: 1rem 1rem;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    text-align: center;
}

::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}
</style>