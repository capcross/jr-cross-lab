import React from 'react';

export default function (props) {
  console.log('JRBoard!!!');
  let workstate = 0;
  return (
    props.render(workstate)
  );
};
