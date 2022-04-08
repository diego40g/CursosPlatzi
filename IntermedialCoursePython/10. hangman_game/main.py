import os
import random


def assigned_word():
    with open ("./archivos/data.txt","r",encoding="utf-8") as f:
        works=[work for work in f]
        work=random_work(works)
    return work


def clear_windows():
    os.system("cls")


def random_work(works):
    num=random.randint(0,171)
    return works[num]


def render_gallow(tried):
        """Renders the gallow scene based on the strikes.
        
        Strike description:
        - For 0 it will render just the gallow
        - For 1 it will render the head
        - For 2 it will render the torso
        - For 3 it will render the left arm
        - For 4 it will render the right arm
        - For 5 it will render the left leg
        - For 6 it will render the right leg
        """

        template = """
**  **    ***    **   **  *******   **      **    ***    **   **  
**  **   ** **   ***  **  **        ***    ***   ** **   ***  **  
******   *****   **** **  **  ***   ****  ****   *****   **** **  
**  **  **   **  ** ****  **   **   ** **** **  **   **  ** ****  
**  **  **   **  **  ***  *******   **  **  **  **   **  **  ***  
        ||===================
        ||                            
        ||                            
        ||                            
        ||                            
        ||                            
        ||                            
        ||                            
        ||                            
        ||                            
        ||                            
        ||                            
        ==========@          ======== 
        ||                         || 
        ||                         || 
        ||                         || 
        """

        head = (
            (8, 23, '|',),
            (9, 23, '|',),
            (10, 22, '_',),
            (10, 23, '_',),
            (10, 24, '_',),
            (11, 20, '|',),
            (11, 22, '.',),
            (11, 24, '.',),
            (11, 26, '|',),

            (12, 21, '\\',),
            (12, 23, '_',),
            (12, 25, '/',),
        )

        torso = (
            (13, 23, '|',),
            (13, 24, '|',),
            (14, 23, '|',),
            (14, 24, '|',),
            (15, 23, '|',),
            (15, 24, '|',),
            (16, 23, '|',),
            (16, 24, '|',),
        )

        left_arm = (
            (14, 20, '=',),
            (14, 21, '=',),
            (14, 22, '=',),
        )
        right_arm = (
            (14, 25, '=',),
            (14, 26, '=',),
            (14, 27, '=',),
        )

        left_leg = (
            (17, 22, '/',),
            (17, 23, '/',),
            (18, 21, '/',),
            (18, 22, '/',),
        )
        right_leg = (
            (17, 24, '\\',),
            (17, 25, '\\',),
            (18, 25, '\\',),
            (18, 26, '\\',),
        )
        tramp_closed = (
            (19, 19, '=',),
            (19, 20, '=',),
            (19, 21, '=',),
            (19, 22, '=',),
            (19, 23, '=',),
            (19, 24, '=',),
            (19, 25, '=',),
            (19, 26, '=',),
            (19, 27, '=',),
        )
        tramp_opened = (
            (19, 19, '\\',),
            (19, 20, '\\',),
            (20, 20, '\\',),
            (20, 21, '\\',),
            (21, 21, '\\',),
            (21, 22, '\\',),
            (22, 22, '\\',),
            (22, 23, '\\',),
        )

        scene_descriptors = []

        if tried >= 1:
            scene_descriptors += head
        if tried >= 2:
            scene_descriptors += torso
        if tried >= 3:
            scene_descriptors += left_arm
        if tried >= 4:
            scene_descriptors += right_arm
        if tried >= 5:
            scene_descriptors += left_leg
        if tried == 6:
            scene_descriptors += right_leg

        if tried < 6:
            scene_descriptors += tramp_closed
        else:
            scene_descriptors += tramp_opened

        lines = [list(line) for line in template.splitlines()]

        for descriptor in scene_descriptors:
            lines[descriptor[0]][descriptor[1]] = descriptor[2]

        scene = '\n'.join([''.join(l) for l in lines])
        print(scene)
        

def run():
    #clear_windows()
    #render_gallow(0)
    word=assigned_word()
    print(word)
    try:
        letter=input("Ingrese una letra: ")
        assert len(letter)>0, "No se puede ingresar cadenas vacias"
        if len(letter)>1:
            raise ValueError("Cantidad superior a una letra")
        print(len(letter))
    except ValueError as ve:
        print(ve)
    print(letter)    
    if(letter in word):
        print("contiene")
    else:
        print("no contiene")


if __name__=="__main__":
    run()
