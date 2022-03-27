def run():
    my_list=[1,"Hello",True,4.56]
    my_dic={"first_name":"Diego","last_name":"Paz"}
    super_list=[
        {"first_name":"Diego","last_name":"Paz"},
        {"first_name":"Ana","last_name":"Naula"},
        {"first_name":"Rodolfo","last_name":"Maldonado"},
        {"first_name":"Susan","last_name":"Rosero"},
    ]

    super_dic = {
        "natural_nums":[1,2,3,4,5,6],
        "integer_nums":[-2,-1,0,1,2],
        "flaoting_nums":[1.1,-5.2,6.3],
    }

    for key, value in super_dic.items():
        print(key," - ",value)

    for value in super_list:
        print(value)

if __name__=="__main__":
    run()