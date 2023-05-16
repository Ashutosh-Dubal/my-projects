import React from 'react'
import '../Styling/AboutMePage.css'
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className='about-me-page'>
            <h1>Ashutosh Dubal</h1>
            <h2>Assocate Software Developer at Infosys</h2>
            
            <p>Hi there, I'm Ashutosh Dubal, but please feel free to call me Ash. I was born and raised 
                in Muscat, Oman, but I am originally from India. After finishing high school, I moved to 
                Vancouver to attend Simon Fraser University (SFU), where I majored in Mathematics and 
                Statistics after initially studying Computing Science. I have always had a passion for 
                mathematics and found it to be the only subject I loved spending my time on. During my 
                time at SFU, I took a in Stats(Intermediate Probability and Statistics), 
                which initially seemed very difficult but was ultimately refreshing. This experience 
                inspired me to take more statistics courses, and I soon realized that I have a deep 
                love for the field.
            </p>

            <p>My ultimate goal is to become a machine learning engineer in the future, and I am also 
                considering pursuing a Ph.D. in Statistics or an applied field of Statistics. I am 
                excited about the opportunities that lie ahead and look forward to utilizing my 
                skills and knowledge to make a positive impact in the world.
            </p>

            <p>I am currently an Associate Software Developer at Infosys, possessing multiple 
                industry-recognized certifications in prominent technologies such as Java, SQL, Jenkins, 
                Junit, TestNG, and Selenium. With a high level of expertise in object-oriented programming, 
                data structures, algorithms, and the complete software development life cycle (SDLC), 
                including requirements gathering, design, development, testing, deployment, and 
                maintenance, I am well-equipped to deliver high-quality solutions to complex problems. 
                My extensive experience in conducting multiple types of testing, including unit, integration, 
                system, and user acceptance testing (UAT), has allowed me to provide full-spectrum testing 
                coverage, ensuring that products meet the highest standards.
            </p>

            <p>Aside from my work at Infosys, I served as an Analytics Now Editor at the Operation 
                Research Student Union. Through conducting research and analysis for the "Analytics_Now" 
                journal, I gained valuable knowledge and proficiency in diverse analytical techniques 
                and methods for solving complex operations research problems. My exceptional organizational 
                skills and strong attention to detail were demonstrated through my reformatting of all 
                papers to provide a consistent format, ensuring the journal's overall quality and consistency.
            </p>

            <p>Furthermore, I served as a Council Representative at Simon Fraser Student Society, where I 
                collaborated effectively with members of a student society to coordinate and execute 
                successful social and networking events. As a partner to other student executives, I 
                helped design and deliver a series of technical workshops, covering topics such as RStudio, 
                C++, and LaTex, providing valuable insights and ensuring the workshops were engaging and 
                informative. Attending bi-weekly meetings, as well as special meetings, I maintained 
                strict confidentiality duties towards the SFSS while participating in all meetings and 
                providing valuable input to the council's decision-making process.
            </p>

            <p>When I'm not working, I enjoy engaging in intellectually stimulating activities such as 
                reading books and playing video games. Some of my favorite books include 
                "Void: The Strange Physics of Nothing," "1984," "On Inequality," "A Brief History of Time," 
                "An Imaginary Tale: The Story of √-1," and "Zero: The Biography of a Dangerous Idea." I 
                find these books particularly fascinating due to their ability to provoke thought and 
                encourage critical thinking. When it comes to video games, I appreciate immersive 
                storytelling and gameplay mechanics. Some of my preferred video game series include 
                "God of War," "Ratchet & Clank," "Uncharted," "Bioshock," "Mortal Kombat," and 
                "Ghost of Tsushima."
            </p>

            <p>While my hobbies of reading books and playing video games may not directly contribute 
                to my professional growth, they do help me develop important skills that can be 
                useful in various aspects of my life. Reading books helps me expand my knowledge 
                and understanding of various subjects, while also improving my vocabulary and 
                critical thinking skills. Playing video games, on the other hand, helps me develop 
                problem-solving and decision-making skills, as well as improving my hand-eye 
                coordination and reaction time.
            </p>

            <p>Moreover, having hobbies that I enjoy also allows me to unwind and recharge 
               after a long day of work or studying. This helps me maintain a healthy work-life 
               balance, which is essential for both my personal and professional well-being.
            </p>
            
            <p>In my view, solving problems is about taking the time to define the problem 
                thoroughly. As Albert Einstein once said, 'given one hour to save the world, 
                I would spend 55 minutes defining the problem and 5 minutes finding the solution.' 
                During my time as a council representative, I collaborated on various workshops 
                with the math, stats, and data science departments and their respective 
                student unions. Through this experience, I discovered that finding a common 
                middle ground makes it easier to work with others, and things tend to move in a 
                positive direction, as Charles Caleb Colton once said, 'if you have nothing 
                nice to say, say nothing at all.'
            </p>

            <p>My primary motivation stems from my curiosity about the unknown. When I was 
                just six years old, I attempted to solve a Rubik's cube without knowing 
                anything about the different permutations. However, years later, when I 
                learned about permutations and combinations in high school, I utilized this 
                knowledge to map out the various moves necessary to reposition the different 
                colors. This experience exemplifies how my love for problem-solving fuels my 
                desire to continuously learn and grow.
            </p>

            <p>Thank you for taking the time to learn more about me. I am Ashutosh Dubal, 
                a passionate mathematician and statistics enthusiast with a strong drive 
                to make a positive impact in the world through my work. With a solid foundation 
                in software development and analytical techniques, I am well-equipped to 
                deliver high-quality solutions to complex problems. When I'm not working, 
                I enjoy engaging in intellectually stimulating activities such as reading 
                books and playing video games, which help me develop important skills useful 
                in various aspects of my life. Solving problems and continuously learning 
                are my primary motivations, and I look forward to the challenges and 
                opportunities that lie ahead.
            </p>

            <p>If you'd liked to get in touch, please visit my <Link to="/contact-me">contact me</Link>page.</p>

        </div>
    );
};

export default AboutPage;