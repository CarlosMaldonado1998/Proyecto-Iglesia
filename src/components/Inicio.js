import React from 'react';
import Header from "./Header";
import { Card, Col, Row, Form , Input,  Button } from 'antd';
import '../styles/App.css';
import '../styles/inicio.css';
import Meta from "antd/es/card/Meta";
import Layout from "antd/es/layout";
import Divider from "antd/es/divider";


const Inicio = () => {


    return (
        <>
        <Header />,

        {/*//Bienvenidos*/}


        <div className="site-card-border-less-wrapper  space-align-container" align="center" >
            <Card align="center" bordered={false} style={{ width: 900 }}>
                <p>Bienvenidos</p>

                {/*//Agregar Texto*/}
                <p>  Ahora puedes reservar un asiento para la ceremonia de la Eucaristia de la Iglesia X,
                    desde la comodidad de tu casa  </p>
                <Button type="primary" shape="round"  >
                    Registrar Asiento
                </Button>
                <Button type="primary" shape="round"  >
                    Ingresar Foro
                </Button>

            </Card>
        </div>

        {/*//sobre Nosotros*/}



        <div >

            <div className="site-card-border-less-wrapper " >
                <Card className="colorBase" align="center" bordered={false} >
                    <div className="site-card-wrapper " >
                        <Divider orientation="center">Sobre Nosotros</Divider>
                        <Row gutter={16} align="center">
                            <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                <Card
                                    className="colorBase"
                                    cover={
                                        <img
                                            style={{ width: '80%'}}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"

                                        />
                                    }
                                >
                                    <Meta
                                        title="¿Qué Somos?"
                                        description="La iglesia tiene el objetivo de establecer una iglesia que sea acorde con el corazón de Dios para que los creyentes puedan servirse y proveerse mutuamente en las palabras de Dios y en el amor de Dios, obedecer y adorar a Dios Todopoderoso, Cristo de los últimos días, y convertirse en verdaderos testimonios para Dios."
                                    />
                                </Card>
                            </Col>
                            <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                <Card
                                    className="colorBase"
                                    cover={
                                        <img
                                            style={{ width: '80%' }}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Organización en la Iglesia"
                                        description="Debido a la situacion actual que esta atravesando el mundo entero, la Iglesia de la parroquia ha decido realizar las ceremonías de una manera ordenada respetando el distanciamiento social que han propuesto las autoridades del área de la salud."
                                    />
                                </Card>
                            </Col>
                            <Col xs={32} sm={16} md={8} lg={8} span={8}>
                                <Card
                                    className="colorBase"
                                    cover={
                                        <img
                                            style={{ width: '80%' }}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                >
                                    <Meta
                                        title="¿Por qué?"
                                        description="Nuestra tarea es clarificar lo que nos ha sido revelado por Dios desde los evangelios y que ha dejado en custodia para que lo sigamos enseñando a todas las generaciones hasta el fin de los tiempos. La familia cristiana,    es  la mayor y más perfecta imagen de Dios sobre la tierra."
                                    />
                                </Card>


                            </Col>
                        </Row>
                    </div>


                </Card>
            </div>


        </div>

        {/*//Testimonios*/}

            <div >

                <div className="site-card-border-less-wrapper " >
                    <Card  align="center" bordered={false} >
                        <div className="site-card-wrapper " >
                            <Divider orientation="center">Testimonios</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        cover={
                                            <img
                                                style={{ width: '80%'}}
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"

                                            />
                                        }
                                    >
                                        <Meta
                                            title="Verónica  Andrade  "
                                            description="Soy un mujer de 30 años que ha tenido varios encuentros con Dios de los que me he ido dando cuenta poco a poco a lo largo del tiempo. Dios existe, soy testimonio de vida de su amor, misericordia y providencia por nosotros. "
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        cover={
                                            <img
                                                style={{ width: '80%' }}
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Richard Marntinez"
                                            description="Yo fui sanado de un cáncer en mi garganta, para los médicos yo que daría mudo y gracias a Dios, cumplo 18 años el próximo 16 de diciembre y hablo perfectamente bien, para la gloria y honra del Señor"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8} span={8}>
                                    <Card
                                        cover={
                                            <img
                                                style={{ width: '80%' }}
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Evaluna  Fernandez "
                                            description="Cuando conocí de Jesús supe que todo me es permitido, pero que no todo me conviene”. Comprendí que Dios quiere que disfrutemos la vida, pero que los excesos solo nos llevan al hastío y que nunca encontraremos la satisfacción total en esta tierra sin El en nuestras vidas."
                                        />
                                    </Card>


                                </Col>
                            </Row>
                        </div>


                    </Card>
                </div>


            </div>

        {/*// Equipo*/}

            <div >

                <div className="site-card-border-less-wrapper " >
                    <Card className="colorBase" align="center" bordered={false} >
                        <div className="site-card-wrapper " >
                            <Divider orientation="center">Equipo</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '80%'}}
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"

                                            />
                                        }
                                    >
                                        <Meta
                                            title="Hermana Josefina "
                                            description="Monja"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '80%' }}
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Mons. Danilo Echeverría"
                                            description="Obispo"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8} span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '80%' }}
                                                alt="example"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Mons. David Israel de la Torre"
                                            description="Arzobispo "
                                        />
                                    </Card>


                                </Col>
                            </Row>
                        </div>


                    </Card>
                </div>


            </div>

                {/*//Contactanos*/}

            <div >

                <div className="site-card-border-less-wrapper " >
                    <Card className="colorBaseA" align="center" bordered={false} >
                        <div className="site-card-wrapper " >
                            <Divider orientation="center">Contáctanos</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={32} sm={32} md={16} lg={16}  span={8}>

                                    {/*//Ver mapa*/}


                                </Col>
                                <Col xs={32} sm={32} md={16} lg={16}  span={8}>

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
                                </Col>

                            </Row>
                        </div>


                    </Card>
                </div>


            </div>



        </>
    )



}

export default Inicio;