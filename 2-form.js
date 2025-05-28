import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e={email:"",message:""},o=document.querySelector(".feedback-form"),r=o.querySelector('[name="email"]'),n=o.querySelector('[name="message"]');o.addEventListener("input",t=>{const{name:a,value:i}=t.target;e[a]=i.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});o.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",r.value="",n.value=""});window.addEventListener("load",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);r.value=a.email,n.value=a.message,e.email=a.email,e.message=a.message}});const s=document.createElement("style");s.textContent=`
  .feedback-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 360px;
  }

  .form-label,
  .text-form {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
  }

  .text-form {
    margin: 0;
    margin-bottom: 8px;
  }

  .form-input {
    height: 40px;
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    transition: border-radius 0.3s ease, border 0.3s ease;
  }

  .form-textarea {
    margin-bottom: 16px;
    fill: none;
    height: auto;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    transition: border-radius 0.3s ease, border 0.3s ease;
  }

  .form-input:hover,
  .form-textarea:hover {
    border: 2px solid black;
  }

  input:focus,
  textarea:focus {
    border: 1px solid #666;
    outline: none;
  }

  .form-btn {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    width: 95px;
    height: 40px;
    background: #4e75ff;
  }

  .form-btn:hover {
    background: #6c8cff;
  }
`;document.head.appendChild(s);
//# sourceMappingURL=2-form.js.map
