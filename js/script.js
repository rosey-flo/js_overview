//review: we have talked about:
const str = 'some string';
const num = 10;
const bool = true;
const arr = ['john', 'Bob', 'Steve'];


//this is for key value pairs
//name and age, or left saide is the propert
//right side or string/value/boolean/array is the value type
const data = {
   name: 'JD',
   age: 44,
   info: {
      location: 'Atl',
      hobbies: [
         {
            name: 'Fishing',
            frequency: 'once every two weeks'
         },
         {
            name: 'Pickleball',
            frequency: 'once a week'
         }
      ]
   }
};

console.log(data.info.hobbies[0].frequency);


//if you only wanted to call certin or multiple items withing this
const filtered = data.info.hobbies.filter(function(obj) {
   if (obj.frequency > 1) {
      return true;
   }
})


/*

data.name
//to call the value: 
//you will call the vakue and it;s key pair
// this would be to call 'emily'


//example of reasigning a value
data.name = 'Bob';
data.age++;

console.log(data);

console.log(data.name)


*/