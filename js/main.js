const app = new Vue({
    el: '#root',
    data:{
        numberHeaderLink: 6,
        headerLink: [...link],
        imageCategories:[...image],
        active: false,
        orderOnline:[...online],
        navigate:[...navigate],
        information:[...information],
        opening:[...opening],
        voucher:[...voucher]

    },
    methods: {
        mouseOver: function () {
            this.active = !this.active;
        }
    }
})
