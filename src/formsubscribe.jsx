import React from 'react';
class Formsubscribe extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'',surname:'',email:'',birthday:'',phone:''};
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }
    HandleSubmit(ev){
        console.log('lets handle this');
    }
    render(){
        return(
            <form className='formsubscribe' onSubmit={(e)=>{this.HandleSubmit(e)}}>
                <label style={{fontSize:'21px'}}>Subscribe</label>
                <label className='labelsub'>Name</label>
                <input className='email' type='text' placeholder='Mark'/>
                <label className='labelsub'>Surname</label>
                <input className='email'type='text' placeholder='Lenders'/>
                <label className='labelsub'>Birth</label>
                <input className='email' type='date'/>
                <label className='labelsub'>Phone</label>
                <input className='email'type='text' placeholder='333******'/>
                <input type='submit' className='btnsubmit' value='Subscribe' onClick={(e)=>{e.target.parentElement.submit()}}/>
            </form>
        );
    }
}
export default Formsubscribe;