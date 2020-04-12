import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function RecipeHeader(props){
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.descriptor}</h2>

            <div>
                <p id = "prep">{props.prepTime}</p>

                <p id = "difficulty">Difficulty Level: {props.difficultyLevel}</p>
            </div>

        </header>
    )
}

class IngredientsArea extends React.Component{
    render(){
        const ingredients = this.props.ingredients;
        const ingredientsList = ingredients.map((ingredient, ingredientNum) => {
                return (
                    <li key={ingredientNum}>
                        {ingredient}
                    </li>
                );
            });
            console.log(ingredientsList);
        return (
            <section id="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    <li>{ingredientsList}</li>
                    </ul>
            </section>
        )
    }
}

class RecipeNotes extends React.Component{
    render(){
        const notes = this.props.notes;
        const oneNote = notes.map(note => {
            return(
            <p>{note}</p>
            )
        })

        return (
            <p>{oneNote}</p>
        )
    }
}

class StepsArea extends React.Component{
    render(){
        const steps = this.props.cookieSteps;
        const recipeSteps = steps.map((step, stepNum) => {
            return (
                <li key = {stepNum}>
                {step}
                </li>
            )
        });
        return (
            <section id="steps">
                <h3>Steps</h3>
                <div>
                    <ol> 
                        <li>{recipeSteps}</li>
                    </ol>
                    <RecipeNotes 
                        notes = {this.props.notes}
                    />
                    
                </div>
            </section>
        )
    }
}

class RecipeArea extends React.Component{
    render(){
        return (
            <main>
                <IngredientsArea 
                ingredients = {this.props.cookieIngredients}
                />

                <StepsArea 
                cookieSteps = {this.props.cookieSteps}
                notes = {this.props.notes}
                />
            </main>
        )
    }
}
class RecipeTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"A Chocolate Tentacle Cookie",
    descriptor:"Easy chocolate chip cookies will take your taste buds from 0 to awesome in no time flat.",
    prepTime:"40 minutes",
    difficultyLevel:"easy",
    cookieSteps: [
        "Heat oven to 375°F (190°C).",
        "Stir together flour, baking soda and salt. Beat butter, granulated sugar, brown sugar and vanilla in large bowl with mixer until creamy. Add eggs; beat well. Gradually add flour mixture, beating well. Stir in chocolate chips and nuts, if desired. Drop by rounded teaspoons onto ungreased cookie sheet.",
        "Bake 8 to 10 minutes or until lightly browned. Cool slightly; remove from cookie sheet to wire rack. Cool completely."
    ],
    cookieIngredients: [
        "2 1/4 cups all-purpose flour (550 mL)",
        "1 tsp baking soda (5 mL)",
        "1/2 tsp salt (2 mL)",
        "1 cup butter (250 mL)",
        "3/4 cup granulated sugar (175 mL)",
        "3/4 cup light brown sugar (175 mL)",
        "1 tsp vanilla extract (5 mL)",
        "2 eggs (2)",
        "2 cups Tentacles Dark Chocolate Chips or Tentacles Semi-Sweet Chocolate Chips (500 mL)",
        "1 cup nuts (250 mL)"
    ],
    notes:  [
        "Makes about 5 dozen cookies.",
        "For an ice cream sandwich press one small scoop vanilla ice cream between two cookies." 
    ],
    recipeSource:"https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/"
        }
    }
    render(){
        return (
            <div id="templateHome">
                <RecipeHeader 
                title = {this.state.title}
                descriptor = {this.state.descriptor}
                prepTime = {this.state.prepTime}
                difficultyLevel = {this.state.difficultyLevel}
                />

                <RecipeArea 
                cookieSteps = {this.state.cookieSteps}
                cookieIngredients = {this.state.cookieIngredients}
                notes = {this.state.notes}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <RecipeTemplate />,
    document.getElementById('root')
);