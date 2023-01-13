CREATE PROCEDURE [dbo].[pr_Update_User] @email varchar(255), @password varchar(255)
AS 
UPDATE Users set Password = @password where Email = @email
GO

