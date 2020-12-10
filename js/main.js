const app = new Vue({
    el: '#root',
    data:{
        numberHeaderLink: 6,
        headerLink: [...link],
        imageCategories:[...image],
        active: false
    },
    methods: {
        mouseOver: function () {
            this.active = !this.active;
        }
    }
})
