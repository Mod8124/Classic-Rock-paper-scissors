import { useEffect, useState } from "react"

const  UseRecords = () => {
    const [records, setRecords] = useState([])

    const loadRecords = async () => {
        try {
            const response = await fetch('/api/record')
            const data = await response.json()
    
            if(data) setRecords(data)
    
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(()=> {
        loadRecords()
    },[])

    return {
        records,
    }
}

export default UseRecords;