import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supbaseClient'
import Link from 'next/link'
import NavBar from '../components/NavBar';
import styles from '../../styles/Home.module.css'


const Details = () => {
    // can use pathname for now but need to figure out how to pass a ref
    // Key value swap - take in abbreviation output full country name
    let agentObj = {countries_worked_in:[]}
    
    
    const [agent, setAgent] = useState({})
    const [emoji, setEmoji] = useState()
    const [flags, setFlags] = useState([])
    const apiHasResponded = false
    useEffect(()=>{
        let pathname = window.location.pathname
        pathname = pathname.split('/');
        const agentId = pathname[2].toString();
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('Agents')
                .select()
                .match({ id: agentId })
            return data;
        }
        fetchData().then((data) => {
            setAgent(data[0])
            console.log(flags)
            flagFunc()
            
        }).catch(error=>{
            console.log(error)
        })
    },[])

    function getFlagEmoji(countryCode) {
        const codePoints = countryCode
          .toUpperCase()
          .split('')
          .map(char =>  127397 + char.charCodeAt());
        //   setEmoji(String.fromCodePoint(...codePoints))
        return String.fromCodePoint(...codePoints);
      }
    function flagFunc() {
        // Wait until api request has been returned
        // Execute this function
        if(agent.countries_worked_in){
            const flagList = []
            agent.countries_worked_in.map((country)=>{
                var flagEmoji = getFlagEmoji(country)
                flagEmoji = `${flagEmoji}`
                flagList.push(flagEmoji)
                // return(
                //     <h1>{emoji}</h1>
                // )
            })
            
            setFlags(flagList)
        } else {
            setTimeout(flagFunc, 1000);
        }
    }

    return (
        <div className="container">
            <NavBar />                
                
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                    <img  src={ agent.image } className="d-flex justify-content-center rounded-circle"/>
                        <div className="mt-3">
                            <h1>{agent.name}</h1>
                        <p className="text-secondary mb-1">Full Stack Developer</p>
                        <p className="text-muted font-size-sm">{ agent.nationality }</p>
                        {/* <button className="btn btn-primary">Follow</button> */}
                        {/* Should be an email address */}
                        <button className="btn btn-outline-primary">Message</button>
                        </div>
                    </div>
                </div>
            </div>
                        
            <h4 className="d-flex justify-content-center">Athletes I work with</h4>

            <p className="d-flex justify-content-center" >{ agent.athletes }</p>
            <h4 className="d-flex justify-content-center">I work in </h4>                    
            <div styles="font-size:100px">
                {flags}
            </div>
            {/* <p>{ agent.countries_worked_in }</p> */}
        </div>
    )
}

export default Details;