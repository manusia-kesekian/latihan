// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.content')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
// }


// Version 2

document.getElementById('open').addEventListener('click', () => {
  document.getElementById('modal').classList.add('active')
});


document.getElementById('exit').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('active')
  document.getElementById('overlay').classList.remove('active')
});

document.getElementById('open').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('active')
});


// version 3

// document.getElementsByClassName(.button)[0].addEventListener('click',() =>{

// })
// alert('Hello World')
//             document.write("<h2>Hello World</h2>")
//             var x = 10
//             var katakata = "x = " +x
//             if(x < 100){
//                 document.write("<h2>Masuk pa eko</h2>")
//             }
//             var onClick = () => {
//                 var input = document.getElementById('nama').value 
//                 alert('Input adalah '+input)
//                 }

//             var onclik2 = () => {
//                 var input2 = parseInt(document.getElementById('angka').value)
//                 var input1 = parseInt(document.getElementById('angka2').value)
//                 alert(input1 + input2)
//             }
//             var gethari = () => {
//                 var input = document.getElementById('tebak').value
                
//             }


