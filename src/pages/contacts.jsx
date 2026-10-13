import { useState } from "react";
function Contacts()
{
 const [username,setusername]=useState("");
 const [email,setemail]=useState("");
 const [message,setmessage]=useState("");
 const [status,setstatus]=useState(""); 
  function handle(e) {
         e.preventDefault();
         setstatus("🎉 message sent successfully");
         setTimeout(() => {
            setstatus("")
         }, 3000);
                    }
    return(
           
           <form className="form" onSubmit={handle}>
            
                <h1 className="contact1">Let's Talk</h1>
                <p> We'd love to hear from you. Whether it's a suggestion, question, or feedback — send it our way!</p>
                
                {status && <p className="message1">{status}</p>}
                <div  className="address">
                <label htmlFor="text" ></label>
                <input type="text" id="username" placeholder=" 👤  Your Name"
                value={username} 
                onChange={(e)=>setusername(e.target.value)} 
                required/><br />
                <label htmlFor="text"></label>
                <input type="email" id="email" placeholder=" 🖂 Your Email" 
                value={email}
                onChange={(e)=>setemail(e.target.value)} 
                required
                /><br />
                </div>
                <div className="message">
                <label htmlFor="text" id="text"></label>
                <textarea type="text" placeholder="Write your message here...." 
                value={message}
                onChange={(e)=>setmessage(e.target.value)}
                required />
                </div>
                <div className="send-msg">
                 <button type="submit">send message </button>
                 
                </div>
           </form>
    );
}
export default Contacts;