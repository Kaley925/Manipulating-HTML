document.addEventListener("DOMContentLoaded", function(){
     let button=document.createElement("button");
    let btnText=document.createTextNode('Click Me for DOM');
    button.appendChild(btnText);
    document.body.appendChild(button);
    
    
    
    
    button.addEventListener('click', function() {
        alert(document.getElementById('text-id').value);
    });
    mydiv.style.width='150px';
    mydiv.style.height='150px';
    
    document.getElementById("mydiv").addEventListener("mouseover", function() {
        document.getElementById("mydiv").style.backgroundColor = "green";
    });
    
    document.getElementById("mydiv").addEventListener("mouseout", function() {
        document.getElementById("mydiv").style.backgroundColor = "red";
    });
    
    
    document.getElementById('paragraph').addEventListener('click', function(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById('paragraph').style.color="#" + (randomColor);
    })

    document.getElementById('butto').addEventListener('click', function(){
        let span=document.createElement("span");
        let spantext=document.createTextNode('Kaley');
        span.appendChild(spantext);
        document.getElementById('nextdiv').appendChild(span);
    })
    let ul=document.getElementById('list');
    let counter=0;

    let friends=['hunter', 'Dariss', 'Putrid', 'Asymptote', 'Calisnow', 'Foxbrush', 'Ferragamoo', 'Ark', 'Kona', 'Luum', 'Navi'];
    document.getElementById('button3').addEventListener("click", function(){
        console.log(counter);
        let li=document.createElement("li");
        let litext=document.createTextNode(friends[counter]);
        li.appendChild(litext);
        ul.appendChild(li);
        counter++;
    })







})/*dom content loaded*/