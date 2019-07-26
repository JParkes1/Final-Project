// Final Project, Whats the greatest sport?

// Global Variables
let active = 0;
let streak = 0;
let KickGood = 0;
let KicknoGood = 0;
let Touchdowns = 0;
let Incompletions = 0;
let Turnovers = 0;
let HomeRuns = 0;
let Triples = 0;
let Doubles = 0;
let Singles = 0;
let Outs = 0;
let Goalss = 0;
let Missess = 0;
let Savess = 0;
let Goalsh = 0;
let Missesh = 0;
let Savesh = 0;
let Holeinone = 0;
let Par = 0;
let Bogey = 0;
let DoubleBogey = 0;
let Birdie = 0;
let Eagle = 0;
let KnockoutWin = 0;
let KnockoutLoss = 0;
let SubmissionWin = 0;
let SubmissionLoss = 0;
let DescionWin = 0;
let DescionLoss = 0;
let sixes = 0;
let fours = 0;
let twos = 0;
let outs = 0;

// When a sports button is clicked
document.getElementById('NFL-btn').addEventListener('click', SetNFL);
document.getElementById('NBA-btn').addEventListener('click', SetNBA);
document.getElementById('CFL-btn').addEventListener('click', SetCFL);
document.getElementById('MLB-btn').addEventListener('click', SetMLB);
document.getElementById('NHL-btn').addEventListener('click', SetNHL);
document.getElementById('Soccer-btn').addEventListener('click', SetSoccer);
document.getElementById('Golf-btn').addEventListener('click', SetGolf);
document.getElementById('UFC-btn').addEventListener('click', SetUFC);
document.getElementById('Cricket-btn').addEventListener('click', SetCricket);


// Start of knowledege section
// Event Functions
function SetNFL () {
    //Change image
    document.getElementById('BasicLogo').src = 'images/NFLLogo.png';
    document.getElementById('Box1').innerHTML = 'Tom Brady, New England Patriots';
    document.getElementById('Box2').innerHTML = 'August 20th, 1920';
    document.getElementById('Box3').innerHTML = 'The SuperBowl';
    document.getElementById('Box4').innerHTML = 'Green Bay Packers, 13 Titles';
    document.getElementById('Box5').innerHTML = 'American football (often called football in the United States) is a team sport. It is played by two teams with 11 players on each side. American football is played with a ball with pointed ends. Points are scored in many ways, usually by one team getting the ball into the end zone of the other team.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/National_Football_League'
}

function SetNBA () {
    //Start
    document.getElementById('BasicLogo').src = 'images/NBALogo.png';
    document.getElementById('Box1').innerHTML = 'Lebron James, Los Angeles Lakers';
    document.getElementById('Box2').innerHTML = 'June 6th, 1946';
    document.getElementById('Box3').innerHTML = 'NBA Finals';
    document.getElementById('Box4').innerHTML = 'Boston Celtics, 17 Titles';
    document.getElementById('Box5').innerHTML = 'Basketball is a team sport. Two teams of five players each try to score by shooting a ball through a hoop elevated 10 feet above the ground. The game is played on a rectangular floor called the court, and there is a hoop at each end. ... The team with the ball is called the offense.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/National_Basketball_Association'
}

function SetCFL() {
    //Start
    document.getElementById('BasicLogo').src = 'images/CFLLogo.png';
    document.getElementById('Box1').innerHTML = 'Bo Levi Mitchell, Calgary Stampeders';
    document.getElementById('Box2').innerHTML = 'January 19th, 1958';
    document.getElementById('Box3').innerHTML = 'Grey Cup';
    document.getElementById('Box4').innerHTML = 'Edmonton Eskimos, 11 Titles';
    document.getElementById('Box5').innerHTML = 'Canadian football is a sport played in Canada in which two teams of 12 players each compete for territorial control of a field of play 110 yards  long and 65 yards  wide attempting to advance a pointed oval-shaped ball into the opposing teams scoring area.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/Canadian_Football_League'
}

