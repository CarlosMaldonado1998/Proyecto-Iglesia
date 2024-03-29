import React from 'react';
import { Card} from "antd";
import '../styles/bill.css';
import Foot from "../components/Foot";
import FormBill from "./FormBill";

const Bill = () => {

    return (
        <>
            <div className="site-card-border-less-wrapper fondo-cuenta" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <h2>Crear cuenta</h2>
                        <p>
                            Ingrese sus datos para crear una cuenta en Foros
                        </p>
                        <FormBill/>
                    </Card>
                </Card>
            </div>
            <Foot/>
        </>
    );

}

export default Bill;