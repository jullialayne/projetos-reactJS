import {useState} from 'react';
import Button from '../Button';

const  Card = () =>{
    
    const [valor,setValor] = useState(0);


    function Adicionar(){
        setValor(valor+1)
    }

    function Remover(){
        setValor(valor-1)
    }
    return (
    
    <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <p>{valor}</p>      
            <Button 
            className="btn btn-success" 
            onClick={Adicionar}> + </Button>

            <Button 
            className="btn btn-danger" 
            onClick={Remover}> - </Button>
            
        </div>
      </div>
    )
}

export default Card;