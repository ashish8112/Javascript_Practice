function isAnagram(OneName,AnotherName)
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
        console.log("These two are Anagram ");
}
isAnagram("Ashish","shishA");