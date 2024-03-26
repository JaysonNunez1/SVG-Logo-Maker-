const fs = require("fs");

const inquirer = require("inquirer");

const {Square, Circle, Triangle} = require("./library/shapes");

function writeToFile(filename,answers) {
    let svgString = "";

    svgString = `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">`;

    svgString += "<g>";

    svgString += `${answers.shape}`;
}