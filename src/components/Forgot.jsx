import { useState } from "react";
import { Link } from "react-router-dom";
import Forms from './Forms'
import {AiOutlineCloseCircle} from "react-icons/ai";

const Forgot = () => {

  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Forms.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true
      }
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors
      })

      isValid = false
    }
    return isValid;
  }

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert('Reset password link is sent to ' + email);
      setValidate({});
      setEmail('');
    }
  }

  return (
    <div className="">
      <div className="">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
      </div>

      <div className=" flex w-[100] h-[100vh] pt-[145px] pr-[415px] pb-[145px] pl-[414px] justify-center items-center bg-[#0F1F37]">

        <div className=" w-[420px] h-[360px] shrink-0 rounded-xl border border-solid border-gray-500 bg-[#414a5b] shadow-t-[0px] shadow-r-[8px] shadow-b-[32px] shadow-l-[0px] shadow-[#1f2687]">
        <div className="flex flex-row mt-[30px] ">
        <p className="flex w-[162px] justify-center shrink-0 text-[#FFF] text-[20px] Poppins font-bold ml-[30px]">Forgot Password</p>
        <Link className="text-link" to="/login" ><div className=" w-[40px] shrink-0 text-[#FFF] text-center text-4xl self-end ml-[160px] "><AiOutlineCloseCircle/></div></Link>

        </div>  
          <div className="auth-form-container text-start">
            <form className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
              <div className="email mb-3">
                <input type="email"
                  className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''} flex mt-[17px] pl-[10px] mx-auto w-[350px] h-[60px] bg-[#414a5b] rounded border-2 border-gray-400 flex-col justify-center shrink-0 text-white text-2xl Poppins `}
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                  {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className=" w-[350px] h-[60px] shrink-0 rounded bg-[#c4c444]"><p className=" justify-center text-[#FFF] text-[20px] Poppins font-bold">Forgot Password</p></button>
              </div>
            </form>
            <hr className="pt-[20px] mt-[20px] ml-[30px] mr-[30px] "/>

            <div className=" flex flex-row justify-center text-[#c4c444] text-[20px] Poppins font-bold"><Link className="text-link" to="/login" >Back to Login</Link></div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Forgot;