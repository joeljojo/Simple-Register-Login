CREATE   PROCEDURE [dbo].[pr_User_Login] @email varchar(255)
AS 
SELECT * FROM Users WHERE Email = @email 
GO

--Test Script
 Execute pr_User_Login 'jojo@gmail.com'