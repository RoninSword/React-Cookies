This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#  Assignment 2 - Section 2

This assignment centres on converting vanilla javascript to React.  It is worth 50% of the marks in assignment 2.  This is equivalent to 12.5% of the total grade for the course.  It is due in week 9.  Please complete section 1 before starting section 2.

## Assignment Questions

1. In the public folder open data.json.  Convert the contents of data.json to a javascript object and put them inside the state, within RecipeTemplate.

2. In the render function for recipe template, add the following components:
    1. RecipeHeader
    2. RecipeArea

3. For RecipeHeader pass the following properties
    1. title
    2. descriptor
    3. prepTime
    4. difficultyLevel

4. For RecipeArea pass the following properties
    1. cookieSteps
    2. cookieIngredients
    3. notes

5. Find the RecipeHeader component
    1. copy the header tag and its contents into the round braces in the render functions return.
    2. use the prop for the title in the h1 tag
    3. use the prop for the descriptor in the h2 tag
    4. use the prep prop in the p#prep
    5. use the difficulty prop in p#difficulty

6. Find the RecipeArea component
    1. Inside the main tag add the following Components
        1. IngredientsArea
        2. StepsArea
    2. Pass ingredients as a prop into IngredientsArea component
    3. pass steps and notes as props into the StepsArea component

7. Find the IngredientsArea component
    1. Examine the way the list of ingredients is used with map.  Notice how it exports an array of LI elements
    2. Use the {} syntax to put the list of ingredients into the UL in the return

8. Find the StepsArea component
    1. fill in the map function to list the steps in a similar way to how it is done in the ingredientsArea component
    2. add the recipeSteps to the OL tag
    3. add the RecipeNotes component below the OL tag
    4. send the RecipeNotes component the prop for notes

9. Find the RecipeNotes component
    1. Complete the render function to create notes the react way, with the same html structure as you see in part 1 of the assignment.

10. Part 2 of the assignment is complete when it uses React code as per the questions above, and is identical in look to the original version.

## Grading

* 25% - Usage of props to pass information throughout your app
* 25% - Usage of components for the construction of your page
* 15% - Proper syntax in the use of props with components
* 15% - Use of map functionality to create lists of content
* 20% - Matching the look and structure of the original document to the React version

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
