import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-neu',
  templateUrl: './connect-neu.component.html',
  styleUrls: ['./connect-neu.component.css'],
})
export class ConnectNeuComponent {
  name = 'ConnectNEU';
  github = 'https://github.com/garrettmichiels/team1-react-web-app';
  github2 = 'https://github.com/garrettmichiels/team1-node-server-app';
  description = [
    'Designed the idea for ConnectNEU - wanted to provide a space for "Mentors" to review companies, and "Mentees" to see those reviews and choose to follow mentors.',
    'Developed a React frontend, displaying different home pages and permissions for the two different user roles.',
    'Connected to an external API to provide data on jobs currently available at searched companies.',
    'Implemented a REST API using Node.js and Express.js, allowing for users to be created, follow one another, follow jobs, and write reviews (mentors only).',
    'Connected our API to a MongoDB database to store information on users, reviews, and necessary information on companies.',
  ];
  images = [
    { title: 'The app when signed out', src: 'assets/c-signed-out.png' },
    { title: 'The login/signup page', src: 'assets/c-login.png' },
    {
      title: "View of a user's profile when logged in",
      src: 'assets/c-logged-in.png',
    },
    {
      title: 'Results after searching for a job',
      src: 'assets/c-search-results.png',
    },
    { title: 'The details page for a job', src: 'assets/c-job-details.png' },
    {
      title: 'The mentor home view, allows for posing reviews.',
      src: 'assets/c-mentor-reviews.png',
    },
    {
      title: "The user's profile after adding companies and creating a review",
      src: 'assets/c-companies-and-reviews.png',
    },
    {
      title: 'The mentee view of the home page',
      src: 'assets/c-mentee-home.png',
    },
    {
      title: "Viewing another user's profile",
      src: 'assets/c-view-user-profile.png',
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
