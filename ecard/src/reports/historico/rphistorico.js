

import { text } from '@fortawesome/fontawesome-svg-core';
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'


function historicoPDF(pedidos){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const dados = pedidos.map((pedido) => {
        return [
            {text: pedido.id_pedido, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: pedido.dt_pedido, fontSize: 9},
            {text: new Intl.NumberFormat('pt-BR',
                {style: 'currency', currency: "BRL"}).format(pedido.total), fontSize: 9}
        ]
    })


    const reportTitle = [
        {
            text: 'Histórico de Pedidos',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0,45]

        }
    ];

    const details = [
        {
            table:{
                headerRows: 1,
                widths: [ '*' , '*', '*'],
                body: [
                    [
                        {text: 'Pedido', style: 'tableHeader', fontSize: 10},
                        {text: 'Data', style: 'tableHeader', fontSize: 10},
                        {text: 'Total', style: 'tableHeader', fontSize: 10}
                    
                    ],
                    ...dados


                ]

            },
            layout: 'headerLineOnly'
        }
    ];

    function Rodape(currentPage, pageCount){
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin:[0, 10,20,0]

            }
        ]

    };

    const docDefinitios = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitios).download();


}

export default historicoPDF;