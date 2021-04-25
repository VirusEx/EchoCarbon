import React, { Component, useState  } from 'react'
import { Link } from 'react-router-dom';

function QuizDisplay() {
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	function refreshPage() {
		window.location.reload(false);
	  }

	return (
		<div className="box">
			{showScore ? (
				<div>
					<div class="columns is-centered">
						<div class="column is-half">
							<progress class="progress is-info" value="1" max="1"></progress>
						</div>
					</div>
					<div className="button is-active is-large">
						You scored {score} out of {questions.length}
					</div>
					<br></br>
					<br></br>
					<div className="button is-active is-large">
						{((score/questions.length) * 100).toFixed(2)}%
					</div>
					<br></br>
					<br></br>
					<button class="button is-info" onClick={refreshPage}>Click to take quiz again!</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className="">
							<div class="columns is-centered">
								<div class="column is-half">
									<progress class="progress is-info" value={currentQuestion} max={questions.length}></progress>
							</div>
							<br></br>
							<br></br>
							</div>
							<div className="button is-active is-large">
								<span className="">Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<br></br>
							<br></br>
							
							
						</div>
                        <div>
                            <div className='notification title is-4 '>{questions[currentQuestion].questionText}</div>
                        </div>
						
					</div>
					<div className="box">
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<div className="columns">
                                <div className="column">
                                    <button className="button is-rounded" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                </div>
                            </div>
						))}
					</div>
				</>
			)}
		</div>
	);
}

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapChoice: 0
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
      
  //   });
  // }
  

  handleChange(event) {
    //this.setState({vehicleType: event.target.vehicleType});
  }

  handleSubmit(event) {
    //alert('YOUR VEHICLE TYPE: ' + this.state.vehicleType);
    event.preventDefault();
  }


  render() {

      return (
        
        <div className="">
          <div class="box">
            <h1 class="title is-1">Quiz</h1>
          </div>
          <div>
            
            <QuizDisplay/>
          </div>
      
        </div>
      );
    }
} 

export default Quiz;