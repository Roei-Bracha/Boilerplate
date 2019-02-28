BEGIN TRANSACTION;
INSERT into users(user_name ,password_hash , email, joinTime) VALUES ('jon' ,'123456', 'jon@email.com' , '2019-01-01');
COMMIT;