var level = 0;
var pts = 0;
var submit = 0;
var live = 3;
var max = 9999;
var min = 1000;
var randarr = [];
var tempo = 0;
var user_ans = [];
var res = 0;
// const rel = setTimeout(location.reload(), 2000);

//click functions
var start_btn = document.getElementById('start');
start_btn.addEventListener("click", game_start);

var circ_1 = document.getElementById('circ_1');
circ_1.addEventListener("click", pick_1);

var circ_2 = document.getElementById('circ_2');
circ_2.addEventListener("click", pick_2);

var circ_3 = document.getElementById('circ_3');
circ_3.addEventListener("click", pick_3);

var circ_4 = document.getElementById('circ_4');
circ_4.addEventListener("click", pick_4);

var btn_1 = document.getElementById('btn_1');
btn_1.addEventListener("click", cpick_1);

var btn_2 = document.getElementById('btn_2');
btn_2.addEventListener("click", cpick_2);

var btn_3 = document.getElementById('btn_3');
btn_3.addEventListener("click", cpick_3);

var btn_4 = document.getElementById('btn_4');
btn_4.addEventListener("click", cpick_4);

var btn_5 = document.getElementById('btn_5');
btn_5.addEventListener("click", cpick_5);

var btn_6 = document.getElementById('btn_6');
btn_6.addEventListener("click", cpick_6);

var btn = document.getElementById('check');
btn.addEventListener("click", evaluate);

