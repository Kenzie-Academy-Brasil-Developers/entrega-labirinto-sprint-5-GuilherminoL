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
mapArrDefault = transformMapToArray()


let position = [9,0]
let victory = false

document.addEventListener("keydown",element =>{
    const key = element.key
    
    if (key==='ArrowDown') {
       
        if(mapArr[position[0]+1][position[1]] === 'F'){

            mapArr[position[0]][position[1]] =' '
            position[0]++
            mapArr[position[0]][position[1]] ='S'
            makeMaze('down')
            victory=true
        }

        if(mapArr[position[0]+1][position[1]]!=='W'){

            mapArr[position[0]][position[1]] =' '
            position[0]++
            mapArr[position[0]][position[1]] ='S'
            makeMaze('down')
        }
       
       
    }

    if (key==='ArrowUp') {

        if(mapArr[position[0]-1][position[1]] === 'F'){

            mapArr[position[0]][position[1]] =' '
            position[0]--
            mapArr[position[0]][position[1]] ='S'
            makeMaze('up')
            victory=true

        }

        if(mapArr[position[0]-1][position[1]]!=='W'){

            mapArr[position[0]][position[1]] =' '
            position[0]--
            mapArr[position[0]][position[1]] ='S'
            makeMaze('up')
        }

       
    }

     if (key==='ArrowLeft') {
        
        if(mapArr[position[0]][position[1]-1] === 'F'){
            mapArr[position[0]][position[1]] =' '
            position[1]--
            mapArr[position[0]][position[1]] ='S'
            makeMaze('left')
            victory=true
        }

        if(mapArr[position[0]][position[1]-1]!=='W' && mapArr[position[0]][position[1]-1]){

            mapArr[position[0]][position[1]] =' '
            position[1]--
            mapArr[position[0]][position[1]] ='S'
            makeMaze('left')
        }
     
     }

     if (key==='ArrowRight') {
        
        if(mapArr[position[0]][position[1]+1] === 'F'){

            mapArr[position[0]][position[1]] =' '
            position[1]++
            mapArr[position[0]][position[1]] ='S'
            makeMaze('right')
            victory=true
        }

        if(mapArr[position[0]][position[1]+1]!=='W' && mapArr[position[0]][position[1]+1]){

            mapArr[position[0]][position[1]] =' '
            position[1]++
            mapArr[position[0]][position[1]] ='S'
            makeMaze('right')
        }
        
     }
     
     
})



const makeMaze = (direction) => {
    if(!victory){
        let count = 1
        const mazeContainer = document.getElementById('Maze')
        mazeContainer.innerHTML = ''
            mapArr.map(line =>{
                
            const newLine = document.createElement('div');
            newLine.id = 'line' + count
            count++
            newLine.classList.add('line')
            
            line.map(element =>{
        
                if (element === "W") {
                    let wall = document.createElement('img')
                    wall.src = 'wall.png'
                    wall.classList.add('wall')
                    newLine.appendChild(wall)
                }
        
                else if(element ==="S"){
                    let character = document.createElement('img')
                    character.src = direction + '.png'
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
    else console.log('sss')
    
} 
makeMaze('right')

const playAgain = document.getElementById('playAgain')
playAgain.addEventListener('click' ,() => {
    mapArr = mapArrDefault
    position = [9,0]
    makeMaze('right')
})