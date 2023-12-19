import pin from '../assets/plurk.png';
import telegram from '../assets/telegram.png';
import bebo from '../assets/bebo.png';
import kickstart from '../assets/kick.png';
import puzzle from '../assets/puzzle.png';
import { BsFillTrashFill, BsToggles, BsFillPencilFill } from "react-icons/bs";

export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: "Sant Outstanding FTP: bprow@bnc.cc",
                description: 'FTP: bprow@bnc.cc',
                image: pin,
                price: 2000000,
                Settings: <BsToggles/>,
                Edit: <BsFillPencilFill />,
                category: <BsFillTrashFill/>,
                quantity: 24,
                inventoryStatus: 'Approved',
                rating: 5,
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Telegram Application FTP: bprow@bnc.cc ',
                description: 'Product Description',
                image: telegram,
                price: 4600000,
                Settings: <BsToggles/>,
                Edit: <BsFillPencilFill />,
                category: <BsFillTrashFill/>,
                quantity: 61,
                inventoryStatus: 'Inprogress',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Cisco  Management FTP: bprow@bnc.cc',
                description: 'Product Description',
                image: puzzle,
                price: 79,
                Settings: <BsToggles/>,
                Edit: <BsFillPencilFill />,
                category: <BsFillTrashFill/>,
                quantity: 2,
                inventoryStatus: 'Success',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'HR Management FTP: bprow@bnc.cc',
                description: 'Product Description',
                image: bebo,
                price: 2000000,
                Settings: <BsToggles/>,
                Edit: <BsFillPencilFill />,
                category: <BsFillTrashFill/>,
                quantity: 25,
                inventoryStatus: 'Rejected',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'KTR Mobile Application FTP: bprow@bnc.cc',
                description: 'Product Description',
                image: kickstart,
                price: 15,
                Settings: <BsToggles/>,
                Edit: <BsFillPencilFill />,
                category: <BsFillTrashFill/>,
                quantity: 73,
                inventoryStatus: 'Approved',
                rating: 4
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

