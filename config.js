if(!sessionStorage.getItem("lang")){sessionStorage.setItem("lang", "EN");}
var app = {};
const $Config = {
    appName: 'MyProfile',
    contactPath: location.hostname,
    baseLang: [{shortName: 'TH', fullNameEn: 'Thailand'}, {shortName: 'EN', fullNameEn: 'English'}]
};

