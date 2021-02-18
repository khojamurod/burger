
const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get SumKcall(){
            return this.kcall * this.amount

        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 600,
        amount: 0,
        get Sum() {            
            return this.price * this.amount
        },
        get SumKcall(){
            return this.kcall * this.amount

        }

    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 600,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get SumKcall(){
            return this.kcall * this.amount

        }
    },

}

const btn = document.querySelectorAll('.main__product-btn ')

for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', function(){
        prapare(this)
    } )


}

function prapare(element){

    let parent = element.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let sym  = element.getAttribute('data-symbol')
    let miqdor = product[parentId].amount
    let price = parent.querySelector('.main__product-price span')

    let sumKcall = parent.querySelector('.main__product-kcall span')

    if( sym == '+' && miqdor < 10){
        miqdor++
        
    }else if(sym == '-' && miqdor > 0){
        miqdor--
        
    }
    num.innerHTML = miqdor
    product[parentId].amount = miqdor

    
    
    sumKcall.innerHTML =  product[parentId].SumKcall
    price.innerHTML = product[parentId].Sum
    
    

}

let lvl = document.querySelector('.header__timer-extra')
let lvlCh = lvl.innerHTML
let x = 0
function qwe(){
    setTimeout(() => {
        lvlCh++
        if(lvlCh <= 49) {
            x = 20
            qwe()
        }else if(lvlCh <= 79){
            x = 40
            qwe()
        }else if(lvlCh <= 100){
            x = 60
            qwe()
        }
    },  x );
    
    lvl.innerHTML = lvlCh 
}

qwe()

const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptWindowOut = document.querySelector('.receipt__window-out')
const pay = document.querySelector('.receipt__window-btn')


addCart.addEventListener('click' , () => {
    

    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '10%'
    }, 100);


    let menu = ' '
    let totalPrice = 0
    let totalKcall = 0
    for(const key in product){
        if(product[key].amount){
            menu+= `${product[key].name}  ${product[key].amount}X \n  `

            totalPrice += product[key].Sum 
            totalKcall += product[key].SumKcall 

        }
    }

    receiptWindowOut.innerHTML = ` ${menu}\n\nTotal Price : ${totalPrice}\nTotal Kcall : ${totalKcall}\n\n`

  
})
                            
pay.addEventListener('click' , ()=> {location.reload()})
                            