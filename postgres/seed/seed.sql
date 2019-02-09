BEGIN TRANSACTION;
INSERT into users(user_name , email, joinTime) VALUES ('jon' , 'jon@email.com' , '2019-01-01');
COMMIT;