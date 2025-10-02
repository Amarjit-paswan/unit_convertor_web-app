import React from "react";
import { useState, useEffect } from "react";

export default function useUnitConversion(amount,fromunit,tounit){
    const [convertedData, setConvertedData] = useState(null);
    const api_key = 'rSP7DY9LSGuiBsbzLCQ6Ig==0sxnxR2GzxemsM82';
    
    useEffect(()=>{
        if(!amount || !tounit) return;

        const fetchData = async () => {
            try{
                const res = await fetch(`https://api.api-ninjas.com/v1/unitconversion?amount=${amount}&unit=${fromunit}`,{
                        headers:{"X-Api-Key" : api_key}
                    }
                );

                const json = await res.json();
              
                
                setConvertedData(json.conversions[tounit]);
            }catch(err){
                console.error(err);
                
            }
        }
        
        fetchData()
        
    },[amount,tounit])

    return convertedData;
}
