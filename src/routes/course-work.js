import React from "react";
import '../Styling/CourseWork.css'

const CourseWork = () => {
    return (
      <div className="course-work">
        <div className="course-work-intro">
          <h1>Introduction</h1>
          
          <p>Welcome to my University courses page! As a lifelong learner, I believe that education is one of the most valuable investments we can make in ourselves. 
            That's why I'm excited to share with you a list of the courses I took while studying at Simon Fraser University. Each course played a unique role in shaping 
            my academic and professional journey, and whether you're a fellow student, a potential employer, or simply curious about my academic background, I hope 
            you'll find this page informative and engaging.</p>
        </div>

        <div className="course-work-course">
          <h1>SFU courses</h1>

          <div className="course-work-stats">
            <h2>Statistics</h2>
            
            <h3>Stat350 - Linear Models in Applied Statistics</h3>
            <p>Theory and application of linear regression. Normal distribution theory. Hypothesis tests and confidence intervals. Model selection. Model diagnostics. 
              Introduction to weighted least squares and generalized linear models.</p>
            
            <h3>Stat360/361 - Advanced R for Data Science/Laboratory for advanced R for Data Science</h3>
            <p>Advanced R programming methods for data science. Tools for reproducible research. Version control. Data structures, subsetting, functions, environments, 
              and debugging. Functional programming. Code performance: profiling, memory, integrating R and C++.</p>
            
            <p>A hands-on application of advanced R programming methods for data science. Using the R concepts covered in STAT 360 and tools for reproducible research, 
              students will work with different data structures, write functions, and debug and optimize the performance of their code.</p>
                
            <h3>Stat380 - Introduction to Stochastic Processes</h3>
            <p>Review of discrete and continuous probability models and relationships between them. Exploration of conditioning and conditional expectation. Markov chains. 
              Random walks. Continuous time processes. Poisson process. Markov processes. Gaussian processes.</p>
            
            <h3>Stat445 - Applied Multivariate Analysis</h3>
            <p>Introduction to principal components, cluster analysis, and other commonly used multivariate techniques.</p>

            <h3>Stat452 - Statistical Learning and Prediction</h3>
            <p>An introduction to the essential modern supervised and unsupervised statistical learning methods. Topics include review of linear regression, classification, 
              statistical error measurement, flexible regression and classification methods, clustering and dimension reduction.</p>

            <h3>Stat475 - Applied Discrete Data Analysis</h3>
            <p>Introduction to standard methodology for analyzing categorical data including chi-squared tests for two- and multi-way contingency tables, logistic 
              regression, and loglinear (Poisson) regression.</p>

            <h3>Stat485 - Applied Time Series Analysis</h3>
            <p>Introduction to linear time series analysis including moving average, autoregressive and ARIMA models, estimation, data analysis, forecasting errors 
              and confidence intervals, conditional and unconditional models, and seasonal models.</p>
          </div>

          <div className="course-work-math">
            <h2>Mathematics</h2>

            <h3>Math208W - Introduction to Operations Research</h3>
            <p>Introduction to methods of operations research: linear and nonlinear programming, simulation, and heuristic methods. Applications to transportation, 
              assignment, scheduling, and game theory. Exposure to mathematical models of industry and technology. Emphasis on computation for analysis and simulation.</p>

            <h3>Math304 - Mathematical Journey IV (Permutation Puzzles)</h3>
            <p>A focused exploration of a special topic (varying from term to term) that builds on mathematical ideas from lower division courses and provides further 
              challenges in quantitative and deductive reasoning.</p>

            <h3>Math308 - Linear Optimization</h3>
            <p>Linear programming modelling. The simplex method and its variants. Duality theory. Post-optimality analysis. Applications and software. Additional 
              topics may include: game theory, network simplex algorithm, and convex sets.</p>

            <h3>Math309 - Continuous Optimization</h3>
            <p>Theoretical and computational methods for investigating the minimum of a function of several real variables with and without inequality constraints. 
              Applications to operations research, model fitting, and economic theory.</p>

            <h3>Math310 - Introduction to Ordinary Differential Equations</h3>
            <p>First-order differential equations, second- and higher-order linear equations, series solutions, introduction to Laplace transform, systems and 
              numerical methods, applications in the physical, biological and social sciences.</p>

            <h3>Math342 - Elementary Number Theory</h3>
            <p>The prime numbers, unique factorization, congruences and quadratic reciprocity. Topics include the RSA public key cryptosystem and the prime number theorem.</p>

            <h3>Math348 - Introduction to Probabilistic Models</h3>
            <p>Review of the basics of probability, including sample space, random variables, expectation and conditioning. Applications of Markov chains, the 
              exponential distribution and the Poisson process from science and industry. Applications may include inventory theory, queuing, forecasting, 
              scheduling and simulation.</p>

            <h3>Math402W - Operations Research Clinic</h3>
            <p>Problems from operations research will be presented and discussed in class. Students will also work on a problem of their choice and present their solution in 
              report form as well as a presentation. This course is centred around a group project.  The objective is to model and analyze real-world problems that require 
              substantial mathematical (Operations Research) techniques.  Students will select the problems and present their analyzes in written reports and oral 
              presentations.</p>

            <h3>Math408 - Discrete Optimization</h3>
            <p>Model building using integer variables, computer solution, relaxations and lower bounds, heuristics and upper bounds, branch and bound algorithms, cutting 
              plane algorithms, valid inequalities and facets, branch and cut algorithms, Lagrangian duality, column generation of algorithms, heuristics algorithms and analysis.</p>
          </div>

        </div>

        <div className="certification">
          <h1>Certifications</h1>
          <ul>
            <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/VD2WSVT3FPCA" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Google Data Analytics by Google.</a>
              <ul>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/HJJGSYM54DL8" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Share Data Through the Art of Visualization.</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/TXY3ETE5FHGH" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Ask Questions to Make Data-Driven Decisions.</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/L6KXTGE3LVA8" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Data Analysis with R Programming</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/NHP496JT3GZB" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Analyze Data to Answer Questions</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/P9RGJX33BFUY" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Prepare Data for Exploration</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/UBUQPBNNBJUU" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Process Data from Dirty to Clean</a></li>
              </ul>
            </li>
            
            <li>IBM Data Science</li>
              <ul>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/U9QS79HD4NJS" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>What is Data Science?</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/J8RUXXNVGHPD" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Python for Data Science, AI and Development</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/EMC64MPE9JC7" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Python project for Data Science</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/AWL45WH7B9ER" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e1f9', textDecoration: 'underline' }}>Data Science methodology</a></li>
              </ul>
           </ul>
        </div>
      </div>
    );
  };
  
  export default CourseWork;