function SetMLB () {
    //Start
    document.getElementById('BasicLogo').src = 'images/MLBLogo.png';
    document.getElementById('Box1').innerHTML = 'Mike Trout, Los Angeles Angels';
    document.getElementById('Box2').innerHTML = '1903; 116 years ago';
    document.getElementById('Box3').innerHTML = 'The World Series';
    document.getElementById('Box4').innerHTML = 'New York Yankees, 27 Titles';
    document.getElementById('Box5').innerHTML = 'A baseball game is played over nine innings – limited by outs not time. An inning is complete when each team gets three players from the opposing team out. A pitch is when the ball is thrown by a player of the opposing team, called the pitcher, who stands on a mound in the middle of the field.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/Major_League_Baseball'
}

function SetNHL () {
    //Start
    document.getElementById('BasicLogo').src = 'images/NHLLogo.png';
    document.getElementById('Box1').innerHTML = 'Connor McDavid, Edmonton Oilers';
    document.getElementById('Box2').innerHTML = 'November 26th, 1917';
    document.getElementById('Box3').innerHTML = 'The Stanley Cup';
    document.getElementById('Box4').innerHTML = 'Montreal Canadiens, 25 Titles';
    document.getElementById('Box5').innerHTML = 'Ice hockey is a contact team sport played on ice, usually in a rink, in which two teams of skaters use their sticks to shoot a vulcanized rubber puck into their opponents net to score points.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/National_Hockey_League'
}

function SetSoccer () {
    //Start
    document.getElementById('BasicLogo').src = 'images/SoccerLogo.png';
    document.getElementById('Box1').innerHTML = 'Lionel Messi, FC Barcelona';
    document.getElementById('Box2').innerHTML = 'Mid-19th century';
    document.getElementById('Box3').innerHTML = 'Champions league';
    document.getElementById('Box4').innerHTML = 'Real Madrid, 13 Titles';
    document.getElementById('Box5').innerHTML = 'Soccer is played on a large grass field with a goal at each end. The object of the game is to get the soccer ball into the opposing teams goal. One of the reasons soccer is so popular is that it really only takes a ball and a flat open area to play.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/Association_football'
}

function SetGolf () {
    //Start
    document.getElementById('BasicLogo').src = 'images/GolfLogo.png';
    document.getElementById('Box1').innerHTML = 'Tiger Woods';
    document.getElementById('Box2').innerHTML = '15th century';
    document.getElementById('Box3').innerHTML = 'The Masters';
    document.getElementById('Box4').innerHTML = '270 Tiger Woods (1997), 270 Jordan Spieth (2015)';
    document.getElementById('Box5').innerHTML = 'Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/Golf'
}

function SetUFC () {
    //Start
    document.getElementById('BasicLogo').src = 'images/UFCLogo.png';
    document.getElementById('Box1').innerHTML = 'Khabib Nurmagomedov';
    document.getElementById('Box2').innerHTML = '1993';
    document.getElementById('Box3').innerHTML = 'N/A (UFC have title fights instead of events)';
    document.getElementById('Box4').innerHTML = 'Anderson Silva: 2,457 Days';
    document.getElementById('Box5').innerHTML = 'Mixed Martial Arts (MMA) is a full-contact combat sport that allows striking and grappling, both standing and on the ground, using techniques from various combat sports and martial arts. The first documented use of the term mixed martial arts was in a review of UFC 1 by television critic Howard Rosenberg in 1993. The term gained popularity when newfullcontact.com, then one of the largest websites covering the sport, hosted and republished the article. The question of who actually coined the term is subject to debate.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/Ultimate_Fighting_Championship'
}

function SetCricket () {
    //Start
    document.getElementById('BasicLogo').src = 'images/crickettt.png';
    document.getElementById('Box1').innerHTML = 'Virat Kohli: India, Kagiso Rabada: South Africa';
    document.getElementById('Box2').innerHTML = '1975';
    document.getElementById('Box3').innerHTML = 'Cricket World Cup';
    document.getElementById('Box4').innerHTML = 'Australia, (5 titles)';
    document.getElementById('Box5').innerHTML = 'Cricket is played by two teams of 11, with one side taking a turn to bat a ball and score runs, while the other team will bowl and field the ball to restrict the opposition from scoring. The main objective in cricket is to score as many runs as possible against the opponent.';
    document.getElementById('Box6').href = 'https://en.wikipedia.org/wiki/Cricket'
}

// End of knowledge section


