/**
 * 
 *  EMAIL LIST VUE
 * 
 */

const app = new Vue({
    el: '#app',
    data: {
        maxEmails: 10,
        email: '',
        emails: [],
    },
    computed: {
        displayOk() {
            return this.emails.length === 10 ? true : false;
        }
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                for(let i = 0; i < this.maxEmails; i++) {
                    this.email = result.data.response;
                    this.emails.push(this.email);
                }
                console.log(result.data.response);
                console.log(this.emails);
            });
    },
    methods: {

    },
});