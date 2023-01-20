const { readInput,
     inquirerMenu,
      pause, 

      
    } = require("./helpers/inquirer");
const { Searches } = require("./models/searches");


const main = async ()=> {

    const searches = new Searches();
    let opt;

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:

                const site = await readInput('Ciudad: ');

                await searches.site( site)



                break;
        
            case 2:
                console.log('Caso 2');
                break;

            case 0:
                console.log('saliste');
                break;
        }
        
        await pause();


    } while ( opt !== 0);

}



main()