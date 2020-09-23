window.onload = function()
{   
    try {
        tikTakBoom.init(
            tasks,
            document.getElementById('timerField'),
            document.getElementById('gameStatusField'),
            document.getElementById('questionField'),
            document.getElementById('answer1'),
            document.getElementById('answer2'),
            document.getElementById('start'),
            document.getElementById('end'),
        );
        tikTakBoom.countOfPlayers = +prompt("Enter the count of players", 2);
        tikTakBoom.boomTimer = +prompt("Enter time for game:", 30);
        document.getElementById('start').addEventListener('click', function(){
            this.style.display = 'none';
            document.getElementById('end').style.display = 'inline-block';
            tikTakBoom.run();     
        });
        document.getElementById('end').addEventListener('click', function(){
            this.style.display = 'none';
            tikTakBoom.finish('lose');     
        });
    } catch (anyException)  {
        alert('Ошибка JSON: ' + anyException.message);
    }
    
}
