docker stop digitalpenmanship-server
docker container rm digitalpenmanship-server

docker build --tag digitalpenmanship-serv .

docker create -p 8000:8000 --name digitalpenmanship-server digitalpenmanship-serv
docker start digitalpenmanship-server
