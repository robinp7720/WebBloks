
var blocks = {};

blocks.callStack = 0;

blocks.canvas = null;
blocks.ctx = null;
blocks.style = {}
blocks.style.puzzle = {};
blocks.style.puzzle.width = 20;

blocks.moving = false;
blocks.dragOffset = {
    x:0,
    y:0
};

blocks.defaultHeight = 30;

blocks.colours = {
  control: 'dd6666',
  other: '66dd66'
};

blocks.blocks = {
    1: {
        cat: "control",
        text: '<meta name="%s" content="%s">',
        type: "block"
    },
    2:{
        cat: "control",
        text: '<title></title>',
        type: "block"
    },
    3:{
        cat: "other",
        text: '<test></test>',
        type: "block"
    },
    4:{
        cat: "other",
        text: "This is a c block",
        type: "c"
    }
};


blocks.scripts = {
    1: {
        data:{
            position: {
                x: 100,
                y: 100
            }
        }
    }
};

blocks.placedBlocks = {
    1: {
        scriptId: 1,
        parent:0, // 0 for script else a block ID for a c block
        block: 1,
        nth: 0
    },
    2: {
        scriptId: 1,
        parent:0, // 0 for script else a block ID for a c block
        block: 1,
        nth: 4
    },
    3: {
        scriptId: 1,
        parent:2, // 0 for script else a block ID for a c block
        block: 1,
        nth: 0
    },
};


blocks.init = function() {
    document.addEventListener('mousedown',this.mouseDown);
    document.addEventListener('mousemove',this.mouseMove);
    document.addEventListener('mouseup',this.mouseUp);
    this.render();
};
blocks.drawBlock = function(x,y,blockId){
    this.drawNormalBlock(x,y,blockId);
};

blocks.drawNormalBlock = function(x,y,blockId){
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

    this.ctx.fillStyle = '#'+this.colours[this.blocks[blockId].cat];
    this.ctx.fill(path);

    this.ctx.stroke(path);

    this.ctx.font = "20px Consolas";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(block.text,x+5,y+22);
};

blocks.getHeight = function(blockId) {
    var height = 0;
    if (this.isType(blockId,'c')){
        var done = false;
        while (!done) {

        }
    }
    return height;
};

blocks.amountOfChildren = function(blockId) {
    var count = 0;
    for (var blockId in blocks.placedBlocks) {
        if (blocks.placedBlocks.hasOwnProperty(blockId)) {
            var block = blocks.placedBlocks[blockId];
            if (block.parent == blockId) {
                count++;
            }
        }
    }
    return count;
};

blocks.isType = function(blockId,type){
    var block = blocks.placedBlocks[blockId];
    return blocks.blocks[block.block].type == type;
};

blocks.renderCblock = function(x,y,blockId,content,innerHeight){
    this.ctx = this.canvas.ctx;
    var block = this.blocks[blockId];

    var width = (block.text.length+1) * 11;

    var topBarHeight = this.defaultHeight;
    var bottomBarHeight = this.defaultHeight;
    
    if (innerHeight < 1) {
        innerHeight = this.defaultHeight;
    }
    x += ui.rightPanel.width;

    var path=new Path2D();


    path.moveTo(x+2,y);
    /* top puzzle of top bar */
    path.lineTo(x+20,y);
    path.lineTo(x+21,y+5);
    path.lineTo(x+this.style.puzzle.width+21,y+5);
    path.lineTo(x+this.style.puzzle.width+22,y);

    path.lineTo(x+width,y);

    path.lineTo(x+width+2,y+2);
    path.lineTo(x+width+2,y+(topBarHeight -2));
    path.lineTo(x+width,y+topBarHeight);


    /* Bottom puzzle of top bar */
    path.lineTo(x+this.style.puzzle.width+42,y+topBarHeight);
    path.lineTo(x+this.style.puzzle.width+41,y+topBarHeight+5);
    path.lineTo(x+41,y+topBarHeight+5);
    path.lineTo(x+40,y+topBarHeight);

    path.lineTo(x+22,y+topBarHeight);
    path.lineTo(x+20,y+topBarHeight + 2);
    path.lineTo(x+20,y+topBarHeight+innerHeight-2);

    path.lineTo(x+22,y+topBarHeight+innerHeight);

    /* Top puzzle of bottom bar */
    path.lineTo(x+40,y+topBarHeight+innerHeight);
    path.lineTo(x+41,y+topBarHeight+innerHeight+5);
    path.lineTo(x+this.style.puzzle.width+41,y+topBarHeight+innerHeight+5);
    path.lineTo(x+this.style.puzzle.width+42,y+topBarHeight+innerHeight);

    path.lineTo(x+width,y+topBarHeight+innerHeight);

    path.lineTo(x+width+2,y+topBarHeight+innerHeight+2);
    path.lineTo(x+width+2,y+topBarHeight+innerHeight+topBarHeight -2);
    path.lineTo(x+width,y+topBarHeight+innerHeight+topBarHeight);

    /* Bottom puzzle of bottom bar */
    path.lineTo(x+this.style.puzzle.width+22,y+topBarHeight+innerHeight+topBarHeight);
    path.lineTo(x+this.style.puzzle.width+21,y+topBarHeight+innerHeight+topBarHeight+5);
    path.lineTo(x+21,y+topBarHeight+innerHeight+topBarHeight+5);
    path.lineTo(x+20,y+topBarHeight+innerHeight+topBarHeight);

    path.lineTo(x+2,y+topBarHeight+innerHeight+topBarHeight);
    path.lineTo(x,y+topBarHeight+innerHeight+topBarHeight - 2);

    path.lineTo(x,y+2);
    path.lineTo(x+2,y);

    this.ctx.fillStyle = '#'+this.colours[this.blocks[blockId].cat];

    this.ctx.fill(path);

    this.ctx.stroke(path);

    this.ctx.font = "20px Consolas";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(block.text,x+5,y+22);

};

blocks.render = function() {
    for (var key in blocks.scripts) {
        if (blocks.scripts.hasOwnProperty(key)) {
            var script = blocks.scripts[key],
                content = this.getBlockIn(0, key),
                x = script.position.x,
                y = script.position.y;

            var done = false;

            while (done==false) {

            }

        }
    }
};

blocks.getBlockIn = function(parentId,scriptId) {
    var placedBlocks = [];
    for (var blockId in blocks.placedBlocks) {
        if (blocks.placedBlocks.hasOwnProperty(blockId)) {
            var block = blocks.placedBlocks[blockId];
            if (block.scriptId == scriptId && block.parent == parentId) {
                placedBlocks.push(block);
            }
        }
    }
    return placedBlocks;
};

blocks.mouseDown = function(event) {

};

blocks.mouseMove = function(event) {

};

blocks.mouseUp = function(event){

};

