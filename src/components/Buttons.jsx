import React,{ useState,useContext,useEffect } from 'react'
import { QContext } from './Context';
import '../App.css'


const buttons=[
{
  value:'AC',
  class:'ac max'
},
{
    value:'/',
    class:'button'
},
{
    value:'X',
    class:'button'
},
{
    value:'7',
    class:'button'
},
{
    value:'8',
    class:'button'
},
{
    value:'9',
    class:'button'
},
{
    value:'-',
    class:'button'
},
{
    value:'4',
    class:'button'
},
{
    value:'5',
    class:'button'
},
{
    value:'6',
    class:'button'
},
{
    value:'+',
    class:'button'
},
{
    value:'1',
    class:'button'
},
{
    value:'2',
    class:'button'
},
{
    value:'3',
    class:'button'
},
{
    value:'=',
    class:'button max'
},
{
    value:'0',
    class:'ac 0'
},
{
    value:'.',
    class:'slash ac dot'
},

]





const Buttons=()=>{

    const {count,setCount,secondCount,setSecondCount}=useContext(QContext);

    useEffect(() => {
        document.addEventListener("keydown", handle);


        return () => {
            document.removeEventListener('keydown', handle);
          };
    },[count])
      const handle=(e)=>{
        calculations(e.key); 
      }

 const calculations=(val)=>{
   
   
   
    switch(true){
        case (val=='1'||val=='2'||val=='3'||val=='4'||val=='5'||val=='6'||val=='7'||val=='8'||val=='9'||val=='0'):
            if(count=='0'){
                setCount(val);
               
                setSecondCount(val);
            }
            else{
                setCount(count.concat(val));
                if(secondCount.charAt(secondCount.length-1)=='*'||secondCount.charAt(secondCount.length-1)=='/'||secondCount.charAt(secondCount.length-1)=='+'||secondCount.charAt(secondCount.length-1)=='-'){
                    setSecondCount(val);
    
                }else{
                       setSecondCount(secondCount.concat(val));
                }
             
            }
            break;
            case (val=='X'||val=='*'):
                if(count.charAt(count.length-1)=='*'){
       

                }
               else{
                 setCount(count.concat('*'));
                 setSecondCount('*');
                }
                if(count.charAt(count.length-1)=='-'&&count.charAt(count.length-2)=='-'||count.charAt(count.length-1)=='-'&&count.charAt(count.length-2)=='/'||count.charAt(count.length-1)=='-'&&count.charAt(count.length-2)=='+'||count.charAt(count.length-1)=='-'&&count.charAt(count.length-2)=='*'){
                 let temp=count.slice(0, -2);
                 
                 setCount(temp.concat('*'));
                 setSecondCount('*');
                }
                if(count.charAt(count.length-1)=='/' ||count.charAt(count.length-1)=='+'||count.charAt(count.length-1)=='-'||count.charAt(count.length-1)=='*'){
                 if(count.charAt(count.length-2)=='-'||count.charAt(count.length-2)=='/'||count.charAt(count.length-2)=='+'||count.charAt(count.length-2)=='*'){
                     let temp=count.slice(0, -2);
                
                     setCount(temp.concat('*'));
                     setSecondCount('*');
                 }
                 else{
                 let temp=count.slice(0, -1);
                 setCount(temp.concat('*'));
                 setSecondCount('*');
                 }
                }
                break;
                case (val=='+'||val=='/'):
                    if(count.charAt(count.length-1)=='/'||count.charAt(count.length-1)=='+'){
          
                    }
                    else{
                        setCount(count.concat(val));
                        setSecondCount(val);
                       }
                    
                       if(count.charAt(count.length-1)=='*'||count.charAt(count.length-1)=='-'||count.charAt(count.length-1)=='+'||count.charAt(count.length-1)=='/'){
                        if(count.charAt(count.length-2)=='-'||count.charAt(count.length-2)=='/'||count.charAt(count.length-2)=='+'||count.charAt(count.length-2)=='*'){
                            let temp=count.slice(0, -2);
                       
                            setCount(temp.concat(val));
                            setSecondCount(val);
                        }
                        else{
                        let temp=count.slice(0, -1);
                        setCount(temp.concat(val));
                        setSecondCount(val);
                        }
                       }
                       break ;
                       case (val=='-'):
                        if(count.charAt(count.length-2)=='/'||count.charAt(count.length-2)=='+'||count.charAt(count.length-1)=='-'&&count.charAt(count.length-2)=='-'||count.charAt(count.length-2)=='*')
                        {
                              
                        }
                        else{
                          setCount(count.concat(val));
                          setSecondCount(val);
                        }
                        break;
                        case (val=='.'):
                            let test=secondCount;
                            let result = test.includes(".");
                            if(result==false){
                            if(count.charAt(count.length-1)=='*'||count.charAt(count.length-1)=='-'||count.charAt(count.length-1)=='+'||count.charAt(count.length-1)=='/'){
                                setCount(count.concat('0.'));
                                setSecondCount(count.concat('0.'));
                            }
                            else{
                                setCount(count.concat(val));
                            setSecondCount(secondCount.concat(val));
                            }
                        }
                        break;
                        case (val==='AC'|| val=='Backspace'):
                            setCount('0');
                            setSecondCount('0');
                            break;
                            case (val=='='||val=='Enter'):
                                let  equalEval=Math.round(1000000000000 *eval(count.replace(/--/g, "+")))/1000000000000;
                                let   stringVal=count.concat("=",String(equalEval)); 
                                      setCount(String(equalEval))
                                      setSecondCount(String(equalEval));
                                      break;
                                      default:
                                        console.log('wrong option')

      }
             
 }
    return(
    <div className="columns">
      
   {buttons.map((val,key)=>(
<button key={key} type="button" onClick={()=>calculations(val.value)} value={val.value} className={val.class}>{val.value}</button>

   ))}

    </div>
    );
}

export default Buttons;