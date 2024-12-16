let btn = document.getElementById("btn");
btn.onclick = () => {
  if(document.body.style.backgroundColor ==="white"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.borderColor = "white";
    btn.innerHTML = "Switch to Light Mode 🌞";
  }
  else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.innerHTML = "Switch to Dark Mode 🌙";
  }
}

