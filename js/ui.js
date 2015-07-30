var ui ={};
ui.rightPanel = {};
ui.rightPanel.stage = {};
ui.rightPanel.fileBrowser = {};

ui.canvas = null;
ui.ctx = null;

ui.rightPanel.width = 0;
ui.rightPanel.height = 0;

ui.rightPanel.stage.width = 0;
ui.rightPanel.stage.height = 0;

ui.rightPanel.fileBrowser.width = 0;
ui.rightPanel.fileBrowser.height = 0;

ui.redraw = function() {

    this.ctx = this.canvas.ctx;

    this.canvas.element.width = window.innerWidth -17;
    this.canvas.element.height = window.innerHeight-3;

    this.rightPanel.width = this.canvas.element.width / 5;
    this.rightPanel.height = this.canvas.element.height;

    this.rightPanel.stage.width = this.rightPanel.width;
    this.rightPanel.stage.height = this.rightPanel.width;

    this.rightPanel.fileBrowser.height = this.rightPanel.height - this.rightPanel.stage.height;
    this.rightPanel.fileBrowser.width = this.rightPanel.width;

    this.drawPanels();
};

ui.drawEditor = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#fff';
    this.ctx.rect(this.rightPanel.width,0, this.canvas.element.width - this.rightPanel.width, this.rightPanel.height);
    this.ctx.fill();
    this.ctx.closePath();
};

ui.drawPanels = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#eee';
    this.ctx.rect(0,0, this.rightPanel.stage.width, this.rightPanel.stage.height);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = '#ddd';
    this.canvas.ctx.rect(0,this.rightPanel.stage.height, this.rightPanel.fileBrowser.width, this.rightPanel.fileBrowser.height);
    this.ctx.fill();
    this.ctx.closePath();

    this.drawEditor()
};
