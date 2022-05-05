# Skyrim Alchemy App
A tool that helps any aspiring alchemist!

### About
For those who don't know, Skyrim is the fifth installment of the popular Elder Scrolls video game series. A game that I have played since its release in 2011.

The game comes with a leveling system where you can improve skills by using said skill. There are about 18 different skills you can improve on. Alchemy is related to potion/poison making. Using ingredients you find in the world either from plants, enemy loot, fish, etc, to make a potion. To make a potion, you must combine two <b>different</b> ingredients that has the same effect. Combining two ingredient that has no similar effects will not return anything. Either way, you will use up the ingredient and will have to find a new one to try again.  
Each ingredient has 4 different effects that starts off hidden from the player. The first effect can easily be revealed when the player consumes the item. However, the other three effects can only be discovered when you combine ingredients together through trail and error and hope you get a match.

In all the years of playing, many players like myself have never tried to use the Alchemy skill tree properly because of how complicated and user-unfriendly the skill is. Even after discovering all the effects of all the ingredients in the game, unless you have the ingredient in your inventory the game has no way of showing:
 - the player what effects an ingredient has,
 - what ingredients has a specific effect,
 - a player what two ingredient can combined together unless the player so happens to have a matching ingredient in his/her inventory.

Yes, you could go on google search or use the game's wiki but even that isn't simple as you have to go through multiple pages and it doesn't always show you a full list of what you're looking for. But with this tool, everything you need is in one place and you can quickly find what you're looking for.

### Project Description
Project was made with HTML, CSS and Javascript. Utilizing React, React-Redux and styled-components.

### How to run
This project was made using create-react-app. You will need to run it on your localhost using npm start.

### Misc Information
When I thought of this idea for a project, I didn't expect someone to have made something exactly the way I imagined it, I was only look for an API for the data.

Reddit post: https://www.reddit.com/r/skyrim/comments/rm1sg6/i_made_an_alchemyhelperapp/

Luckily, the user shared the JSON data and allowed its use but it didn't seem to allow an actual API call to fetch the data which was unfortunate as I wanted to use createAsyncThunk from Redux Toolkit for this project.

It was my first time using Redux and there were things such as naming conventions and folder structures I wasn't sure on. Looking back, I could have placed some of my redux slices together as a singluar slice and I could have filtered the ingredient data in a Redux slice and changing the data output based on what input was changed before mapping over the array and rendering it in my main file.

All in all, this was a small project and there wasn't many features I could implement to allow me to use more of Redux. But it gave me a greater understand to it and it's benefit over using useContext from React.
