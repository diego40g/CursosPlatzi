from pydoc import doc
import string


class Account:
    id=int
    name=str
    document=str
    email=str
    password=str

    # def __init__(self,name,document):
    #     self.name=name
    #     self.document=document

    def __init__(self,name,document,email,password):
        self.name=name
        self.document=document
        self.email=email
        self.password=password