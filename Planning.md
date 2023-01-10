# ShoeString
## a MERN app 
### by Zach Sykes and Corey Loftus

## MVP Features
- index feed of User Posts, displayed in chrono order
- users can create Posts with:
    - title, body, images, tags
- Users can add comments to posts
- data persists in database
- collections of: posts, tags, users

## Wireframe Images
![ShoeString Wireframes](readme-images/ShoeString-Wireframes.png)

## Assignments / Responsibilities
Zach is primarily responsible for the Frontend of the app.
Corey is primarily repsonsible for the Backend of the app.

## User Flow Map
![User Flow Map](readme-images/User%20Flow.png)

## User Stories
- MVP
    - User can create a post that includes:
        - title
        - location ``([lat, long])
        - body
        - image(s)
        - tags
    - User Posts persist in the Atlas database
    - User can navigate to their own profile page
    - User can "like" others posts
    - User can add comments to posts
    - User can edit own posts
    - User can delete own posts
    - User Profile page displays:
        - map with pins of all countries user made post about
        - feed of User's own Posts (truncated versions)

- Stretch
    - User can login to app
    - Tag show page
        -  view trending tags / countries
    - Comments
        - User Profile page displays all comments a User has made, with links to the original post
    - main page Map
        - a grand Map for the entire site - displays pins for every location that all users have posted about
    - User Profile page displays a map w/ pins of all locations User has posted about
    - Users can add Likes to posts
