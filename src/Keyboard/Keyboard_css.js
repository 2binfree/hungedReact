const keyboard = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: '0 auto',
  justifyContent: 'center',
  fontFamily: 'Roboto Mono',
};

const key = {
  padding: '5px',
  fontSize: '1.5em',
  flex: '0 0 calc(100% / 26 - 0.4em)',
  outline: '0.08em solid silver',
  cursor: 'default',
  textAlign: 'center',
  width: '1em',
};

const blueKey = {
  ...key,
  backgroundColor: 'blue',
  color: 'white',
};

export default { keyboard, key, blueKey };
