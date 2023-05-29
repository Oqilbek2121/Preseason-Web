/*
**
** QWASAR.IO -- my_strchr
**
** @param {char*} param_1
** @param {char} param_2
**
** @return {char*}
**
*/
#include <string.h>
#include <stdio.h>
char* my_strchr(char* str1, char str2)
{
    char* str3[strlen(str1)];
    int count = 0;
    for (int i = 0 ; i < strlen(str1) ; i++) {
        if(str1[i] != str2){
            count++;
        }else if(str1[i] == str2){
            for (int j = 0 ; j < strlen(str1) ; j++) {
                str3[j] = &str1[i];
                i++;
            }
        }
    }
    if(count == strlen(str1)){
        return NULL;
    }else{
        return *str3;
    }
}