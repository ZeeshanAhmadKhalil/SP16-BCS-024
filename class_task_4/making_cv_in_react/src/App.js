import React,{Component} from 'react';
import Home from './components/home' 
import About from './components/about' 
import Me from './images/me.png'
import './App.css';

class App extends Component{
  state={
    my_home:{
      main_info:{
        name:"Zeeshan Ahmad Khalil",
        address:"Mod shahfasil abad, near military farm attock",
        permanent_address:"Mod shahfasil abad, near military farm attock",
        contact_no:"0300-5290620"
      },
      personal_info:{
        father_name:"Zulfiqar Ahmad",
        DOB:"14-01-1997",
        relegion:"Islam",
        nationality:"Pakistani",
        domicile:"punjab",
        cnic:"37101-2620783-1",
        sex:"male",
        status:"single"
      },
      languages:["English","Urdu"]
    },
    my_about:{
      qualification:["717/1080","880/1100","3.97/4.00"],
      tools:["Android Studio","Visual Studio Code","Visual Studio","Truffle Suit"],
      projects:["Image Editor Mobile App","Space Tunnel Mobile Game","E-Commerce Website","Blockchain Electronic Wallet"]
    },
    show_home:true
  }
  set_show_home=()=>{
    this.setState({show_home:true})
  }
  unset_show_home=()=>{
    this.setState({show_home:false})
    // console.log("unset called")
  }
  render(){
    var main_content=null
    if(this.state.show_home){
      main_content=(
        <div>
          <Home
          name={this.state.my_home.main_info.name}
          address={this.state.my_home.main_info.address}
          permanent_address={this.state.my_home.main_info.permanent_address}
          contact_no={this.state.my_home.main_info.contact_no}
          father_name={this.state.my_home.personal_info.father_name}
          DOB={this.state.my_home.personal_info.DOB}
          relegion={this.state.my_home.personal_info.relegion}
          domicile={this.state.my_home.personal_info.domicile}
          cnic={this.state.my_home.personal_info.cnic}
          nationality={this.state.my_home.personal_info.nationality}
          sex={this.state.my_home.personal_info.sex}
          status={this.state.my_home.personal_info.status}
          mother_tongue={this.state.my_home.languages[1]}
          native_tongue={this.state.my_home.languages[0]}
          >
            
          </Home>
        </div>
      )
    }
    else{
      main_content=(
        <div>
          <About
          matric={this.state.my_about.qualification[0]}
          fsc={this.state.my_about.qualification[1]}
          bs={this.state.my_about.qualification[2]}
          java={this.state.my_about.tools[0]}
          web={this.state.my_about.tools[1]}
          window={this.state.my_about.tools[2]}
          dapp={this.state.my_about.tools[3]}
          project1={this.state.my_about.projects[0]}
          project2={this.state.my_about.projects[1]}
          project3={this.state.my_about.projects[2]}
          project4={this.state.my_about.projects[3]}
          >
            
          </About>
        </div>
      )
    }
    return(
      <div id="main_container">
        <div id="buttons">
        <button onClick={this.set_show_home}>About Me</button>
        <button onClick={this.unset_show_home}>Quali. & Projects</button>
        </div>
        <img id="image" src={Me} alt="a person"></img>
        <h1 id="main_name">{this.state.my_home.main_info.name}</h1>
        {main_content}
      </div>
    )
  }
}

export default App
