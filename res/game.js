let mode
let symbol
let score 
let z_game = []
let w_playing
let has_game = false
let w_init

window.onload = ()=>{
  //render the zonr game
  render_z_game()
  
  z_game.forEach((s)=>{
    s[0].addEventListener("click",()=>{
      if(s[0].innerHTML == ""){
        mapear_ponto({x:s[1],y:s[2]})
        s[0].innerHTML = "M"
      }else{
        s[0].innerHTML = ""
      }
    })
  })
}

function mapear_ponto(point){
  clear_z_game()
  console.clear()
  console.log(point.x, point.y)
  // relative y and x
  //top
  if(point.y != 4){
    z_game.filter((p)=>{
      if(p[1] == point.x && p[2] == (point.y+1)){
        p[0].style.backgroundColor = "green"
      }
    })
  }
  //bottom
  if(point.y != 0){
    z_game.filter((p)=>{
      if(p[1] == point.x && p[2] == (point.y-1)){
        p[0].style.backgroundColor = "green"
      }
    })
  }
  //left 
  if (point.x != 0) {
    z_game.filter((p) => {
      if (p[1] == (point.x-1) && p[2] == point.y) {
        p[0].style.backgroundColor = "green"
      }
    })
  }
  //right 
  if (point.x != 5) {
    z_game.filter((p) => {
      if (p[1] == (point.x+1) && p[2] == point.y) {
        p[0].style.backgroundColor = "green"
      }
    })
  }
  //top right
  if(point.y != 4 && point.x != 5){
    z_game.filter((p)=>{
      if(p[1] == (point.x+1) && p[2]== (point.y+1)){
        p[0].style.backgroundColor = "green"
      }
    })
  }
  //top left
  if(point.y != 4 && point.x != 0){
    z_game.filter((p)=>{
      if(p[1] == (point.x-1) && p[2]== (point.y+1)){
        p[0].style.backgroundColor = "green"
      }
    })
  }
  //bottom right
  if (point.y != 0 && point.x != 5)
  {
    z_game.filter((p) => {
      if (p[1] == (point.x + 1) && p[2] == (point.y - 1)) {
        p[0].style.backgroundColor = "green"
      }
    })
  }
  //bottom left
  if (point.y != 0 && point.x != 0)
  {
    z_game.filter((p) => {
      if (p[1] == (point.x - 1) && p[2] == (point.y - 1)) {
        p[0].style.backgroundColor = "green"
      }
    })
  }
}

function clear_z_game(){
  z_game.forEach((s)=>{
    s[0].innerHTML = ""
    s[0].style.backgroundColor = "transparent"
  })
}

function render_z_game(){
  let x, y
  x = 0
  y = 4
  for(let i = 0; i < 30; i++){
    if(x == 6){
      x = 0
      y--
    }
    
    let dv  = document.createElement("div")
    dv.setAttribute("class", "z-g-square")
    //dv.innerHTML = `${x},${y}`
    z_game.push([dv, x, y])
    document.getElementById("z-game").append(dv)
    
    x++
  }
}