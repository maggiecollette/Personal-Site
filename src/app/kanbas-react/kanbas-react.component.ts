import { Component } from '@angular/core';

@Component({
  selector: 'app-kanbas-react',
  templateUrl: './kanbas-react.component.html',
  styleUrls: ['./kanbas-react.component.css'],
})
export class KanbasReactComponent {
  name = 'Kanbas';
  github = 'https://github.com/maggiecollette/kanbas-react-web-app';
  github2 = 'https://github.com/maggiecollette/kanbas-node-server-app';
  description = [
    'Assignment 1: Focused on HTML basics, mocking out the content of "Kanbas" in plain HTML. Firmilarized with deploying applications on Netlify.',
    'Assignment 2: Began styling pages with CSS, Bootstrap, and Fontawesome icons. Focused on page layout and ensuring a responsive design.',
    'Assignment 3: Converted the plain HTML and CSS from the previous Assignments into React components to form a Single Page Application using React Router.',
    'Assignment 4: Introduced the concept of React states, focusing on maintining states where needed throughout the application.',
    'Assignment 5: Implemented a RESTFUL API for Kanbas using Node.js and Express.js.',
    'Assignment 6: Created a MongoDB database for Kanbas to connect to the RESTFUL API.',
  ];
  images = [
    { title: "The user's dashboard", src: 'assets/dashboard.png' },
    {
      title: 'The user\'s dashboard after clicking "Add Course"',
      src: 'assets/add-course.png',
    },
    {
      title: 'The user\'s dashboard after clicking "Edit Course"',
      src: 'assets/edit-course.png',
    },
    { title: 'The home page for a course', src: 'assets/course-home.png' },
    {
      title: 'The home page after clicking the "Create Module" button',
      src: 'assets/new-module.png',
    },
    {
      title: 'The home page after clicking the edit button for a lesson',
      src: 'assets/new-lesson.png',
    },
    { title: 'The profile page before logging in', src: 'assets/account.png' },
    { title: 'Profile page after logging in', src: 'assets/logged-in.png' },
    {
      title: 'Admin only - the table of users in their courses',
      src: 'assets/users.png',
    },
  ];
  skills = [
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx' },
    { name: 'HTML', icon: 'bi bi-filetype-html' },
    { name: 'CSS', icon: 'bi bi-filetype-css' },
    { name: 'JSON', icon: 'bi bi-filetype-json' },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap' },
    { name: 'AngularJS', icon: 'bi bi-window' },
    { name: 'Node.js', icon: 'bi bi-hexagon-fill' },
    { name: 'Express.js', icon: 'bi bi-explicit-fill' },
    { name: 'MongoDB', icon: 'bi bi-database-fill' },
    { name: 'REST API', icon: 'bi-diagram-2' },
  ];
}
