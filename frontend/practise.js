function names(){
    console.log('surya')
}
names();

function Home(){
    this.city='hyderabad',
    this.rooms=3,
    this.balcony=1,
    this.kitchen=1


}

let room=new Home();
console.log(room)

function Toffee(){

this.flavour='vanilla'
this.prise=10,
this.expiry='11-12-2025'

}
let t1=new Toffee();
console.log(t1)



function construct(flavour,prise,expiry){
    this.flavour=flavour
    this.prise=prise,
    this.expiry=expiry
}

let param=new construct('vennela',25,'12-10-2025');
let param1=new construct('straberry',20,'12-11-2025');
let param2=new construct('chacolate',50,'12-12-2025');


function Company(){
    this.hirings=1500,
    this.salary='3.5 LPA'
    
}

let detail=new Company();
console.log(detail)



function Toffee(name){
    this.name=name
    this.prise=15


}
let t3=new Toffee('alphanlibe');
let t2=new Toffee('kitkat');


function Honda(){
    this.product='elevate'
    this.price='11,91,000'
    this.color='black'

}

let details=new Honda()
console.log(details)


function Toffee2(name){
    this.name=name

}

let names1=new Toffee('surya');
let names2=new Toffee('hasini');
let names3=new Toffee('bhavya');
let names4=new Toffee('sowji');



function Bikes(){
    this.model='pulsor'
    this.color='black'
    this.prise='2,00,000'
}


let bikes=new Bikes();
console.log(bikes)


function Bisqutes(product){
    this.product=product
}

Bisqutes.prototype.price=15

let pack1=new Bisqutes('unibic');

let pack2=new Bisqutes('marigold');

let pack3=new Bisqutes('goodday');

let pack4=new Bisqutes('tummy');






function Human(name,age){
    this.name='vijay'
    this.age=45

}

Human.prototype.printmyname=function(){
    console.log(this.name)
}


let human=new Human('surya',21)
let human1=new Human('mani',25)

//  set time out function

function names(){
    setTimeout(() => {
        console.log('hello')
    }, 2000);
}
names()

// set interval function

function interval(){
    setInterval(() => {
        console.log('may i help you ')
    }, 2000);
}

interval();



function settime(){
    console.log('hello')
    setTimeout(() => {
        console.log('hello iam surya')
    }, 1000);

    console.log('manikantakumar')
    console.log('surya')
}

settime();




fetch('https://randomuser.me/api')
.then(raw=>console.log(raw.json))
.then(readable=>console.log(readable))


axios.get('https://randomuser.me/api')
.then(result=>console.log(result.data))


fetch('https://randomuser.me/api')
.then(raw=>console.log(raw.json))
.then(readable=>console.log(readable))

const letter1=new Promise(function(resolve,reject){
    fetch('https://randomuser.me/api')
    .then(raw=> raw .json())
    .then(result=>{
        if(result.results[0].gender === 'male')resolve();
        else reject();
    })


})

letter1.then(function(){
    console.log('greencolor')
})

.catch(function(){
    console.log('redcolor')
})


const letter=new Promise(function(resolve,reject){
    fetch('https://randomuser.me/api')
    .then(raw=> raw .json())
    .then(result=>{
        if(result.results[0].gender === 'male')resolve();
        else reject();
    })

})

letter.then(function(){
    console.log('green color')
})

.catch(function(){
    console.log('red color')
})

