System.register(['angular2/router', './Login', './Register', '../../components/Home'], function(exports_1) {
    var router_1, Login_1, Register_1, Home_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Login_1_1) {
                Login_1 = Login_1_1;
            },
            function (Register_1_1) {
                Register_1 = Register_1_1;
            },
            function (Home_1_1) {
                Home_1 = Home_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                login: new router_1.Route({ path: '/', name: 'Login', component: Login_1.Login }),
                register: new router_1.Route({ path: '/register', name: 'Register', component: Register_1.Register }),
                home: new router_1.Route({ path: '/home', name: 'Home', component: Home_1.Home })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});
