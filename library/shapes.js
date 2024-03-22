//This class uses a constructor to assign the color
class shape{
    constructor(){
        this.color=''
    }
}

setColor(color){
    this.color=(color);
    }

class Square extends shape{
    render(){
        return `<rect x="50" y="35" width="200" height="200" fill= "${this.color}" />`
    }
}


    

   
