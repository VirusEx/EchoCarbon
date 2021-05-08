import React, { Component, useState  } from 'react'
import { Link } from 'react-router-dom';

function QuizDisplay() {
    const questions = [
		{
			questionText: 'What day is Earth Day?',
			answerOptions: [
				{ answerText: 'August 12th', isCorrect: false },
				{ answerText: 'December 21st', isCorrect: false },
				{ answerText: 'April 22nd', isCorrect: true },
				{ answerText: 'October 31st', isCorrect: false },
			],
		},
		{
			questionText: 'Who invented Environmentalism?',
			answerOptions: [
				{ answerText: 'John Muir', isCorrect: true },
				{ answerText: 'Greta Thunberg', isCorrect: false },
				{ answerText: 'Wangari Maathai', isCorrect: false },
				{ answerText: 'Rachel Carson', isCorrect: false },
			],
		},
		{
			questionText: 'Which country is the most environmentally friendly?',
			answerOptions: [
				{ answerText: 'Switzerland', isCorrect: true },
				{ answerText: 'United States of America', isCorrect: false },
				{ answerText: 'Denmark', isCorrect: false },
				{ answerText: 'Ireland', isCorrect: false },
			],
		},
		{
			questionText: 'Who invented biodegradable plastic?',
			answerOptions: [
				{ answerText: 'Thomas Edison', isCorrect: false },
				{ answerText: 'Leo Baekeland', isCorrect: false },
				{ answerText: 'Mauric Lemoigne', isCorrect: false },
				{ answerText: 'Calia Bastioli', isCorrect: true },
			],
		},
		{
			questionText: 'Which country has emitted the most carbon dioxide?',
			answerOptions: [
				{ answerText: 'United States', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'China', isCorrect: true },
				{ answerText: 'Russia', isCorrect: false },
			],
		},
		{
			questionText: 'The ocean produces what percentage of oxygen on earth?',
			answerOptions: [
				{ answerText: '90%', isCorrect: false },
				{ answerText: '70%', isCorrect: true },
				{ answerText: '50%', isCorrect: false },
				{ answerText: '20%', isCorrect: false },
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
									<progress class="progress is-info" value={currentQuestion + 1} max={questions.length}></progress>
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
            <h1 class="title is-1">
				
				{localStorage.getItem('lang') === null && "Quiz"}
				{localStorage.getItem('lang') === 'en' && "Quiz"}
				{localStorage.getItem('lang') === 'chi' && "测验"}
				{localStorage.getItem('lang') === 'spa' && "Examen"}
			</h1>
          </div>
          <div>
            
            <QuizDisplay/>
          </div>
      
        </div>
      );
    }
} 

export default Quiz;