import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardImg from "../Images/assets/4x/debit card@4x.png";
import One from "../Images/assets/1x/1.png";
import './Harapan.css'

class Harapan extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            datas : [{nama:"Ivan",pesan:"XXXXX"}]
        }
    }
    componentDidMount(){
        this.getMessage();
    }
    getMessage = async ()=>{
        let response = await fetch("https://nikah-one.vercel.app/api/getmessages",{
            // mode : "no-cors"
            // method :"GET"
        })
            let result = await response.json();
            console.log(result);
        this.setState({
            datas : result.datas
        })
    }
    sendMessage = async ()=>{
        let json = {
            nama : document.getElementById('namaTeman').value,
            pesan : document.getElementById('pesanTeman').value
        }
        console.log(json);
        let response = await fetch("https://nikah-one.vercel.app/api/sendmessages",{
            method:"POST",
            mode :"no-cors",
            headers: {
                'Content-Type': 'application/json'
                },
                body : JSON.stringify(json)
            })
            let result = await response.json()
    }
    render(){
        return(
            <div id="Harapan-container" className="objects">
                <Form.Group className="mb-3" controlId="namaTeman">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control placeholder="Nama"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="pesanTeman">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="info" onClick={this.sendMessage}>Kirim</Button>
                <div id="rekapPesan">
                    {
                        this.state.datas.map(a=>{
                            return(
                                <Card className="cardBadge">
                                <b className="nameBadge">{a.nama}</b>
                                <Card.Body className="bodyBadge">{a.pesan}</Card.Body>
                                </Card>
                            )
                        })
                    }
                   
                </div>
            </div>
        )
    }
}
export default Harapan