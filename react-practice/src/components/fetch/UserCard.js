import { Card } from "react-bootstrap"

const UserCard = (props) => {
    return (
        <Card>
            <Card.Img src={props.avatar} />
            <Card.Body>
                <Card.Title>
                    {props.firstName} {props.lastName}
                </Card.Title>
                <Card.Subtitle>{props.email}</Card.Subtitle>
                <Card.Text>{props.birthDate}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard