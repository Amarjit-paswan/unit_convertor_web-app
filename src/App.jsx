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

   function swapValue(){
      setFromUnit(toUnit);
      setTo(fromUnit);
   }


 
   let result = null;
   const convertedAmount = useUnitConversion(amount,fromUnit,toUnit);
   const convert = (e)=>{
     e.preventDefault();
     
    //  if(!convertedAmount) return;
      result =convertedAmount;
      
      console.log(result);
      
      
      
   }
    
   
  return (
    <>
      <div className="container">
        
        <div className="unit_convertor_container ">
            <form action="" onSubmit={convert}>
              <div className="unit_convertor_form-box p-3 px-4 rounded shadow bg-white">

                {/* Title  */}
                <div className="title text-center pt-2 mb-3 border-bottom">
                  <h3 className='fw-bold  text-danger'>Unit Convertor Web App</h3>
                </div>
                {
                  result && (
                    <div className="result_box py-2">
                  <h4>Result is: <span className='text-success'>{result} {toUnit}</span></h4>
                    </div>
                  )
                }
                

                {/* From unit field  */}
                < InputBox 
                  label = "From"
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

      </div>
    </>
  )
}

export default App
