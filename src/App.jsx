import { useState } from 'react'
import InputBox from './components/InputBox';
import  useUnitConversion  from './hooks/useUnitConversion';
import './App.css'

function App() {

   const [selectUnit, setselectUnit] = useState("meter");
   const [fromUnit, setFromUnit] = useState("meter");
   const [toUnit, setTo] = useState("centimeter");
   const [amount, setamount] = useState(0);
   const [firstAmount, setfirstAmount] = useState(0);
   const [secondAmount, setsecondAmount] = useState(0);
   const [result, setResult] = useState(null);

   // to show previous result
   const [history, setHistory] = useState([]);


   
   const convertedAmount = useUnitConversion(amount,fromUnit,toUnit);

   function swapValue(){
     setFromUnit(toUnit);
     setTo(fromUnit);
     
     setamount(secondAmount || result);
     setsecondAmount(amount);
     setResult(amount);
     

    }
    
    
    
    const convert = (e)=>{
      e.preventDefault();
      
      //  if(!convertedAmount) return;
      setResult(convertedAmount);
      setsecondAmount(convertedAmount)
      console.log(result);

      if(convertedAmount !== null){
           setHistory((prevHis) => [{
              from: amount,
              fromUnit,
              to: convertedAmount,
              toUnit,
              timeStamp: new Date().toLocaleDateString()

          },
          ...prevHis
          ])

      }

      console.log(history);
      
      
      
      
   }
    
   
  return (
    <>
      <div className="container d-flex gap-5">
        
        <div className="unit_convertor_container ">
            <form action="" onSubmit={convert}>
              <div className="unit_convertor_form-box p-3 px-4 rounded shadow bg-white">

                {/* Title  */}
                <div className="title text-center pt-2 mb-3 border-bottom">
                  <h3 className='fw-bold  text-danger'>Unit Convertor Web App</h3>
                </div>
                {
                  !result ?'': (
                    <div className="result_box py-2">
                  <h4>Result is: <span className='text-success'>{result} {toUnit}</span></h4>
                    </div>
                  )
                }
                

                {/* From unit field  */}
                < InputBox 
                  label = "From"
                  amount={amount}
                  fromUnit={fromUnit}
                  selectUnit={fromUnit}
                  firstAmount={amount}
                  onChangeUnit_Option={(unit) => setFromUnit(unit)}
                  onChangeUnit={(val) => setamount(val)}

                />

                {/* Swap unit field  */}
                <div className="swap_field mt-3">
                  <button onClick={swapValue} type="button" className='btn btn-warning'>Swap </button>
                </div>

                {/* To unit field  */}
                < InputBox 
                  label = "To"
                  toUnit={toUnit}
                  selectUnit={toUnit}
                  amount = {secondAmount}
                  onChangeUnit={(val) => setsecondAmount(val)}
                  onChangeUnit_Option={(unit) => setTo(unit)}

                />


                {/* Convert Button  */}
                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-success">Convert {fromUnit} to {toUnit} </button>
                </div>
                
              </div>

            </form>
        </div>

        { history.length > 0 && (
        <div className="histor_box p-3 bg-white rounded">
            <div className="histor_title py-2 border-bottom">
              <h3 className="text-warning">History</h3>
            </div>

            <ol>
              {
                
                
                history.map((item,index) =>{
                  return (
                  <li key={index}>
                    {item.from} {item.fromUnit} = {item.to} {item.toUnit} ({item.timeStamp})
                    </li>
                  ) 
                })
              }
            </ol>
        </div>
        )}
      </div>
    </>
  )
}

export default App
