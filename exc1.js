const data = [ 
{ 
name: "John", 
birthday: "1-1-1995", 
favoriteFoods: { 
meats: ["hamburgers", "sausages"], 
fish: ["salmon", "pike"], 
}, 
}, 
{ 
name: "Mark", 
birthday: "10-5-1980", 
favoriteFoods: { 
meats: ["hamburgers", "steak", "lamb"], 
fish: ["tuna", "salmon", "barracuda"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["cow", "chicken"], 
fish: ["pike"], 
},
}, 
{ 
name: "Thomas", 
birthday: "1-10-1990", 
favoriteFoods: { 
meats: ["bird", "rooster"], 
fish: ["salmon"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["hamburgers", "lamb"], 
fish: ["bass", "tuna"], 
}, 
}, 
]; 


function namePerson(data)
{
   let name_arr= data.map(function(obj)
{
    return obj.name;
})
return name_arr;

}

function BornEarly(data){
    let new_arr=data.filter(function(obj)
    {
        let year=obj.birthday.split("-")
        if(year[2]<1990)
        {
            return true;
        }
    }
        
    )
    return new_arr;
    
}


function FoodCount(data)
{
    let result={};
    data.forEach(function(obj)
{
    obj.favoriteFoods.meats.forEach(function(ob)
    {
         if(result[ob]){
            result[ob]=result[ob]+1;
        }
        else{
            result[ob]=1
        }
        
    
    }
)
     obj.favoriteFoods.fish.forEach(function(ob)
    {
        if(result[ob]){
            result[ob]=result[ob]+1;
        }
        else{
             result[ob]=1
        }
       
    }
)

})
return result
}


console.log(namePerson(data));
console.log(BornEarly(data));
console.log(FoodCount(data));