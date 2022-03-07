
const Barcode = {
    VendorDetails:{
        name:'Cambridge Central Square Target',
        address:'564 Massachusetts Ave',
        city:'Cambridge',
        state:'MA',
        zip:'02139-4029',
        phone:'617-914-8262'
    },
    RecieptDetails:{
        date:'01/27/2022',
        total:36.61,
        RecieptID:'220273222016721597',
        LineItems:[
            {
                itemcode:'071051660',
                name:"LAY'S",
                price:3.00
            },
            {
                itemcode:'261011519',
                name:'PEPPERIDGE F',
                price:4.29
            },
            {
                itemcode:'288072090',
                name:'FD ICECREAM',
                price:3.99
            }
        ]
    },
    VendorAdtnlDetails:{
        website:'informtarget.com',
        message:"Help make your Target Run better, Take a 2 minute survey about today's trip"
    }
}

const CompressedBarcode = {"VendorDetails":{"name":"Cambridge Central Square Target","address":"564 Massachusetts Ave","city":"Cambridge","state":"MA","zip":"02139-4029","phone":"617-914-8262"},"RecieptDetails":{"date":"01/27/2022","RecieptID":"220273222016721597","total":36.61,"lineItems":[{"itemcode":"071051660","name":"LAY'S","price":3.00},{"itemcode":"261011519","name":"PEPPERIDGE F","price":4.29},{"itemcode":"288072090","name":"FD ICECREAM","price":3.99}]},"VendorAdtnlDetails":{"website":"informtarget.com","message":"Help make your Target Run better, Take a 2 minute survey about today's trip"}}

const MultiCompressedBarcode=[
    {'VendorDetails':{'name':'Cambridge Central Square Target','address':'564 Massachusetts Ave','city':'Cambridge','state':'MA','zip':'02139-4029','phone':'617-914-8262'},'RecieptDetails':{'date':'01/27/2022','RecieptID':'220273222016721597','total':36.61,'lineItems':[{'itemcode':'071051660','name':"LAY'S",'price':3.00},{'itemcode':'261011519','name':'PEPPERIDGE F','price':4.29},{'itemcode':'288072090','name':'FD ICECREAM','price':3.99}]},'VendorAdtnlDetails':{'website':'informtarget.com','message':"Help make your Target Run better, Take a 2 minute survey about today's trip"}}
    ,{VendorDetails:{name:'Cambridge Central Square Subway',address:'566 Massachusetts Ave',city:'Cambridge',state:'MA',zip:'02139-4029',phone:'617-914-5521'},RecieptDetails:{date:'01/12/2022',RecieptID:'102-76868',total:50.61,lineItems:[{itemcode:'071051660',name:"LAY'S",price:3.00},{itemcode:'261011519',name:'PEPPERIDGE F',price:4.29},{itemcode:'288072090',name:'FD ICECREAM',price:3.99}]},VendorAdtnlDetails:{website:'informtarget.com',message:"Help make your Target Run better, Take a 2 minute survey about today's trip"}}
    ,{VendorDetails:{name:'Cambridge Central Square ATM',address:'577 Massachusetts Ave',city:'Cambridge',state:'MA',zip:'02139-4029',phone:'617-914-3333'},RecieptDetails:{date:'01/19/2022',RecieptID:'02-OP-TRN1459',total:100.61,lineItems:[{itemcode:'071051660',name:"LAY'S",price:3.00},{itemcode:'261011519',name:'PEPPERIDGE F',price:4.29},{itemcode:'288072090',name:'FD ICECREAM',price:3.99}]},VendorAdtnlDetails:{website:'informtarget.com',message:"Help make your Target Run better, Take a 2 minute survey about today's trip"}}
    ,{VendorDetails:{name:'Cambridge Central Square Nero Cafe',address:'512 Massachusetts Ave',city:'Cambridge',state:'MA',zip:'02139-4029',phone:'617-914-8282'},RecieptDetails:{date:'01/28/2022',RecieptID:'22027322201677721',total:10.61,lineItems:[{itemcode:'071051660',name:"LAY'S",price:3.00},{itemcode:'261011519',name:'PEPPERIDGE F',price:4.29},{itemcode:'288072090',name:'FD ICECREAM',price:3.99}]},VendorAdtnlDetails:{website:'informtarget.com',message:"Help make your Target Run better, Take a 2 minute survey about today's trip"}}
]

const TestUser = {
    email:'test@gmail.com',
    password:'pw01'
}

const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


export{
    Barcode,
    CompressedBarcode,
    MultiCompressedBarcode,
    TestUser,
    dollarFormatter,
}