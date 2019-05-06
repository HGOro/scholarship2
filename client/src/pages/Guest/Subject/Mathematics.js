import React, {Component} from 'react'
import { Row, Container, Range, Icon, Col, Button } from 'react-materialize';
import Chart from '../../../components/Chart/Chart';


class Mathematics extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            right: false,
            wrong: false,
            questionCount: 0,
            totalQuestions: 0,
            timer: 10,
            totalTime: 0,
            totalRight: 0,
            totalWrong: 0,
            quizId: "",
            selectedQuiz: false,
            rangeDisable: true,
            num1: null,
            num2: null,
            answer: null,
            quizStart: false,
            answerSubmitted: false,
            chartData: {}
        }
    }

    componentWillMount(){
        let cookies = document.cookie
        if( cookies.length > 0){
            cookies = cookies.split("; ")
            //the following checks if user is logged in
            if (cookies.indexOf("authenticated=true") !== -1){
                this.setState({
                    isLoggedIn: true
                })
            }
        }
        //do I want getChartData to be called yet?
        //Can I wait to call it later?
        this.getChartData();
    }


    getChartData(){
        //Ajax calls here
        //fill the state with the data from the quiz results
        this.setState({
            chartData: {
                labels: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'],
                datasets: [
                    {
                        label:'Answers Correct',
                        data:[
                            0,
                            4,
                            3,
                            6,
                            9,
                            8,
                            12,
                            0
                        ],
                        backgroundColor:[
                            'rgba(0, 255, 255, 0.75)'
                        ],
                        borderColor:[
                            'rgba(0, 0, 255, 0.1)'
                        ]
                    }
                ]
            }
        })
    }
    //countdownTimer = () => {
    // 
    //    let {timer} = this.state
    //    render(){
    //        return (
    //            <div>
    //                <h1>Current Count: {timer}</h1>
    //            </div>
    //        )
    //}}
    //   componentDidMount(){
    //    let {startTimer} = this.props
    //        this.setState({
    //            timer: startTimer
    //        })
    //    this.myInterval = setInterval( () => {
    //        this.setState(prevState => ({
    //            timer: prevState.timer - 1
    //        }))
    //    }, 1000)
    //}
//

    generateTwoNums = () => {
        let numOne = Math.floor(Math.random()* 12)
        let numTwo = Math.floor(Math.random()* 12)
        let solution = numOne * numTwo
        this.setState(prevState => ({
            num1: numOne,
            num2: numTwo,
            answer: solution,
            questionCount: prevState.questionCount+1,
            answerSubmitted: false
        }))
    }

    countRangeSubmit = (e) => {
        e.preventDefault()
        if(this.state.totalQuestions > 0){
           this.generateTwoNums()

            this.setState({
                selectedQuiz: true,
                rangeDisable: true
            })
        }
    }

    countRangeChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let id = `math-tt-${value}`
        value = parseInt(value)
        this.setState({
            [name]: value,
            rangeDisable: false,
            quizId: id
        })
    }

    userQuizCount = ()=> {
        return(
            <Row>
                <Col s={12}>
                    <form>
                        <Icon>
                            blur_on
                        </Icon>
                        <span>Select how many problems you would like to solve?</span>
                        <Icon>
                            blur_on
                        </Icon>
                        <Range min="5" max="50" step="5" name="totalQuestions" required onChange={this.countRangeChange}/>
                        <Button onClick={this.countRangeSubmit} type="submit" disabled={this.state.rangeDisable}>Submit</Button>
                    </form>
                </Col>
            </Row>
        )
    }

    submitAnswer = (e) => {
        if(e.key === "Enter"){
            //Stop timer
            //reset time
            let answer = e.target.value
            answer = parseInt(answer)
            if(answer === this.state.answer){
                this.setState(prevState =>({
                    right: true,
                    wrong: false,
                    answerSubmitted: true,
                    totalRight: prevState.totalRight+1
                }))
            } else {
                this.setState(prevState =>({
                    wrong: true,
                    right: false,
                    answerSubmitted: true,
                    totalWrong: prevState.totalWrong+1
                }))
            }

            //set timout before generating next q
        }
    }


    handleNextQuestion = () => {
        this.generateTwoNums()
    }

    renderQuiz = () => {
        if(this.state.questionCount <= this.state.totalQuestions && !this.state.answerSubmitted){
            return <div>
                <h3>
                    {this.state.num1} x {this.state.num2} =
                </h3>
                <div>
                    <input type="number" onKeyDown={this.submitAnswer} />
                    <p>Type your answer above and press Enter</p>
                </div>
            </div>
        } else if(this.state.questionCount <= this.state.totalQuestions && this.state.answerSubmitted){
            //this is where we show user if correct/wrong
            if(this.state.right){
                return <div>
                <h1>You got it right!</h1>
                <Button onClick={this.handleNextQuestion}>Next Question</Button>
                
                </div>
            } else {
                return <div>
                <h1>You got it wrong!</h1>
                <Button onClick={this.handleNextQuestion}>Next Question</Button>
                
                </div>
            }
            
        }
        else if(this.state.questionCount>this.state.totalQuestions){
            return <Container>
                        <div>
                            <h1>Quiz Completed!</h1>
                            <h2>Correct:{this.state.totalRight}</h2>
                            <h2>Wrong:{this.state.totalWrong}</h2>
                        </div>
                        <Chart chartData={this.state.chartData} />
                    </Container>
        }   
    }

    handleStartClick = () => {
        this.setState({
            startQuiz : true
        })
    }

    renderInstructions = () => {
        return <div>
            <p>Get ready to multiply!</p>
            <p>Click Start Quiz, then type in your answer and press enter for each multiplication problem.</p>
            <p>You will have {this.state.totalQuestions * 5} seconds to finish this quiz.</p>
            <Button onClick={this.handleStartClick}>Start Quiz</Button>
        </div>
    }

    startQuiz = () => {
        return ( this.state.selectedQuiz && this.state.startQuiz ) ? this.renderQuiz() : this.renderInstructions()
    }

    render(){
        return(
            <Container id="math">
                {(this.state.selectedQuiz) ? this.startQuiz() : this.userQuizCount() }

            </Container>
        )
    }
}

export default Mathematics;