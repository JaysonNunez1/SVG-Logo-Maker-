import {Circle,Square,Triangle} from "./shapes.js";

test ("Circle render method returns correct SVG string", () =>{
    const circle = new Circle("red");
    expect(circle.render()).toEqual(
        `<svg viewbox="0 0 300 300"><circle cx="150" cy="150" r="100" fill="red"></circle><text x="150" y="150" fill="white" font-size="1.6rem" text-anchor="middle">SVG_TEXT</text></svg>`
    );
    });

test ("Square render method returns correct SVG string", ()=>{
    const circle= new Square("blue");
    expect(Square.render()).toEqual(
        `<svg viewBox="0 0 300 300"><rect x="50" y="50" width="200" height="200" fill="green"></rect><text x="150" y="150" fill="white" font-size="1.6rem" text-anchor="middle">SVG_TEXT</text></svg>`
        );
    });
    
    test ("Triangle render method  returns correct SVG string",()=>{
        const Triangle=new Triangle("green");
        expect(Triangle.render()).toEqual(
            `<svg viewBox="0 0 300 300"><polygon points="100,150 150,50 200,150" fill="green"></polygon><text x="150" y="150" fill="white" font-size="1.6rem" text-anchor="middle">SVG_TEXT</text></svg>`
        );
        });
