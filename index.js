
// declaring the board array to display in game with initial value 0;
var board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

// colorboard with multiple of 2 values in a array with hex codes.
// as value besing displayed the hex code sets on the background according to the calculated value.
  const colorboard = [ 
            [0, '#ccc'], 
            [2, '#eee4da'], 
            [4, '#ece0c8'], 
            [8, '#f1b078'], 
            [16, '#ee8c4f'], 
            [32, '#f57c5f'], 
            [64, '#e85939'], 
            [128, '#f2d86a'], 
            [256, '#eeca30'], 
            [512, '#e1c229'], 
            [1024, '#e2b913'], 
            [2048, '#ecc400']
  ];

// coloring the each cell by find method into the colorboard array
  const colorizeCell = (row, column) => {
    //   setting the cell color.
    const [, hex] = colorboard.find(([val,]) => board[row][column] == val);
        document.getElementsByClassName("item_"+column+row)[0].style.background = hex;
    
    // setting the cell value
    const [val,] = colorboard.find(([val,]) => board[row][column] == val)
        if(val!=0)document.getElementsByClassName("item_"+column+row)[0].innerHTML = val;
  };

// drawing the cell structure by iterating each row using for loop.
function draw(){
    for(var i=0; i<4; i++){
        // iterating each cell in the row
        for(var j=0; j<4; j++){
            // setting the value to empty string if the board array has 0 in it. 
            if(board[j][i]=='0'){
                document.getElementsByClassName("item_"+i+j)[0].innerHTML = ''
            };
            colorizeCell(i, j);
        }
    }
}

// random function randomly assign the value 2 or 4 in the board array
function random(){
    var ranX =Math.floor(Math.random() * 4);
    var ranY =Math.floor(Math.random() * 4);
    var ran =Math.floor(Math.random() * 2);
    // assigning ranX and ranY value to board[i][j]
    if(board[ranX][ranY]=='0'){
        if(ran==1){
            board[ranX][ranY]='2';
            console.log("Random add 2 - cords "+ranX+","+ranY);
        }
        else{
            board[ranX][ranY]='4';
            console.log("Random add 4 - cords "+ranX+","+ranY);
        }
    }
    else random();
}


function down(){
        function move_down(){
            if(board[3][i]=='0'){
                board[3][i]=board[2][i];
                board[2][i]='0';
            }

            if(board[2][i]=='0'){
                board[2][i]=board[1][i];
                board[1][i]='0';
                    if(board[3][i]=='0'){
                        board[3][i]=board[2][i];
                        board[2][i]='0';
                    }
            }
            if(board[1][i]=='0'){
                board[1][i]=board[0][i];
                board[0][i]='0';
                    if(board[2][i]=='0'){
                        board[2][i]=board[1][i];
                        board[1][i]='0';
                            if(board[3][i]=='0'){
                                board[3][i]=board[2][i];
                                board[2][i]='0';
                            }
                    }        
            }
        }

        for(var i=0; i<=3; i++){
                for(var j=3; j>0; j--){
                    if(board[j][i]==board[j-1][i]){
                        board[j][i]*=2;
                        board[j-1][i]='0';
                    }
                }
            move_down();
        }
    
}

function up(){
        function move_up(){
            if(board[0][i]=='0'){
                board[0][i]=board[1][i];
                board[1][i]=0;
            }
        
            if(board[1][i]=='0'){
                board[1][i]=board[2][i];
                board[2][i]=0;
                    if(board[0][i]=='0'){
                        board[0][i]=board[1][i];
                        board[1][i]=0;
                    }
            }
        
            if(board[2][i]=='0'){
                board[2][i]=board[3][i];
                board[3][i]=0;
                    if(board[1][i]=='0'){
                        board[1][i]=board[2][i];
                        board[2][i]=0;
                            if(board[0][i]=='0'){
                                board[0][i]=board[1][i];
                                board[1][i]=0;
                            }
                    }
            }
        }

        for(var i=3; i>=0; i--){
                for(var j=0; j<3; j++){
                    if(board[j][i]==board[j+1][i]){
                        board[j][i]*=2;
                        board[j+1][i]=0;
                    }
                }   
            move_up()
        }
}

function left(){
        function move_left(){
            if(board[i][0]=='0'){
                board[i][0]=board[i][1];
                board[i][1]=0;
            }
        
            if(board[i][1]=='0'){
                board[i][1]=board[i][2];
                board[i][2]=0;
                    if(board[i][0]=='0'){
                        board[i][0]=board[i][1];
                        board[i][1]=0;
                    }
            }
        
            if(board[i][2]=='0'){
                board[i][2]=board[i][3];
                board[i][3]=0;
                    if(board[i][1]=='0'){
                        board[i][1]=board[i][2];
                        board[i][2]=0;
                            if(board[i][0]=='0'){
                                board[i][0]=board[i][1];
                                board[i][1]=0;
                            }
                    }
            }
        }

        
        for(var i=3; i>=0; i--){
                for(var j=0; j<3; j++){
                    if(board[i][j]==board[i][j+1]){
                        board[i][j]*=2;
                        board[i][j+1]=0;
                    }
                }
            move_left();
        }
}

function right(){
        function move_right(){
            
            if(board[i][3]=='0'){
                board[i][3]=board[i][2];
                board[i][2]='0';
            }

            if(board[i][2]=='0'){
                board[i][2]=board[i][1];
                board[i][1]='0';
                    if(board[i][3]=='0'){
                        board[i][3]=board[i][2];
                        board[i][2]='0';
                    }
            }
            if(board[i][1]=='0'){
                board[i][1]=board[i][0];
                board[i][0]='0';
                    if(board[i][2]=='0'){
                        board[i][2]=board[i][1];
                        board[i][1]='0';
                            if(board[i][3]=='0'){
                                board[i][3]=board[i][2];
                                board[i][2]='0';
                            }
                    }        
            }
        }
        for(var i=0; i<=3; i++){
                for(var j=3; j>0; j--){
                    if(board[i][j]==board[i][j-1]){
                        board[i][j]*=2;
                        board[i][j-1]='0';
                    }
                }
            move_right();
        }
}

// check function checks wether the sum of values get to 2048 it will throw a alert.
function check(){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(board[i][j]=='2048')alert("YOU WIN!")
        }
    }
}

function rand_draw_check(){  
    random();
	draw();
	check();
}


// initialize the function calling random and draw function. 
function init() {

	random();
	draw();

    // on each key press random  draw check function
	window.addEventListener('keydown', function(event) {
		switch (event.keyCode) {
			case 37: // Left
				left();
				rand_draw_check();
				break;
			case 38: // Up
				up();
				rand_draw_check();
				break;
			case 39: // Right
				right();
				rand_draw_check();
				break;
			case 40: // Down
				down();
				rand_draw_check();
				break;
		}
	}, false);
}

// if the whole html and css is parsed then only the init function will be called.
if (document.readyState != 'loading') {
	init();
} else {
    //The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed
	window.addEventListener('DOMContentLoaded', init);
}