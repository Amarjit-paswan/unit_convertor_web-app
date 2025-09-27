import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        
        <div className="unit_convertor_container ">
            <form action="">
              <div className="unit_convertor_form-box p-3 px-4 rounded shadow bg-white">

                {/* Title  */}
                <div className="title text-center pt-2 mb-3 border-bottom">
                  <h3 className='fw-bold  text-danger'>Unit Convertor Web App</h3>
                </div>

                {/* From unit field  */}
                <div className="from_field text-start d-flex  gap-2">
                  <div className="from_input_field ">
                      <label htmlFor="" className="form-label fw-bold">From</label>
                      <input type="number" name="" id="" className="form-control" placeholder='Enter Value' />
                  </div>

                  <div className="form_select_field">
                    <label htmlFor="" className='form-label fw-bold'>Select Unit</label>
                    <select name="" id="" className="form-select ">
                      <option value="">Keys</option>
                    </select>
                  </div>
                </div>

                {/* Swap unit field  */}
                <div className="swap_field mt-3">
                  <button type="button" className='btn btn-warning'>Swap </button>
                </div>

                {/* To unit field  */}
                <div className="to_field text-start d-flex gap-2">
                  <div className="to_input_field">
                    <label htmlFor="" className="form-label fw-bold">To</label>
                    <input type="number" name="" id="" className="form-control" placeholder='Value'/>
                  </div>

                  <div className="to_select_field">
                    <label htmlFor="" className="form-label fw-bold">Select Unit</label>
                    <select name="" id="" className="form-select">
                      <option value="">Key 2</option>
                    </select>
                  </div>
                </div>

                {/* Convert Button  */}
                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-success">Convert </button>
                </div>
                
              </div>

            </form>
        </div>

      </div>
    </>
  )
}

export default App
