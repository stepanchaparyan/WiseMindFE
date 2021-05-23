import React from 'react';

export const splitterByNewLine = text =>
  text?.split('\\n').map((item, i) => <span key={i}>{item}</span>);
