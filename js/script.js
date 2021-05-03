/**
 * 
 *  EMAIL LIST VUE
 * 
 */

const app = new Vue({
    el: '#app',
    data: {
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
                console.log(result.data.response);
                this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                    this.emails.push(result.data.response);
                console.log(this.emails);
            });
    },
    methods: {

    },
});