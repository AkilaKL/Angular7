/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[FirstName]
      ,[LastName]
      ,[Username]
      ,[PasswordHash]
      ,[PasswordSalt]
  FROM [AppDB].[dbo].[Users]