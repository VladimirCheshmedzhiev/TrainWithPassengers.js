function train(input){

    let wagons = input[0].split(' ').map(Number);
    let wagonCapacity = Number(input[1]);


    for (let i = 2; i < input.length; i++) {
        let newCommand = input[i].split(' ');
        if (newCommand.includes("Add")){
            wagons.push(Number(newCommand[1]));
        } else {
            let passangers = Number(newCommand[0]);
            for (let currentWagon = 0; currentWagon < wagons.length; currentWagon++) {
                if(wagonCapacity - wagons[currentWagon] >= passangers){
                    wagons[currentWagon] += passangers;
                    break;
                }
                
            }
        }
    }    
    console.log(wagons.join(' '));


}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])