
import React, { useEffect } from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import "./App.css"
var guess;
var check ;
var a ;



const App = () => {
  const inputref = useRef(['A' , 'B' ,'C' ,'D' ,'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' ,'M' ,'N' ,'O' ,'P' ,'Q' ,'R' ,'S' ,'T' ,'U' ,'V' ,'W' ,'X' ,'Y' ,'Z'])
  const buttonref= useRef([])
  const[words , setWords]=useState(['BATMAN','SUPERMAN','SHAKTIMAAN','THOR','SPIDERMAN','HULK' ,'FLASH' , 'KRISH' , 'CAPTIANAMERICA' , 'WONDERWOMAN', 'AQUAMAN','BLACKPANTHER'  ])
  const[hint ,setHint]=useState(['I am from Gotham' ,'I wear Underwear outside my trouser' ,'Andhera kayam rahe' ,'Where is my Hammer?','I am not feeling good , Mr. stark' ,'Smash','Faster than light' , 'Aila complan' ,'How old are you?' ,'lasso of truth' , 'King of Atlanta' ,'Wakanda Forever'])
  const[realword , setRealword] = useState([])
  const[arrword , setArrword] = useState([])
  const[flag , setFlag]=useState(0)
  const[count , setCount]=useState(0)
  const[imgarr , setImgarr]=useState(["./images/1.png" , "./images/2.png" , "./images/3.png" ,"./images/4.png" , "./images/5.png"  , "./images/6.png" , "./images/7.png" ])
 
  // const start_fun=()=>{
  //   a = Math.floor(Math.random()*11);
  //   guess = words[a].split("")
  //   setArrword(guess)
  //   setFlag(1)  
  // }
  useEffect(()=>{
    a = Math.floor(Math.random()*11);
    guess = words[a].split("")
    setArrword(guess)
    setFlag(1)  
  },[])

  const guess_fun=(e ,iref)=>{
    check = false;
    var a = e.target.innerText
    arrword.map((d , i)=>{
      if(d === a){

        check = true
        realword[i] = a;
        setRealword([...realword])
        buttonref.current[iref].style.color="white"
        buttonref.current[iref].style.backgroundColor="green"
        buttonref.current[iref].setAttribute('disabled' , true)
      }      
    })
    console.log(realword)
    if(check === false){
      buttonref.current[iref].style.color="white"
      buttonref.current[iref].style.backgroundColor="red"
      buttonref.current[iref].setAttribute('disabled' , true)
     setCount(count+1)
    } 

    if(realword.length === guess.length){
      // alert('length')
      setFlag(3)
    }
   
  }

  const restart_fun=()=>{
    // buttonref.current.map((item , i)=>{ 
    //   buttonref.current[i].style.color="black"
    //   buttonref.current[i].style.backgroundColor="white"
    //   buttonref.current[i].setAttribute('disabled' , false)
    // })
    // setRealword([])
    // setCount(0)
    // a = Math.floor(Math.random()*6);
    // guess = words[a].split("")
    // setArrword(guess)
    // setFlag(1)
    location.reload();
  }

  useEffect(()=>{
      
     if(count===7){
      setFlag(2)
     }
  }, [count])

  // useEffect(()=>{
  //   console.log("check")
  // })

  return (
    <div className="App">
      <div id="heading_div_id">HANGMAN</div>
      {/* {flag===0?<button id="start_btn" onClick={start_fun}>START YOUR GAME</button>:""} */}
      <div id="div_lives_id">{flag===1?"Lives " + (7 - count):""}</div>
      <div id="img_div_id"><div>{flag===1?<img src ={imgarr[count]} alt="" />:""}</div>
      <div id="title">{flag===1?hint.map((d , i)=>{
        if(a ===i) 
        return (
          <div id="title1" key ={d}>HINT : {d}</div>
        )

      }):""
        
        }</div>
      </div>
      <div>
      {flag===1?arrword.map((d , i)=>{
        return (
          <input key={i} type="text"  className="input_box" value={realword[i]===undefined?"#":realword[i]} readOnly/>
        )
      }):""}
      </div>
      <div>
        {flag===1?inputref.current.map((d , i)=>{

        return (
          <button  key={i} className="guess_btn"  ref={el => buttonref.current[i] = el} id={i} onClick={(event)=>guess_fun(event , i)}>{d}</button>
        )
        }):""}
      </div>
     
      <div>{flag===2?<img src="https://media.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif" />:""}</div>
      <div>{flag===3?<img src="https://media.giphy.com/media/xT0GqssRweIhlz209i/giphy.gif" />:""}</div>
      <div>{flag===1 || flag===2 || flag===3?<button onClick={restart_fun} id="start_again_btn">RESTART YOUR GAME</button>:""}</div>
    </div>
  )
}

export default App
