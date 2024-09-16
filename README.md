#  Project: User Management and Posts Viewer

## App Features Overview
1. Add New Users:

Users can be added with properties such as name, email, salary, isGoldClient, and image.
The app validates the name and email fields. The name cannot be empty, and the email must contain both @ and . characters.
Each user entry includes the salary and an optional image. If an image is not provided, a placeholder is displayed.

2. Color Customization:

A color input allows the user to change the text color across the application dynamically.

3. Post Retrieval:

Posts are fetched from the external API endpoint https://jsonplaceholder.typicode.com/posts and displayed in a separate section using two new components: PostList and PostItem.
The app retrieves posts only once, and the data is then rendered using the PostList component, which includes individual PostItem components.

4. Toggle Between Users and Posts:

The app has two buttons: "Show Users" and "Show Posts". By default, the user list is displayed. When "Show Posts" is clicked, the list of posts is displayed.
Clicking "Show Users" switches back to displaying the user list.

5. Delete Users:

Each user entry includes a "Delete" button that removes the user from the list.

6. Data Validation:

Basic form validation is implemented to ensure that users cannot submit an empty name, and the email must follow a valid format (containing @ and .).

7. Stylized UI:

The app is styled for a clean, modern appearance using CSS. Buttons, input fields, and lists are neatly aligned, and user-friendly error messages are displayed for invalid data submissions.