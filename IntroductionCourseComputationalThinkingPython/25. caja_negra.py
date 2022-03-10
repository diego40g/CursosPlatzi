import unittest

def suma(num_1,num_2):
    ##no hay nada más
    #pass
    return abs(num_1+num_2)

#test driven development
#escribimos algunos test de casos posible
class CajaNegraTest(unittest.TestCase):
    def test_suma_dos_positivos(self):
        num_1=10
        num_2=5

        resultado=suma(num_1,num_2)

        #para asegurar que el reusltado sea lo que esperamos
        self.assertEqual(resultado, 15)

    def test_suma_dos_negativos(self):
        num_1=-10
        num_2=-7
        resultado=suma(num_1, num_2)
        self.assertEqual(resultado, -17)

if __name__=="__main__":
    unittest.main()