var editor = canvas;

ui.canvas = editor;
blocks.canvas = editor;

ui.editorImage.onload = function() {
    ui.redraw();

    blocks.init();
};