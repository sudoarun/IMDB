# Milestone-9: IMDb

## Learning competencies:

At the end of this milestone you will learn

- Maintaining application state using Redux
- Using third party components in React
- Understanding Relational databases

## Problem statement:

Are you a movie enthusiast ?! Well, in this milestone you are going to build a replica of worlds most popular and authoritative source for movie, TV and celebrity content called [IMDb](https://www.imdb.com/).

### What is IMDb ?

> IMDb, in full Internet Movie Database, Web site that provides information about millions of films and television programs as well as their cast and crew.

According to wikipedia, as of May 2019, IMDb has approximately 6 million titles (including episodes) and 9.9 million personalities in its database, as well as 83 million registered users.  
IMDb originated with a Usenet posting by British film fan and computer programmer Col Needham entitled "Those Eyes", about actresses with beautiful eyes. Others with similar interests soon responded with additions or different lists of their own.

In 1998, Jeff Bezos, founder, owner, and CEO of Amazon.com, struck a deal with Needham and other principal shareholders to buy IMDb outright for approximately \$55 million and attach it to Amazon as a subsidiary, private company. This gave IMDb the ability to pay the shareholders salaries for their work, while Amazon.com would be able to use IMDb as an advertising resource for selling DVDs and videotapes.

## Releases

### Frontend

1. Start with Wireframing. It's a part of UI of design and an extremely essential process of the web design workflow. You can use **excalidraw** to create a rough version of your wireframing. Decide:
    1. What views are involved in the app?
    2. Are you using too many elements? Are the views getting redundant and cluttered?
    3. What buttons/interactions will trigger which other views?
2. Initialize your project with create-react-app. Take note of what purpose each folder serves and why it is important.
3. Setup your react-redux store in your project, using the Provider wrapper component.
*Create the relevant reducers later as you create the individual components.*
4. Create NavBar component as below. 
    
    ![Untitled (10)](https://user-images.githubusercontent.com/19927261/175980566-7efe869c-4522-4252-a0d4-54933c545e07.png)
    
5. Before diving further into individual components, set up the routing for your Navbar.    
Add Links in the navbar to all the components described in releases 7 to 10, and add     placeholder information inside them to test if the routing works.
6. Add a redirect to the sign in route, that redirects a user to a login/signup page if they are not logged in. Do the same for when a user clicks on Watchlist and isn't logged in. 
*hint: components can access the data of whether the user is logged in or not hrough the redux store.*
7. Create a Menu page component, which will be triggered by clicking the menu button in the above metioned NavBar. Set up a separate Router for the categories, you may use placeholder text for subcategory components. 
It organises all the links as shown below:
    
    ![Untitled (11)](https://user-images.githubusercontent.com/19927261/175980664-9c8f6c02-0ee3-4d75-8a35-1d2b352cd20e.png)
    
8. As for the homepage, add a TrendingList component that contains top trending movies and trailers: 
    
    ![Untitled (12)](https://user-images.githubusercontent.com/19927261/175980720-68caf54e-3e7d-4c04-9f7e-36c27e768cff.png)
    
9. Add a component that will be opened upon clicking the Log In and Watchlist Button, which renders a sign in page (if the user is not logged in), as below:  
    
    ![Untitled (13)](https://user-images.githubusercontent.com/19927261/175980820-67058b47-a5ba-42a2-8781-12ddac1838cb.png)
    
10. Finally, add your Footer component. 
    
    **Now that you have built a desktop version, time to make your app responsive and mobile ready.** 
    
11. add media query breakpoints and rearrange the layout of your website for mobile. 
12. In small screens, replace your navbar with an animated hamburger menu. 
13. Modify the colours in your CSS styles to use themeing variables instead of hash codes or RGB values, and add a dark mode/light mode toggle to trigger the same. 
14. wire all your components in the frontend to the endpoints created in the backend to make your fullstack app complete. 
15. Deploy it to Heroku so that you can see your results shipped.  

### **Backend**

1. Set up your postgres database with tables with one to many or many to many relationship.  They may include data for:
    1. User Sign Up and Login Credentials 
    2. Movie Details + Ratings+ Viewership data
    3. TV Series Details and Statistics 
    4. Cast Data → which actor is in which movie? 
    
    *hint: how many tables do you need atleast to establish a many to many relationship*  
    
2. Create your API server with Node and Express. 
3. Create your Pool Object that helps you query into your database. 
4. Create basic data access CRUD functions that manipulate the data in each of your respective tables. Think about:
    - **What effect would each route have on the database?**
    - **What response body would each route return?**
    - **What response code would each route return?**
5. Write aggregations query functions to get average ratings for given movie ID for all movies 
6. Create HTTP routes for your CRUD functions so that they can be accessed from your react application. 
