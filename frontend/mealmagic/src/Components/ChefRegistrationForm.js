import React from "react";

function ChefRegistrationForm(){
   
    return(
        <>
        <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all"/>
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all"/>
    {/* <!-- Font special for pages--> */}
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"/>

    {/* <!-- Vendor CSS--> */}
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all"/>
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all"/>

    {/* <!-- Main CSS--> */}
    <link href="/css/registration.css" rel="stylesheet" media="all"></link>
        <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Chef Registration</h2>
                    <form method="POST">
                        <div class="container">
                            <div class="picture-container">
                                <div class="picture">
                                    <img src="/images/avatar.png" class="picture-src" id="wizardPicturePreview" aria-placeholder="Photo"/>
                                    <input type="file" id="wizard-picture" class="rounded float-right" placeholder="Photo" name="photo"/>
                                </div>
                                <h6 >Add photo</h6>
                            </div>
                            <br/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-2" type="text" placeholder="Name" name="name" required/>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-2 js-datepicker" type="text" placeholder="Birthdate" name="birthday"/>
                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <select name="gender">
                                            <option disabled="disabled" selected="selected">Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
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
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-2" type="number" placeholder="Exprience" name="experience"/>
                                </div>
                            </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <input class="input--style-2" type="text" placeholder="Phone Number" name="mobilenumber"/>
                                    </div>
                                </div>
                        </div>
                        <div class="input-group">
                            <input class="input--style-2" type="textarea" placeholder="Address" name="address" required/>
                        </div>
                        <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                                <select name="speciality">
                                    <option disabled="disabled" selected="selected" placeholder="Speciality">Speciality</option>
                                    <option>North Indian</option>
                                    <option>South Indian</option>
                                    <option>Italian</option>
                                    <option>General</option>
                                    <option>Regional</option>
                                    <option>Continental</option>
                                </select>
                                <div class="select-dropdown"></div>
                            </div>
                        </div>
                        <div class="p-t-30">
                            <button class="btn btn--radius btn--green" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Jquery JS--> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    {/* <!-- Vendor JS--> */}
    <script src="/vendor/select2/select2.min.js"></script>
    <script src="/vendor/datepicker/moment.min.js"></script>
    <script src="/vendor/datepicker/daterangepicker.js"></script>

    {/* <!-- Main JS--> */}
    <script src="./public/js/global.js"></script>

        </>
    );
}export default ChefRegistrationForm;