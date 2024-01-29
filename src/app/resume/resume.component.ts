import {Component} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resume = "assets/Marguerite-Collette-Resume.pdf";
  me = "Marguerite Collette";
  contacts = "Boston, MA • (203)-232-1197 • collette.m@northeastern.edu";
  websites = [
    {
      hostName: "Linkedin",
      pageLink: "https://www.linkedin.com/in/marguerite-collette"
    },
  ];
  availability = "May 1, 2024";
  education = {
    institution: "Northeastern University",
    location: "Boston, MA",
    college: "Khoury College of Computer Sciences",
    date: "September 2021 - Present",
    degree: "Candidate for a Bachelors of Science in Computer Science",
    graduation: "May 2025",
    coursework: "Object Oriented Design, Algorithms, Computer Systems, Logic and Computation, Theory of Computation," +
      " Fundamentals of Digital Design, Mathematics of Data Models, Foundations of Cybersecurity, Fundamentals of " +
      "Computer Science I, Fundamentals of Computer Science II",
    involvement: "Study abroad coursework completed at University College Dublin, Northeastern Oasis, Intramural Broomball"
  };
  skills = {
    frontend: "JavaScript, TypeScript, AngularJS, React, JSON, HTML, Bootstrap, Node.js, CSS, Express.js, Plotly.js",
    backend: "C#, Java, SQL, Python, C, Assembly, AWS, Beautiful Soup, Crontab",
    other: "Object Oriented Programming, Algorithms, Linux, Fiddler, LaTeX, Racket, NumPy, System Verilog, GitHub",
  };
  work = [
    {
      employer: "Emoney Advisor",
      location: "Radnor, PA (Remote)",
      title: "Software Engineer, Co-Op",
      date: "July 2023 - December 2023",
      responsibilities: [
        "Developed and tested C# code to extract comprehensive financial data from bank accounts including" +
        " balances, transactions, and investments for clients across various financial institutions.", "Analyzed web" +
        " trace attributes (HTML, JavaScript, JSON, and headers) using Fiddler to determine bug root causes.",
        "Resolved tickets related to multifactor authentication, missing headers and cookies for page navigation, " +
        "and general financial institution webpage modifications that require new parser logic.", "Produced SQL " +
        "scripts to manipulate the database’s existing transactions when necessary, referencing Jenkins builds and" +
        " Octopus deployments to ensure accurate outcomes."
        ]
    },
    {
      employer: "Khoury College of Computer Sciences",
      location: "Boston, MA",
      title: "Student Curriculum Innovation Developer",
      date: "December 2023 – Present",
      responsibilities: [
        "Creating modules related to various Computer Science disciplines under Dr. Mark Fontenot to provide " +
        "Northeastern University Students with an expansive hub for self-directed learning.", "Completing one module " +
        "biweekly, consisting of 60 to 90 minutes of digestible yet in depth content."
      ]
    },
    {
      employer: "Northeastern University Oasis",
      location: "Boston, MA",
      title: "Executive Board Member - Resources Director",
      date: "December 2023 - Present",
      responsibilities: [
        "Organizing club resources into paths which will direct students from ideation to completion of personal " +
        "projects using their chosen frameworks as a part of a goal set by Khoury College to provide students with " +
        "out of classroom resources.", "Directing club members to resources related to weekly hack sessions."
      ]
    },
    {
      employer: "Northeastern University Oasis",
      location: "Boston, MA",
      title: "Mentor",
      date: "September 2023 - Present",
      responsibilities: [
        "Providing guidance and feedback during weekly club meetings to two groups of club members on their web " +
        "development projects, teaching them the basics of React JS and databases such as Supabase and Firebase."
      ]
    },
    {
      employer: "Northeastern University",
      location: "Boston, MA",
      title: "Teaching Assistant - Fundamentals of Computer Science I & II",
      date: "May 2022 - May 2023",
      responsibilities: [
        "Reinforced Fundamentals of Computer Science II students’ understanding of foundational concepts of writing " +
        "and debugging programs in Java during twice-weekly office hours.",
        "Directed Fundamentals of Computer Science II students through instructor assigned lab problems using worked" +
        " out examples during two-hour lab sessions each week.",
        "Assisted Fundamentals of Computer Science I students in learning how to design programs in Racket during " +
        "twice-weekly office hours.",
        "Graded an average of 20 assignments and exams weekly, based on style, functionality, and efficiency."
      ]
    },
    {
      employer: "Grady & Riley Attorneys at Law",
      location: "Waterbury, CT",
      title: "Office Assistant",
      date: "May 2022 - September 2022",
      responsibilities: [
        "Enhanced office flow by streamlining the digitizing of hundreds of client files throughout the firm in a " +
        "comprehensive and accessible manner, such that ongoing cases can be added.",
        "Reduced the volume of nonessential documents significantly across both the Waterbury and Woodbury, CT " +
        "offices, making way for new client files.",
        "Served as a witness for document signings, locating misplaced files, and reviewing time sheets for accuracy."
      ]
    },
    {
      employer: "Town of Middlebury Parks & Recreation",
      location: "Middlebury, CT",
      title: "Lifeguard",
      date: "June 2018 - July 2023",
      responsibilities: [
        "Monitored swimmers at a town lakefront on a rotating schedule with fellow lifeguards.",
        "Performed minor saves and first aid as needed using skills from CPR/AED/First Aid certifications.",
        "Assisted with moving boats, maintaining a sanitary beach and picnic area, patron questions, as well as " +
        "opening and closing the beach area each day."
      ]
    },
    {
      employer: "Race4Chase Triathlon Program",
      location: "Waterbury, CT",
      title: "Coach",
      date: "June 2018 - August 2021",
      responsibilities: [
        "Prepared inner-city children ages 6-12 for completing a triathlon at the end of each summer by teaching " +
        "them to swim, bike, and run.",
        "Developed unique and engaging daily training plans to promote enjoyable movement.",
        "Maintained a safe and welcoming summer camp environment and served as a positive role model for all " +
        "athletes in the program."
      ]
    }
  ];
  projects = "https://maggiecollette.github.io/Personal-Site/projects";
  clubs =
    [
      {
        club: "Northeastern Oasis",
        location: "Boston, MA",
        title: "Club Member",
        date: "September 2022 - Present",
        responsibilities: [
          "Conceptualized a web project and gained experience in web scraping utilizing Python," +
          " Beautiful Soup, AWS, and Crontab, and self-taught basics of JavaScript, HTML, CSS, and Bootstrap for " +
          "front-end development."
        ]
      }
    ];
  interests = "Thrifting, Photography, Reading, UConn Basketball, Cooking/Baking, Swimming, Hiking, Running, Volunteering"
}