function game_start() {
level+=1;
if(level>9) { rel(); }
let l_change = document.getElementById('head');
l_change.innerHTML = "Level " + level;     
if(level != res){ alert("You can't skip the level, To 'Restart' the game REFRESH the page"); }

    
    function getRandom(min, max)
    {
        var temp = Math.floor(Math.random() * (max-min) + min);
        var splitvalue = temp.toString().split('');
        const id = new Set();
        for(let i=0;i<splitvalue.length;i++){
            id.add(splitvalue[i]);
        }
        if(id.size != splitvalue.length){
            getRandom(min, max);
        }
        else{
            randarr.push(temp);
            tempo = temp;
        }
    }

    function num_check(){
        for(const n of randarr){
            if(tempo == n){
                return false;
            }
            else{
                return true;
            }
        }
    }

    function alot_color(){
        if(num_check){
            let color_val = tempo.toString().split('');
            for(let i=0; i < color_val.length; i++) {   
            if(color_val[i] == 0 || color_val[i] == 1){
                let c1 = document.getElementById('circ_1');
                c1.style.backgroundColor = "rgb(255, 0, 0)";
            }
            if(color_val[i] == 2 || color_val[i] == 3){
                let c2 = document.getElementById('circ_2');
                c2.style.backgroundColor = "rgb(62, 179, 7)";
            }
            if(color_val[i] == 4 || color_val[i] == 5){
                let c3 = document.getElementById('circ_3');
                c3.style.backgroundColor = "rgb(103, 21, 170)";
            }
            if(color_val[i] == 6 || color_val[i] == 7){
                let c4 = document.getElementById('circ_4');
                c4.style.backgroundColor = "rgb(148, 26, 128)";
            }
            if(color_val[i] == 8){
                let c5 = document.getElementById('circ_2');
                c5.style.backgroundColor = "rgb(10, 252, 1)";
            }
            if(color_val[i] == 9){
                let c6 = document.getElementById('circ_4');
                c6.style.backgroundColor = "rgb(199, 10, 10)";
            }
          } 
        }
        else{
            randarr.pop();
        }
    }

    getRandom(min, max);

    function conduct() {
        setTimeout(alot_color(), 1000);
    }

    function myStopFunction() {
        clearTimeout(alot_color());
    }

    conduct();

    if(level == 1){
       let var1 = setTimeout(myStopFunction(), 5000);
       var1();
    }
    if(level == 2){
        let var1 = setTimeout(myStopFunction(), 4500);
        var1();
    }
    if(level == 3){
        let var1 = setTimeout(myStopFunction(), 4000);
        var1();
    }
    if(level == 4){
        let var1 = setTimeout(myStopFunction(), 3500);
        var1();
    }
    if(level == 5){
        let var1 = setTimeout(myStopFunction(), 3000);
        var1();
    }
    if(level == 6){
        let var1 = setTimeout(myStopFunction(), 2500);
        var1();
    }
    if(level == 7){
        let var1 = setTimeout(myStopFunction(), 2000);
        var1();
    }
    if(level == 8){
        let var1 = setTimeout(myStopFunction(), 1500);
        var1();
    }
    if(level == 9){
        let var1 = setTimeout(myStopFunction(), 1000);
        var1();
    }
} 

    //user starts picking 

    function pick_1(){
        function cpick_1(){
            let c1 = document.getElementById('circ_1');
                c1.style.backgroundColor = "rgb(255, 0, 0)"; 
        }
        function cpick_1(){
            let c2 = document.getElementById('circ_2');
                c2.style.backgroundColor = "rgb(62, 179, 7)";
        }
        function cpick_1(){
            let c3 = document.getElementById('circ_3');
                c3.style.backgroundColor = "rgb(103, 21, 170)";
        }
        function cpick_1(){
            let c4 = document.getElementById('circ_4');
                c4.style.backgroundColor = "rgb(148, 26, 128)";
        }
        function cpick_1(){
            let c5 = document.getElementById('circ_2');
                c5.style.backgroundColor = "rgb(10, 252, 1)";
        }
        function cpick_1(){
            let c6 = document.getElementById('circ_4');
                c6.style.backgroundColor = "rgb(199, 10, 10)";
        }
    }
    function pick_2(){
        function cpick_1(){
            let c1 = document.getElementById('circ_1');
                c1.style.backgroundColor = "rgb(255, 0, 0)"; 
        }
        function cpick_1(){
            let c2 = document.getElementById('circ_2');
                c2.style.backgroundColor = "rgb(62, 179, 7)";
        }
        function cpick_1(){
            let c3 = document.getElementById('circ_3');
                c3.style.backgroundColor = "rgb(103, 21, 170)";
        }
        function cpick_1(){
            let c4 = document.getElementById('circ_4');
                c4.style.backgroundColor = "rgb(148, 26, 128)";
        }
        function cpick_1(){
            let c5 = document.getElementById('circ_2');
                c5.style.backgroundColor = "rgb(10, 252, 1)";
        }
        function cpick_1(){
            let c6 = document.getElementById('circ_4');
                c6.style.backgroundColor = "rgb(199, 10, 10)";
        }    
    }
    function pick_3(){
        function cpick_1(){
            let c1 = document.getElementById('circ_1');
                c1.style.backgroundColor = "rgb(255, 0, 0)"; 
        }
        function cpick_1(){
            let c2 = document.getElementById('circ_2');
                c2.style.backgroundColor = "rgb(62, 179, 7)";
        }
        function cpick_1(){
            let c3 = document.getElementById('circ_3');
                c3.style.backgroundColor = "rgb(103, 21, 170)";
        }
        function cpick_1(){
            let c4 = document.getElementById('circ_4');
                c4.style.backgroundColor = "rgb(148, 26, 128)";
        }
        function cpick_1(){
            let c5 = document.getElementById('circ_2');
                c5.style.backgroundColor = "rgb(10, 252, 1)";
        }
        function cpick_1(){
            let c6 = document.getElementById('circ_4');
                c6.style.backgroundColor = "rgb(199, 10, 10)";
        }   
    }
    function pick_4(){
        function cpick_1(){
            let c1 = document.getElementById('circ_1');
                c1.style.backgroundColor = "rgb(255, 0, 0)"; 
        }
        function cpick_1(){
            let c2 = document.getElementById('circ_2');
                c2.style.backgroundColor = "rgb(62, 179, 7)";
        }
        function cpick_1(){
            let c3 = document.getElementById('circ_3');
                c3.style.backgroundColor = "rgb(103, 21, 170)";
        }
        function cpick_1(){
            let c4 = document.getElementById('circ_4');
                c4.style.backgroundColor = "rgb(148, 26, 128)";
        }
        function cpick_1(){
            let c5 = document.getElementById('circ_2');
                c5.style.backgroundColor = "rgb(10, 252, 1)";
        }
        function cpick_1(){
            let c6 = document.getElementById('circ_4');
                c6.style.backgroundColor = "rgb(199, 10, 10)";
        }    
    }

    function evaluate(){
        let a = document.getElementById("circ_1");
        if(a.style.backgroundColor == rgb(255, 0, 0)){
            user_ans.push(1); 
        }
        if(a.style.backgroundColor == rgb(62, 179, 7)){
            user_ans.push(3); 
        }
        if(a.style.backgroundColor == rgb(103, 21, 170)){
            user_ans.push(5); 
        }
        if(a.style.backgroundColor == rgb(148, 26, 128)){
            user_ans.push(7); 
        }
        if(a.style.backgroundColor == rgb(10, 252, 1)){
            user_ans.push(8); 
        }
        if(a.style.backgroundColor == rgb(199, 10, 10)){
            user_ans.push(9); 
        }

        let b = document.getElementById("circ_2");
        if(b.style.backgroundColor == rgb(255, 0, 0)){
            user_ans.push(1); 
        }
        if(b.style.backgroundColor == rgb(62, 179, 7)){
            user_ans.push(3); 
        }
        if(b.style.backgroundColor == rgb(103, 21, 170)){
            user_ans.push(5); 
        }
        if(b.style.backgroundColor == rgb(148, 26, 128)){
            user_ans.push(7); 
        }
        if(b.style.backgroundColor == rgb(10, 252, 1)){
            user_ans.push(8); 
        }
        if(b.style.backgroundColor == rgb(199, 10, 10)){
            user_ans.push(9); 
        }

        let c = document.getElementById("circ_3");
        if(c.style.backgroundColor == rgb(255, 0, 0)){
            user_ans.push(1); 
        }
        if(c.style.backgroundColor == rgb(62, 179, 7)){
            user_ans.push(3); 
        }
        if(c.style.backgroundColor == rgb(103, 21, 170)){
            user_ans.push(5); 
        }
        if(c.style.backgroundColor == rgb(148, 26, 128)){
            user_ans.push(7); 
        }
        if(c.style.backgroundColor == rgb(10, 252, 1)){
            user_ans.push(8); 
        }
        if(c.style.backgroundColor == rgb(199, 10, 10)){
            user_ans.push(9); 
        }

        let d = document.getElementById("circ_4");
        if(d.style.backgroundColor == rgb(255, 0, 0)){
            user_ans.push(1); 
        }
        if(d.style.backgroundColor == rgb(62, 179, 7)){
            user_ans.push(3); 
        }
        if(d.style.backgroundColor == rgb(103, 21, 170)){
            user_ans.push(5); 
        }
        if(d.style.backgroundColor == rgb(148, 26, 128)){
            user_ans.push(7); 
        }
        if(d.style.backgroundColor == rgb(10, 252, 1)){
            user_ans.push(8); 
        }
        if(d.style.backgroundColor == rgb(199, 10, 10)){
            user_ans.push(9); 
        }
       
        let rand_val = tempo.toString().split('');
        for(let i=0;i<rand_val.length;i++){
            if(rand_val[i] == 0||rand_val[i] == 1){
                rand_val[i] == 1;
            }
            if(rand_val[i] == 2||rand_val[i] == 3){
                rand_val[i] == 3;
            }
            if(rand_val[i] == 4||rand_val[i] == 5){
                rand_val[i] == 5;
            }
            if(rand_val[i] == 6||rand_val[i] == 7){
                rand_val[i] == 7;
            }
        }
        if(JSON.stringify(rand_val)==JSON.stringify(user_ans)){
            res+=1;
            let result = document.getElementById('gbox');
            let note = document.createElement('H2');
            note.innerHTML = "Congrats!!";
            result.appendChild(note);
            pts+=10;
            var points = document.getElementById('score_box');
            points.innerHTML = 'Pts: ' + pts;
        }
        else{
            let result = document.getElementById('gbox');
            let note = document.createElement('H2');
            note.innerHTML = "You Failed";
            result.appendChild(note);
            live-=1;
        }

        if(live<3){
            let life_line = document.getElementById('life_box');
            if(live == 2){
            life_line.innerHTML = '        &#10084; &#10084;';
            }
            if(live == 1){
            life_line.innerHTML = '                 &#10084;';   
            }
            if(live == 0){
                let lost = document.getElementById('gbox');
                let inote = document.createElement('H2');
                inote.innerHTML = "You Lost, Better Luck Next Time";
                lost.appendChild(inote); 
                level = 0;
                rel();
            }
        }
        if(level == 9){
            let win = document.getElementById('gbox');
            let wnote = document.createElement('H2');
            wnote.innerHTML = "BRAVO!! You Won";
            win.appendChild(wnote); 
            level = 0;
            rel();
        }
    }