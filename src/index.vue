<template>
  <picker
      :list="list"
      :change="change"
      :confirm="confirm"
      :cancel="cancel">
    <slot></slot>
  </picker>
</template>

<script type="text/babel">
  import picker from 'vue-m-picker'
  import DatePack from './date'
  export default{
    props: ['confirm', 'cancel'],
    data () {
      return {
        list: []
      }
    },

    methods: {
      change (itemIndex, index) {
        switch (itemIndex) {
          case 0:
            this.datePack.setYear(index)
            break
          case 1:
            this.datePack.setMonth(index)
            this.datePack.calcDays(this.datePack.year, this.datePack.month)
            this.list.splice(2, 1, this.datePack.days)
            break
          case 2:
            this.datePack.setDay(index)
            break
        }
      }
    },

    created () {
      const datePack = this.datePack = new DatePack()
      this.list = [datePack.years, datePack.months, datePack.days]
    },

    components: {
      picker
    }
  }
</script>