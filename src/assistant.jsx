import React  from 'react';
import assistfoto from './assistantrobot.jpg';
class Assistant extends React.Component{
    constructor(props){
        super(props);
        this.state={messagelist:[],assistant:['ASSISTENCE','PROBLEMS','FORGOT PASSWORD'],levelass:0};
    }
    HandleClick(ev){
    console.log('clicked target:',ev.target,'message content:',ev.target.parentElement.children[0].value);
        let request=ev.target.parentElement.children[0].value;
        this.state.messagelist.push(<li className='usermessage'>{request}</li>);
    console.log('Messages history:',this.state.messagelist);
        this.Requestsolver(request);
        ev.target.parentElement.children[0].value = '';
    }
    Requestsolver(req){
        if(this.state.levelass===0){
        if(this.state.assistant.includes(req.toUpperCase())){
            this.state.messagelist.push(<li className='message'>Match.<br/>Explain your issue,<br/>Example:'Forgot password'</li>);
            this.setState({levelass:this.state.levelass + 1});
            }
            else{
            this.state.messagelist.push(<li className='message'>Sorry, I do not understand, <br/>try again or contacts us on: Example@example.com</li>);
            this.setState({levelass: 0});
            console.log('Assistence has no match.');
            }
        }else{
            if(this.state.levelass===1){
                if(req.toUpperCase()===this.state.assistant[2]){
                    this.state.messagelist.push(<li className='message'>Ok let's do it.<br/>You can reset your password in login section.<br/>Click forgot button.</li>);
                    //net to continue to develop the possibles requests
                    this.setState({levelass:this.state.levelass});
                }
                else{
                    console.log(this.state.assistant[2]);
                    this.state.messagelist.push(<li className='message'>Sorry, I do not understand, <br/>try again or contacts us on: Example@example.com</li>);
                    this.setState({levelass: 0});
                    console.log('Assistence has no match.');
                }
            }
        }
    }
    render(){
        return(
            <div className='assistantbox' >
                <div className='imgwrapper'>
                    <img className='robotfoto' src={assistfoto} alt='no available'/>
                </div>
                <div className='datawrapper'>
                    <ul className='messageslist'>
                        <li className='message'>
                           Hi there, it's your virtual assistant here!<br/> Do you have any requests?
                        </li>
                        {this.state.messagelist.map((element)=>{return element})}
                    </ul>
                    <div className='inputwrapper'>
                    <input className='queryassistant' placeholder='Write here..' type='text' onKeyPress={(e)=>{if(e.key==='Enter')document.getElementsByClassName('btnsendmessage')[0].click();}}/>
                    <button className='btnsendmessage' onClick={(e)=>{e.target.parentElement.children[0].value===''?e.target.parentElement.children[0].focus():this.HandleClick(e)}}>Send</button>
                    </div>
                </div>
            </div>
        );
    }
    componentDidUpdate(props){
        console.log('Assistance level:',this.state.levelass);
    }
}
export default Assistant;