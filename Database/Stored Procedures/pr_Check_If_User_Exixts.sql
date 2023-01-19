CREATE PROCEDURE pr_Check_If_User_Exixts(
	email varchar
) 
language sql
BEGIN ATOMIC
SELECT * from Users WHERE Email = email;
END;

--Test Script
CALL pr_Check_If_User_Exixts('joel@gmail.com')