import React from 'react';
class Loginform extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''};
        this.HandleSubmit= this.HandleSubmit.bind(this);
    }
    HandleSubmit(ev){
    this.setState({username:ev.target.children[1].value,password:ev.target.children[2].value});
    }
    render(){
        return(
                <form className='formlogin' onSubmit={(e)=>{this.HandleSubmit(e)}}>
                    <label style={{fontSize:'21px'}}>Login</label>
                    <input className='email' type='email' placeholder='youremail@gmail.com'/>
                    <input className='email'type='password' placeholder='*********'/>
                    <input type='submit' className='btnsubmit' value='Access' onClick={(e)=>{e.target.parentElement.submit()}} />
                </form>
        );
    }
}
export default Loginform;