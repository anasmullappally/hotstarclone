let cardContainers = document.querySelectorAll('.card-container')

let preBtns = document.querySelectorAll('.preb')

let nxtBtns = document.querySelectorAll('.nexb')

cardContainers.forEach((item, i) =>{

    let Cdi = item.getBoundingClientRect();

    let Cwi = Cdi.width

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += Cwi - 200;
    })

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= Cwi + 200;
    })
}
)