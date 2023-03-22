function createPetList() {
    // Tu código aquí 👈
    let list = []
    return function addPet(pet){
        if(pet !== undefined){
            list.push(pet)
        }
        console.log(list)
        return list
    }
}


const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();