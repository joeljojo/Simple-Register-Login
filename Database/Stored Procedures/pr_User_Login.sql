CREATE PROCEDURE pr_User_Login(
	email varchar
)
language sql 
BEGIN ATOMIC
SELECT * FROM Users WHERE Email = email;
END;

--Test Script
 CALL pr_User_Login ('jojo@gmail.com')