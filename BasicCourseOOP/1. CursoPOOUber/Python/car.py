from driver import Driver
from user import User
from account import Account
class Car:
    id=int
    license=str
    # account=Account("","")/
    driver=Driver("","","","")
    user=User("","","","")
    passengers=int

    # def __init__(self,license,account):
    #     self.license=license
    #     self.account=account

    def __init__(self,license,driver):
        self.license=license
        self.driver=driver

    def __init__(self,license,user):
        self.license=license
        self.user=user