import React, { Fragment } from "react"
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { Link } from "gatsby";

const Carditem = (props) => (
  <Fragment>
      <Card key={props.id}>
        <CardImg top width="100%" src={props.imageUrl} alt="Photos" />
        <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.date}</CardText>
            <Link to={props.url} className="button">Read Me</Link>
        </CardBody>
      </Card>
  </Fragment>
)


export default Carditem