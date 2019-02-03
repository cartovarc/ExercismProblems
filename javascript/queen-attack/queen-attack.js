class Queens{
    constructor(){
        // new Queens()
        if(!arguments.length){
            this.white = [0, 3];
            this.black = [7, 3];
        }else{
            
            // new Queens(positioning)
            let positioning = arguments[0]
            if(positioning['white'][0]===positioning['black'][0] && positioning['white'][1]===positioning['black'][1]){
                throw 'Queens cannot share the same space';
            }
            
            this.white = [positioning['white'][0], positioning['white'][1]];
            this.black = [positioning['black'][0], positioning['black'][1]];
        }

    }

    toString(){
        let stringRepresentation = '';
        const rows = 8, cols = 8;
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(this.white[0] === i && this.white[1] === j){
                    stringRepresentation = stringRepresentation + 'W';
                }else if(this.black[0] === i && this.black[1] === j){
                    stringRepresentation = stringRepresentation + 'B';
                }else{
                    stringRepresentation = stringRepresentation + '_';
                }

                if(j==cols-1){
                    //last col
                    stringRepresentation = stringRepresentation + '\n';
                }else{
                    stringRepresentation = stringRepresentation + ' ';
                }
            }
        }

        return stringRepresentation;
    }

    canAttack(){
        let x1 = this.white[0], y1 = this.white[1], x2 = this.black[0], y2 = this.black[1];
        if(x1 === x2 || y1 === y2){
            return true;
        }else{
            let slope = (y1-y2)/(x1-x2);
            if(slope === 1 || slope === -1){
                return true;
            }else{
                return false;
            }
        }
    }
}

export default Queens;
