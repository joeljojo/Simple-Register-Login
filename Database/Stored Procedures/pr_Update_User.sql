CREATE PROCEDURE pr_Update_User(
	email varchar,
	password varchar
) 
language sql
BEGIN ATOMIC 
UPDATE Users set Password = password where Email = email;
END;

--Test Script
CALL pr_Update_User('joel@gmail.com', 1234567890)

