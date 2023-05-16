import React from "react";
import "../Styling/ShowMorebttn.css";

const Book = ({ title, content }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <li>
        <h3>{title}</h3>
      </li>
      <p>{expanded ? content : `${content.slice(0, 200)}...`}</p>
      <button
        className="show-more-button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less ▲" : "Show more ▼"}
      </button>
    </div>
  );
};

const Books = () => {
  return (
    <div className="show-more">
      <ol>
        <Book
          title="Thinking, Fast and Slow by Daniel Kahneman"
          content={`"Thinking, Fast and Slow" by Daniel Kahneman is a fascinating 
          book that delves into the workings of the human mind and the 
          different ways we think. It introduces the concept of two modes 
          of thinking: System 1, which is fast, intuitive, and automatic, 
          and System 2, which is slow, logical, and deliberate. 
          The book covers a wide range of topics including decision making, 
          biases, heuristics, and the illusion of validity. Kahneman uses a 
          variety of examples and anecdotes to illustrate these concepts, 
          making the book both engaging and accessible to a general audience.
          One of the key takeaways from the book is that our thinking is 
          not as rational as we might think. Kahneman shows how our biases 
          and heuristics can lead us to make mistakes, and how we can improve 
          our decision making by being more aware of these mental shortcuts.
          Overall, "Thinking, Fast and Slow" is an insightful and 
          thought-provoking book that challenges our assumptions about the 
          way we think and make decisions. It is highly recommended for anyone 
          interested in psychology, cognitive science, or simply understanding 
          their own thought processes.`}
        />

        <Book
          title="On Inequality by Harry Frankfurt"
          content={`"On Inequality" by Harry Frankfurt is a thought-provoking and
          insightful exploration of the concept of economic inequality. The
          author challenges traditional justifications for inequality and
          argues that economic inequality is inherently unfair. Frankfurt
          provides a clear and concise analysis of the economic and political
          structures that perpetuate inequality, and offers suggestions for
          how we can move towards a more just and equitable society. The book
          is well-written and accessible, making it a valuable resource for
          anyone interested in understanding and addressing issues of
          inequality. Overall, "On Inequality" is a compelling and important
          work that offers a fresh perspective on a pressing social issue.`}
        />

        <Book
          title="The Subtle Art of Not Giving a F*ck Book by Mark Manson"
          content={`"The Subtle Art of Not Giving a F*ck" by Mark Manson is a self-help
        book that aims to provide a refreshing perspective on personal
        growth and happiness. Rather than focusing on positive thinking and
        motivational slogans, the author encourages readers to embrace the
        struggles and challenges that are inherent in life, and to accept
        that pain and discomfort are inevitable parts of the human
        experience.

        Manson argues that by learning to prioritize the things that truly
        matter to us, and by accepting our limitations and imperfections, we
        can live a more fulfilling and authentic life. He also emphasizes
        the importance of taking responsibility for our own happiness,
        rather than relying on external factors or other people to make us
        happy.
  
        Overall, "The Subtle Art of Not Giving a F*ck" offers a
        thought-provoking and humorous take on personal development, and
        provides practical advice for readers who are looking to improve
        their mindset and approach to life. While some readers may find the
        book's tone and language to be overly irreverent, the underlying
        messages and insights are valuable and well worth considering."`}
        />

        <Book
          title="Zero: The Biography of a Dangerous Idea by Charles Seife"
          content={`"Zero: The Biography of a Dangerous Idea" by Charles Seife is a
        fascinating book that delves into the history and significance of
        the concept of zero. Seife argues that zero has been both revered
        and reviled throughout history, and has played a crucial role in the
        development of mathematics, science, and philosophy. He explores the
        ways in which zero has been used to represent both emptiness and
        infinity, and how it has challenged our understanding of the
        universe and our place in it. Seife also delves into the cultural
        and political implications of zero, and how it has been viewed as
        both a symbol of liberation and a threat to the established order.
        Overall, "Zero" is a thought-provoking and engaging read that offers
        a unique perspective on the importance of this seemingly simple
        concept.`}
        />

        <Book
          title="Void: The Strange Physics of Nothing by James Owen Weatherall"
          content={`"Void: The Strange Physics of Nothing" by James Owen Weatherall is a
        fascinating exploration of the concept of nothingness in physics.
        The book delves into the nature of space and the vacuum, the
        existence of particles that pop in and out of existence in a vacuum,
        and the concept of the Higgs field that permeates all of space.
        Weatherall writes in an engaging and accessible way, making even the
        most complex concepts comprehensible to non-experts. He skillfully
        weaves in historical anecdotes and personal stories to make the book
        a compelling read. Overall, "Void" is a thought-provoking and
        enlightening look at the mysteries of the universe.`}
        />

        <Book
          title="1984 by George Orwell"
          content={`"1984" by George Orwell is a dystopian novel that paints a bleak and
        terrifying picture of a totalitarian society ruled by an oppressive
        government known as "the Party." The story follows the life of
        Winston Smith, a low-ranking member of the Party who begins to
        question the regime's propaganda and begins to rebel against the
        system.

        The novel is a thought-provoking commentary on the dangers of
        totalitarianism, propaganda, censorship, and the loss of individual
        freedoms. It is a sobering reminder of the importance of free
        thought, free speech, and the need to guard against the abuse of
        power.

        Orwell's vivid and powerful prose, coupled with his insightful
        analysis of the human condition, make "1984" a timeless classic that
        continues to resonate with readers today. It is a must-read for
        anyone interested in political philosophy, social commentary, or
        simply great literature.`}
        />

        <Book
          title="An Imaginary Tale by Paul J. Nahin"
          content={`"An Imaginary Tale: The Story of √−1" by Paul J. Nahin is a
        delightful book that tells the story of the imaginary number "i" and
        its use in mathematics. Nahin takes the reader on a journey through
        history, exploring the origins of "i" and its significance in the
        development of calculus, complex analysis, and modern physics.

        The author's clear and engaging writing style makes even the most
        complex mathematical concepts accessible to a general audience.
        Nahin includes numerous examples and exercises to illustrate the
        applications of "i," and he even includes discussions of the
        cultural significance of the number in art and literature.

        Overall, "An Imaginary Tale" is an excellent book for anyone
        interested in the history and applications of mathematics,
        especially those interested in the fascinating world of complex
        numbers.`}
        />

        <Book
          title="Beyond Good and Evil by Friedrich Nietzsche"
          content={`"Beyond Good and Evil" is a philosophical book by Friedrich
        Nietzsche, published in 1886. In this book, Nietzsche challenges the
        traditional ideas of morality, religion, and philosophy, and
        proposes a new way of thinking that is centered around the concept
        of the "will to power".

        Nietzsche argues that traditional morality is a product of a slave
        mentality, and that true greatness and creativity come from breaking
        free from these constraints. He also criticizes the prevailing
        philosophical ideas of his time, such as the belief in objective
        truth and the separation of mind and body.

        Overall, "Beyond Good and Evil" is a thought-provoking and
        challenging book that continues to influence modern philosophy and
        critical thinking. Nietzsche's ideas are presented in a dense and
        sometimes difficult prose, but readers who are willing to engage
        with his arguments will find much to contemplate and ponder.`}
        />

        <Book
          title="The Devil in the White City by Erik Larson"
          content={`"The Devil in the White City" by Erik Larson is a gripping true
        crime novel that tells the story of two men, an architect and a
        serial killer, during the 1893 Chicago World's Fair. The book
        alternates between the two men's stories, with Larson painting vivid
        portraits of each character and the world they inhabit. The
        descriptions of the fair itself are particularly vivid, transporting
        the reader to a time of great innovation and spectacle. The sections
        dealing with the serial killer, H.H. Holmes, are chilling and give
        insight into the mind of a psychopath. Overall, "The Devil in the
        White City" is a well-researched and well-written book that is both
        entertaining and informative.`}
        />

        <Book
          title="Blackfish City by Sam J. Miller"
          content={`"Blackfish City" by Sam J. Miller is a gripping science fiction
        novel set in a near-future world that has been ravaged by climate
        change and environmental degradation. The story takes place in a
        floating city called Qaanaaq, located in the Arctic Circle, where
        various characters from different walks of life are brought together
        by a mysterious woman who arrives on a polar bear. The narrative
        weaves together themes of social inequality, political corruption,
        and personal redemption.

        One of the most remarkable aspects of the novel is its vivid
        world-building. Miller has created a detailed and immersive vision
        of Qaanaaq, with its strange mix of high-tech amenities and low-tech
        survival skills. The characters are equally well-drawn, with complex
        backstories and motivations that add depth to the plot. The story
        itself is fast-paced and engaging, with enough twists and turns to
        keep the reader guessing until the very end.

        Overall, "Blackfish City" is a thought-provoking and entertaining
        read that will appeal to fans of science fiction, dystopian
        literature, and social commentary.`}
        />

        <Book
          title="A Brief History of Time by Stephen Hawking"
          content={`"A Brief History of Time" by Stephen Hawking is a classic book that
        provides an overview of the most important concepts in physics,
        cosmology, and astronomy. It is written in a way that is accessible
        to non-experts and covers topics such as the Big Bang, black holes,
        the theory of relativity, and the nature of time itself. Hawking's
        engaging writing style and use of analogies help to make complex
        concepts easier to understand.

        The book is not only informative but also thought-provoking, as it
        raises questions about the nature of the universe and our place in
        it. Despite being published in 1988, many of the topics covered in
        "A Brief History of Time" remain relevant today, and it continues to
        be a popular and influential work in the field of popular science
        writing.`}
        />

        <Book
          title="The White Tiger by Aravind Adiga"
          content={`"The White Tiger" is a gripping and thought-provoking novel by
        Aravind Adiga that explores the realities of modern-day India
        through the eyes of its protagonist, Balram Halwai. The story
        follows Balram's journey from a poor village boy to a successful
        entrepreneur in the bustling city of Bangalore, and the moral
        compromises he makes along the way to achieve his ambitions.

        The novel's themes of corruption, social injustice, and the struggle
        for upward mobility in a deeply hierarchical society are expertly
        woven into the plot, making for a compelling read. Adiga's writing
        style is both vivid and precise, painting a detailed picture of the
        harsh realities of life in contemporary India.

        Overall, "The White Tiger" is a thought-provoking and powerful novel
        that offers a glimpse into the complexities of modern-day India and
        the forces that shape its society. It's a must-read for anyone
        interested in contemporary Indian literature or social commentary.`}
        />

        <Book
          title="Everything is #@%!ed: A book about hope by Mark Manson"
          content={`"Everything is #@%!ed: A book about hope" by Mark Manson is a
        thought-provoking book that explores the concepts of hope,
        happiness, and human nature. Manson's writing is insightful and
        humorous, and he uses a mix of personal anecdotes, research, and
        philosophy to make his points. He argues that hope is essential for
        our well-being but that we must be careful not to become overly
        optimistic or pessimistic. The book provides a refreshing take on
        self-help and motivation, and it challenges readers to question
        their assumptions about the world and their place in it. Overall,
        "Everything is #@%!ed" is an engaging and thought-provoking read
        that is sure to leave an impression.`}
        />

        <Book
          title="Tao Te Ching by Laozi"
          content={`"Tao Te Ching" is a classic Chinese text written by Laozi, a
        philosopher of ancient China. The book is a collection of 81 poetic
        verses that explores the concept of Tao, the path or the way. It
        provides guidance on how to live a fulfilling life in harmony with
        nature and the universe.

        The verses of the book are filled with wisdom, exploring the duality
        of life, the importance of simplicity, and the concept of
        non-action. The language is simple yet profound, and the ideas are
        timeless, making this book relevant even today.

        Overall, "Tao Te Ching" is a must-read for anyone interested in
        philosophy and spirituality. It provides a fresh perspective on
        life, and the ideas presented in the book can help readers find
        inner peace and balance.`}
        />

        <Book
          title="The Illustrated Sherlock Holmes Treasury by Sir Arthur Conan"
          content={`"The Illustrated Sherlock Holmes Treasury" is a beautifully
        presented collection of Sir Arthur Conan Doyle's classic stories
        featuring the iconic detective Sherlock Holmes. The book includes a
        range of Holmes stories, from the early tales to some of the more
        famous cases, such as "A Study in Scarlet" and "The Hound of the
        Baskervilles". The illustrations throughout the book are stunning
        and add an extra layer of depth to the stories, bringing the
        characters and their world to life. This book is a must-have for any
        Sherlock Holmes fan or lover of classic literature.`}
        />

        <Book
          title="Moriarty by Anthony Horowitz"
          content={`"Moriarty" by Anthony Horowitz is a thrilling mystery novel that
        serves as a continuation of Sir Arthur Conan Doyle's famous Sherlock
        Holmes series. The novel follows the story of Frederick Chase, an
        investigator from the United States, who comes to London in search
        of the infamous criminal mastermind Moriarty. Along the way, he
        teams up with Inspector Athelney Jones, a character from one of
        Conan Doyle's stories, and together they embark on a dangerous
        adventure to unravel Moriarty's intricate plot.

        Horowitz's writing style is reminiscent of Conan Doyle's, and he
        captures the essence of Victorian London with great detail. The
        characters are well-developed, and the plot twists keep the reader
        engaged throughout the book. The story is full of suspense and
        surprises, and the ending leaves a lasting impression.

        Overall, "Moriarty" is an excellent read for fans of Sherlock Holmes
        or anyone who enjoys a good mystery novel. It is a fitting tribute
        to Conan Doyle's legacy and a testament to Horowitz's talent as a
        writer.`}
        />
      </ol>
    </div>
  );
};

export default Books;
