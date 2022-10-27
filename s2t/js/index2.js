function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      destination: document.getElementById("destination").value,
      date:document.getElementById("date").value
    };
  
    const serviceID = "service_a9yte6u";    //email template, service ID
    const templateID = "template_pfncuer";  //email template, template ID
  
      emailjs.send(serviceID, templateID, params) //parameters
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("destination").value = "";
          document.getElementById("date").value;
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }
  