
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import '../styles/TableCom.css';
import { ProductService } from '../services/ProductService';

export default function TableCom() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return <img src={product.image} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    // const ratingBodyTemplate = (product) => {
    //     return <Rating value={product.rating} readOnly cancel={false} />;
    // };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'Approved':
                return 'success';

            case 'Inprogress':
                return 'warning';

            case 'Rejected':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div>
                <span className="text-xl text-900 font-bold">New Arrivals</span>
                <p style={{marginTop:"0.3rem"}}>More than 400+ new members</p>
            </div>
            <div className='btnGrp'>
                <div className='btnM'>Month</div>
                <div className='btnW'>Week</div>
                <div className='btnD'>Day</div>
            </div>
        </div>
    );
    // const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card1">
            <DataTable value={products} header={header} tableStyle={{ minWidth: '60rem', height:"50rem", }}>
                <Column className='col' body={imageBodyTemplate}></Column>
                <Column field="name"></Column>
                <Column field="price" body={priceBodyTemplate}></Column>
                <Column body={statusBodyTemplate}></Column>
                <Column field="Settings" ></Column>
                <Column field="Edit" ></Column>
                <Column field="category" ></Column>
            </DataTable>
        </div>
    );
}
        