import React from "react";
import Sign from "./SignUp.scss";
export default function SignUp() {
  return (
    <>
      <form>
        <legend>Sign up</legend>
        <input placeholder="Email / Phone" type="text" />
        <input placeholder="Password:" type="text" />
        <div className="sign__up">Sign Up</div>
        <div className="checkbox__block">
          <input type="checkbox" />
          <p>
            I agree to the following established policies: WARPLAY.CLOUD <br />
            Cookie Policy, WARPLAY.CLOUD User Agreement, MY.GAMES End User
            <br />
            License Agreement for Games, WARPLAY.CLOUD Game Center End User{" "}
            <br />
            License Agreement, WARPLAY.CLOUD Portal Privacy Policy, <br />
            WARPLAY.CLOUD Kids Privacy Policy <br />
          </p>
        </div>
      </form>
    </>
  );
}
