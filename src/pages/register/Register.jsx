import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Luden Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          </p>
          <span>Have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
            />
            <input type="text" placeholder="Name" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
