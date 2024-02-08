import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function LoginForm(){
    
    return(
    <div>
    	 <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all"/>
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all"/>
    {/* <!-- Font special for pages--> */}
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"/>

    {/* <!-- Vendor CSS--> */}
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all"/>
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all"/>

    {/* <!-- Main CSS--> */}
    <link href="css/login.css" rel="stylesheet" media="all"/>

<body>
    <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title" align="center">Welcome to <strong>Meal Magic</strong></h2>
                    <br/>
                   
                    <br/>

                    <form method="POST">
                        <div class="container">
                            <br/>
                        </div>
                        
                        <div class="row row-space">
                            <div class="col-2">
                        <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                              <input class="input--style-2" type="email" id="email" name="email" placeholder="Email" required/>
                            </div>
                        </div>
                        </div>
                        <div class="col-2">
                        <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                              <input class="input--style-2"  type="password"  id="password" name="password" placeholder="Password" required/>
                            </div>
                        </div>
                    </div>
                </div>
        
                        <div class="p-t-30">
                            <button class="btn btn--radius btn--green" type="submit">Login</button>
                        </div>
                        
                        <div class="social">
                            <div class="go"><i class="fab fa-google"></i>  Google</div>
                            <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Jquery JS--> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    {/* <!-- Vendor JS--> */}
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

    {/* <!-- Main JS--> */}
    <script src="js/global.js"></script>

</body>
    </div>

    );
}
export default LoginForm;