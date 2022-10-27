import React from "react";
import "./login.scss";

const Login = () => {
    return <div className="img js-fullheight" style={{backgroundImage: `url('http://localhost:3000/bg.jpg')`}}>
	<div className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<img src='http://localhost:3000/logo-lotte.png' alt="Logo Lotte"/>
					<h2 className="heading-section">Login</h2>
				</div>
			</div>
            <div className="row justify-content-center">
				<div className="col-md-6 col-lg-4 mt-5">
					<div className="login-wrap p-0">
						<h3 className="mb-4 text-center">PICKPACK</h3>
						<form action="#" className="signin-form">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="NIP" required/>
							</div>
							<div class="form-group">
								<input type="password" id="phone" className="form-control"
									placeholder="Password" required/>
							</div>
							<div className="form-group">
								<button type="submit" className="form-control btn btn-primary submit px-3">Masuk</button>
							</div>
							<div className="form-group d-md-flex">
								<div className="w-50">
									<label class="checkbox-wrap checkbox-primary">Remember Me
										<input type="checkbox" checked/>
										<span className="checkmark"></span>
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
        
        </div>
		
	</div>

	<script src="js/jquery.min.js"></script>
	<script src="js/popper.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>

</div>
}

export default Login