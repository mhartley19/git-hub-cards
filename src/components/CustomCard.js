import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CustomCard = (props) => (
  <Card>
    <Image src={props.imageURL} className="ui medium circular image" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.url}</span>
      </Card.Meta>
      <Card.Description>
        {props.bio}
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
  </Card>
)

export default CustomCard
