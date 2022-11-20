var count = 0;
fetch('https://coderbyte.com/api/challenges/json/age-counting').then(function (response) {
    // The API call was successful!
    return response.json();
}).then(function (data) {
    // This is the JSON from our response
    //console.log(data);
    const obj = data;
    //console.log(obj.data)
    myString = obj.data
    var myArray = myString.split(", "); // comma and space
    //console.log(myArray)
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 'age=30') {
            count++;
        }
    }
    console.log( "Count(age == 30): ", count);
}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});