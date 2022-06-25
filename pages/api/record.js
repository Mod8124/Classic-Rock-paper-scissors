// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "./connection/DBconnection"
import Record from "./model/record"

export default async function handler(req, res) {


  const {method} = req
  const {name,point} = req.body;
  
  await connect()

  switch(method) {
      case "POST" :  

          try {
              const records = await Record.find()
             
              for(let i = 0; i<records.length; i++) {
                if(records[i].point<point) {
                   const data = await Record.findByIdAndUpdate(records[i]._id,{name,point})
                   i=records.length-1
                }
              }
  
              res.status(200).json({success:'success'})

          } catch(err) {

            console.log(err)
            res.status(400).json({success:'failed'})
          }

      break;
      default: 
            try {
                const data = await Record.find()

                if(!data) {
                  throw new Error('sorry')
                }

                res.status(200).json(data)

            } catch(err) {
              res.status(400).json(err.message)
            }
  }

}