const axios = require('axios');

class Searches {

    history = [];


    constructor() {
        // Todo: Leer DB si existe 
    }

    async site ( site = '' ) {

        try {
            // Peticion HTTP
            // console.log('ciudad', site);
    
            const res = await axios.get('https://reqres.in/api/users?page=2');
            console.log(res.data);
    
            return []; // Retornar lugares 
            
        } catch (error) {
             
            return [];
            
        }
    }

}



module.exports = {
    Searches,

}