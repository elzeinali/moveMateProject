/* Author: Ali Elzein */
angular.module('booking', ['ngMaterial', 'ngMessages']);
angular.module('booking', ['ngMaterial', 'ngMessages']).config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('custumPalette', {
        '50': '54d1db',
        '100': '54d1db',
        '200': '54d1db',
        '300': '54d1db',
        '400': '54d1db',
        '500': '54d1db',
        '600': '54d1db',
        '700': '54d1db',
        '800': '54d1db',
        '900': '54d1db',
        'A100': '54d1db',
        'A200': '54d1db',
        'A400': '54d1db',
        'A700': '54d1db',
        // By default, text (contrast) on this palette should be white with 87% opacity.
        'contrastDefaultColor': 'light',
        // By default, for these lighter hues, text (contrast) should be 'dark'.
        'contrastDarkColors': '50 100 200 300 400 500 600 A100 A200 A400',
        // By default, for these darker hues, text (contrast) should be white with 100% opacity.
        'contrastStrongLightColors': '700 800 900 A700'
      });
  $mdThemingProvider.theme('default')
    .primaryPalette('custumPalette')
});

angular.module('booking').controller('AppCtrl', function($scope){
    $scope.hours = [
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
    ];
});

function calculatePrice(){
    const price = document.getElementById('price');
    const numberHours = document.getElementById('nbHours').value;
    const date = document.getElementsByClassName('md-datepicker-input')[0].value;
    const time = document.getElementsByClassName('md-select-value')[0].innerText;
    console.log(time);
    if(date != ''){
        if(time != 'Time'){
            if(isWeekend(date)){
                const priceValueWeekend = parseInt(numberHours) * 150;
                price.innerText = 'The price is '+priceValueWeekend+'$';
            }
            else if(!isWeekend(date)){
                const priceValueWeekday = parseInt(numberHours) * 100;
                price.innerText = 'The price is '+priceValueWeekday+'$';
            }
        }
        else{
            price.innerText = 'Please enter a time.';
        }
    }
    else{
        price.innerText = 'Please enter a date.';
    }
}

function clearPriceText(){
    document.getElementById('price').innerText = '';
}


function isWeekend(date){
    let day = parseInt(date.split("/")[1]);
    let month = parseInt(date.split("/")[0]);
    let year = parseInt(date.split("/")[2]);
    let tempDate = new Date(year,month-1, day);
    if(tempDate.getDay() == 6 || tempDate.getDay() == 0){
        return true;
    }
    return false;
}