
function C2F(C,F) {
    F=(C*(9/5))+32
    return F
}
var temp1=document.getElementById("celsius_1").innerText
var temp1a=parseInt(temp1)

var temp2=document.getElementById("celsius_2").innerText
var temp2a=parseInt(temp2)

var temp3=document.getElementById("celsius_3").innerText
var temp3a=parseInt(temp3)

document.getElementById("fahr_1").innerHTML=C2F(temp1a)
document.getElementById("fahr_2").innerHTML=C2F(temp2a)
document.getElementById("fahr_3").innerHTML=C2F(temp3a)

 var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
 var class2=classification.splice(3,5)
 console.log(class2)
 document.getElementById("best_students").innerHTML=class2


    var course = {
        'title': "Learn to Code in Python 3",
        'categories': ['programming', 'technology', 'python'],
        '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4
    }

    var tit=course.title
    document.getElementById("course_title").innerHTML=tit

        var cat=course.categories
    document.getElementById("main_category").innerHTML=cat

    var all=course["5_stars_reviews"]+course["4_stars_reviews"]+course["3_stars_reviews"]+course["2_stars_reviews"]+course["1_stars_reviews"]
 var percent=(course["5_stars_reviews"]/all)*100
 var per1=percent.toFixed(2)
 document.getElementById("reviews_5_stars").innerHTML=per1+"%"

 var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];


var lastItem = shoppingList.pop();     
shoppingList.unshift(lastItem);     


shoppingList.push("Cheese", "Eggs");


console.log(shoppingList);
    