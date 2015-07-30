var blocks = {};

blocks.canvas = null;
blocks.ctx = null;
blocks.style = {}
blocks.style.puzzle = {};
blocks.style.puzzle.width = 20;

blocks.defaultHeight = 30;

blocks.colours = {
  control: '#ff6666',
  other: '#00ff00'
};

blocks.blocks = {
  1: {
    cat: "control",
    text: '<meta name="%s" content="%s">'
  }
};


blocks.scripts = [
    {
        data:{
            position: {
                x: 100,
                y: 100
            }
        },
        content: [
            {
                data: {
                    type: 'block', //Block data type
                    id: 1 //How ever we want to identify blocks
                },
                inputs: {
                    1: "test" //Can be a block object or string or what ever data type the input is.
                }
            }
        ]
    }
];

blocks.init = function() {
  document.addEventListener('mousedown',this.mouseDown);
    this.render();
};


blocks.drawBlock = function(x,y,blockId){
    this.ctx = this.canvas.ctx;
    var block = this.blocks[blockId];

    var width = (block.text.length+1) * 11;

    var height = this.defaultHeight;
    x += ui.rightPanel.width;

    var path=new Path2D();


    path.moveTo(x+2,y);
    path.lineTo(x+20,y);
    path.lineTo(x+21,y+5);
    path.lineTo(x+this.style.puzzle.width+21,y+5);
    path.lineTo(x+this.style.puzzle.width+22,y);

    path.lineTo(x+width,y);

    path.lineTo(x+width+2,y+2);
    path.lineTo(x+width+2,y+(height -2));
    path.lineTo(x+width,y+height);

    path.lineTo(x+this.style.puzzle.width+22,y+height);
    path.lineTo(x+this.style.puzzle.width+21,y+height+5);
    path.lineTo(x+21,y+height+5);
    path.lineTo(x+20,y+height);

    path.lineTo(x+2,y+height);
    path.lineTo(x,y+height -2);

    path.lineTo(x,y+2);
    path.lineTo(x+2,y);

    this.ctx.stroke(path);
    this.ctx.fillStyle = this.colours[this.blocks[blockId].cat];
    this.ctx.fill(path);

    this.ctx.font = "20px Consolas";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(block.text,x+5,y+22);
};

blocks.render = function() {
    blocks.scripts.forEach(function(object){
        var x = object.data.position.x;
        var y = object.data.position.y;

        var script = object.content;
        script.forEach(function(object){
            console.log(object);
        });
    });
};

blocks.mouseDown = function(event) {
    blocks.drawBlock(event.clientX - ui.rightPanel.width,event.clientY,1);
    console.log("test");
};