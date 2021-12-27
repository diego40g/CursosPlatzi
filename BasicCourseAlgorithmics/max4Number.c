#include <stdio.h>

int max_of_four(int n1, int n2, int n3, int n4){
    int array[4]={n1,n2,n3,n4};
    int max=array[0];
    for(int i=0;i<4;i++){
        if(max<array[i]){
            max=array[i];
        }
    }
    return max;
}

int main(){
    int n1,n2,n3,n4;
    int res=max_of_four(3,-9,50,6);
    print("%d",res);

    return 0;
}