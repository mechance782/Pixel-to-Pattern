Project Name: Pixel to Pattern

Tagline: Create your perfect tapestry

Target Users: Beginner- Advanced crocheters 

 

Feature Breakdown

MVP Features: 

    Create: Pixel drawing to be converted
        Pixel drawing is converted to pattern row by row:
        Basically counting how many pixels in a row are a certain color.
        EX: ( sc = single crochet)
        Row 1: 28 sc (white)
        Row 2: 9 sc (white), 10 sc (yellow), 9 sc (white)
        Row 3: 8 sc (white), 10 sc (yellow), 9 sc (white)
     Read: All the submitted patterns
     Update: TBD
     Delete: Delete pattern user has posted 

  

Extended:

     Comments under posts
     Sidebar with links to crochet tutorials or pixel art tutorials

 

Data Model

Core Entities: Users, Posts, Comments

Key Relationships: Each post/comment has one User, can be viewed by all Users

CRUD Operations: 

 Create: Pixel drawings, comments

 Read: All submitted drawings and comments

 Update: TBD

 Delete: Delete Patterns and comments

 

User Experience

User Flows:

     Land on Home Page that includes:
        posts from other users
        sidebar with resources/ links
        Floating plus button to post
     Add Post Page:
        Generic canvas generated with responsive input at top of page to change canvas size
        Drawing tools to left of canvas:
            Pencil (fills one pixel)
            Color 
            Eraser
            Fill Canvas
            Clear Canvas
     View Post Page
        After User posts their canvas or clicks on post
            Display image of pixel drawing
            Underneath drawing, generated crochet pattern is written out

 

 

Madeleine Chance

 

Software Development and Data Analytics Student, Green River College
