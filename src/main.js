"use strict";

let jibo = require ('jibo');
let Status = jibo.bt.Status;
let factory = jibo.bt.factory;


function start() {
    let root = factory.create('../behaviors/04-while-condition');
    root.start();
    let intervalId = setInterval(() => {
        if (root.status !== Status.IN_PROGRESS) {
            clearInterval(intervalId);
        }
        else {
            root.update();
        }
    }, 33);
}

jibo.init(() => {
    let eyeElement = document.getElementById('eye');
    jibo.visualize.createRobotRenderer(eyeElement, jibo.visualize.DisplayType.EYE);
    start();
});