CREATE PROCEDURE [dbo].[pr_User_Login] @email varchar(255), @password varchar(255)
AS 
SELECT * FROM Users WHERE email = @email AND password = @password
GO

--Test Script
 Execute pr_User_Login 'jojo@gmail.com', 1234567