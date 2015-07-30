var editor = canvas;

ui.canvas = editor;
blocks.canvas = editor;

ui.redraw();

blocks.init();

blocks.renderCblock(500, 500, 1,
    [
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
);

