import React from 'react';
import {   Button  } from 'antd';
const PageHeader = () => {

    const routes = [
        {
            path: 'index',
            breadcrumbName: 'Inicio ',
        },
        {
            path: 'first',
            breadcrumbName: 'Sobre Nosotros ',
        },
        {
            path: 'second',
            breadcrumbName: 'Testimonios',
        },
        {
            path: '',
            breadcrumbName: 'Equipo',
        },
        {
            path: '',
            breadcrumbName: 'Contactanos',
        },
    ];


    return(

        <PageHeader
            title="Un lugar juntos "
            className="site-page-header"
            breadcrumb={{ routes }}
            extra={[

                <Button key="2"> Log in </Button>,
                <Button key="1" type="primary">
                    Registrarse
                </Button>,

            ]}


        >



        </PageHeader>


    )



}

export default PageHeader;