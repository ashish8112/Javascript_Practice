function isAnagram(OneName,AnotherName)// In this function string will be compare but no with case (Upper/Lower Case)
{
    let firstName=OneName.split(""); // It converts string into array, each letter at each index
    let SecondName=AnotherName.split("");
    console.log(firstName);
    console.log(SecondName);
    firstName=firstName.sort(); // This will sort entire array , becuase there is no function to sort string , we can do manually.
    SecondName=SecondName.sort();
    console.log(firstName);
    console.log(SecondName);
    firstName=firstName.join(""); // It will join array in string
    SecondName=SecondName.join("");
    if(firstName===SecondName)
        console.log(OneName+" and  "+AnotherName+" are Anagram");
    else 
        console.log(OneName+" and  "+AnotherName+" are not Anagram ");// Although rahul and RAHUL are anagram but this function is confused between lower case and Upper Case.
}
isAnagram("Ashish","shishA"); 
isAnagram("rahul","RAHUL");
isAnaGram("rahul","RAHUL");
//Note : split(); is delbetar function which remove that thing from string and make array for context search online 
function isAnaGram(OneName,AnotherName) // In this function string will be compare with any test case or condition .
{
    let firstName=OneName.toLowerCase().split("").sort().join(""); // we can chain function calls 
    let SecondName=AnotherName.toLowerCase().split("").sort().join("");
    // firstName=firstName.split("");
    // firstName=firstName.sort();
    // firstName=firstName.join("");
    // SecondName=SecondName.split("");
    // SecondName=SecondName.sort();
    // SecondName=SecondName.join("");
    if(firstName===SecondName)
    {
        console.log(OneName+" and "+AnotherName+" are Anagram ");
    }
}