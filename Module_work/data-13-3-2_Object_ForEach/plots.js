//print entire data set in to console
d3.json("samples.json").then(function(data){
    console.log(data);
});

///print the wfreq ( wash frequency ) fpr all subjects in to console
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });


///print all WFREQ for all subjects to consile andsort in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

///print Wfreq and remove null values
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });


//////////////////object.entries practice
// researcher1 = {
//     name: 'Roza',
//     age: 34,
//     hobby: 'Hiking'
// };
// console.log(Object.entries(researcher1));

//////////////////foreach practice
// researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
// 'Hiking']];

// researcher1.forEach(([first, second]) => console.log(first
//     + ": " + second));

///print all metadata for the first person in the samples.json
d3.json("samples.json").then(function(data){
    meta1 = data.metadata[0];
    console.log(Object.entries(meta1));
});

///How they want to do it
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});