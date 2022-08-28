$(document).ready(readyNow);

function readyNow() {
    const boxes = document.querySelectorAll('.box');

    console.log('test');

    // $(document).on('scroll',checkBoxes)

    $(document).on('scroll',()=>{

        const triggerBottom = window.innerHeight / 5*4;
        console.log(triggerBottom);

        boxes.forEach(box =>{
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('show')
            } else {
                box.classList.remove('show');
            }

        })
        
    });


}

// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5*4;
//          console.log(triggerBottom);

//          const boxes = $('.container').children()

//          boxes.each((box)=>{
//             const boxTop = box.getBoundingClientRect().top;

//             if (boxTop < triggerBottom) {
//                 box.classList.add('show')
//             } else {
//                 box.classList.remove('show');
//             }

//          })
// }