import React from 'react'

import styles from './Style'

/*  BurgerBuilder Photos  */
// import firebaseLogo from 'assets/Tech/firebaseLogo.png'
// import reactLogo from 'assets/Tech/ReactLogo.png'
// import reduxLogo from 'assets/Tech/Redux.png'
/*  Node Photos  */
// import graphQLLogo from 'assets/Tech/graphQLLogo.png'
// import sqlLogo from 'assets/Tech/SQLLogo.png'
// import nodeLogo from 'assets/Tech/Node.png'

/*  Achievement Photos  */
import CloudPractitioner from 'assets/Certs/CloudPractitionerEmailBadge.png'
import UdemyBurgerCert from 'assets/Certs/udemyBurgerBuilder.jpg'



/*  ############################################################################  */
/*  ####  Projects  ####  */
export const projectsDescription = <p>
Developing websites/web applications is more than a carear, but a hobby too. I have worked on various personal projects:
</p>


export const burgerBuilderDesc = <div className={styles.burgerData}>
  <p>The Burger Builder was developed as part of a Udemy course on React 16; including hooks, the context API, Redux and Firebase's NoSQL database. The project highlights user authentication and storing persistant data using Firebase, and creating a FE application using React. Once authenticated you can create a burger using the controls at the bottom of the page and 'order' the burger using the form, with validation, created using Regex tests.</p>
  {/* <div className={styles.imgWrapper}></div>
  <img src={firebaseLogo} alt="Firebase logo" width="100" height="100"/>
  <img src={reactLogo} alt="React logo" width="100" height="100"/>
  <img src={reduxLogo} alt="Redux logo" width="130" height="100"/> */}
  </div>

export const ssShopDesc = <div className={styles.ssShopData}>
  <p>This project uses Node.js, GraphQL, and SQL to build a shop and several templating engines.</p>
  {/* <img src={graphQLLogo} alt="graphQL logo" width="100" height="100"/>
  <img src={nodeLogo} alt="node.js logo" width="100" height="100"/>
  <img src={sqlLogo} alt="sql logo" width="100" height="100"/> */}
</div>

export const userAuth = <div className={styles.userAuth}>
  <p>A project created by team treehouse, teaching Mongoose, the MongoDB framework and Express, the Node.js framework, to create a user authentication system. The project uses hashing and saliting techniques to encrypt sensative user information in a MongoDB.</p>
</div>

/*  ############################################################################  */
/*  ####  Achievemnets  ####  */

export const achivementDescription = <p> I'm a lifelong learner, during my endovers I have picked up numerous accolades.</p>
  
export const AWSContent = (
  <div className={styles.aws}>
    <p>May 2019, I achieved my AWS cloud practitioner certification. Demonstrating an overall understanding of the AWS Cloud along with the following skills:
    <ul>
      <li>AWS cloud architectural principles</li>
      <li>AWS cloud value proposition</li>
      <li>Key AWS services</li>
      <li>Security and compliance aspects of the AWS platform and the shared security model</li>
      <li>Billing, account management, and pricing models</li>
    </ul>
    <br/>Continuing on the AWS certification learning path, working on the AWS Solutions Architecture</p>
    <br />
    <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-03-14&ci=AWS00694170" target="_blank" rel="noopener noreferrer">
      <img src={CloudPractitioner} alt="AWS Cloud Practitioner badge"/>
    </a>
  </div>
)

export const UdemyContent = (
  <div className={styles.udemyBurger}>
    <img height="200" width="400" alt="React-16 Cert Logo" src={UdemyBurgerCert}/>
    <p>Maximilian Schwarzmüller's comprehensive React 16 course. Gained indepth knowledge covering the following moduals:</p>
    <ul>
      <li>Ajax | Accessing a server | Routing | Forms/Validation | Redux | Testing | Next.js | Animations | Redux Saga | Hooks</li>
    </ul>
  </div>
)

export const TreehouseContent = (
  <div className={styles.treehouseCert}>
    <p>Stack JavaScript track, covering the following skills in interactive courses:</p>
    <ul>
      <li>ES6/ES2015</li>
      <li>jQuery | Ajax</li>
      <li>Node.js | Express | Rest API</li>
      <li>Gulp</li>
      <li>Mongo | Mongoose</li>
      <li>JavaScript Unit Testing</li>
    </ul>
  </div>
)