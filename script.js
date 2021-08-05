const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W w W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const transformMapToArray = ()=> {
    let arr = []
    map.map( line => {
        newLine = line.split('')
        arr.push(newLine)
    })
    return arr
}

mapArr = transformMapToArray()

let position = [9,0]


document.addEventListener("keydown",element =>{
    const key = element.key
    let lastKey = mapArr[position[0]][position[1]]

    if (key==='ArrowDown') {
       
       if(mapArr[position[0]+1][position[1]]!=='W'){
        mapArr[position[0]][position[1]] =' '
        position[0]++
        mapArr[position[0]][position[1]] ='S'
       }
       
       makeMaze()
    }
    if (key==='ArrowUp') {
        if(mapArr[position[0]-1][position[1]]!=='W'){
            mapArr[position[0]][position[1]] =' '
            position[0]--
            mapArr[position[0]][position[1]] ='S'
           }
        makeMaze()
     }
     if (key==='ArrowLeft') {
        
        if(mapArr[position[0]][position[1]-1]!=='W'){
            mapArr[position[0]][position[1]] =' '
            position[1]--
            mapArr[position[0]][position[1]] ='S'
           }
        makeMaze()
     }
     if (key==='ArrowRight') {
        
        if(mapArr[position[0]][position[1]+1]!=='W'){
            mapArr[position[0]][position[1]] =' '
            position[1]++
            mapArr[position[0]][position[1]] ='S'
           }
        makeMaze()
     }
})

let count = 1

const makeMaze = () => {
    let mazeContainer = document.getElementById('Maze')
    mazeContainer.innerHTML = ''
    mapArr.map(line =>{

    
        let newLine = document.createElement('div');
        newLine.id = 'line' + count
        count++
        newLine.classList.add('line')
        
    
        line.map(element =>{
    
            if (element === "W") {
                let wall = document.createElement('div')
                wall.classList.add('wall')
                newLine.appendChild(wall)
            }
    
            else if(element ==="S"){
                let character = document.createElement('div')
                character.id = 'character'
                newLine.appendChild(character)
            }
    
            else{
                let blank = document.createElement('div')
                blank.classList.add('blank')
                newLine.appendChild(blank)
            }
        })
    
        
        mazeContainer.appendChild(newLine)
    })
} 
makeMaze()