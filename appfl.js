name="MyApp";
requires=[];

appfl=angular.module(name,requires);

appfl.controller("fltCtrl",function ($scope) {
    console.log("controller");
});

appfl.filter("appfltr",function () {
    console.log("filter!");
    
    return function (str) {
        //to ignore the <a> tags
        var pattern=/<a\b[^>]*>(.*?)<\/a>/;
        if(str!==undefined){
            return str.replace(pattern,"");
        }

    }

    
});

