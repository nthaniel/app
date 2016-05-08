import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';


const TweetList = ({ tweets, onGetTweets }) => {
  function fetchTweets() {
    fetch('/generateDummy', { method: 'GET', mode: 'cors' })
    .then(result => result.json())
    .then(result => onGetTweets(result))
    .catch(err => console.error(err));
  }
  return (
    <div>
      <button onClick={fetchTweets}>Get Tweeties</button>
      <div styles={styles['tweets-list']}>
        {tweets.map((t) => (
          <Tweet
            key={t.id_str}
            {...t}
          />
        ))}
      </div>
    </div>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(React.PropTypes.object),
  onGetTweets: PropTypes.func,
};

export default TweetList;
