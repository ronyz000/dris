import {useEffect,useState} from 'react'
import CreditShow from './cardshow'
import React from 'react'
function Creditcard(){
  let [card,setcard]=useState([])
  let [title,settitle]=useState("")
  let box = React.createRef();
  let box2 = React.createRef();
  let box3 = React.createRef();
  let box4 = React.createRef();
  let otpscreen = React.createRef();
  useEffect(() => {
    let first=box.current
       first.focus()
    let otp = otpscreen.current
    let input=box.current
  for(let pin of otp.children) {
    pin.onkeypress = function() {
        if(pin.nextElementSibling) {
            pin.nextElementSibling.focus();
        }
    }
    pin.onpaste = function(){
         if(pin.nextElementSibling) {
            
        }
    }
}
otpscreen.current.addEventListener('keydown', function (event) {
  console.log(event)
    if (event.keyCode == 8) {
       let a=box.current.value.split("")
       let b=box2.current.value.split("")
       let c=box3.current.value.split("")
       let d=box4.current.value.split("")
       if (d.length>0) {
        var newArr4=d.slice(0,-1)
        console.log(newArr4)
        box4.current.value=newArr4.join('')
       }else if(c.length>0){
        box3.current.value.focus()
        var newArr3=c.slice(0,-1)
        box3.current.value=newArr3.join('')

       }else if(b.length>0){
        box2.current.value.focus()
        var newArr2=b.slice(0,-1)
        box2.current.value=newArr2.join('')

       }else if(a.length>0){
        box.current.value.focus()
        var newArr1=a.slice(0,-1)
       box.current.value=newArr1.join('')

       }    
    }
})
otpscreen.current.addEventListener('paste', function (event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  console.log(event.clipboardData)
  console.log(paste)
   let clipbarrdarr=paste.split("")
    console.log(clipbarrdarr)
    if (clipbarrdarr.length<15) {
      alert("number should be 16 digits")
    }
    else{
     box.current.value=clipbarrdarr.slice(0,4).join("")
     box2.current.value=clipbarrdarr.slice(4,8).join("")
      box3.current.value=clipbarrdarr.slice(8,12).join("")
      box4.current.value=clipbarrdarr.slice(12,16).join("")
      box.current.focus()

    }
    
  })

  },[]);
function submit(){
    settitle("Saved Cards")
     let a=box.current.value
       let b=box2.current.value
       let c=box3.current.value
       let d=box4.current.value
       let no=a+b+c+d
       let newarr=card.concat(no)
       console.log(newarr)
       setcard(newarr)

  }
  function deleteone(indextodel){
    let updatedarr=card.filter(function(val,index){
      if (indextodel==index) {
        return false
      }else return true
    })
    setcard(updatedarr)
    alert(`Are you sure you want to delete this card?`)

  }  
  return(
    <div className="container">
    <div className="input">
    <h3>You can Enter the Card Number Below</h3>
    <div class="otp-screen" ref={otpscreen}>
    <input type="text" ref={box} placeholder="XXXX" maxLength="4" minLength="4" class="num" focus="true"/> 
    <input type="text" ref={box2} placeholder="XXXX" maxlength="4" minLength="4"  class="num"/> 
    <input type="text" ref={box3} placeholder="XXXX" maxlength="4" minLength="4"  class="num"/> 
    <input type="text" ref={box4} placeholder="XXXX" maxlength="4" minLength="4" class="num"/> 
    
</div>
<button class="button" onClick={submit}>Add Card</button>
<CreditShow card={card} deleteone={deleteone} title={title}/>

    </div>
    </div>
    )

  }
export default Creditcard