import React from "react";
import Head from "react-helmet";
// import { Link } from "react-router";
import howToAskImage from '../../theme/images/home/ask-illustration.svg';
import howToAnswerImage from '../../theme/images/home/answer-illustration.svg';
import howToTranslateImage from '../../theme/images/home/translate-illustration.svg';
import whyHeader from '../../theme/images/home/why-header.jpg';
import styles from './Home.scss';

export default ({ isLoading, posts }) => (
  <div>
    <Head>
      <title>Josoor Answers</title>
    </Head>
    <div>
      <div className={styles.header}>
        <h1 className={styles.headline}>
          Josoor Answers
        </h1>
        <div className={styles.pitch}>
          The place for refugees and supporters to unite through
          sharing knowledge and translating information
        </div>
      </div>

      <div className={styles.how}>
        <h2>How can you contribute & connect with other memebers of the community?</h2>

        <div className={styles.interactions}>
          <div className={styles.howToAsk}>
            <img src={howToAskImage} />
            <h3>Ask</h3>
            <div className={styles.separator} />
            <p>Get the information you need by asking questions in the community!</p>
          </div>
          <div className={styles.howToAnswer}>
            <img src={howToAnswerImage} />
            <h3>Answer</h3>
            <div className={styles.separator} />
            <p>Share your knowledge and help fellow members by answering their questions!</p>
          </div>
          <div className={styles.howToTranslate}>
            <img src={howToTranslateImage} />
            <h3>Translate</h3>
            <div className={styles.separator} />
            <p>Help the community breach the language barrier by translating information!</p>
          </div>
        </div>
      </div>

      <div className={styles.why}>
        <img src={whyHeader} alt="Three people looking at a smartphone"/>
        <h2>Why?</h2>
        <div className={styles.separator} />
        <p>
          Both refugees and locals use tools to exchange information online. However, in
          all those currently available, they remain in two separated groups due to the
          language barrier, while the knowledge that is being exchanged within those two
          groups is mostly badly organised and oftentimes lost altogether.
        </p>
      </div>

      <div className={styles.vision}>
        <h1>Our Vision</h1>
        <p>
          The vision of Josoor, which means “Bridges” in Arabic, is to provide an easily
          accessible social network to connect everybody involved in the “refugee crisis”
          to enable the creation of empowered communities and provide them with the tools
          to help facilitate the inclusion of refugees into local societies.
        </p>

        <p>
          Starting with Josoor Answers, we will keep adding features to keep up with the
          Josoor Community’s changing needs and wishes.
        </p>

      </div>
    </div>
  </div>
);
