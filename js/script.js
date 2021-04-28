// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

var app = new Vue(
    {
        el: '#root',
        data: {
           emailList: [],
        },
        methods: {
        },
        mounted() {
            for(let i=0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const result = response.data;
                        console.log(result);

                        this.emailList.push(result.response);
                    });
            }
            
            
        }
    }
);