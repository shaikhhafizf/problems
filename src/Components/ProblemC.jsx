import React, { Component } from 'react';

class ProblemC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 1
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ''
        })
    }
    action = (state) => () => {
        this.setState(state)
    }
    Next = () => {
        if (this.state.stage === 1) {
            if (!this.state.businessOwner) {
                this.setState({
                    error: 'Please fill all fields'
                })
            }
            else {
                this.setState({
                    stage: 2
                })
            }
        }
        else if (this.state.stage === 2) {
            if ((this.state.businessOwner === 'No' && !this.state.loginType) || (this.state.loginType === 'email' && !this.state.email)) {
                this.setState({
                    error: 'Please fill all fields'
                })
            }
            else {
                this.setState({
                    stage: 3
                })
            }
        }
        else if (this.state.stage === 3) {
            if (!this.state.largeCrop) {
                this.setState({
                    error: 'Please fill all fields'
                })
            }
            else {
                this.setState({
                    stage: 4
                })
            }
        }
        else if (this.state.stage === 4) {
            if (this.state.contracted || this.state.inSurvey) {
                this.setState({
                    stage: 5
                })
            }
            else {
                this.setState({
                    error: 'Please fill all fields'
                })
            }
        }
    }
    render() {
        var form = []
        if (this.state.stage === 1) {
            form.push(<div className='inputBox'>
                <p className='Ques'>Are you a store owner?</p>
                <button className={`RedBtn ${this.state.businessOwner === 'Yes' ? 'selectedBtn' : null}`} name='businessOwner' value='Yes' onClick={this.onChangeHandler}>Yes</button>
                <button className={`RedBtn ${this.state.businessOwner === 'No' ? 'selectedBtn' : null}`} name='businessOwner' value='No' onClick={this.onChangeHandler}>No</button>
            </div>)
        }
        else if (this.state.stage === 2) {
            if (this.state.businessOwner === 'Yes') {
                form.push(<div className='inputBox'>
                    <p className='Ques'>Located in USA?</p>
                    <button className={`RedBtn ${this.state.inUSA === 'Yes' ? 'selectedBtn' : null}`} name='inUSA' value='Yes' onClick={this.onChangeHandler}>Yes</button>
                    <button className={`RedBtn ${this.state.inUSA === 'No' ? 'selectedBtn' : null}`} name='inUSA' value='No' onClick={this.onChangeHandler}>No</button>
                </div>)
            }
            else {
                form.push(<div className='inputBox'>
                    <button className={`RedBtn ${this.state.loginType === 'FaceBook' ? 'selectedBtn' : null}`} name='loginType' value='FaceBook' onClick={this.onChangeHandler}>Login With FaceBook</button>
                    <p className='Ques'>Or</p>
                    <button className={`RedBtn ${this.state.loginType === 'email' ? 'selectedBtn' : null}`} name='loginType' value='email' onClick={this.onChangeHandler}>Login With Email</button>
                </div>
                )
                if (this.state.loginType === 'email') form.push(<div className='inputBox'>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter you email'
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    />
                </div>)
            }
        }
        else if (this.state.stage === 3) {
            if ((this.state.businessOwner === 'Yes' && this.state.inUSA === 'Yes') || this.state.businessOwner === 'No') {
                form.push(<div className='inputBox'>
                    <p className='Ques'>Large Corporation?</p>
                    <button className={`RedBtn ${this.state.largeCrop === 'Yes' ? 'selectedBtn' : null}`} name='largeCrop' value='Yes' onClick={this.onChangeHandler}>Yes</button>
                    <button className={`RedBtn ${this.state.largeCrop === 'No' ? 'selectedBtn' : null}`} name='largeCrop' value='No' onClick={this.onChangeHandler}>No</button>
                </div>)
            }
            else {
                form.push(<div className='inputBox'> <p className='Ques'>Access Denied Error</p></div>)
            }
        }
        else if (this.state.stage === 4) {
            if (this.state.largeCrop === 'Yes') {
                form.push(<div className='inputBox'>
                    <p className='Ques'>Interested in taking survey?</p>
                    <button className={`RedBtn ${this.state.inSurvey === 'Yes' ? 'selectedBtn' : null}`} name='inSurvey' value='Yes' onClick={this.onChangeHandler}>Yes</button>
                    <button className={`RedBtn ${this.state.inSurvey === 'No' ? 'selectedBtn' : null}`} name='inSurvey' value='No' onClick={this.onChangeHandler}>No</button>
                </div>)
            }
            else {
                form.push(<div className='inputBox'>
                    <p className='Ques'>Contracted with large corpuration?</p>
                    <button className={`RedBtn ${this.state.contracted === 'Yes' ? 'selectedBtn' : null}`} name='contracted' value='Yes' onClick={this.onChangeHandler}>Yes</button>
                    <button className={`RedBtn ${this.state.contracted === 'No' ? 'selectedBtn' : null}`} name='contracted' value='No' onClick={this.onChangeHandler}>No</button>
                </div>)
            }
        }
        else if (this.state.stage === 5) {
            if (this.state.largeCrop === 'Yes') {
                form.push(<div className='inputBox'>
                    <p className='Ques'>Large Corporation Signup Form</p>
                </div>)
            }
            else if (this.state.contracted === 'Yes') {
                form.push(<div className='inputBox'>
                    <p className='Ques'>User must contact large corpuration</p>
                </div>)
            }
            else {
                form.push(<div className='inputBox'>
                    <p className='Ques'>Small Corporation signup Form</p>
                </div>)
            }
        }
        return (
            <div>
                <div className='content'>
                    <div className='flow'>
                        <div className={`process ${this.state.stage === 1 ? 'activeProcess' : null}`} >
                            <p className={`stage ${this.state.stage === 1 ? 'activeStage' : null} `}>1</p>
                            <p className='stageTitle'>Step 1</p>
                        </div>
                        <div className='break'></div>
                        <div className={`process ${this.state.stage === 2 ? 'activeProcess' : null}`}>
                            <p className={`stage ${this.state.stage === 2 ? 'activeStage' : null} `}>2</p>
                            <p className='stageTitle'>Step 2</p>
                        </div>
                        <div className='break'></div>
                        <div className={`process  ${this.state.stage === 3 ? 'activeProcess' : null}`}>
                            <p className={`stage ${this.state.stage === 3 ? 'activeStage' : null} `}>3</p>
                            <p className='stageTitle'>Step 3</p>
                        </div>
                        <div className='break'></div>
                        <div className={`process  ${this.state.stage === 4 ? 'activeProcess' : null}`}>
                            <p className={`stage ${this.state.stage === 4 ? 'activeStage' : null} `}>4</p>
                            <p className='stageTitle'>Step 4</p>
                        </div>
                        <div className='break'></div>
                        <div className={`process  ${this.state.stage === 5 ? 'activeProcess' : null}`}>
                            <p className={`stage ${this.state.stage === 5 ? 'activeStage' : null} `}>5</p>
                            <p className='stageTitle'>Step 5</p>
                        </div>
                    </div>
                </div>
                <div className='formContent'>
                    {form}
                    {this.state.error ? <p className='error'>{this.state.error}</p> : null}
                </div>
                <div className='flowBtn'>
                    {this.state.stage > 1 ? <button
                        className='RedBtn'
                        onClick={this.action({
                            stage: this.state.stage - 1
                        })}
                    >Previous</button> : null}
                    {this.state.stage < 5 ? <button
                        className='RedBtn'
                        onClick={this.Next}
                    >Next</button> : null}
                </div>
            </div>
        );
    }
}

export default ProblemC;