require('./style.css');
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            yearList: [],
            monthList: [],
            dayList: [],
            yearIdx: 0
        };
    },
    props: {
        open: {
            type: Boolean,
            required: true
        },
        cancle: {
            type: Function
        },
        confirm: {
            type: Function,
            required: true
        },
        min: {
            type: Number,
            default: 1991
        },
        max: {
            type: Number,
            default: 2031
        }
    },
    computed: {
        yearList(){
            var arr = [];
            for (var i = this.min; i <= this.max; i++) {
                arr.push({label: i, value: i});
            }
        }
    },
    methods: {
        'yearpicker': function (item, idx) {
        },
        'monthpicker': function (item, idx) {
        },
        'daypicker': function (item, index) {
        },
        choose: function (method) {
            if (method == 'cancle') {
                return this[method]();
            }
            if (this.type === 3) {
                this[method](this.province, this.city, this.area);
            } else if (this.type === 2) {
                this[method](this.province, this.city);
            } else if (this.type === 1) {
                this[method](this.province);
            }
        }
    },
    mounted(){
    },
    components: {
        'date-picker-cpt': require('vue-m-picker')
    }
};