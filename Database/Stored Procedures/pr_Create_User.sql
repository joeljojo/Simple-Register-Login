CREATE PROCEDURE pr_Create_User (
	userID varchar, 
	name text,
	email text, 
	password varchar)
	language sql
AS $$
INSERT INTO Users VALUES(userID, name, email, password)
$$;

--Test Script
CALL pr_Create_User ('rf444','Joel Pamphyl', 'joel@gmail.com', 1234567)