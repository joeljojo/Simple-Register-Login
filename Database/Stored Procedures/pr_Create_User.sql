CREATE PROCEDURE [dbo].[pr_Create_User] @userID varchar(255), @name varchar(255), @email varchar(255), @password varchar(255)
AS
INSERT INTO Users(UserID, Name, Email, Password)
VALUES(@userID, @name, @email, @password)
GO

--Test Script
EXECUTE pr_Create_User 'rf444','Joel Pamphyl', 'joel@gmail.com', 1234567