var btn = document.getElementById('btn');
btn.onclick = function() {
    var x = Number(btn.innerHTML);
    x = x+1;
    var y = x.toString();
    btn.innerHTML = y;
};
document.body.appendChild(btn);