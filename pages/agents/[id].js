import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supbaseClient'
import Link from 'next/link'
import NavBar from '../components/NavBar';


const Details = () => {
    // can use pathname for now but need to figure out how to pass a ref
    let pathname = window.location.pathname
    pathname = pathname.split('/');
    const agentId = pathname[2].toString();
    const [agent, setAgent] = useState({})
    const [emoji, setEmoji] = useState()
    useEffect(()=>{
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('Agents')
                .select()
                .match({ id: agentId })
            return data;
        }
        fetchData().then((data) => {
            console.log(data)
            setAgent(data[0])
            
            for(var i = 0; i < countries_worked_in.length; i++){
                console.log(getFlagEmoji(countries_worked_in[i]))
            }
        }).catch(error=>{
            console.log(error)
        })
    },[])

    function getFlagEmoji(countryCode) {
        const codePoints = countryCode
          .toUpperCase()
          .split('')
          .map(char =>  127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
      }

    return (
        <div className="container">
            <NavBar />                
                
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                    <img  src={ agent.image } className="d-flex justify-content-center rounded-circle"/>
                        <div class="mt-3">
                            <h1>{agent.name}</h1>
                        <p class="text-secondary mb-1">Full Stack Developer</p>
                        <p class="text-muted font-size-sm">{ agent.nationality }</p>
                        {/* <button class="btn btn-primary">Follow</button> */}
                        {/* Should be an email address */}
                        <button class="btn btn-outline-primary">Message</button>
                        </div>
                    </div>
                </div>
            </div>
                        
            <h4 className="d-flex justify-content-center">Athletes I work with</h4>

            <p className="d-flex justify-content-center" >{ agent.athletes }</p>
            <h4 className="d-flex justify-content-center">I work in</h4>                    
            
            {
                agent.countries_worked_in.map((country, i)=>{
                    let emoji = getFlagEmoji(country)
                    return(
                        <h1>{emoji}</h1>
                    )
                })
            }
            
            {/* <p>{ agent.countries_worked_in }</p> */}
        </div>
    )
}

export default Details;