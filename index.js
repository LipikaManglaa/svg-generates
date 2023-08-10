const inquirer = require('inquirer')
const fs = require('fs');
const setShape = require('./lib/setShape.js');

const fileContent = "./examples/logo.svg";



let promptQuestions = () => {
    return inquirer.prompt([
        // shape select
        {
            name: 'shape',
            message: 'What is the shape of your logo?',
            type: 'list',
            choices: ['Circle', 'Square', 'Triangle'],
        },
       
        // shape color
        // user choose color keyword or hexadecimal for shapeColor
        {
            name: 'shapeColorOption',
            message: 'What is the color of the shape? Choose a color format: ',
            type: 'list',
            choices: ['colorkeyword', 'hexadecimal']
        },
           
        // ***shape  COLOR***
        {
            type: "list",
            name: "shapeColor",
            message: "Enter the text color keyword",
            choices: ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","black","white"],
            when: (answers) => {
                if(answers.shapeColorOption === 'colorkeyword') {
                    return true;
                }
                return false;
            },
        },
        // hexadecimal (validate hexadecimal with RegEx pattern)
        {
            type: "input",
            name: "shapeColor",
            message: "Enter the text hexadecimal number (#CCCCCC)",
            when: (answers) => {
                if (answers.shapeColorOption === 'hexadecimal') {
                    return true;
                }
                return false;
            },
            validate: shapeColor => {
                // hexadecimalColor_code 
                let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

                // if text color
                // is empty return false
                if (shapeColor == null) {
                    return "false";
                }

                // Return true if the text color
                // matched the ReGex
                if (regex.test(shapeColor) == true) {
                    return true;
                }
                else {
                    return "Enter valid Hexa color"    
               }
            }

        },

        //This is for all text
        {
            name: 'text',
            message: 'What is the text? (three character maximum)',
            type: 'input',
            validate: (answer) => {
                if (answer.length > 3) {
                    return console.log("\n Text must be three characters or less! Please try again");
                }
                return true;
            }
        },
        //choice between color and hexdecimal
        {
            name: 'textColorOption',
            message: 'What is the color of the text? Choose a color format: ',
            type: 'list',
            choices: ['colorkeyword', 'hexadecimal']
        },
        // ***text  COLOR***
        {
            type: "list",
            name: "textColor",
            message: "Enter the text color keyword",
            choices: ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","black","white"],
            when: (answers) => {
                if(answers.textColorOption === 'colorkeyword') {
                    return true;
                }
                return false;
            },
        },
        // hexadecimal (validate hexadecimal with RegEx pattern)
        {
            type: "input",
            name: "textColor",
            message: "Enter the text hexadecimal number (#CCCCCC)",
            when: (answers) => {
                if (answers.textColorOption === 'hexadecimal') {
                    return true;
                }
                return false;
            },
            validate: textColor => {
                // hexadecimalColor_code 
                let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

                // if text color
                // is empty return false
                if (textColor == null) {
                    return "false";
                }

                // Return true if the text color
                // matched the ReGex
                if (regex.test(textColor) == true) {
                    return true;
                }
                else {
                    return "Enter valid Hexa color"    
               }
            }

        },
    ])
    .then((response) => {
        const svg = setShape(response);
        fs.writeFile(fileContent, svg, ()=> console.log('Generated logo.svg'));
    })
    .catch(err => {
        console.log(err)
    });

}


//call functuon
function init() {
promptQuestions()
}
init()