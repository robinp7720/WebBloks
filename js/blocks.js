var blocks = {};

blocks.canvas = null;
blocks.ctx = null;
blocks.style = {}
blocks.style.puzzle = {};
blocks.style.puzzle.width = 20;

blocks.moving = false;

blocks.defaultHeight = 30;

blocks.colours = {
  control: '#ff6666',
  other: '#66ff66'
};

blocks.blocks = {
    1: {
        cat: "control",
        text: '<meta name="%s" content="%s">'
    },
    2:{
        cat: "control",
        text: '<title></title>'
    },
    3:{
        cat: "other",
        text: '<test></test>'
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
            },
            {
                data: {
                    type: 'block', //Block data type
                    id: 2 //How ever we want to identify blocks
                },
                inputs: {
                    1: "test" //Can be a block object or string or what ever data type the input is.
                },
                content: [
                    {
                        data: {
                            type: 'block', //Block data type
                            id: 2 //How ever we want to identify blocks
                        },
                        inputs: {
                            1: "test" //Can be a block object or string or what ever data type the input is.
                        }
                    }, {
                        data: {
                            type: 'block', //Block data type
                            id: 2 //How ever we want to identify blocks
                        },
                        inputs: {
                            1: "test" //Can be a block object or string or what ever data type the input is.
                        }
                    },
                ]
            },
            {
                data: {
                    type: 'block', //Block data type
                    id: 2 //How ever we want to identify blocks
                },
                inputs: {
                    1: "test" //Can be a block object or string or what ever data type the input is.
                }
            },
            {
                data: {
                    type: 'block', //Block data type
                    id: 2 //How ever we want to identify blocks
                },
                inputs: {
                    1: "test" //Can be a block object or string or what ever data type the input is.
                },
                content: [
                    {
                        data: {
                            type: 'block', //Block data type
                            id: 2 //How ever we want to identify blocks
                        },
                        inputs: {
                            1: "test" //Can be a block object or string or what ever data type the input is.
                        }
                    }, {
                        data: {
                            type: 'block', //Block data type
                            id: 2 //How ever we want to identify blocks
                        },
                        inputs: {
                            1: "test" //Can be a block object or string or what ever data type the input is.
                        },
                        content: [
                            {
                                data: {
                                    type: 'block', //Block data type
                                    id: 2 //How ever we want to identify blocks
                                },
                                inputs: {
                                    1: "test" //Can be a block object or string or what ever data type the input is.
                                },
                                content: [
                                    {
                                        data: {
                                            type: 'block', //Block data type
                                            id: 2 //How ever we want to identify blocks
                                        },
                                        inputs: {
                                            1: "test" //Can be a block object or string or what ever data type the input is.
                                        }
                                    }, {
                                        data: {
                                            type: 'block', //Block data type
                                            id: 2 //How ever we want to identify blocks
                                        },
                                        inputs: {
                                            1: "test" //Can be a block object or string or what ever data type the input is.
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
];

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

    this.ctx.fillStyle = this.colours[this.blocks[blockId].cat];
    this.ctx.fill(path);

    this.ctx.stroke(path);

    this.ctx.font = "20px Consolas";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(block.text,x+5,y+22);
};

blocks.getHeightC = function(content){
    var height = 0;
    if (content != undefined) {
        content.forEach(function (obj) {
            if ('content' in obj) {
                height += blocks.defaultHeight;
                height += blocks.getHeightC(obj.content);
                height += blocks.defaultHeight;
            } else {
                height += blocks.defaultHeight;
            }
        });
    }
    return height;
};

blocks.renderCblock = function(x,y,blockId,content){
    this.ctx = this.canvas.ctx;
    var block = this.blocks[blockId];

    var width = (block.text.length+1) * 11;

    var height = this.defaultHeight;
    var contentHeight = this.getHeightC(content);
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
    path.lineTo(x+width+2,y+(height -2));
    path.lineTo(x+width,y+height);


    /* Bottom puzzle of top bar */
    path.lineTo(x+this.style.puzzle.width+42,y+height);
    path.lineTo(x+this.style.puzzle.width+41,y+height+5);
    path.lineTo(x+41,y+height+5);
    path.lineTo(x+40,y+height);

    path.lineTo(x+22,y+height);
    path.lineTo(x+20,y+height + 2);
    path.lineTo(x+20,y+height+contentHeight-2);

    path.lineTo(x+22,y+height+contentHeight);

    /* Top puzzle of bottom bar */
    path.lineTo(x+40,y+height+contentHeight);
    path.lineTo(x+41,y+height+contentHeight+5);
    path.lineTo(x+this.style.puzzle.width+41,y+height+contentHeight+5);
    path.lineTo(x+this.style.puzzle.width+42,y+height+contentHeight);

    path.lineTo(x+width,y+height+contentHeight);

    path.lineTo(x+width+2,y+height+contentHeight+2);
    path.lineTo(x+width+2,y+height+contentHeight+height -2);
    path.lineTo(x+width,y+height+contentHeight+height);

    /* Bottom puzzle of bottom bar */
    path.lineTo(x+this.style.puzzle.width+22,y+height+contentHeight+height);
    path.lineTo(x+this.style.puzzle.width+21,y+height+contentHeight+height+5);
    path.lineTo(x+21,y+height+contentHeight+height+5);
    path.lineTo(x+20,y+height+contentHeight+height);

    path.lineTo(x+2,y+height+contentHeight+height);
    path.lineTo(x,y+height+contentHeight+height - 2);

    path.lineTo(x,y+2);
    path.lineTo(x+2,y);

    this.ctx.fillStyle = this.colours[this.blocks[blockId].cat];
    this.ctx.fill(path);

    this.ctx.stroke(path);

    this.ctx.font = "20px Consolas";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(block.text,x+5,y+22);
    var hIndex = blocks.defaultHeight;
    content.forEach(function(obj){
        if ('content' in obj) {
            blocks.renderCblock(x - ui.rightPanel.width + 20, y + hIndex, obj.data.id, obj.content);
            hIndex += blocks.defaultHeight;
            hIndex+=blocks.getHeightC(obj.content);
            hIndex += blocks.defaultHeight;
        }else{
            blocks.drawBlock(x - ui.rightPanel.width + 20, y + hIndex, obj.data.id);
            hIndex += blocks.defaultHeight;
        }
    });
};

blocks.render = function() {
    ui.drawEditor();
    blocks.scripts.forEach(function(script){
        var index = 0;
        var x = script.data.position.x + ui.rightPanel.width - 20;
        var y = script.data.position.y - blocks.defaultHeight;

        var hIndex = blocks.defaultHeight;
        var content = script.content;
        content.forEach(function(obj){
            if ('content' in obj) {
                blocks.renderCblock(x - ui.rightPanel.width + 20, y + hIndex, obj.data.id, obj.content);
                hIndex += blocks.defaultHeight;
                hIndex+=blocks.getHeightC(obj.content);
                hIndex += blocks.defaultHeight;
            }else{
                blocks.drawBlock(x - ui.rightPanel.width + 20, y + hIndex, obj.data.id);
                hIndex += blocks.defaultHeight;
            }
        });
    });
};

blocks.mouseDown = function(event) {
    if (blocks.moving === false) {
        var mouseX = event.clientX - ui.rightPanel.width;
        var mouseY = event.clientY;
        blocks.render();
        blocks.scripts.forEach(function (object,scriptId) {
            var index = 0;
            var x = object.data.position.x;
            var y = object.data.position.y;

            var movingBlocks = [];
            var new_content = [];
            var addBlocks = false;

            var script = object.content;
            script.forEach(function (object,key) {
                var block_y = y + (blocks.defaultHeight * index);
                var block_x = x;
                var height = blocks.defaultHeight;
                var width = (blocks.blocks[object.data.id].text.length + 1) * 11;
                index++;
                if (mouseX > block_x && mouseX < block_x + width) {
                    if (mouseY > block_y && mouseY < block_y + height) {
                        console.log("Block clicked!!");
                        addBlocks = true;
                    }
                }
                if (addBlocks == true){
                    movingBlocks.push(object);
                }else{
                    new_content.push(object);
                }
            });

            if (addBlocks == true) {
                var newscript = {
                    data: {
                        position: {
                            x: mouseX,
                            y: mouseY
                        }
                    },
                    content: []
                };
                newscript.content = movingBlocks;

                blocks.scripts.push(newscript);
                blocks.scripts[scriptId].content = new_content;
                blocks.render();
                blocks.moving = true;
            }
        });
    }
};
blocks.mouseMove = function(event) {
    if (blocks.moving === true) {
        var mouseX = event.clientX - ui.rightPanel.width;
        var mouseY = event.clientY;
        /* Set min mouse posstions */
        if (mouseX < 1){
            mouseX = 1;
        }

        if (mouseY < 1){
            mouseY = 1;
        }


        blocks.scripts[blocks.scripts.length - 1].data.position.x = mouseX;
        blocks.scripts[blocks.scripts.length - 1].data.position.y = mouseY;
        blocks.render();
    }
};

blocks.mouseUp = function(event){
    if (blocks.moving) {
        var mouseX = event.clientX - ui.rightPanel.width;
        var mouseY = event.clientY;
        blocks.moving = false;

        ui.drawEditor();
        blocks.scripts.forEach(function (object, scriptId) {
            var index = 0;
            var x = object.data.position.x;
            var y = object.data.position.y;

            var script = object.content;
            script.forEach(function (object, key) {
                var block_y = y + (blocks.defaultHeight * index);
                var block_x = x;
                var height = blocks.defaultHeight;
                var width = (blocks.blocks[object.data.id].text.length + 1) * 11;
                index++;
                if (mouseX > block_x && mouseX < block_x + width) {
                    if (mouseY > block_y && mouseY < block_y + height) {
                        console.log("Block dropped!");
                        blocks.scripts[blocks.scripts.length - 1].content.forEach(function (object, count) {
                            blocks.scripts[scriptId].content.splice(key + count + 1, 0, object);
                        });
                        delete blocks.scripts[blocks.scripts.length - 1];

                    }
                }
            });
        });
        blocks.render();
    }
};