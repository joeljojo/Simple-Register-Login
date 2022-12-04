CREATE PROCEDURE [dbo].[pr_Check_If_User_Exixts] @email varchar(255)
AS
SELECT * from Users WHERE Email = @email
GO