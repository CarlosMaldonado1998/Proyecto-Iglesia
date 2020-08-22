import React from 'react';
import PageHeader from "./PageHeader";
import { Card, Form , Input,   Button  } from 'antd';

import '../styles/inicio.css';
import Meta from "antd/es/card/Meta";


const Inicio = () => {


    return (
        <>
        <PageHeader />,

        {/*//Bienvenidos*/}


        <div className="site-card-border-less-wrapper">
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Bienvenidos</p>

                {/*//Agregar Texto*/}
                <p>   </p>
                <Button type="primary" shape="round"  >
                    Registrar Asiento
                </Button>
                <Button type="primary" shape="round"  >
                    Ingresar Foro
                </Button>

            </Card>
        </div>

        {/*//sobre Nosotros*/}

        <div>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>


        </div>

        {/*//Testimonios*/}

        <div>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>


        </div>


        {/*// Equipo*/}

        <div>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>


        </div>

        {/*//Contactanos*/}


        {/*//Ver mapa*/}
        <Form name="nest-messages"  >

            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'text']} label="Asunto" rules={[{ type: 'text' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Como podemos ayudarle?">
                <Input.TextArea />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Enviar
                </Button>
            </Form.Item>
        </Form>
        </>
    )



}

export default Inicio;