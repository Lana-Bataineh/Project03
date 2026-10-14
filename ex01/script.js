//Functions Decleration :

function calculateGrade(score)
{	
	if (typeof(score) == "number" && (score >= 0 && score  <= 100))
	{
		if (score >= 90)
			return "A";
		else if (score >= 80)
			return "B";
		else if (score >= 70)
                        return "C";
		else if (score >= 60)
                        return "D";
		else
			return "F";
	}
	else 
		return "Error : Invalid Input , Enter a value between 0 and 100 .";
}

function checkAccess(age, hasTicket) 
{
	if (typeof(age)=="number" && typeof(hasTicket)=="boolean")
	{
		if (age >= 18 && hasTicket === true)
                	return true;
		else
                	return false;

	}
	else
		return "Error : Invalid Input";
}

//Functions Test :

console.log("Score = 0   , result = " , calculateGrade (0));
console.log("Score = 100 , result = " , calculateGrade (100));
console.log("Score = 90  , result = " , calculateGrade (90));
console.log("Score = 89  , result = " , calculateGrade (89));
console.log("Score = -65 , result = " , calculateGrade (-65));
console.log("Score = 150 , result = " , calculateGrade (150) );


console.log("Age = 20 , hasTicket = flase ----> result = ",checkAccess(20 , false));
console.log("Age = 15 , hasTicket = true ----> result = ",checkAccess(17 , true));
console.log("Age = 25 , hasTicket = true ----> result = ",checkAccess(25 , true));
console.log("Age = true , hasTicket = true ----> result = ",checkAccess(true , true));
