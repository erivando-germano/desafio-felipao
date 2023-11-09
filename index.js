const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicite ao usuário que insira o nome do herói e xp adquirido
rl.question("Digite o nome do Herói: ", function(nomeDoHeroi) {
  
  rl.question("Digite a quantidade de experiência (XP) do Herói: ", function(xpDoHeroi) {
    
    xpDoHeroi = parseInt(xpDoHeroi);

    // Utilize uma estrutura de decisão para determinar o nível do herói
    var nivelDoHeroi;

    if (xpDoHeroi < 1000) {
      nivelDoHeroi = "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
      nivelDoHeroi = "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
      nivelDoHeroi = "Prata";
    } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
      nivelDoHeroi = "Ouro";
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
      nivelDoHeroi = "Platina";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
      nivelDoHeroi = "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
      nivelDoHeroi = "Imortal";
    } else {
      nivelDoHeroi = "Radiante";
    }

    // Ao final deve se exibir uma mensagem:
    //"O Herói de nome **{nome}** está no nível de **{nivel}**"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);

    rl.close();
  });
});
