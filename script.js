function playGame() {
    var enterHus = confirm("Du har kommit till ett konstigt hus i skogen. Vill du gå in?");
    
    if(enterHus == true) {
    var chokladVal = prompt("Du går in i huset och ser ett bord med tre chokladkakor, smakar du på nr 1, 2 eller 3?");
    
    if(chokladVal == 1) {
    alert("Chokladen är antagligen förgiftad då du inte kan andas och dör.")
    }
    else if(chokladVal == 2) {
    alert("Det var inte choklad, det va ett nervgift och din kropp slutar fungera.");
    }
    else {
    alert("Oj vilken god choklad, den va perfekt!")
    
    
    var stolVal = prompt("Du går ner i källaren och ser tre toaletter. En stor, en mellan och en liten. Vilken väljer du?");
    if(stolVal == "stor") {
    alert("Toaletten är för stor så du trillade ner och drunknade.");
    }
    else if(stolVal == "mellan") {
        alert("Toaletten är för stor så trillade ner och drunknade")
    }
    else {
        alert("Denna toaletten är perfekt!")
        
    var bedVal = prompt("Du går upp från källaren och in i rummet bredvid och ser tre sängar, en stor, en mellan och en liten. Vilken väljer du");
    if(bedVal == "stor") {
        alert("Sängen är för stor och du drunknar i alla lakan, luften tog slut.");
    }
    else if(bedVal == "mellan") {
        alert("Sängen är för mjuk och du kan inte ta dig upp, luften tar slut.");
    }
    else {
        alert("Sängen är perfekt och du somnar.");
        alert("Du vaknar upp och ser tre bävrar som stirrar på dig.");
        alert("Chockad reser du dig och springer iväg och kommer aldrig tillbaka.");
            }
        }   
    }
    
    }
    else {
    alert("Du gick inte in i huset, utan valde att gå hem.");
    
    }
    
    var playAgain = confirm("Vill du spela igen?")
    if(playAgain == true) {
        playGame();
    }
    
    }
    
    playGame();