// Start of simulators systems
document.getElementById('NFL-btn2').addEventListener('click', SetNFLsim);
document.getElementById('NBA-btn2').addEventListener('click', SetNBAsim);
document.getElementById('CFL-btn2').addEventListener('click', SetCFLsim);
document.getElementById('MLB-btn2').addEventListener('click', SetMLBsim);
document.getElementById('NHL-btn2').addEventListener('click', SetNHLsim);
document.getElementById('Soccer-btn2').addEventListener('click', SetSoccersim);
document.getElementById('Golf-btn2').addEventListener('click', SetGolfsim);
document.getElementById('UFC-btn2').addEventListener('click', SetUFCsim);
document.getElementById('Cricket-btn2').addEventListener('click', SetCricketsim);
document.getElementById('RunSim').addEventListener('click', Runsim);


function SetNFLsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/field-goal.png">';
    document.getElementById('textForSim').innerHTML = 'Field Goal! theres a 70% Chance a field goal will be good and a 30% chance its no good. Take your chance!';
    document.getElementById('Line1').innerHTML = 'Number of kicks good:';
    document.getElementById('Line2').innerHTML = 'Number of kicks no good:';
    document.getElementById('Line3').innerHTML = ' ';
    document.getElementById('Line4').innerHTML = ' ';
    document.getElementById('Line5').innerHTML = ' ';
    document.getElementById('Line6').innerHTML = ' ';
    document.getElementById('DisplaySim').innerHTML = ' ';

    //Variable Update
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('NFL-btn2').classList.add('ActiveBtn');
    active = 1;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    KickGood = 0;
    KicknoGood = 0;
}

function SetNBAsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/BasketballHoop.png">';
    document.getElementById('textForSim').innerHTML = '3 Pointers! theres a 56% the shot is good and a 44% chance the shot is not good, so hows your form!';
    document.getElementById('Line1').innerHTML = 'Number of shots good:';
    document.getElementById('Line2').innerHTML = 'Number of shots no good:';
    document.getElementById('Line3').innerHTML = ' ';
    document.getElementById('Line4').innerHTML = ' ';
    document.getElementById('Line5').innerHTML = ' ';
    document.getElementById('Line6').innerHTML = ' ';
    document.getElementById('DisplaySim').innerHTML = ' '

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('NBA-btn2').classList.add('ActiveBtn');
    active = 2;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    KickGood = 0;
    KicknoGood = 0;
}

function SetCFLsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/CFLTouchdown.jpg">';
    document.getElementById('textForSim').innerHTML = 'Touchdowns! theres a 40% the throw and catch are good, a 40% chance the throw and catch are no good and a 20% chance of a turnover, so hows your play calling!';
    document.getElementById('Line1').innerHTML = 'Touchdowns:';
    document.getElementById('Line2').innerHTML = 'Incompletions:';
    document.getElementById('Line3').innerHTML = 'Turnovers:';
    document.getElementById('Line4').innerHTML = ' ';
    document.getElementById('Line5').innerHTML = ' ';
    document.getElementById('Line6').innerHTML = ' ';
    document.getElementById('DisplaySim').innerHTML = '  '

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('CFL-btn2').classList.add('ActiveBtn');
    active = 3;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    Touchdowns = 0;
    Incompletions = 0;
    Turnovers = 0;
}

function SetMLBsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/BaseballField.jpg">';
    document.getElementById('textForSim').innerHTML = 'Home runs! there a 5% chance for a homerun, a 10% chance for a triple play, a 15% chance for a double play, a 25% chance for a single and a 45% chance for an out, hows your batting skills';
    document.getElementById('Line1').innerHTML = 'Home Runs:';
    document.getElementById('Line2').innerHTML = 'Triples:';
    document.getElementById('Line3').innerHTML = 'Double:';
    document.getElementById('Line4').innerHTML = 'Single:';
    document.getElementById('Line5').innerHTML = 'Out:';
    document.getElementById('Line6').innerHTML = ' ';

    document.getElementById('DisplaySim').innerHTML = ' '

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('MLB-btn2').classList.add('ActiveBtn');
    active = 4;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    HomeRuns = 0;
    Triples = 0;
    Doubles = 0;
    Singles = 0;
    Outs = 0;
}

function SetNHLsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/HockeyGoal.jpg">';
    document.getElementById('textForSim').innerHTML = 'Shooting Practice! theres a 33% chance of a goal, a 33% chance of a miss, a 33% chance of a save, shoot with accuracy!';
    document.getElementById('Line1').innerHTML = 'Goals:';
    document.getElementById('Line2').innerHTML = 'Misses:';
    document.getElementById('Line3').innerHTML = 'Saves:';
    document.getElementById('Line4').innerHTML = ' ';
    document.getElementById('Line5').innerHTML = ' ';
    document.getElementById('Line6').innerHTML = ' ';
    document.getElementById('DisplaySim').innerHTML = ' '

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('NHL-btn2').classList.add('ActiveBtn');
    active = 5;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    Goalsh = 0;
    Missesh = 0;
    Savesh = 0;
}

function SetSoccersim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/soccerPen.jpg">';
    document.getElementById('textForSim').innerHTML = 'Penalty Practice! theres a 33% chance of a goal, a 33% chance of a miss, a 33% chance of a save, shoot with accuracy!';
    document.getElementById('Line1').innerHTML = 'Goals:';
    document.getElementById('Line2').innerHTML = 'Misses:';
    document.getElementById('Line3').innerHTML = 'Saves:';
    document.getElementById('Line4').innerHTML = ' ';
    document.getElementById('Line5').innerHTML = ' ';
    document.getElementById('Line6').innerHTML = ' ';
    document.getElementById('DisplaySim').innerHTML = ' ';

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('Soccer-btn2').classList.add('ActiveBtn');
    active = 6;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    Goalss = 0;
    Missess = 0;
    Savess = 0;
}

function SetGolfsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/GolfHIO.jpg">';
    document.getElementById('textForSim').innerHTML = 'Golfing time! theres a 1% chance of a hole in one, a 49% chance of a par, a 24% chance at a birdie, a 24% chance at a bogey and 1% for Eagle and Double bogey, take aim!';
    document.getElementById('Line1').innerHTML = 'Hole in One:';
    document.getElementById('Line2').innerHTML = 'Pars:';
    document.getElementById('Line3').innerHTML = 'Bogeys:';
    document.getElementById('Line4').innerHTML = 'Double Bogeys:';
    document.getElementById('Line5').innerHTML = 'Birdie:';
    document.getElementById('Line6').innerHTML = 'Eagle:';
    document.getElementById('DisplaySim').innerHTML = ' ';

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('Golf-btn2').classList.add('ActiveBtn');
    active = 7;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';
    
    streak = 0;
    Holeinone = 0;
    Par = 0;
    Bogey = 0;
    DoubleBogey = 0;
    Birdie = 0;
    Eagle = 0;
}

function SetUFCsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/UFCring.jpg">';
    document.getElementById('textForSim').innerHTML = 'Fighting time! 10% chance at a knockout Win or loss, a 15% of a submission Win or loss, a 25% chance of a descion win or loss, how good are you in the octogon!';
    document.getElementById('Line1').innerHTML = 'Knockout Win:'
    document.getElementById('Line2').innerHTML = 'KnockOut Loss:';
    document.getElementById('Line3').innerHTML = 'Submission Win:';
    document.getElementById('Line4').innerHTML = 'Submission Loss:';
    document.getElementById('Line5').innerHTML = 'Descion Win:';
    document.getElementById('Line6').innerHTML = 'Descion Loss:';
    document.getElementById('DisplaySim').innerHTML = '  '

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');
    document.getElementById('Cricket-btn2').classList.remove('ActiveBtn');

    document.getElementById('UFC-btn2').classList.add('ActiveBtn');
    active = 8;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    KnockoutWin = 0;
    KnockoutLoss = 0;
    SubmissionWin = 0;
    SubmissionLoss = 0;
    DescionWin = 0;
    DescionLoss = 0;
}

