# ShoeString

## by Zach Sykes and Corey Loftus

###

## Introduction

Thanks for checking out ShoeString.

ShoeString is a digital guest book for Planet Earth -- an app where users can post about places they've physically traveled to, and share insider tips from their lived experiences there.

## What does it do?

ShoeString allows users to create posts containing a comment, latitude + longitude, tags, and images of their travels around the world. It then renders those posts in a feed. Users can also edit their comment body, or delete the post entirely.

## Technologies Used
Frontend:
- HTML/CSS
- JavaScript
- React.js
- JSX
- Node.js

Backend:
- Express
- Mongoose
- CORS
- Morgan
- Body Parser
- Node.js

## Wireframe Images

![ShoeString Wireframes](readme-images/ShoeString-Wireframes.png)

## Getting Started

Fork and clone both repos here:

-   [Frontend Repo](https://github.com/Calathea-Z/ShoeString)
-   [Backend Repo](https://github.com/coreyloftus/shoestring-backend)

In your command line, install all dependencies using:

-   npm i

Load them up in your favorite code editor, and code away!

## Future Features
We hope to add the following features to ShoeString:
- user login + authentication
    - using JSON Web Tokens sent from the backend
    - conditional rendering of components depending on if logged in user has ownership status over component
- user's posts page
    - displays all posts by one user 
- user map component
    - displays map with location pins for all locations user has tagged
- global map component
    - displays a grand map with pins of all locations users have tagged
- tags
    - tags page
        - displays tags created by users, and how many times used
    - can click on tag to view tag show route
        - displays information about the tag (first created, how many times used, users who have used it recently)
        - displays all posts using the tag
    
## How you can contribute

Please use GH's Issues feature to notify us about any issues you see.

If you want to contribute to one of our future features, please go for it, and submit a pull request into "dev-yourUsername".

##