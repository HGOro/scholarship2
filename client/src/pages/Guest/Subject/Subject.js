import React, {Component} from 'react'
import { Card, Button, Row, Col, CardTitle, Container } from 'react-materialize';
import { Link } from "react-router-dom";
import "./Subject.css"

class Subject extends Component {
    constructor(props){
        super(props)
        this.state = {
            subjects: [
                {
                    name: "Math",
                    info: "Facts, Quizzes, and More",
                    quizzes: [{url:"/math/quiz", text:"Times Tables"}],
                    icon: "math.png"
                },
                {
                    name: "Reading",
                    info: "Words, Stories, and More",
                    icon: "reading.png"
                },
                {
                    name: "Writing",
                    info: "Build Words and Sentences",
                    icon: "writing.png"
                },
                {
                    name: "Science",
                    info: "How the World Works",
                    icon: "science.png"
                },
                {
                    name: "History",
                    info: "Past to Present",
                    icon: "history.png"
                },
                {
                    name: "Art",
                    info: "Expression and Exploration",
                    icon: "art.png"
                }
            ]
        }
    } 

    render(){
        return(
            <Container id="subjects">
                <Row>
                    {this.state.subjects.map((subject, i)=>(
                        <Col m={6} s={12} l={4} key={i} >
                        {(subject.name === "Math") ? 
                            <Card header={<img src={`./assets/img/subjects/${subject.icon}`} />} title={subject.name} 
                            reveal={
                                <ul>
                                    {subject.quizzes.map((quiz, i)=>(
                                        <li key={i}>
                                            <Link to={quiz.url}>{quiz.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            }>
                                <p>
                                    {subject.info}
                                </p>
                            </Card>
                            : 
                            <Card header={<img src={`./assets/img/subjects/${subject.icon}`} />} title={subject.name} reveal={<p>Coming Soon!</p>} >
                                <p>{subject.info}</p>
                                
                            </Card>
                        }
                        </Col>
                    ))}
                    
                </Row>
            </Container>
        )
    }
}

export default Subject;