function SetCricketsim () {
    document.getElementById('ImgSim').innerHTML = '<img src="images/CricketLogo.png">';
    document.getElementById('textForSim').innerHTML = 'there a 20% chance at scoring a 6, a 30% chance at scoring at a 4, a 40% chance at scoring a 2, and a 10% chance your out. Test Your luck!';
    document.getElementById('Line1').innerHTML = 'Number of 6s:'
    document.getElementById('Line2').innerHTML = 'Number of 4s:';
    document.getElementById('Line3').innerHTML = 'Number of 2s:';
    document.getElementById('Line4').innerHTML = 'Number of outs:';
    document.getElementById('Line5').innerHTML = ' ';
    document.getElementById('Line6').innerHTML = ' ';
    document.getElementById('DisplaySim').innerHTML = '  '

    //Variable Update
    document.getElementById('NFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('CFL-btn2').classList.remove('ActiveBtn');
    document.getElementById('MLB-btn2').classList.remove('ActiveBtn');
    document.getElementById('NHL-btn2').classList.remove('ActiveBtn');
    document.getElementById('Soccer-btn2').classList.remove('ActiveBtn');
    document.getElementById('Golf-btn2').classList.remove('ActiveBtn');
    document.getElementById('UFC-btn2').classList.remove('ActiveBtn');
    document.getElementById('NBA-btn2').classList.remove('ActiveBtn');

    document.getElementById('Cricket-btn2').classList.add('ActiveBtn');
    active = 9;
    console.log(active);
    document.getElementById('Variableone').innerHTML = ' ';
    document.getElementById('Variabletwo').innerHTML = ' ';
    document.getElementById('Variablethree').innerHTML = ' ';
    document.getElementById('Variablefour').innerHTML = ' ';
    document.getElementById('Variablefive').innerHTML = ' ';
    document.getElementById('Variablesix').innerHTML = ' ';
    document.getElementById('CurrentS').innerHTML = ' ';

    streak = 0;
    sixes = 0;
    fours = 0;
    twos = 0;
    outs = 0;
}

function Runsim () {
    let SpinValue = Math.random();

    if (active == 1) {
        // NFL Sim
        if (SpinValue < 0.75) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/GOOD.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            KickGood++;
            document.getElementById('Variableone').innerHTML = KickGood;
        } else {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/NO-GOOD.png">';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            KicknoGood++;
            document.getElementById('Variabletwo').innerHTML = KicknoGood
        }
    } else if (active == 2) {
        // NBA Sim
        if (SpinValue < 0.56) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/GOOD.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            KickGood++;
            document.getElementById('Variableone').innerHTML = KickGood;
        } else {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/NO-GOOD.png">';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            KicknoGood++;
            document.getElementById('Variabletwo').innerHTML = KicknoGood
        }
    } else if (active == 3) {
        // CFL Sim
        if (SpinValue < 0.45) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Touchdown.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            Touchdowns++;
            document.getElementById('Variableone').innerHTML = Touchdowns
        } else if (SpinValue < 0.9) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/NO-GOOD.png">';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            Incompletions++;
            document.getElementById('Variabletwo').innerHTML = Incompletions
        } else {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Tunrover.jpg">';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            Turnovers++
            document.getElementById('Variablethree').innerHTML = Turnovers
        }
    } else if (active == 4) {
        // MLB Sim
        if (SpinValue < 0.05) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Home-Run.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            HomeRuns++
            document.getElementById('Variableone').innerHTML = HomeRuns
        } else if (SpinValue < 0.15) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/1.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            Triples++
            document.getElementById('Variabletwo').innerHTML = Triples
        } else if (SpinValue < 0.3) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/2.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            Doubles++
            document.getElementById('Variablethree').innerHTML = Doubles
        } else if (SpinValue < 0.55) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/3.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            Singles++
            document.getElementById('Variablefour').innerHTML = Singles
        } else {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/OUT.jpg">';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            Outs++
            document.getElementById('Variablefive').innerHTML = Outs
        }
    } else if (active == 5) {
        // NHL Sim
        if (SpinValue < 0.333) {
            document.getElementById('DisplaySim').innerHTML += 'GOAL!   ';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            Goalsh++
            document.getElementById('Variableone').innerHTML = Goalsh
        } else if (SpinValue < 0.666) {
            document.getElementById('DisplaySim').innerHTML += 'Miss!   ';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            Missesh++
            document.getElementById('Variabletwo').innerHTML = Missesh
        } else {
            document.getElementById('DisplaySim').innerHTML += 'Save!   ';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            Savesh++
            document.getElementById('Variablethree').innerHTML = Savesh
        }
    } else if (active == 6) {
        // Soccer Sim
        if (SpinValue < 0.333) {
            document.getElementById('DisplaySim').innerHTML += 'GOAL!   ';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            Goalss++
            document.getElementById('Variableone').innerHTML = Goalss
        } else if (SpinValue < 0.666) {
            document.getElementById('DisplaySim').innerHTML += 'Miss!   ';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            Missess++
            document.getElementById('Variabletwo').innerHTML = Missess
        } else {
            document.getElementById('DisplaySim').innerHTML += 'Save!   ';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            Savess++
            document.getElementById('Variablethree').innerHTML = Savess
        }
    } else if (active == 7) {
        // Golf Sim
        if (SpinValue < 0.01) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Holeinone.jpg">';
            Holeinone++
            document.getElementById('Variableone').innerHTML = Holeinone
        } else if (SpinValue < 0.5) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Par.png">';
            Par++
            document.getElementById('Variabletwo').innerHTML = Par
        } else if (SpinValue < 0.73) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Birdie.png">';
            Birdie++
            document.getElementById('Variablefive').innerHTML = Birdie
        } else if (SpinValue < 0.97) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Bogey.png">';
            Bogey++
            document.getElementById('Variablethree').innerHTML = Bogey
        } else if (SpinValue < 0.985) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/Eagle.png">';
            Eagle++
            document.getElementById('Variablesix').innerHTML = Eagle
        } else {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/DoubleBogey.png">';
            DoubleBogey++
            document.getElementById('Variablefour').innerHTML = DoubleBogey
        }
    } else if (active == 8) {
        // UFC Sim
        if (SpinValue < 0.1) {
            document.getElementById('DisplaySim').innerHTML += 'Knockout Win!   ';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            KnockoutWin++
            document.getElementById('Variableone').innerHTML = KnockoutWin
        } else if (SpinValue < 0.25) {
            document.getElementById('DisplaySim').innerHTML += 'Submission Win!   ';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            SubmissionWin++
            document.getElementById('Variabletwo').innerHTML = SubmissionWin
        } else if (SpinValue < 0.5) {
            document.getElementById('DisplaySim').innerHTML += 'Descion Win!   ';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            DescionWin++
            document.getElementById('Variablethree').innerHTML = DescionWin
        } else if (SpinValue < 0.5) {
            document.getElementById('DisplaySim').innerHTML += 'Knockout Loss!   ';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            KnockoutLoss++
            document.getElementById('Variablefour').innerHTML = KnockoutLoss
        } else if (SpinValue < 0.5) {
            document.getElementById('DisplaySim').innerHTML += 'Submission Loss!   ';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            SubmissionLoss++
            document.getElementById('Variablefive').innerHTML = SubmissionLoss
        } else {
            document.getElementById('DisplaySim').innerHTML += 'Descion Loss!   ';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            DescionLoss++
            document.getElementById('Variablesix').innerHTML = DescionLoss
        }
    } else {
        // Cricket Sim
        if (SpinValue < 0.2) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/6.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            sixes++
            document.getElementById('Variableone').innerHTML = sixes
        } else if (SpinValue < 0.5) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/4.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            fours++
            document.getElementById('Variabletwo').innerHTML = fours
        } else if (SpinValue < 0.9) {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/2.png">';
            streak++;
            document.getElementById('CurrentS').innerHTML = streak
            twos++
            document.getElementById('Variablethree').innerHTML = twos
        } else {
            document.getElementById('DisplaySim').innerHTML += '<img src="images/NO-GOOD.png">';
            streak = 0;
            document.getElementById('CurrentS').innerHTML = streak
            outs++
            document.getElementById('Variablefour').innerHTML = outs
        }
    }
}
// End of simulators systems


// Start of Mad Lib
document.getElementById('Madbtn').addEventListener('click', displayMessage);

function displayMessage() {
    //Input
    let lineOne = document.getElementById('inputOne').value;
    let lineTwo = document.getElementById('inputTwo').value;
    let lineThree = document.getElementById('inputThree').value;
    let lineFour = document.getElementById('inputFour').value;
    let lineFive= document.getElementById('inputFive').value;
    let lineSix= document.getElementById('inputSix').value;
    let lineSeven = document.getElementById('inputSeven').value;

    //Build a Message
    let message = lineSix + ' and ' + lineThree + ' were ready to take on their nemisis in ' + lineFive + '. This was the ' + lineSeven + ' final at ' + lineFour + ' and they were against their rival ' + lineFive + ' but this night at ' + lineOne + ' wasnt going to be ruinied by ' + lineFive + ' they were on point! ' + lineTwo + ' WIN!!!'
    

    // Output the message
    document.getElementById('message').innerHTML = message
}
// End of mad lib