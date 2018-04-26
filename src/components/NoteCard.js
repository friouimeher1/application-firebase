import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
} from 'react-md';

import { randomImage } from '../utils/random';
const style = { maxWidth: 600 };
const avatar = randomImage();

const NoteCard = ({children}) => (
  <Card style={style} className="md-block-centered">
    <CardTitle
      title="Card Title"
      subtitle="Card Subtitle"
      avatar={<Avatar src={avatar} role="presentation" />}
    />
    <CardActions expander>
      <h5>{ children }</h5>
    </CardActions>
    <CardText expandable>
      <h5>{ children }</h5>
    </CardText>
  </Card>
);
export default NoteCard;
