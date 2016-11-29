"use strict";

// Include all necessary Types
const synaptic = require('synaptic');
const Neuron = synaptic.Neuron;
const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Architect = synaptic.Architect;
const Trainer = synaptic.Trainer;

let myNetwork = new Architect.Perceptron(2, 2, 2);
let trainer = new Trainer(myNetwork);
let learningRate = 1;
let obstacles = [
    [
        20,
        25
    ],
    [
        50,
        75
    ],
    [
        70,
        5
    ],
    [
        80,
        10
    ]
];

function restart() {
    let result = true;
    let path = [];
    let currPos = [
        0,
        0
    ];

    while (result) {
        let currResult = myNetwork.activate(currPos);

        if (Math.ceil(currResult[0]) == 1) {
            currPos[0] += 5;
        }

        if (Math.ceil(currResult[1]) == 1) {
            currPos[1] += 5;
        }

        path.push(currResult);
        console.log(currPos);

        for (var i = 0; i < obstacles.length; i++) {
            var obstaclePos = obstacles[i];

            if (obstaclePos[0] == currResult[0] && obstaclePos[1] == currResult[1]) {
                result = false;
            } else if (currResult[0] > 80 && currResult[1] > 10) {
                console.log("FINISHED");
                console.log(path.length);
                console.log(path);
            }
        }

    }
}

restart();
