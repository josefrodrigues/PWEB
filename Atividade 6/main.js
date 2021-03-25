
const result = document.querySelector(".result p");
const rock_element = document.getElementById("Pedra");
const paper_element = document.getElementById("Papel");
const scissors_element = document.getElementById("Tesoura");



const getCompChoice = () => {
    const choices = ["Pedra","Papel","Tesoura"];
    return choices[Math.floor(Math.random()*3)];
}

const game = (userChoice) => {
    const computerChoice = getCompChoice();
    switch(userChoice + computerChoice) {
        case "PedraTesoura":
        case "TesouraPapel":
        case "PapelPedra":
            alert("Você Ganhou!");
            break;
            
        case "PedraPapel":
        case "TesouraPedra":
        case "PapelTesoura":
            alert("Você Perdeu!");
            break;
        default:
            alert("EMPATE!");
            break;
    }
}

const main = () => {
    rock_element.addEventListener("click", () =>{
        game("Pedra");
    });
    paper_element.addEventListener("click", () => {
        game("Papel");
    });
    
    scissors_element.addEventListener("click", () => {
        game("Tesoura");
    });


}

main();