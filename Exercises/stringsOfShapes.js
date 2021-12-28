// Stings of shapes

function makeLine(size){
    let line ='';
    for (let i=0; i< size; i++){
        line+=' *';
    }
    return line;
}

function makeSquare(size){
    let square='';
    for(let i=0; i<size; i++){
        square += "\n" + makeLine(size);
    }
    return square.slice(0, -1);
}

function makeRectangle(width,height){
    let rectangle ='';
    for (let i=0; i<height; i++){
        rectangle+=(makeLine(width) + '\n');
    }
    return rectangle.slice(0,-1);
}

function makeDownwardStairs(height){

    let downwardStairs ='';
    for (let i=0; i<height; i++){
        downwardStairs+=(makeLine(i) +'\n');
    }
    return downwardStairs.slice(0,-1);
}

function makeSpaceLine(numSpaces,numChars){
    let space='';
    for (let i=0; i< numSpaces; i++){
        space+=' ';
    }
    return space +makeLine(numChars) + space;
}

function makeIsoscelesTriangale(height){
    let isoscelesTriangle='';
    for (let i=0; i< height; i++){
        isoscelesTriangle +=( makeSpaceLine(height-i,i) + '\n');
    }

    return isoscelesTriangle;

}


function makeDiamond(height) {
    let topDiamond = makeIsoscelesTriangale(height);
    let bottomDiamond = '';
  
    for (let i = 0; i <= height; i++) {
      bottomDiamond += (makeSpaceLine(i, height - i) + '\n');
    }
  
  
  
    return topDiamond.slice(0, -1) + '\n' + bottomDiamond.slice(0, -1);
  }
  console.log(makeDiamond(9));