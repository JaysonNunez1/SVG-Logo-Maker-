const fs = require("fs");

const inquirer = require("inquirer");

const {Square, Circle, Triangle} = require("./library/shapes");

function writeToFile(filename,answers) {
    let svgString = "";

    svgString = `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">`;

    svgString += "<g>";

    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill= "${answers.shapeBackgroudColor}" />`;
    } else if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150,18 244,182 56,182" fill="${answers.shapeBackgroudColor}"/>`;
    } else {
        shapeChoice = new Square();
        svgString += `<rec x="73" y="40" width="160" height="160" fill="${"shapeBackgroudColor"}"/>`
    }
svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}" >${answers.text}</text>`;

svgString += "</g>";
svgString += "</svg>";

fs.writeFile(filename, svgString, (err) => {
    err  ? console.log(err) : console.log('The file was saved!');
    });
}

function promptUser() {
    inquirer.prompt([
     {
        type: 'list',
        name: 'shape',
        message: "What shape would you like to create?",
        choices: ['Circle','Triangle','Square']
      },
      {
          type:'input',
          name:'shapeBackgroudColor',
          message:"What color do you want the shape's background to be?"
      },
      {
           type:'input',
           name:'text',
           message:"Text inside of the logo",
      },
      {
        type:'input',
        name:'textColor',
        message:"What color do you want the text to be?",
        },
    ])

    .then((answers) =>{
        if (answers.text.length > 3){
            console.log ("Must be 3 characters long");
            promptUser ();
        } else{
            writeToFile("logo.svg",answers);
        }
    });
}

promptUser();