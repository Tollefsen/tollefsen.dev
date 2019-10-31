import React, { useContext, createContext } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    background:
      'url(https://www.udutu.com/wp-content/uploads/2016/08/ivory-off-white-paper-texture-1024x683.jpg)',
    width: 350,
    height: 200,
    position: 'relative',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)',
    margin: 'auto'
  },
  embossed: {
    textShadow: '1px 1px rgba(255,255,255,0.8), -0.1px -0.1px rgba(0,0,0,0.8);',
    backgroundClip: 'text',
    fontFamily: 'Questrial, sans-serif',
    '& a': {
      textDecoration: 'none',
      color: 'unset'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  number: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 12px 0 12px'
  },
  name: {
    textAlign: 'center',
    padding: '60px 0 0 0',
    fontWeight: 'strong'
  },
  position: {
    textAlign: 'center',
    fontSize: '12px'
  },
  contact: {
    margin: 'auto 0'
  },
  location: {
    fontSize: '10px',
    alignSelf: 'flex-end'
  }
});

// smallcaps
// debossed

const EmbossedText = ({ children }) => {
  const classes = useContext(CardApi).classes;
  return <div className={classes.embossed}>{children}</div>;
};

const CardApi = createContext(null);

const Card = () => {
  const classes = useStyles();
  const api = { classes };
  return (
    <CardApi.Provider value={api}>
      <div className={classes.card}>
        <EmbossedText>
          <div className={classes.number}>
            <a target="_blank" href="https://www.buymeacoffee.com/lmqcopM">
              Buy me a coffee
            </a>
          </div>
          <div className={classes.name}>
            <span style={{ fontVariant: 'small-caps' }}>Håvard</span> TOLLEFSEN
          </div>
          <div className={classes.position}>DEVELOPER</div>
        </EmbossedText>
      </div>
    </CardApi.Provider>
  );
};

export { Card };
